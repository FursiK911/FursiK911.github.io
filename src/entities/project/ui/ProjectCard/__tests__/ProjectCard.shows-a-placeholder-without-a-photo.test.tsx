import { screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('shows the localized first photo when a project has a preview', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  expect(
    screen.getByRole('img', { name: 'All-versus-one mode screen' }),
  ).toHaveAttribute('src', '/images/projects/my-chess-web/all-versus-one.webp')
})
