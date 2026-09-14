import { cleanup, screen } from '@testing-library/react'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCard } from '../ProjectCard'

it('renders localized Vulcan Verse marketing copy with its player metric', async () => {
  const project = projects.find((item) => item.id === 'vulkan-verse')

  if (!project) throw new Error('Vulcan Verse project is missing')

  await changeLanguage('ru')
  renderWithProviders(<ProjectCard project={project} />)
  expect(
    screen.getByText(/открытая MMORPG в греко-римском фэнтезийном мире/i),
  ).toBeInTheDocument()
  expect(screen.getByText(/100K\+ уникальных игроков/i)).toBeInTheDocument()

  cleanup()
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={project} />)
  expect(
    screen.getByText(/open-world MMORPG set in a Greco-Roman fantasy world/i),
  ).toBeInTheDocument()
  expect(screen.getByText(/100K\+ unique players/i)).toBeInTheDocument()
})
