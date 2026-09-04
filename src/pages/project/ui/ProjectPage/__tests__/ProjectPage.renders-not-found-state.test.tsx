import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders a localized not-found state for an unknown project id', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ProjectPage projectId="missing-project" />)

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'ПРОЕКТ НЕ НАЙДЕН',
  )
  expect(screen.getByRole('link', { name: /К ПРОЕКТАМ/i })).toHaveAttribute(
    'href',
    '/#projects',
  )
})
