import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('renders a project placeholder when no media is available', async () => {
  await changeLanguage('en')
  const project = projects.find((item) => item.id === 'cat-citten')!
  const { container } = renderWithProviders(
    <ProjectMediaGallery project={project} variant="preview" />,
  )

  expect(container.querySelector('[class*="mock"]')).toBeInTheDocument()
  expect(container.querySelector('[class*="screen"]')).toBeInTheDocument()
  expect(screen.getByText('Cat-citten company website')).toBeInTheDocument()
  expect(
    screen.queryByRole('button', { name: /WATCH VIDEO/i }),
  ).not.toBeInTheDocument()
})
