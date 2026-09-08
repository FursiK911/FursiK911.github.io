import { screen } from '@testing-library/react'
import { Contact } from '../Contact'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders contact actions', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Contact />)
  expect(
    screen.getByRole('heading', { name: /СОЗДАДИМ ЧТО-НИБУДЬ ВМЕСТЕ/i }),
  ).toBeVisible()
  expect(
    screen.getByRole('link', { name: /19fursik99@gmail.com/ }),
  ).toBeVisible()
  expect(screen.getByRole('link', { name: /@FursiK911/ })).toBeVisible()
  const resumeLink = screen.getByRole('link', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveClass('action-control', 'action-control--primary')
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
})
