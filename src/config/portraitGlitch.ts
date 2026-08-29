export const portraitGlitchConfig = {
  firstMinInterval: 700,
  firstMaxInterval: 1200,
  minInterval: 1500,
  maxInterval: 6000,
  longPauseChance: 0.12,
  longPauseMultiplier: 1.6,
  microChance: 0.42,
  normalChance: 0.48,
  maxSlices: 7,
  maxBlocks: 5,
  minFrames: 2,
  maxFrames: 4,
  minFrameDuration: 38,
  maxFrameDuration: 72,
  micro: {
    duration: 120,
    minSlices: 1,
    maxSlices: 2,
    minOffset: 6,
    maxOffset: 12,
    minBlocks: 0,
    maxBlocks: 1,
  },
  normal: {
    duration: 220,
    minSlices: 3,
    maxSlices: 5,
    minOffset: 10,
    maxOffset: 26,
    minBlocks: 1,
    maxBlocks: 3,
  },
  strong: {
    duration: 340,
    minSlices: 5,
    maxSlices: 7,
    minOffset: 10,
    maxOffset: 36,
    minBlocks: 3,
    maxBlocks: 5,
  },
  rgbSplitChance: 0.38,
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
