import { screen } from '@testing-library/react'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCard } from '../ProjectCard'

vi.mock('motion/react', async (importOriginal) => ({
  ...(await importOriginal<typeof import('motion/react')>()),
  useReducedMotion: () => true,
}))

it('renders the project card without an exit animation when reduced motion is preferred', () => {
  renderWithProviders(<ProjectCard project={projects[0]} />)

  expect(screen.getByRole('link', { name: /myChess/i })).toBeInTheDocument()
})
