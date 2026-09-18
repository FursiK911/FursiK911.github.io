import { screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { projectMedia, projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'

it('renders the localized logo as the first project preview', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  expect(screen.getByRole('img', { name: 'myChess logo' })).toHaveAttribute(
    'src',
    projectMedia.myChessWeb.logo,
  )
})
