import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const requiredSelectors = ['.hero{', '.profile-section{', '.loading-terminal{']
const indexHtml = await readFile(resolve('dist/index.html'), 'utf8')
const stylesheetPaths = [...indexHtml.matchAll(/href="([^\"]+\.css)"/g)].map(
  ([, path]) => path.replace(/^\//, ''),
)

if (!stylesheetPaths.length) {
  throw new Error('Production build does not reference a stylesheet bundle.')
}

const stylesheet = (
  await Promise.all(
    stylesheetPaths.map((path) => readFile(resolve('dist', path), 'utf8')),
  )
).join('\n')

const missingSelectors = requiredSelectors.filter(
  (selector) => !stylesheet.includes(selector),
)

if (missingSelectors.length) {
  throw new Error(
    `Production stylesheet is missing required selectors: ${missingSelectors.join(', ')}`,
  )
}

console.log(
  `Verified ${requiredSelectors.length} required selectors in ${stylesheetPaths.length} production stylesheet bundle(s).`,
)
