import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('opens a photo in a focused dialog and returns focus after Escape', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  renderWithProviders(
    <ProjectGallery project={getProjectById('ar-coloring')!} />,
  )
  const trigger = screen.getByRole('button', { name: 'View full-screen photo' })
  await user.click(trigger)
  const dialog = await screen.findByRole('dialog', { name: 'Photo viewer' })
  expect(dialog).toContainElement(
    screen.getByRole('button', { name: 'Close viewer' }),
  )
  await user.keyboard('{Escape}')
  await waitFor(() =>
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
  )
  await waitFor(() => expect(trigger).toHaveFocus())
})
