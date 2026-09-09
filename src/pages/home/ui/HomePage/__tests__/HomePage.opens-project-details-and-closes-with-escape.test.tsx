import { fireEvent, screen, waitFor } from '@testing-library/react'
import { HomePage } from '@/pages/home'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
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
it('links project cards to their full cases', async () => {
  await changeLanguage('en')
  await renderReadyApp()
  expect(screen.getByRole('link', { name: /MyChessVR/i })).toHaveAttribute(
    'href',
    '/projects/mychessvr',
  )
}, 10000)
