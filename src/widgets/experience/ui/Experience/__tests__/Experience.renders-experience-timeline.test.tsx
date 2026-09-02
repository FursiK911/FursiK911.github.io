import { screen } from '@testing-library/react'
import { Experience } from '../Experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders experience timeline', () => {
  renderWithProviders(<Experience />)
  expect(screen.getByText('TOO ME GROUP')).toBeInTheDocument()
})
