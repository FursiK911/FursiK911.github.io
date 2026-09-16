import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { HudScrollIndicator } from '../HudScrollIndicator'

it('supports keyboard page movement and does not render when hidden', async () => {
  await changeLanguage('en')
  Object.defineProperties(document.documentElement, {
    clientHeight: { configurable: true, value: 800 },
    scrollHeight: { configurable: true, value: 1600 },
  })
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    value: 800,
  })
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  vi.stubGlobal('matchMedia', () => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  const scrollTo = vi
    .spyOn(window, 'scrollTo')
    .mockImplementation(() => undefined)

  const { rerender } = renderWithProviders(
    <HudScrollIndicator sectionLabel="STACK" />,
  )
  const control = screen.getByRole('scrollbar')
  fireEvent.keyDown(control, { key: 'ArrowDown' })
  fireEvent.keyDown(control, { key: 'PageDown' })
  fireEvent.keyDown(control, { key: 'Home' })
  fireEvent.keyDown(control, { key: 'End' })
  fireEvent.keyDown(control, { key: 'Escape' })
  expect(scrollTo).toHaveBeenCalled()

  rerender(<HudScrollIndicator sectionLabel="STACK" visible={false} />)
  expect(screen.queryByRole('scrollbar')).not.toBeInTheDocument()
})
