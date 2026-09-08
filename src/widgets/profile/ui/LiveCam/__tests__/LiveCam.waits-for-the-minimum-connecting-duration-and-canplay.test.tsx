import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('waits for the minimum connecting duration and canplay', async () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const camera = container.querySelector('[data-live-cam-status]')
  const video = container.querySelector('video')

  act(() => observer.emit(true))
  fireEvent.canPlay(video as HTMLVideoElement)
  act(() => vi.advanceTimersByTime(1999))

  expect(camera).toHaveAttribute('data-live-cam-status', 'connecting')

  await act(async () => {
    vi.advanceTimersByTime(1)
    await Promise.resolve()
  })

  expect(camera).toHaveAttribute('data-live-cam-status', 'live')
})
