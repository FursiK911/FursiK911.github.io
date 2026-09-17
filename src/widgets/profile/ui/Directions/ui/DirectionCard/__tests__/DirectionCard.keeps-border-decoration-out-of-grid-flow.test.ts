import { readFileSync } from 'node:fs'
import { expect, it } from 'vitest'
import { preprocessCSS, resolveConfig } from 'vite'

it('preserves the absolute border class without a CSS animation export collision', async () => {
  const css = readFileSync(
    'src/widgets/profile/ui/Directions/ui/DirectionCard/styles/DirectionCard.module.css',
    'utf8',
  )
  const config = await resolveConfig(
    {
      configFile: false,
      css: {
        modules: {
          localsConvention: 'camelCaseOnly',
          generateScopedName: '[local]',
        },
      },
    },
    'serve',
  )
  const result = await preprocessCSS(css, 'DirectionCard.module.css', config)

  expect(result.modules?.directionBorderScan).toBe('directionBorderScan')
  expect(result.code).toMatch(
    /\.directionBorderScan\s*\{\s*position: absolute;/,
  )
})
