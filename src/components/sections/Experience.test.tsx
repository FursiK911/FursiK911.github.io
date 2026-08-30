import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Experience } from './Experience'
import { renderWithProviders } from '../../test/render'

it('renders experience timeline', () => {
  renderWithProviders(<Experience />)
  expect(screen.getByText('TOO ME GROUP')).toBeInTheDocument()
})

it('toggles the accessible detailed experience block', async () => {
  const user = userEvent.setup()
  renderWithProviders(<Experience />)

  const toggle = screen.getByRole('button', {
    name: /MORE DETAILS|ПОДРОБНЕЕ/i,
  })
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await user.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByText(/CAREER_DETAILS|ПОДРОБНОСТИ/i)).toBeInTheDocument()

  await user.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
})
