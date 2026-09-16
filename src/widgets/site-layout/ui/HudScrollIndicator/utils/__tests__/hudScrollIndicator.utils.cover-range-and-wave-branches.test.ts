import { applyHudWave } from '../applyHudWave'
import { getHudWaveAppearance } from '../getHudWaveAppearance'
import { getScrollState } from '../getScrollState'
import { scrollToProgress } from '../scrollToProgress'

it('handles empty ranges, clamped progress, null segments, and wave extremes', () => {
  const scrollTo = vi
    .spyOn(window, 'scrollTo')
    .mockImplementation(() => undefined)
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })
  expect(getScrollState(0, false)).toEqual({
    isInteractionDisabled: false,
    isScrollable: false,
    percentage: 0,
  })
  expect(getScrollState(100, true)).toEqual({
    isInteractionDisabled: true,
    isScrollable: true,
    percentage: 100,
  })

  scrollToProgress(-1, 100)
  scrollToProgress(2, 100)
  expect(scrollTo).toHaveBeenNthCalledWith(1, { top: 0, behavior: 'instant' })
  expect(scrollTo).toHaveBeenNthCalledWith(2, { top: 100, behavior: 'instant' })

  const root = document.createElement('div')
  const segment = document.createElement('span')
  applyHudWave(null, [segment], 0.5)
  applyHudWave(root, [null, segment], 0.5)
  expect(root.style.getPropertyValue('--hud-progress-offset')).toBeTruthy()
  expect(segment.style.getPropertyValue('--hud-segment-scale')).toBeTruthy()
  expect(getHudWaveAppearance(0).scale).toBe(1)
  expect(getHudWaveAppearance(100).scale).toBeGreaterThan(0)
})
