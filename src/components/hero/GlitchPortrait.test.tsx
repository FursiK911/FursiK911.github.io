import { screen } from '@testing-library/react'
import { GlitchPortrait } from './GlitchPortrait'
import { renderWithProviders } from '../../test/render'

const props = {
  src: 'portrait.webp',
  alt: 'Profile portrait',
  active: false,
  reducedMotion: false,
}

it('renders a 20x20 decorative grid with one accessible portrait', () => {
  renderWithProviders(<GlitchPortrait {...props} />)
  expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute(
    'src',
    'portrait.webp',
  )
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelectorAll('.portrait-glitch-cell')).toHaveLength(400)
  expect(
    document.querySelectorAll(
      '.portrait-glitch-slice, .portrait-glitch-block, .portrait-glitch-rgb',
    ),
  ).toHaveLength(0)
})

it('renders the mobile 10x10 grid', () => {
  vi.stubGlobal('matchMedia', () => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  renderWithProviders(<GlitchPortrait {...props} />)
  expect(document.querySelectorAll('.portrait-glitch-cell')).toHaveLength(100)
  vi.unstubAllGlobals()
})

it('runs a long burst while keeping the base image style unchanged', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
  renderWithProviders(<GlitchPortrait {...props} active />)
  const baseImage = screen.getByRole('img', { name: 'Profile portrait' })
  const baseStyle = baseImage.getAttribute('style')
  vi.advanceTimersByTime(950)
  expect(document.querySelector('.portrait-glitch')).toHaveClass('is-glitching')
  expect(
    [...document.querySelectorAll<HTMLElement>('.portrait-glitch-cell')].some(
      (cell) => Number(cell.style.opacity) > 0,
    ),
  ).toBe(true)
  expect(baseImage.getAttribute('style')).toBe(baseStyle)
  vi.advanceTimersByTime(1800)
  expect(document.querySelector('.portrait-glitch')).not.toHaveClass(
    'is-glitching',
  )
  expect(
    [...document.querySelectorAll<HTMLElement>('.portrait-glitch-cell')].every(
      (cell) => cell.style.opacity === '0',
    ),
  ).toBe(true)
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('does not schedule bursts for reduced motion and cleans up on unmount', () => {
  vi.useFakeTimers()
  const { unmount } = renderWithProviders(
    <GlitchPortrait {...props} active reducedMotion />,
  )
  expect(vi.getTimerCount()).toBe(0)
  unmount()
  expect(vi.getTimerCount()).toBe(0)
  vi.useRealTimers()
})
