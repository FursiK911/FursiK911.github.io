import { screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders only the showcase card content and direct case link', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeInTheDocument()
  expect(
    screen.getByText(/myChess is the web edition of a chess ecosystem/),
  ).toBeInTheDocument()
  expect(
    screen.getByText(/2,000 people played simultaneously/),
  ).toBeInTheDocument()
  expect(screen.getByText(/AI champions/)).toBeInTheDocument()
  expect(screen.queryByText(/chessboxing/)).not.toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.queryByText('ООО ЦУП')).not.toBeInTheDocument()
  expect(screen.queryByText(/09\.2023/)).not.toBeInTheDocument()
  expect(screen.queryByText(/VIEW PROJECT/)).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: /myChess/i })).toHaveAttribute(
    'href',
    '/projects/mychess-web',
  )
})
