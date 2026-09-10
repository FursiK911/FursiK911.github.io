import { screen } from '@testing-library/react'
import type { Project } from '@/entities/project'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectGallery } from '../ProjectGallery'

it('shows videos before photos when source media starts with a photo', async () => {
  await changeLanguage('en')
  const project: Project = {
    ...projects[0],
    media: [
      { kind: 'image', src: '/first.png', altKey: 'mychessWeb' },
      { kind: 'youtube', videoId: 'video-first' },
    ],
  }
  renderWithProviders(<ProjectGallery project={project} />)

  expect(
    screen.getByRole('button', { name: 'Watch video' }),
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Open media 1' })).toHaveAttribute(
    'aria-current',
    'true',
  )
})
