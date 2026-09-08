import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('shows a lost lock and retry countdown after a video error', () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(
    () => undefined,
  )
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement
  const tracker = container.querySelector('[data-live-cam-tracker]')
  const journal = container.querySelector('[data-live-cam-journal]')

  act(() => observer.emit(true))
  fireEvent.error(video)

  expect(tracker).toHaveTextContent('LOCK LOST')
  expect(journal).toHaveTextContent('SIGNAL LOST')
  expect(journal).toHaveTextContent('RETRY IN 5S')

  act(() => vi.advanceTimersByTime(1000))

  expect(journal).toHaveTextContent('RETRY IN 4S')
})
