import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('hides the HUD and keeps the retry countdown in the camera status after a video error', () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(
    () => undefined,
  )
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement

  act(() => observer.emit(true))
  fireEvent.error(video)

  expect(
    container.querySelector('[data-live-cam-tracker]'),
  ).not.toBeInTheDocument()
  expect(
    container.querySelector('[data-live-cam-terminal]'),
  ).not.toBeInTheDocument()
  expect(container.querySelector('[role="status"]')).toHaveTextContent(
    'RETRY IN 5S',
  )

  act(() => vi.advanceTimersByTime(1000))

  expect(container.querySelector('[role="status"]')).toHaveTextContent(
    'RETRY IN 4S',
  )
})
