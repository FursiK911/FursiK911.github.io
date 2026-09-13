import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from '../Projects'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('resets the technology selection when the direction changes', async () => {
  const user = userEvent.setup()
  await changeLanguage('en')
  renderWithProviders(<Projects />)
  await user.click(screen.getByRole('button', { name: 'Unity' }))
  expect(screen.getByRole('button', { name: 'Unity' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await user.click(screen.getByRole('button', { name: /Web platforms\s*2/ }))
  expect(
    screen.getByRole('button', { name: 'All technologies' }),
  ).toHaveAttribute('aria-pressed', 'true')
  expect(
    screen.queryByRole('button', { name: 'Unity' }),
  ).not.toBeInTheDocument()
})
