import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'
it('places client building figures in localized additional details rather than achievements', async () => {
  await changeLanguage('ru')
  const { container } = renderWithProviders(
    <ProjectPage projectId="neo4-sightline" />,
  )
  expect(container.querySelector('#achievements')).toBeNull()
  expect(screen.getByText('Дополнительные сведения')).toBeInTheDocument()
  expect(
    screen.getByText('квартир в клиентском кейсе Brf Celsius'),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Neo4')
})
