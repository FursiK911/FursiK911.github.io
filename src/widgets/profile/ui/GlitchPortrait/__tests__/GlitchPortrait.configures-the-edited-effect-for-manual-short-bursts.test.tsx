import { screen } from '@testing-library/react'
import { Effects, Glitch } from '@isonimus/glitch-js'
import { GlitchPortrait } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
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
it('configures the edited effect for manual short bursts', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0)
  renderWithProviders(<GlitchPortrait {...props} active />)
  const target = document.querySelector('.portrait-glitch')
  expect(target).toBeInstanceOf(HTMLDivElement)
  expect(Glitch).toHaveBeenCalledWith(
    target,
    expect.objectContaining({ trigger: 'always', active: true }),
  )
  expect(Glitch).toHaveBeenCalledWith(
    document.querySelector('.portrait-glitch-burst-target'),
    expect.objectContaining({ trigger: 'manual', active: false }),
  )
  expect(Effects.hologram).toHaveBeenCalledWith({
    color: '#00d9ff',
    opacity: 1,
    glowIntensity: 0.35,
    scanSpeed: 1,
    flickerFrequency: 0,
    floatAmplitude: 1,
  })
  expect(Effects.rgbSplit).toHaveBeenCalledWith({
    maxOffset: 10,
    frequency: 0.3,
    blendMode: 'screen',
  })
  expect(Effects.slice).toHaveBeenCalledWith({
    maxOffset: 20,
    frequency: 0.5,
  })
  expect(Effects.shake).toHaveBeenCalledWith({
    amplitudeX: 20,
    amplitudeY: 20,
    frequency: 0.1,
  })
  expect(glitchMock.start).not.toHaveBeenCalled()
  vi.advanceTimersByTime(1000)
  expect(glitchMock.start).toHaveBeenCalledTimes(1)
  vi.advanceTimersByTime(180)
  expect(glitchMock.stop).toHaveBeenCalledTimes(1)
  vi.useRealTimers()
  vi.restoreAllMocks()
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelector('.glitch-clone')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})
