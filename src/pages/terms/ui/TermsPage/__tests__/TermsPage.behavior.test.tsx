import { screen } from '@testing-library/react'
import { TermsPage } from '../TermsPage'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the localized terms of use', async () => {
  await changeLanguage('ru')
  renderWithProviders(<TermsPage />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ',
  )
  expect(
    screen.getByRole('heading', { name: 'Использование сайта' }),
  ).toBeVisible()
  expect(screen.getByText(/юридическая консультация/)).toBeVisible()
})
