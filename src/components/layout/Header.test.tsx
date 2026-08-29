import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

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
})
