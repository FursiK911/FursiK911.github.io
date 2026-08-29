import { portraitGlitchConfig } from './portraitGlitch'
import { generatePortraitGlitchFrame } from './portraitGlitchFrame'

it('generates premium micro frames inside configured bounds', () => {
  const frame = generatePortraitGlitchFrame('micro', () => 0)
  expect(frame.slices).toHaveLength(portraitGlitchConfig.micro.minSlices)
  expect(frame.blocks).toHaveLength(portraitGlitchConfig.micro.minBlocks)
  expect(Math.abs(frame.slices[0].offset)).toBeGreaterThanOrEqual(6)
  expect(frame.rgb).toBe(false)
  expect(frame.duration).toBe(portraitGlitchConfig.minFrameDuration)
})

it('generates strong frames with bounded slices, blocks and displacement', () => {
  const frame = generatePortraitGlitchFrame('strong', () => 0.999)
  expect(frame.slices).toHaveLength(portraitGlitchConfig.strong.maxSlices)
  expect(frame.blocks).toHaveLength(portraitGlitchConfig.strong.maxBlocks)
  expect(Math.abs(frame.slices[0].offset)).toBeLessThanOrEqual(36)
  expect(frame.duration).toBe(portraitGlitchConfig.maxFrameDuration)
})

it('allows RGB separation on normal frames', () => {
  const frame = generatePortraitGlitchFrame('normal', () => 0)
  expect(frame.rgb).toBe(true)
  expect(frame.rgbOffset).toBe(4)
})
