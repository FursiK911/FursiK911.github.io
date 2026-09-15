import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ResumeDownload } from '../ResumeDownload'

it('opens from the keyboard, closes with Escape and restores trigger focus', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  renderWithProviders(<ResumeDownload label="CV" variant="text" />)
  const trigger = screen.getByRole('button', { name: 'CV' })
  trigger.focus()
  await user.keyboard('{Enter}')
  expect(screen.getByRole('dialog')).toBeVisible()
  await user.keyboard('{Escape}')
  await waitFor(() =>
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
  )
  await waitFor(() => expect(trigger).toHaveFocus())
  expect(trigger).toHaveAttribute('aria-expanded', 'false')
})
