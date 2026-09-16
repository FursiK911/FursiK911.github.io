import { fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { HudScrollIndicator } from '../HudScrollIndicator'

it('updates progress while dragging and releases pointer capture on completion and cancellation', async () => {
  await changeLanguage('en')
  Object.defineProperties(document.documentElement, {
    clientHeight: { configurable: true, value: 800 },
    scrollHeight: { configurable: true, value: 1600 },
  })
  vi.stubGlobal('matchMedia', () => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  const { container } = renderWithProviders(
    <HudScrollIndicator sectionLabel="STACK" />,
  )
  const control = screen.getByRole('scrollbar')
  vi.spyOn(control, 'getBoundingClientRect').mockReturnValue({
    top: 0,
    height: 200,
    bottom: 200,
    left: 0,
    right: 50,
    width: 50,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  })
  control.setPointerCapture = vi.fn()
  control.releasePointerCapture = vi.fn()
  control.hasPointerCapture = vi.fn(() => true)

  fireEvent.pointerDown(control, { pointerId: 1, clientY: 100 })
  fireEvent.pointerMove(control, { pointerId: 1, clientY: 150 })
  fireEvent.pointerUp(control, { pointerId: 1, clientY: 150 })
  fireEvent.click(control, { clientY: 150 })
  fireEvent.pointerDown(control, { pointerId: 2, clientY: 100 })
  fireEvent.pointerCancel(control, { pointerId: 2, clientY: 100 })

  expect(control.setPointerCapture).toHaveBeenCalled()
  expect(control.releasePointerCapture).toHaveBeenCalled()
  expect(container.querySelector('.hud-scroll-indicator')).toHaveAttribute(
    'data-disabled',
    'false',
  )
})
