import { cleanup, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders the Villa Krim cases with period, links and differentiated contribution copy', async () => {
  await changeLanguage('ru')
  const { container } = renderWithProviders(
    <ProjectPage projectId="villa-krim" />,
  )

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Виртуальный сомелье Villa Krim',
  )
  expect(screen.getByText('2019 — 2020')).toBeInTheDocument()
  expect(screen.queryByText('Дополнительные сведения')).not.toBeInTheDocument()
  expect(container.querySelector('#achievements')).toBeNull()
  expect(
    screen.getByRole('link', { name: /24tv · campaign/i }),
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('link', { name: /APKPure · RU versions/i }),
  ).not.toBeInTheDocument()
  expect(
    screen.getByText(
      /тестирование, позволяющее пользователю проверить знания/i,
    ),
  ).toBeInTheDocument()

  cleanup()
  renderWithProviders(<ProjectPage projectId="authors-wine-villa-krim" />)

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Авторское вино Villa Krim',
  )
  expect(screen.getByText('2019 — 2020')).toBeInTheDocument()
  expect(screen.queryByText('Дополнительные сведения')).not.toBeInTheDocument()
  expect(
    screen.queryByRole('link', { name: /24tv · campaign/i }),
  ).not.toBeInTheDocument()
  expect(
    screen.queryByRole('link', { name: /Habr Career/i }),
  ).not.toBeInTheDocument()
  expect(
    screen.getByText(/структурированный контент о коллекции/i),
  ).toBeInTheDocument()
  expect(screen.queryByText(/тестирование/i)).not.toBeInTheDocument()

  cleanup()
  await changeLanguage('en')
  renderWithProviders(<ProjectPage projectId="villa-krim" />)
  expect(screen.getByText(/short quiz/i)).toBeInTheDocument()

  cleanup()
  renderWithProviders(<ProjectPage projectId="authors-wine-villa-krim" />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Author’s Wine Villa Krim',
  )
  expect(screen.getByText(/structured collection content/i)).toBeInTheDocument()
  expect(screen.queryByText(/quiz/i)).not.toBeInTheDocument()
})
