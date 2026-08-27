import { screen } from '@testing-library/react'
import { Hero } from './Hero'
import { renderWithProviders } from '../../test/render'

it('renders hero portrait and role', () => {
  renderWithProviders(<Hero />)
  expect(screen.getByRole('img')).toHaveAttribute('alt')
  expect(screen.getByText('UNITY / VR / XR DEVELOPER')).toBeVisible()
})
