export const portraitGlitchConfig = {
  firstMinInterval: 700,
  firstMaxInterval: 1200,
  minInterval: 1500,
  maxInterval: 6000,
  longPauseChance: 0.12,
  longPauseMultiplier: 1.6,
  microChance: 0.42,
  normalChance: 0.48,
  desktopGridSize: 20,
  mobileGridSize: 10,
  minActivePercent: 2,
  maxActivePercent: 10,
  burstMinDuration: 1200,
  burstMaxDuration: 1800,
  cellMinInterval: 55,
  cellMaxInterval: 130,
} as const

export type PortraitGlitchLevel = 'micro' | 'normal' | 'strong'

export const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export function chooseGlitchLevel(random = Math.random()): PortraitGlitchLevel {
  if (random < portraitGlitchConfig.microChance) return 'micro'
  if (
    random <
    portraitGlitchConfig.microChance + portraitGlitchConfig.normalChance
  )
    return 'normal'
  return 'strong'
}
