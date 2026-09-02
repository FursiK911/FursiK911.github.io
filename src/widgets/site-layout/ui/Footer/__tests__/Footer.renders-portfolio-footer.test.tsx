import { screen } from '@testing-library/react'
import { Footer } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(async () => {
  await changeLanguage('ru')
})
it('renders portfolio footer', () => {
  renderWithProviders(<Footer />)
  expect(screen.getByText('DMITRY_FURSOV')).toBeVisible()
  expect(screen.getByRole('link', { name: /Telegram/ })).toHaveAttribute(
    'href',
    'https://t.me/FursiK911',
  )
  expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/dmitry-fursov-251097213/',
  )
  expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/FursiK911',
  )
  expect(screen.getByRole('link', { name: /Telegram/ })).toHaveAttribute(
    'target',
    '_blank',
  )
  expect(screen.getByRole('link', { name: /Telegram/ })).toHaveAttribute(
    'rel',
    'noreferrer',
  )
  expect(
    screen.getByRole('link', { name: 'Политика конфиденциальности' }),
  ).toHaveAttribute('href', '/privacy/')
  expect(
    screen.getByRole('link', { name: 'Условия использования' }),
  ).toHaveAttribute('href', '/terms/')
  expect(screen.getByRole('link', { name: /СКАЧАТЬ РЕЗЮМЕ/ })).toHaveAttribute(
    'download',
  )
  expect(screen.getByRole('link', { name: /Образование/ })).toHaveAttribute(
    'href',
    '#education',
  )
})
