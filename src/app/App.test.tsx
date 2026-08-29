import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from './App'
import { changeLanguage } from '../i18n'
import { renderWithProviders } from '../test/render'

describe('portfolio app', () => {
  beforeEach(() => sessionStorage.clear())

  async function renderReadyApp() {
    renderWithProviders(<App />)
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
      ).toBeVisible(),
    )
  }
  it('renders the hero and filters projects', async () => {
    await changeLanguage('en')
    await renderReadyApp()
    expect(
      screen.getByRole('heading', { name: /DMITRY FURSOV/i }),
    ).toBeVisible()
    await userEvent.click(screen.getByRole('button', { name: 'WEB' }))
    expect(screen.getByRole('heading', { name: 'myChess' })).toBeVisible()
    expect(
      screen.queryByRole('heading', { name: 'MyChessVR' }),
    ).not.toBeInTheDocument()
  })
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
  })
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
    expect(screen.getByRole('navigation')).toHaveClass('is-open')
    await user.click(screen.getByRole('button', { name: /КОПИРОВАТЬ EMAIL/i }))
    expect(writeText).toHaveBeenCalledWith('fursik911@yandex.com')
  })
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
  })
})
