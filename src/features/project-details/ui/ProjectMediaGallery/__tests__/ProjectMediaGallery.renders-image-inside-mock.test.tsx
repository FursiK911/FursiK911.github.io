import { screen } from '@testing-library/react'
import type { Project } from '@/entities/project'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('renders image media inside the persistent mock screen', async () => {
  await changeLanguage('en')
  const project: Project = {
    ...projects[1],
    media: [
      { kind: 'image', src: '/mock-project.png', altKey: 'mobileRtsDesc' },
    ],
  }

  renderWithProviders(
    <ProjectMediaGallery project={project} variant="detail" />,
  )

  const image = screen.getByRole('img', {
    name: /Mobile RTS with multiplayer PvP/i,
  })

  expect(image.closest('[class*="screen"]')).toHaveAttribute(
    'data-media-kind',
    'image',
  )
})
