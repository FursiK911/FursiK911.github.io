import { fireEvent, screen } from '@testing-library/react'
import type { Project } from '@/entities/project'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('moves between media items with the arrow keys', async () => {
  await changeLanguage('en')
  const project: Project = {
    ...projects[0],
    media: [
      { kind: 'youtube', videoId: 't-PDCpjdJvs' },
      { kind: 'youtube', videoId: 'nnmgHldVKMg' },
    ],
  }
  renderWithProviders(
    <ProjectMediaGallery project={project} variant="preview" />,
  )

  fireEvent.keyDown(screen.getByRole('button', { name: 'Show media 1' }), {
    key: 'ArrowRight',
  })

  expect(screen.getByRole('button', { name: 'Show media 2' })).toHaveAttribute(
    'aria-current',
    'true',
  )
})
