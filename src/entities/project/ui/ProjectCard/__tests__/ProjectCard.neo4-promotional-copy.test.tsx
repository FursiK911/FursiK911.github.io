import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCard } from '../ProjectCard'

it('renders Neo4 as a browser-based Unreal Engine product', async () => {
  await changeLanguage('ru')
  const neo4 = projects.find((project) => project.id === 'neo4-sightline')

  if (!neo4) throw new Error('Neo4 project is missing')

  renderWithProviders(<ProjectCard project={neo4} />)

  expect(
    screen.getByRole('heading', { name: 'Neo4 Web / Interior Sightline' }),
  ).toBeInTheDocument()
  expect(
    screen.getByText(/Unreal Engine-визуализация жилых комплексов/),
  ).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Neo4 Web/i })).toHaveAttribute(
    'href',
    '/projects/neo4-sightline',
  )
})
