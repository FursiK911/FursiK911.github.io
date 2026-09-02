import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ActionButton } from '../ActionButton'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders button variants and preserves native button behavior', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  renderWithProviders(
    <ActionButton variant="action" onClick={onClick} disabled>
      Open project
    </ActionButton>,
  )
  const button = screen.getByRole('button', { name: 'Open project' })
  expect(button).toHaveClass('action-control', 'action-control--action')
  expect(button).toBeDisabled()
  await user.click(button)
  expect(onClick).not.toHaveBeenCalled()
})
