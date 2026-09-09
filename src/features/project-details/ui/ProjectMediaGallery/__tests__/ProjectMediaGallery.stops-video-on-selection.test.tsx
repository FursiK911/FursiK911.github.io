import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('stops a playing video when another media item is selected', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectMediaGallery
      project={projects.find((project) => project.id === 'ar-chudaboxes')!}
      variant="preview"
    />,
  )

  fireEvent.click(screen.getByRole('button', { name: /WATCH VIDEO/i }))
  expect(screen.getByTitle(/Video for AR Chudoboxes/i)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: 'Show media 2' }))

  expect(
    screen.queryByTitle(/Video for AR Chudoboxes/i),
  ).not.toBeInTheDocument()
})
