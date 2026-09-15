import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { projects } from '@/entities/project'
import type { Project } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('opens a photo in a focused dialog and returns focus after Escape', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const project: Project = {
    ...projects[0],
    media: [
      {
        kind: 'image',
        src: '/images/projects/my-chess-web/logo.webp',
        altKey: 'mychessWebMediaLogo',
      },
    ],
  }
  renderWithProviders(<ProjectGallery project={project} />)
  const trigger = screen.getByRole('button', { name: 'View full-screen photo' })
  await user.click(trigger)
  const dialog = await screen.findByRole('dialog', { name: 'Media viewer' })
  expect(dialog).toContainElement(
    screen.getByRole('button', { name: 'Close viewer' }),
  )
  await user.keyboard('{Escape}')
  await waitFor(() =>
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
  )
  await waitFor(() => expect(trigger).toHaveFocus())
})
