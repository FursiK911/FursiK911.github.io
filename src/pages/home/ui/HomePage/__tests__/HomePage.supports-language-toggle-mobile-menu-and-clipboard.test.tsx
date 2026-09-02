import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { HomePage } from '@/pages/home'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/render'
beforeEach(() => sessionStorage.clear())
async function renderReadyApp() {
  renderWithProviders(<HomePage />)
  const video = document.querySelector('video')
  if (video) fireEvent.canPlay(video)
  await waitFor(() =>
    expect(
      screen.getByRole('button', { name: /SKIP|ПРОПУСТИТЬ/i }),
    ).toBeVisible(),
  )
  fireEvent.keyDown(document, { key: ' ' })
  await waitFor(() =>
    expect(
      screen.getByRole('heading', { name: /DMITRY FURSOV/i }),
    ).toBeInTheDocument(),
  )
}
it('supports language toggle, mobile menu and clipboard', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const writeText = vi
    .spyOn(navigator.clipboard, 'writeText')
    .mockResolvedValue(undefined)
  await renderReadyApp()
  await user.click(screen.getByRole('button', { name: 'Change language' }))
  expect(screen.getByRole('heading', { name: /ПРИВЕТ, Я/ })).toBeVisible()
  await user.click(screen.getByRole('button', { name: /menu/i }))
  expect(
    screen.getByRole('navigation', { name: 'Primary navigation' }),
  ).toHaveClass('is-open')
  await user.click(screen.getByRole('button', { name: /КОПИРОВАТЬ EMAIL/i }))
  expect(writeText).toHaveBeenCalledWith('19fursik99@gmail.com')
}, 10000)
