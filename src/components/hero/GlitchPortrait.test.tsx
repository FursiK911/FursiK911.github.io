import { screen } from '@testing-library/react'
import { Effects, Glitch } from '@isonimus/glitch-js'
import { GlitchPortrait } from './GlitchPortrait'
import { renderWithProviders } from '../../test/render'

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

it('renders one accessible portrait and hides Glitch.js clones', () => {
  renderWithProviders(<GlitchPortrait {...props} />)
  expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute(
    'src',
    'portrait.webp',
  )
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelectorAll('.portrait-glitch-cell')).toHaveLength(0)
})

it('configures the edited effect for manual short bursts', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0)
  renderWithProviders(<GlitchPortrait {...props} active />)
  const target = document.querySelector('.portrait-glitch')
  expect(target).toBeInstanceOf(HTMLDivElement)
  expect(Glitch).toHaveBeenCalledWith(
    target,
    expect.objectContaining({ trigger: 'manual', active: false }),
  )
  expect(Effects.rgbSplit).toHaveBeenCalledWith({
    maxOffset: 30,
    frequency: 0.1,
    blendMode: 'screen',
  })
  expect(Effects.slice).toHaveBeenCalledWith({
    maxOffset: 60,
    frequency: 0.1,
  })
  expect(Effects.shake).toHaveBeenCalledWith({
    amplitudeX: 10,
    amplitudeY: 4,
    frequency: 0.1,
  })
  expect(glitchMock.start).not.toHaveBeenCalled()
  vi.advanceTimersByTime(1000)
  expect(glitchMock.start).toHaveBeenCalledTimes(1)
  vi.advanceTimersByTime(140)
  expect(glitchMock.stop).toHaveBeenCalledTimes(1)
  vi.useRealTimers()
  vi.restoreAllMocks()
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelector('.glitch-clone')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})

it('destroys Glitch.js when an active portrait unmounts', () => {
  const { unmount } = renderWithProviders(<GlitchPortrait {...props} active />)
  unmount()
  expect(glitchMock.destroy).toHaveBeenCalledTimes(1)
})

it('does not schedule bursts for reduced motion and cleans up on unmount', () => {
  const { unmount } = renderWithProviders(
    <GlitchPortrait {...props} active reducedMotion />,
  )
  unmount()
  expect(glitchMock.destroy).not.toHaveBeenCalled()
})
