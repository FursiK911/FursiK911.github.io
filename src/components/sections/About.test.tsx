import { screen } from '@testing-library/react'
import { About } from './About'
import { renderWithProviders } from '../../test/render'

it('renders about facts', () => {
  renderWithProviders(<About />)
  expect(screen.getByText('ROLE')).toBeVisible()
  expect(screen.getByText(/Unity Developer/)).toBeVisible()
  expect(screen.getByText(/6 years|6-летним/)).toBeVisible()
})
