import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
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
