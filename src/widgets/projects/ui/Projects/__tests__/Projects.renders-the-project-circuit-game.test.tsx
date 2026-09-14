import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('keeps the project circuit game hidden behind its feature flag', () => {
  renderWithProviders(<Projects />)

  expect(
    screen.queryByText('ROUTE POWER TO PROJECT CORE'),
  ).not.toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'PROJECTS' })).toBeInTheDocument()
})
