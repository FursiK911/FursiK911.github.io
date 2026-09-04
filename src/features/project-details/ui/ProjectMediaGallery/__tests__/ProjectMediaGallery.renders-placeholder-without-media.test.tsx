import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('renders a project placeholder when no media is available', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectMediaGallery project={projects[1]} variant="preview" />,
  )

  expect(screen.getByText('Mobile Multiplayer RTS')).toBeInTheDocument()
  expect(
    screen.queryByRole('button', { name: /WATCH VIDEO/i }),
  ).not.toBeInTheDocument()
})
