import { chooseGlitchLevel, portraitGlitchConfig } from './portraitGlitch'

it('defines short bursts and irregular pauses', () => {
  expect(portraitGlitchConfig.minInterval).toBeGreaterThanOrEqual(1500)
  expect(portraitGlitchConfig.maxInterval).toBeLessThanOrEqual(6000)
  expect(portraitGlitchConfig.firstMaxInterval).toBeLessThanOrEqual(1200)
  expect(portraitGlitchConfig.minFrames).toBeGreaterThanOrEqual(2)
  expect(portraitGlitchConfig.strong.duration).toBeGreaterThan(
    portraitGlitchConfig.normal.duration,
  )
  expect(chooseGlitchLevel(0.95)).toBe('strong')
})
