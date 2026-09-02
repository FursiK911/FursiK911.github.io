import { screen } from '@testing-library/react'
import { Experience } from '../Experience'
import { renderWithProviders } from '@/shared/test/render'
it('renders experience timeline', () => {
  renderWithProviders(<Experience />)
  expect(screen.getByText('TOO ME GROUP')).toBeInTheDocument()
})
