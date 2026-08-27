import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { renderWithProviders } from '../../test/render'

it('renders navigation and toggles mobile menu', async () => {
  const user = userEvent.setup()
  renderWithProviders(<Header active="projects" onLanguage={() => undefined} />)
  await user.click(screen.getByRole('button', { name: /menu/i }))
  expect(screen.getByRole('navigation')).toHaveClass('is-open')
})
