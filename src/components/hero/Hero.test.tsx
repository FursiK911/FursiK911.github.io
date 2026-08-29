import { screen } from '@testing-library/react'
import { Hero } from './Hero'
import { renderWithProviders } from '../../test/render'

it('renders hero portrait and role', () => {
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  expect(screen.getByRole('img')).toHaveAttribute('alt')
  expect(screen.getByText('Unity Developer')).toBeVisible()
})
