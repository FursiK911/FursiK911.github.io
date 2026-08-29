import {
  portraitGlitchConfig,
  type PortraitGlitchLevel,
} from './portraitGlitch'

export interface PortraitGlitchSlice {
  top: number
  height: number
  offset: number
  sourceX: number
  sourceY: number
}

export interface PortraitGlitchBlock {
  x: number
  y: number
  width: number
  height: number
  offsetX: number
  offsetY: number
  sourceX: number
  sourceY: number
  scale: number
}

export interface PortraitGlitchFrame {
  slices: PortraitGlitchSlice[]
  blocks: PortraitGlitchBlock[]
  rgb: boolean
  rgbOffset: number
  duration: number
}

type RandomSource = () => number

const between = (min: number, max: number, random: RandomSource) =>
  Math.floor(random() * (max - min + 1)) + min

export function generatePortraitGlitchFrame(
  level: PortraitGlitchLevel,
  random: RandomSource = Math.random,
): PortraitGlitchFrame {
  const settings = portraitGlitchConfig[level]
  const sliceCount = between(settings.minSlices, settings.maxSlices, random)
  const blockCount = between(settings.minBlocks, settings.maxBlocks, random)
  const slices = Array.from({ length: sliceCount }, () => {
    const height = between(
      level === 'micro' ? 4 : 6,
      level === 'strong' ? 20 : 16,
      random,
    )
    return {
      top: between(3, 97 - height, random),
      height,
      offset:
        between(settings.minOffset, settings.maxOffset, random) *
        (random() >= 0.5 ? 1 : -1),
      sourceX: between(-5, 5, random),
      sourceY: between(-3, 3, random),
    }
  })
  const blocks = Array.from({ length: blockCount }, () => {
    const width = between(
      level === 'strong' ? 10 : 7,
      level === 'strong' ? 28 : 22,
      random,
    )
    const height = between(6, level === 'strong' ? 21 : 16, random)
    return {
      x: between(2, 98 - width, random),
      y: between(3, 97 - height, random),
      width,
      height,
      offsetX: between(-settings.maxOffset, settings.maxOffset, random),
      offsetY: between(-9, 9, random),
      sourceX: between(0, 100 - width, random),
      sourceY: between(0, 100 - height, random),
      scale: between(96, 116, random) / 100,
    }
  })
  return {
    slices,
    blocks,
    rgb: level !== 'micro' && random() < portraitGlitchConfig.rgbSplitChance,
    rgbOffset: level === 'strong' ? 7 : 4,
    duration: between(
      portraitGlitchConfig.minFrameDuration,
      portraitGlitchConfig.maxFrameDuration,
      random,
    ),
  }
}
