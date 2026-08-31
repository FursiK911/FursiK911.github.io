import { screen } from '@testing-library/react'
import { PrivacyPage } from './PrivacyPage'
import { renderWithProviders } from '../test/render'
import { changeLanguage } from '../i18n'

it('renders the localized privacy policy', async () => {
  await changeLanguage('ru')
  renderWithProviders(<PrivacyPage />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
  )
  expect(
    screen.getByRole('heading', { name: 'Какие данные собираются' }),
  ).toBeVisible()
  expect(
    screen.getAllByText(/19fursik99@gmail.com/).length,
  ).toBeGreaterThanOrEqual(1)
})
