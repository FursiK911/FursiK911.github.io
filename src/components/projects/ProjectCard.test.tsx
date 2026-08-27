import { screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/portfolio'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

it('renders project metadata', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectCard project={projects[0]} onOpen={() => undefined} />,
  )
  expect(screen.getByRole('heading', { name: 'MyChessVR' })).toBeInTheDocument()
})
