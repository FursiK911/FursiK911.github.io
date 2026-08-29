import { chooseGlitchLevel, portraitGlitchConfig } from './portraitGlitch'

it('defines quick first launch, long bursts and irregular pauses', () => {
  expect(portraitGlitchConfig.minInterval).toBeGreaterThanOrEqual(1500)
  expect(portraitGlitchConfig.maxInterval).toBeLessThanOrEqual(6000)
  expect(portraitGlitchConfig.firstMaxInterval).toBeLessThanOrEqual(1200)
  expect(portraitGlitchConfig.burstMinDuration).toBe(1200)
  expect(portraitGlitchConfig.burstMaxDuration).toBe(1800)
  expect(chooseGlitchLevel(0.95)).toBe('strong')
})
