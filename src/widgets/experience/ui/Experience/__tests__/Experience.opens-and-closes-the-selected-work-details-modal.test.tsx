import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Experience } from '../Experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('opens only the selected work details and restores focus after closing', async () => {
  const user = userEvent.setup()
  renderWithProviders(<Experience />)

  const trigger = screen.getByRole('button', {
    name: /Open work details for YELLOW ELEMENT, 10\.2019/i,
  })
  await user.click(trigger)

  const dialog = await screen.findByRole('dialog', {
    name: /Work details at YELLOW ELEMENT/i,
  })
  expect(dialog).toHaveTextContent('Intern / Junior Unity Developer')
  expect(dialog).not.toHaveTextContent('Frieze')

  await user.click(screen.getByRole('button', { name: /Close work details/i }))
  await waitFor(() =>
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
  )
  await waitFor(() => expect(trigger).toHaveFocus())
})
