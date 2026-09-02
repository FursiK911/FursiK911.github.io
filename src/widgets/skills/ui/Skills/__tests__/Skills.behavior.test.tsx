import { screen } from '@testing-library/react'
import { Skills } from '../Skills'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders grouped skills', () => {
  renderWithProviders(<Skills />)
  expect(screen.getByRole('button', { name: 'Unity' })).toBeVisible()
})
