import { screen } from '@testing-library/react'
import { Footer } from './Footer'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

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
})

it('localizes footer labels in English', async () => {
  const { rerender } = renderWithProviders(<Footer />)
  await changeLanguage('en')
  rerender(<Footer />)
  expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeVisible()
  expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeVisible()
})
