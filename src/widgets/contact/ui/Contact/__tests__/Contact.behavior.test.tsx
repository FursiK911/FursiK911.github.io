import { screen } from '@testing-library/react'
import { Contact } from '../Contact'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders contact actions', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Contact reducedMotion />)
  expect(
    screen.queryByRole('heading', { name: /СОЗДАДИМ ЧТО-НИБУДЬ ВМЕСТЕ/i }),
  ).not.toBeInTheDocument()
  expect(screen.getByRole('img', { name: /Дмитрий Фурсов/i })).toBeVisible()
  expect(screen.getByText('PROFILE_IMAGE // 001')).toBeVisible()
  const quote = screen.getByRole('blockquote')
  expect(quote).toBeVisible()
  expect(quote).toHaveClass('contact-quote')
  expect(quote.closest('.portrait-frame')).toBeInTheDocument()
  const emailLink = screen.getByRole('link', { name: /19fursik99@gmail.com/ })
  const telegramLink = screen.getByRole('link', { name: /@FursiK911/ })
  expect(emailLink).toBeVisible()
  expect(telegramLink).toBeVisible()
  expect(emailLink.querySelector('svg')).toHaveClass('tabler-icon-mail')
  expect(emailLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  expect(telegramLink.querySelector('svg')).toHaveClass(
    'tabler-icon-brand-telegram',
  )
  expect(telegramLink.querySelector('svg')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
  const resumeLink = screen.getByRole('link', {
    name: 'Скачать Unity Developer в PDF',
  })
  expect(resumeLink).toHaveClass('action-control', 'action-control--primary')
  expect(resumeLink).toHaveAttribute(
    'href',
    '/cv/Dmitry-Fursov-Unity-Developer-RU.pdf',
  )
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
})
