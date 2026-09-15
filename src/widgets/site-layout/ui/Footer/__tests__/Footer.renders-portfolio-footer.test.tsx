import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { Footer } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(async () => {
  await changeLanguage('ru')
})
it('renders portfolio footer', async () => {
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
  await userEvent.click(screen.getByRole('button', { name: /СКАЧАТЬ РЕЗЮМЕ/ }))
  expect(screen.getByRole('dialog', { name: 'Выберите резюме' })).toBeVisible()
  await userEvent.click(
    screen.getByRole('button', { name: 'Закрыть выбор резюме' }),
  )
  expect(screen.getByRole('link', { name: /Образование/ })).toHaveAttribute(
    'href',
    '#education',
  )
  expect(document.querySelector('.site-footer-bottom')).not.toBeInTheDocument()
})
