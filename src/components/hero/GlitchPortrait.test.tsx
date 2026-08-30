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
    start = mock.start
    stop = mock.stop
    destroy = mock.destroy
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

it('renders one accessible portrait without the old decorative grid', () => {
  renderWithProviders(<GlitchPortrait {...props} />)
  expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute(
    'src',
    'portrait.webp',
  )
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelectorAll('.portrait-glitch-cell')).toHaveLength(0)
  expect(
    document.querySelectorAll(
      '.portrait-glitch-slice, .portrait-glitch-block, .portrait-glitch-rgb',
    ),
  ).toHaveLength(0)
})

it('starts the always-active configured effect while keeping the base image unchanged', () => {
  renderWithProviders(<GlitchPortrait {...props} active />)
  const baseImage = screen.getByRole('img', { name: 'Profile portrait' })
  const baseStyle = baseImage.getAttribute('style')
  expect(Glitch).toHaveBeenCalledWith(
    baseImage,
    expect.objectContaining({ trigger: 'always', active: true }),
  )
  expect(Effects.rgbSplit).toHaveBeenCalledWith({
    maxOffset: 30,
    frequency: 1,
    blendMode: 'screen',
  })
  expect(Effects.slice).toHaveBeenCalledWith({
    maxOffset: 60,
    frequency: 0.05,
  })
  expect(Effects.shake).toHaveBeenCalledWith({
    amplitudeX: 11,
    amplitudeY: 15,
    frequency: 0.05,
  })
  expect(baseImage.getAttribute('style')).toBe(baseStyle)
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
