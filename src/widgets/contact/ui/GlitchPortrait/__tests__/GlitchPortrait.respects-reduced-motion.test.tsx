import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GlitchPortrait } from '../GlitchPortrait'

const { glitchMock, GlitchMock } = vi.hoisted(() => {
  const mock = { destroy: vi.fn(), start: vi.fn(), stop: vi.fn() }
  class MockGlitch {
    destroy = mock.destroy
    start = mock.start
    stop = mock.stop
  }
  return { glitchMock: mock, GlitchMock: MockGlitch }
})

vi.mock('@isonimus/glitch-js', () => ({
  Glitch: vi.fn(GlitchMock),
  Effects: {
    hologram: vi.fn(),
    rgbSplit: vi.fn(),
    slice: vi.fn(),
    shake: vi.fn(),
  },
}))

it('does not initialize the glitch effect for reduced motion', () => {
  const { unmount } = renderWithProviders(
    <GlitchPortrait
      active
      alt="Profile portrait"
      reducedMotion
      src="portrait.webp"
    />,
  )

  unmount()
  expect(glitchMock.destroy).not.toHaveBeenCalled()
})
