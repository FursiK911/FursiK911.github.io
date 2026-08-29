import {
  chooseGlitchLevel,
  portraitGlitchConfig,
  randomBetween,
} from '../config/portraitGlitch'

it('keeps random values within configured bounds', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
  expect(randomBetween(3, 8)).toBe(6)
  vi.restoreAllMocks()
})

it('weights glitch levels with strong as the fallback rare level', () => {
  expect(chooseGlitchLevel(0)).toBe('micro')
  expect(chooseGlitchLevel(portraitGlitchConfig.microChance)).toBe('normal')
  expect(chooseGlitchLevel(0.99)).toBe('strong')
})
