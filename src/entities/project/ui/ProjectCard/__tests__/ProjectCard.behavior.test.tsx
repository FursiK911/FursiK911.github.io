import { screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders project metadata', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeInTheDocument()
  expect(screen.getByText('ООО ЦУП')).toBeInTheDocument()
  expect(screen.getByText(/09\.2023/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /myChess/i })).toHaveAttribute(
    'href',
    '/projects/mychess-web',
  )
})
