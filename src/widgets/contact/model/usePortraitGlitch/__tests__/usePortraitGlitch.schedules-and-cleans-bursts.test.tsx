import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { GlitchPortrait } from '@/widgets/contact/ui/GlitchPortrait/GlitchPortrait'

const glitchMock = vi.hoisted(() => {
  const instances: Array<{
    destroy: ReturnType<typeof vi.fn>
    start: ReturnType<typeof vi.fn>
    stop: ReturnType<typeof vi.fn>
  }> = []
  class MockGlitch {
    destroy = vi.fn()
    start = vi.fn()
    stop = vi.fn()
    constructor() {
      instances.push(this)
    }
  }
  return {
    instances,
    Effects: {
      hologram: vi.fn(() => ({})),
      rgbSplit: vi.fn(() => ({})),
      shake: vi.fn(() => ({})),
      slice: vi.fn(() => ({})),
    },
    Glitch: MockGlitch,
  }
})

vi.mock('@isonimus/glitch-js', () => glitchMock)

it('starts a scheduled burst and cleans timers and glitch instances on unmount', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const { unmount } = render(
    <GlitchPortrait
      active
      alt="Portrait"
      reducedMotion={false}
      src="portrait.webp"
    />,
  )

  expect(glitchMock.instances).toHaveLength(2)
  vi.advanceTimersByTime(1000)
  expect(glitchMock.instances[1].start).toHaveBeenCalledOnce()
  vi.advanceTimersByTime(180)
  expect(glitchMock.instances[1].stop).toHaveBeenCalledOnce()
  unmount()
  expect(glitchMock.instances[0].destroy).toHaveBeenCalledOnce()
  expect(glitchMock.instances[1].destroy).toHaveBeenCalledOnce()
  vi.useRealTimers()
})
