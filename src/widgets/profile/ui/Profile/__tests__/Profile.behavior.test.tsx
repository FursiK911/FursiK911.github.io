import { screen } from '@testing-library/react'
import { Profile } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders the profile hero and directions in one top-level block', () => {
  renderWithProviders(<Profile typedRole="Unity Developer" reducedMotion />)
  const profile = document.querySelector('.profile-section')
  expect(profile).toHaveAttribute('id', 'top')
  expect(profile?.querySelector('.hero')).toBeInTheDocument()
  expect(profile?.querySelector('.directions-grid')).toBeInTheDocument()
  expect(profile?.querySelector('.hero-facts')).not.toBeInTheDocument()
  expect(screen.getByText('LANG: RU_NATIVE / UA_B2 / EN_B1')).toBeVisible()
  expect(document.querySelector('.about-section')).not.toBeInTheDocument()
  expect(document.querySelector('#about')).not.toBeInTheDocument()
})
