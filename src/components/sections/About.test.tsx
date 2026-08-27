import { screen } from '@testing-library/react'
import { About } from './About'
import { renderWithProviders } from '../../test/render'

it('renders about facts', () => {
  renderWithProviders(<About />)
  expect(screen.getByText('ROLE')).toBeVisible()
})
