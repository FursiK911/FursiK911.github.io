import { screen } from '@testing-library/react'
import { Footer } from './Footer'
import { renderWithProviders } from '../../test/render'

it('renders portfolio footer', () => {
  renderWithProviders(<Footer />)
  expect(screen.getByText('DMITRY_FURSOV')).toBeVisible()
})
