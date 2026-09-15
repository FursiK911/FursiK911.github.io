import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { projects } from '@/entities/project'
import type { Project } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('loads fullscreen video on demand with its start timestamp and stops on navigation', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const project: Project = {
    ...projects[0],
    media: [
      { kind: 'youtube', videoId: 'video-with-start', startSeconds: 483 },
      {
        kind: 'image',
        src: '/images/projects/my-chess-web/logo.webp',
        altKey: 'mychessWebMediaLogo',
      },
    ],
  }
  renderWithProviders(<ProjectGallery project={project} />)

  await user.click(screen.getByRole('button', { name: 'Open media 2' }))
  await user.click(
    screen.getByRole('button', { name: 'View full-screen photo' }),
  )
  const dialog = await screen.findByRole('dialog', { name: 'Media viewer' })
  await user.click(
    within(dialog).getByRole('button', { name: 'Previous media' }),
  )

  expect(
    within(dialog).queryByTitle('Video for myChess'),
  ).not.toBeInTheDocument()
  await user.click(within(dialog).getByRole('button', { name: 'Watch video' }))
  expect(within(dialog).getByTitle('Video for myChess')).toHaveAttribute(
    'src',
    expect.stringContaining('&start=483'),
  )
  expect(screen.getAllByTitle('Video for myChess')).toHaveLength(1)

  await user.click(within(dialog).getByRole('button', { name: 'Next media' }))
  expect(
    within(dialog).queryByTitle('Video for myChess'),
  ).not.toBeInTheDocument()
})
