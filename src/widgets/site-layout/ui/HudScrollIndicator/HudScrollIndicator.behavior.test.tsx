import { act, fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { HudScrollIndicator } from './HudScrollIndicator'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('smoothly updates the wave and uses instant pointer and keyboard scrolling', async () => {
  await changeLanguage('ru')
  Object.defineProperties(document.documentElement, {
    clientHeight: { configurable: true, value: 800 },
    scrollHeight: { configurable: true, value: 2000 },
  })
  const scrollTo = vi.fn()
  Object.defineProperty(window, 'scrollTo', {
    configurable: true,
    value: scrollTo,
  })
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    value: 800,
  })
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value: 0,
    writable: true,
  })
  const frames: FrameRequestCallback[] = []
  vi.stubGlobal('matchMedia', () => ({
    addEventListener: vi.fn(),
    matches: true,
    removeEventListener: vi.fn(),
  }))
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.push(callback)
    return frames.length
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())

  const { container } = renderWithProviders(
    <HudScrollIndicator sectionLabel="ПРОЕКТЫ" />,
  )

  const control = screen.getByRole('scrollbar', {
    name: 'Индикатор прокрутки страницы',
  })
  vi.spyOn(control, 'getBoundingClientRect').mockReturnValue({
    bottom: 210,
    height: 210,
    left: 0,
    right: 64,
    toJSON: () => ({}),
    top: 0,
    width: 64,
    x: 0,
    y: 0,
  })

  fireEvent.click(control, { clientY: 105 })
  fireEvent.keyDown(control, { key: 'End' })

  const segments = container.querySelectorAll('.hud-scroll-indicator__segment')
  expect(segments[0]).toHaveStyle('--hud-segment-scale: 1')
  expect(segments[1]).toHaveStyle('--hud-segment-scale: 0.8333333333333334')
  expect(screen.getByText('000%')).toBeVisible()
  expect(control).toHaveAttribute('aria-valuenow', '0')

  window.scrollY = 1200
  fireEvent.scroll(window)
  await act(async () => {
    for (const time of [0, 60, 120, 180, 240, 300, 360, 420, 480, 540]) {
      const frame = frames.shift()
      frame?.(time)
    }
  })

  expect(segments[29]).toHaveStyle('--hud-segment-scale: 1')
  expect(segments[28].getAttribute('style')).toContain('--hud-segment-scale')
  expect(screen.getByText('100%')).toBeVisible()
  expect(screen.getByText('ПРОЕКТЫ')).toBeVisible()
  expect(control).toHaveAttribute('aria-valuenow', '100')
  expect(scrollTo).toHaveBeenNthCalledWith(1, {
    behavior: 'instant',
    top: 600,
  })
  expect(scrollTo).toHaveBeenLastCalledWith({ behavior: 'instant', top: 1200 })
})
