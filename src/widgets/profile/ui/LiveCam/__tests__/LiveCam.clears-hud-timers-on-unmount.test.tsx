import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('clears every active HUD timer on unmount', async () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container, unmount } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )

  act(() => observer.emit(true))
  fireEvent.canPlay(container.querySelector('video') as HTMLVideoElement)
  await act(async () => {
    vi.advanceTimersByTime(2000)
    await Promise.resolve()
  })

  expect(vi.getTimerCount()).toBeGreaterThan(0)

  unmount()

  expect(vi.getTimerCount()).toBe(0)
})
