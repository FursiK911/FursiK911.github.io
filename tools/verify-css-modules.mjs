import { readFile, readdir } from 'node:fs/promises'
import { dirname, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const cssImportPattern =
  /import\s+([^'\n]+?)\s+from\s+['"]([^'"]+\.module\.css)['"]/g
const sideEffectImportPattern = /import\s*['"]([^'"]+\.module\.css)['"]/g
const cssClassPattern = /\.([A-Za-z_-][A-Za-z0-9_-]*)/g
const cssModuleExtensions = new Set(['.ts', '.tsx'])

function toCamelCase(className) {
  return className.replace(/-([a-z])/g, (_, character) =>
    character.toUpperCase(),
  )
}

function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

function stripGlobalSelectors(selector) {
  return selector.replace(/:global\([^)]*\)/g, '')
}

function extractLocalClasses(css) {
  const withoutComments = stripCssComments(css)
  const withoutGlobalClasses = withoutComments.replace(/:global\([^)]*\)/g, '')
  return new Set(
    [...withoutGlobalClasses.matchAll(cssClassPattern)].map(
      (match) => match[1],
    ),
  )
}

function extractRulePreambles(css) {
  const rules = []
  const withoutComments = stripCssComments(css)
  for (const match of withoutComments.matchAll(/([^{}]+)\{/g)) {
    rules.push(match[1].trim())
  }
  return rules
}

function findGlobalRuleViolations(css, filePath) {
  const violations = []
  for (const preamble of extractRulePreambles(css)) {
    if (!preamble.includes(':global(')) continue
    const localPart = stripGlobalSelectors(preamble)
      .replace(/@(?:media|supports|layer|container)[^{]*/g, '')
      .trim()
    if (!/[.#][A-Za-z_-][A-Za-z0-9_-]*/.test(localPart)) {
      violations.push(
        `${filePath}: :global(...) must be anchored by a local class or id`,
      )
    }
  }
  return violations
}

async function collectFiles(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const entryPath = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath, predicate)))
    } else if (predicate(entryPath)) {
      files.push(entryPath)
    }
  }
  return files
}

function resolveCssImport(importerPath, importPath, sourceRoot) {
  if (importPath.startsWith('@/')) {
    return resolve(sourceRoot, importPath.slice(2))
  }
  if (importPath.startsWith('.')) {
    return resolve(dirname(importerPath), importPath)
  }
  return null
}

function parseDefaultImport(importClause) {
  const match = importClause.trim().match(/^([A-Za-z_$][\w$]*)/)
  return match?.[1] ?? null
}

export async function collectCssModuleContracts({
  sourceRoot = resolve('src'),
} = {}) {
  const sourceFiles = await collectFiles(
    sourceRoot,
    (filePath) =>
      cssModuleExtensions.has(extname(filePath)) &&
      !filePath.includes('__tests__') &&
      !filePath.includes('.test.'),
  )
  const moduleContracts = new Map()
  const errors = []

  for (const importerPath of sourceFiles) {
    const source = await readFile(importerPath, 'utf8')
    for (const match of source.matchAll(sideEffectImportPattern)) {
      errors.push(
        `${importerPath}: CSS Module must be imported through a binding (${match[1]})`,
      )
    }

    for (const match of source.matchAll(cssImportPattern)) {
      const importClause = match[1]
      const importPath = match[2]
      const binding = parseDefaultImport(importClause)
      const modulePath = resolveCssImport(importerPath, importPath, sourceRoot)
      if (!binding || !modulePath) {
        errors.push(
          `${importerPath}: unsupported CSS Module import ${importPath}`,
        )
        continue
      }

      const css = await readFile(modulePath, 'utf8').catch(() => null)
      if (css === null) {
        errors.push(`${importerPath}: CSS Module does not exist: ${modulePath}`)
        continue
      }

      const usedExports = new Set(
        [
          ...source.matchAll(
            new RegExp(`\\b${binding}\\.([A-Za-z_$][\\w$]*)`, 'g'),
          ),
        ].map((propertyMatch) => propertyMatch[1]),
      )
      if (!usedExports.size) {
        errors.push(
          `${importerPath}: CSS Module binding ${binding} has no used exports`,
        )
      }

      const localClasses = extractLocalClasses(css)
      if (!localClasses.size) {
        errors.push(`${modulePath}: CSS Module has no local selectors`)
      }
      for (const violation of findGlobalRuleViolations(css, modulePath)) {
        errors.push(violation)
      }

      const availableExports = new Map(
        [...localClasses].map((className) => [
          toCamelCase(className),
          className,
        ]),
      )
      for (const usedExport of usedExports) {
        if (!availableExports.has(usedExport)) {
          errors.push(
            `${importerPath}: ${binding}.${usedExport} is not defined by ${modulePath}`,
          )
        }
      }

      const existing = moduleContracts.get(modulePath) ?? {
        path: modulePath,
        usedExports: new Set(),
        localClasses,
      }
      for (const usedExport of usedExports) existing.usedExports.add(usedExport)
      moduleContracts.set(modulePath, existing)
    }
  }

  const expectedClasses = new Set()
  for (const contract of moduleContracts.values()) {
    const availableExports = new Map(
      [...contract.localClasses].map((className) => [
        toCamelCase(className),
        className,
      ]),
    )
    for (const usedExport of contract.usedExports) {
      const className = availableExports.get(usedExport)
      if (className) expectedClasses.add(className)
    }
  }

  return {
    errors,
    modules: [...moduleContracts.values()].map((contract) => ({
      path: contract.path,
      usedExports: [...contract.usedExports],
      localClasses: [...contract.localClasses],
    })),
    expectedClasses: [...expectedClasses],
  }
}

export async function verifyCssModules(options = {}) {
  const report = await collectCssModuleContracts(options)
  if (report.errors.length) {
    throw new Error(
      [
        'CSS Module contract failed:',
        ...report.errors.map((error) => `- ${error}`),
      ].join('\n'),
    )
  }
  return report
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const sourceRootArgument = process.argv.find((argument) =>
    argument.startsWith('--root='),
  )
  const sourceRoot = sourceRootArgument
    ? resolve(sourceRootArgument.slice('--root='.length))
    : resolve('src')
  const report = await verifyCssModules({ sourceRoot })
  console.log(
    `Verified ${report.modules.length} CSS Modules and ${report.expectedClasses.length} used local selectors.`,
  )
}
