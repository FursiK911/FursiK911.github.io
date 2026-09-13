import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from '../Projects'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('filters projects by direction', async () => {
  const user = userEvent.setup()
  await changeLanguage('ru')
  renderWithProviders(<Projects />)
  await user.click(screen.getByRole('button', { name: /Веб-платформы\s*2/ }))
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeVisible()
})
