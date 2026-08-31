import { screen } from '@testing-library/react'
import { About } from './About'
import { renderWithProviders } from '../../test/render'

it('renders about facts', () => {
  renderWithProviders(<About />)
  expect(screen.getByText('ROLE')).toBeVisible()
  expect(screen.getAllByText(/Software Developer/).length).toBeGreaterThan(0)
  expect(screen.getByText(/over 6 years|более чем 6-летним/)).toBeVisible()
})
