import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
it('renders the hero and filters projects', async () => {
  await changeLanguage('en')
  await renderReadyApp()
  expect(
    screen.getByRole('heading', { name: /DMITRY FURSOV/i }),
  ).toBeInTheDocument()
  expect(
    Array.from(document.querySelectorAll('main > section')).map(
      (section) => section.id,
    ),
  ).toEqual(['top', 'projects', 'experience', 'stack', 'education', 'contact'])
  await userEvent.click(
    screen.getByRole('button', { name: /Web platforms\s*2/ }),
  )
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeVisible()
  await waitFor(() =>
    expect(
      screen.queryByRole('heading', { name: 'MyChessVR' }),
    ).not.toBeInTheDocument(),
  )
}, 10000)
