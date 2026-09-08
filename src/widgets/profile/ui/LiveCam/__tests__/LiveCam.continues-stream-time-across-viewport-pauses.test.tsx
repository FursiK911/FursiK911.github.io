import { act } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('continues the stream time by wall clock after a viewport pause', () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const streamTime = container.querySelector('[data-live-cam-stream-time]')

  act(() => observer.emit(true))

  expect(streamTime).toHaveTextContent('00:15:00')

  act(() => vi.advanceTimersByTime(1000))

  expect(streamTime).toHaveTextContent('00:15:01')

  act(() => observer.emit(false))
  act(() => vi.advanceTimersByTime(5000))

  expect(streamTime).toHaveTextContent('00:15:01')

  act(() => observer.emit(true))

  expect(streamTime).toHaveTextContent('00:15:06')
})
