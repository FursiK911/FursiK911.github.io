import { readFile, readdir } from 'node:fs/promises'
import { basename, extname, resolve } from 'node:path'
import { verifyCssModules } from './verify-css-modules.mjs'

const requiredSelectors = [
  '.hero{',
  '.profile-section{',
  '.loading-terminal{',
  '.live-cam{',
  '.live-cam-video{',
  '.live-cam-telemetry{',
]
async function collectFilesWithExtension(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true })
  const assets = []
  for (const entry of entries) {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      assets.push(...(await collectFilesWithExtension(path, extension)))
    } else if (extname(entry.name) === extension) {
      assets.push(path)
    }
  }
  return assets
}

const cssModuleReport = await verifyCssModules()
const indexHtml = await readFile(resolve('dist/index.html'), 'utf8').catch(
  () => null,
)
const stylesheetPaths = await collectFilesWithExtension(resolve('dist'), '.css')
const javascriptPaths = await collectFilesWithExtension(resolve('dist'), '.js')

if (!indexHtml || !/href="[^\"]+\.css"/.test(indexHtml)) {
  throw new Error('Production index does not reference a stylesheet bundle.')
}

if (!stylesheetPaths.length) {
  throw new Error('Production build does not contain a stylesheet bundle.')
}

const stylesheet = (
  await Promise.all(stylesheetPaths.map((path) => readFile(path, 'utf8')))
).join('\n')
const javascript = (
  await Promise.all(javascriptPaths.map((path) => readFile(path, 'utf8')))
).join('\n')

const hasSelector = (className) => {
  const escapedClassName = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp('\\.' + escapedClassName + '(?=[\\s:{,.)])').test(
    stylesheet,
  )
}

const missingModuleSelectors = cssModuleReport.expectedClasses.filter(
  (className) =>
    (javascript.includes(`"${className}"`) ||
      javascript.includes(`'${className}'`)) &&
    !hasSelector(className),
)

const missingSelectors = requiredSelectors.filter(
  (selector) => !stylesheet.includes(selector),
)

if (missingSelectors.length || missingModuleSelectors.length) {
  throw new Error(
    [
      missingSelectors.length
        ? `Production stylesheet is missing required selectors: ${missingSelectors.join(', ')}`
        : '',
      missingModuleSelectors.length
        ? `Production stylesheet is missing CSS Module selectors: ${missingModuleSelectors.join(', ')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n'),
  )
}

console.log(
  `Verified ${requiredSelectors.length} global selectors and ${cssModuleReport.expectedClasses.length} CSS Module selectors in ${stylesheetPaths.length} production stylesheet asset(s): ${stylesheetPaths.map((path) => basename(path)).join(', ')}.`,
)
