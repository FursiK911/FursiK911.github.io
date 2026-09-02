import { GlitchPortrait } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/render'
const { glitchMock, GlitchMock } = vi.hoisted(() => {
  const mock = {
    start: vi.fn(),
    stop: vi.fn(),
    destroy: vi.fn(),
  }
  class MockGlitch {
    constructor(target: HTMLElement) {
      const clone = document.createElement('div')
      clone.className = 'glitch-clone'
      const image = document.createElement('img')
      image.alt = 'Profile portrait'
      clone.append(image)
      target.append(clone)
    }
    start = mock.start
    stop = mock.stop
    destroy = vi.fn(() => {
      document
        .querySelectorAll('.glitch-clone')
        .forEach((clone) => clone.remove())
      mock.destroy()
    })
  }
  return { glitchMock: mock, GlitchMock: MockGlitch }
})
vi.mock('@isonimus/glitch-js', () => ({
  Glitch: vi.fn(GlitchMock),
  Effects: {
    hologram: vi.fn(() => ({ name: 'hologram' })),
    rgbSplit: vi.fn(() => ({ name: 'rgbSplit' })),
    slice: vi.fn(() => ({ name: 'slice' })),
    shake: vi.fn(() => ({ name: 'shake' })),
  },
}))
beforeEach(() => {
  vi.clearAllMocks()
})
const props = {
  src: 'portrait.webp',
  alt: 'Profile portrait',
  active: false,
  reducedMotion: false,
}
it('destroys Glitch.js when an active portrait unmounts', () => {
  const { unmount } = renderWithProviders(<GlitchPortrait {...props} active />)
  unmount()
  expect(glitchMock.destroy).toHaveBeenCalledTimes(2)
})
