import { screen } from '@testing-library/react'
import { Hero } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders the role, languages and live broadcast without a portrait', () => {
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  expect(screen.getByText('Unity Developer')).toBeVisible()
  expect(screen.getByText('LANG: RU_NATIVE / UA_B2 / EN_B1')).toBeVisible()
  expect(document.querySelector('[data-live-cam-status]')).toBeVisible()
  expect(document.querySelector('.hero-portrait')).not.toBeInTheDocument()
  expect(screen.queryByText(/currently_building/)).not.toBeInTheDocument()
})
