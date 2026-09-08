import { screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GlitchPortrait } from '../GlitchPortrait'

vi.mock('@isonimus/glitch-js', () => ({
  Glitch: vi.fn(),
  Effects: {
    hologram: vi.fn(),
    rgbSplit: vi.fn(),
    slice: vi.fn(),
    shake: vi.fn(),
  },
}))

it('renders one accessible base image while inactive', () => {
  renderWithProviders(
    <GlitchPortrait
      active={false}
      alt="Profile portrait"
      reducedMotion={false}
      src="portrait.webp"
    />,
  )

  expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute(
    'src',
    'portrait.webp',
  )
  expect(screen.getAllByRole('img')).toHaveLength(1)
})
