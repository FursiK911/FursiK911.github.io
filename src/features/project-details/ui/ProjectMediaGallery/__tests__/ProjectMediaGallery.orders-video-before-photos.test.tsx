import { screen } from '@testing-library/react'
import type { Project } from '@/entities/project'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('shows videos before photos when source media starts with a photo', async () => {
  await changeLanguage('en')
  const project: Project = {
    ...projects[0],
    media: [
      { kind: 'image', src: '/first.png', altKey: 'mychessWeb' },
      { kind: 'youtube', videoId: 'video-first' },
    ],
  }
  renderWithProviders(
    <ProjectMediaGallery project={project} variant="preview" />,
  )

  expect(
    screen.getByRole('button', { name: /WATCH VIDEO/i }),
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Show media 1' })).toHaveAttribute(
    'aria-current',
    'true',
  )
})
