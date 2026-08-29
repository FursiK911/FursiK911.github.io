import { screen } from '@testing-library/react'
import { GlitchPortrait } from './GlitchPortrait'
import { renderWithProviders } from '../../test/render'

it('renders one accessible portrait and decorative glitch layers', () => {
  renderWithProviders(
    <GlitchPortrait
      src="portrait.webp"
      alt="Profile portrait"
      active={false}
      reducedMotion={false}
    />,
  )
  expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute(
    'src',
    'portrait.webp',
  )
  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(document.querySelectorAll('.portrait-glitch-slice')).toHaveLength(7)
  expect(document.querySelectorAll('.portrait-glitch-block')).toHaveLength(5)
})

it('cleans up its burst scheduler on unmount', () => {
  vi.useFakeTimers()
  const { unmount } = renderWithProviders(
    <GlitchPortrait
      src="portrait.webp"
      alt="Profile portrait"
      active
      reducedMotion={false}
    />,
  )
  expect(vi.getTimerCount()).toBeGreaterThan(0)
  unmount()
  expect(vi.getTimerCount()).toBe(0)
  vi.useRealTimers()
})

it('renders and clears a normal burst without duplicating accessible images', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
  renderWithProviders(
    <GlitchPortrait
      src="portrait.webp"
      alt="Profile portrait"
      active
      reducedMotion={false}
    />,
  )
  vi.advanceTimersByTime(950)
  expect(document.querySelector('.portrait-glitch')).toHaveClass('is-glitching')
  expect(
    document.querySelectorAll('.portrait-glitch-slice[style*="opacity: 1"]'),
  ).not.toHaveLength(0)
  vi.advanceTimersByTime(250)
  expect(document.querySelector('.portrait-glitch')).not.toHaveClass(
    'is-glitching',
  )
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('does not schedule bursts for reduced motion', () => {
  vi.useFakeTimers()
  renderWithProviders(
    <GlitchPortrait
      src="portrait.webp"
      alt="Profile portrait"
      active
      reducedMotion
    />,
  )
  expect(vi.getTimerCount()).toBe(0)
  vi.useRealTimers()
})
