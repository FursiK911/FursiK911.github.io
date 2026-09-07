import { expect, it } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Hero } from '@/widgets/profile'

it('shows the base portrait while keeping its frame and effects pending', () => {
  renderWithProviders(
    <Hero
      entered
      portraitEffectsReady={false}
      portraitVisible
      reducedMotion
      typedRole="Unity Developer"
    />,
  )

  expect(document.querySelector('.portrait-frame')).toHaveClass(
    'is-portrait-pending',
    'is-base-portrait-visible',
    'is-portrait-handoff',
  )
  expect(document.querySelector('.portrait-glitch img')).toBeInTheDocument()
})
