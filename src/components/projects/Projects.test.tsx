import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'
import { renderWithProviders } from '../../test/render'

it('filters projects by category', async () => {
  const user = userEvent.setup()
  renderWithProviders(<Projects />)
  await user.click(screen.getByRole('button', { name: 'WEB' }))
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeVisible()
})
