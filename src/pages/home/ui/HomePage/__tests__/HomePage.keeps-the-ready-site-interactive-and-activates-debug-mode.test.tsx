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
it('keeps the ready site interactive and activates debug mode', async () => {
  await changeLanguage('en')
  await renderReadyApp()
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  for (const key of [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ])
    fireEvent.keyDown(document, { key })
  expect(screen.getByText('DEBUG MODE')).toBeVisible()
  await userEvent.click(screen.getByRole('button', { name: '×' }))
  expect(screen.queryByText('DEBUG MODE')).not.toBeInTheDocument()
}, 10000)
