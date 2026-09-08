import { screen } from '@testing-library/react'
import { Hero } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders hero portrait and role', () => {
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  expect(screen.getByRole('img')).toHaveAttribute('alt')
  expect(screen.getByText('Unity Developer')).toBeVisible()
  expect(screen.getByText('LANG: RU_NATIVE / UA_B2 / EN_B1')).toBeVisible()
  expect(document.querySelector('[data-live-cam-status]')).toBeVisible()
  expect(screen.queryByText(/currently_building/)).not.toBeInTheDocument()
})
