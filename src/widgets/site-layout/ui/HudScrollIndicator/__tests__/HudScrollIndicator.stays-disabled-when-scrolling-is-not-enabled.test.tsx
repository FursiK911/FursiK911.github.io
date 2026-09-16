import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { HudScrollIndicator } from '../HudScrollIndicator'

it('stays disabled and cleans up its document state when scrolling is not enabled', async () => {
  await changeLanguage('en')
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))

  const { unmount } = renderWithProviders(
    <HudScrollIndicator enabled={false} sectionLabel="STACK" />,
  )
  const control = screen.getByRole('scrollbar', { hidden: true })

  expect(control).toBeDisabled()
  expect(control).toHaveAttribute('aria-disabled', 'true')
  expect(document.documentElement).toHaveClass('has-hud-scroll-indicator')

  unmount()
  expect(document.documentElement).not.toHaveClass('has-hud-scroll-indicator')
})
