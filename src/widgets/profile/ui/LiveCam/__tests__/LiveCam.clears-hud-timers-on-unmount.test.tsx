import { act } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('clears every active HUD timer on unmount', () => {
  vi.useFakeTimers()
  const observer = installIntersectionObserverMock()
  const { unmount } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )

  act(() => observer.emit(true))

  expect(vi.getTimerCount()).toBeGreaterThan(0)

  unmount()

  expect(vi.getTimerCount()).toBe(0)
})
