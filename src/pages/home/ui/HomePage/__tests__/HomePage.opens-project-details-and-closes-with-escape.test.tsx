import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
it('opens project details and closes with Escape', async () => {
  await changeLanguage('en')
  await renderReadyApp()
  await userEvent.click(
    screen.getByRole('button', { name: /VIEW PROJECT — MyChessVR/i }),
  )
  expect(screen.getByRole('dialog')).toBeVisible()
  await userEvent.keyboard('{Escape}')
  await waitFor(() =>
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
  )
}, 10000)
