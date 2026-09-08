import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('renders decorative HUD only after the live feed starts', async () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement

  expect(
    container.querySelector('[data-live-cam-terminal]'),
  ).not.toBeInTheDocument()
  expect(
    container.querySelector('[data-live-cam-telemetry]'),
  ).not.toBeInTheDocument()

  act(() => observer.emit(true))
  fireEvent.canPlay(video)

  expect(container.querySelector('[role="status"]')).toHaveTextContent(
    'UPLINK INITIALIZING',
  )
  expect(
    container.querySelector('[data-live-cam-tracker]'),
  ).not.toBeInTheDocument()

  await act(async () => {
    vi.advanceTimersByTime(2000)
    await Promise.resolve()
  })

  expect(
    container.querySelector('[data-live-cam-terminal]'),
  ).toBeInTheDocument()
  expect(
    container.querySelector('[data-live-cam-telemetry]'),
  ).toBeInTheDocument()
  expect(container.querySelector('[data-live-cam-tracker]')).toBeInTheDocument()
})
