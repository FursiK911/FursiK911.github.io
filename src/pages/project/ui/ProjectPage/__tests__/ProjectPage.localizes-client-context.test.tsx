import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'
it('presents Neo4 as a product and omits the obsolete additional-details block', async () => {
  await changeLanguage('ru')
  const { container } = renderWithProviders(
    <ProjectPage projectId="neo4-sightline" />,
  )
  expect(container.querySelector('#achievements')).toBeNull()
  expect(screen.queryByText('Дополнительные сведения')).not.toBeInTheDocument()
  expect(
    screen.queryByText('квартир в клиентском кейсе Brf Celsius'),
  ).not.toBeInTheDocument()
  expect(
    screen.getByText(
      /Neo4 превращает выбор жилья в полноценное 3D-путешествие/,
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByText(
      /Связывал браузерный интерфейс с интерактивной Unreal Engine-сценой/,
    ),
  ).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Neo4')
})
