import { screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('shows the localized photo placeholder when a project has no preview', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  expect(
    screen.getByRole('img', { name: 'Photo coming soon' }),
  ).toBeInTheDocument()
})
