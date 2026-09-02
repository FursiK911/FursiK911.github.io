import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})

it('renders navigation and toggles mobile menu', async () => {
  const user = userEvent.setup()
  await changeLanguage('ru')
  renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  await user.click(screen.getByRole('button', { name: /menu/i }))
  expect(screen.getByRole('navigation')).toHaveClass('is-open')
  expect(screen.queryByText('DF')).not.toBeInTheDocument()
  expect(screen.getByText('Unity Developer')).toBeVisible()
  expect(screen.getByText('Дмитрий Фурсов')).toBeVisible()
  expect(screen.getByRole('navigation').querySelectorAll('a')).toHaveLength(6)
  expect(screen.getByRole('link', { name: /Профиль/ })).toHaveAttribute(
    'href',
    '#top',
  )
  expect(screen.queryByText('Обо мне')).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Образование/ })).toHaveAttribute(
    'href',
    '#education',
  )
  expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument()
  expect(
    screen.queryByRole('link', { name: 'Telegram' }),
  ).not.toBeInTheDocument()

  const brand = screen.getByRole('link', {
    name: /Главная — Дмитрий Фурсов/,
  })
  expect(brand.querySelector('small')).toHaveTextContent('Дмитрий Фурсов')
  expect(brand.querySelector('.typing-text')).toBeInTheDocument()
})

it('adds the scrolled state after passing the scroll threshold', async () => {
  await changeLanguage('ru')
  renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )

  const header = screen.getByRole('banner')
  expect(header).not.toHaveClass('is-scrolled')

  act(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 9 })
    window.dispatchEvent(new Event('scroll'))
  })
  expect(header).toHaveClass('is-scrolled')

  act(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    window.dispatchEvent(new Event('scroll'))
  })
  expect(header).not.toHaveClass('is-scrolled')
})

it('renders a localized downloadable resume link', async () => {
  await changeLanguage('ru')
  const { rerender } = renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )

  const resumeLink = screen.getByRole('link', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveAttribute(
    'href',
    '/cv/Dmitry-Fursov-Unity-Developer-CV.pdf',
  )
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink).toHaveClass(
    'action-control',
    'action-control--primary',
    'resume-link',
  )
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

  await changeLanguage('en')
  rerender(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  expect(screen.getByRole('link', { name: 'DOWNLOAD CV' })).toBeInTheDocument()
})
