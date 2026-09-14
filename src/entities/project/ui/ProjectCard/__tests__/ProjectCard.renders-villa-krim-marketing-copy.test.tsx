import { cleanup, screen } from '@testing-library/react'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCard } from '../ProjectCard'

it('renders distinct localized marketing copy for the Villa Krim cards', async () => {
  const sommelier = projects.find((project) => project.id === 'villa-krim')
  const authorsWine = projects.find(
    (project) => project.id === 'authors-wine-villa-krim',
  )

  if (!sommelier || !authorsWine)
    throw new Error('Villa Krim projects are missing')

  await changeLanguage('ru')
  renderWithProviders(<ProjectCard project={sommelier} />)
  expect(
    screen.getByText(/AR-видео, рекомендации о вине и короткое тестирование/i),
  ).toBeInTheDocument()

  cleanup()
  renderWithProviders(<ProjectCard project={authorsWine} />)
  expect(
    screen.getByText(/интерактивную историю о коллекции, вкусе, аромате/i),
  ).toBeInTheDocument()
  expect(screen.queryByText(/тестирование/i)).not.toBeInTheDocument()

  cleanup()
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={sommelier} />)
  expect(
    screen.getByText(/AR video, wine guidance and a short quiz/i),
  ).toBeInTheDocument()

  cleanup()
  renderWithProviders(<ProjectCard project={authorsWine} />)
  expect(
    screen.getByText(/interactive story about the collection, taste, aroma/i),
  ).toBeInTheDocument()
  expect(screen.queryByText(/quiz/i)).not.toBeInTheDocument()
})
