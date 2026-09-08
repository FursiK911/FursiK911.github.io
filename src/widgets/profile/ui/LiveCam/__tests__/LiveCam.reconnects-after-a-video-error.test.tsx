import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('reconnects after a video error', () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(
    () => undefined,
  )
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const camera = container.querySelector('[data-live-cam-status]')
  const video = container.querySelector('video') as HTMLVideoElement

  act(() => observer.emit(true))
  fireEvent.error(video)

  expect(camera).toHaveAttribute('data-live-cam-status', 'signal-lost')

  act(() => vi.advanceTimersByTime(5000))

  expect(camera).toHaveAttribute('data-live-cam-status', 'connecting')
  expect(container.querySelector('video')).toHaveAttribute(
    'src',
    '/videos/live_cam_loop.webm',
  )
})
