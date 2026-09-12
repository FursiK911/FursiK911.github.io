import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('uses the games and apps direction label', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)
  expect(
    screen.getByRole('button', { name: /Игры и приложения\s*12/ }),
  ).toBeInTheDocument()
})
