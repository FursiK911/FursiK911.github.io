import { vi } from 'vitest'
import { createBurstGlitch } from '../utils/createBurstGlitch'
import { createHologram } from '../utils/createHologram'
import { getBurstDuration } from '../utils/getBurstDuration'
import { getNextPause } from '../utils/getNextPause'
import { markDecorativeLayers } from '../utils/markDecorativeLayers'

const glitchMock = vi.hoisted(() => ({
  Effects: {
    hologram: vi.fn(() => 'hologram'),
    rgbSplit: vi.fn(() => 'rgbSplit'),
    shake: vi.fn(() => 'shake'),
    slice: vi.fn(() => 'slice'),
  },
  Glitch: vi.fn(function Glitch(this: object) {
    return this
  }),
}))

vi.mock('@isonimus/glitch-js', () => glitchMock)

it('creates the configured effects, clamps random timings to their ranges, and marks decorative descendants', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
  const target = document.createElement('div')
  target.innerHTML =
    '<div class="glitch-clone"><img alt="portrait" /></div><div class="glitch-overlay"><img alt="overlay" /></div>'

  createBurstGlitch(target)
  createHologram(target)
  markDecorativeLayers(target)

  expect(glitchMock.Glitch).toHaveBeenCalledTimes(2)
  expect(glitchMock.Effects.rgbSplit).toHaveBeenCalled()
  expect(glitchMock.Effects.hologram).toHaveBeenCalled()
  expect(target.querySelectorAll('[aria-hidden="true"]')).toHaveLength(4)
  expect(target.querySelectorAll('img[alt=""]')).toHaveLength(2)
  expect(getBurstDuration()).toBe(250)
  expect(getNextPause()).toBe(2500)
})
