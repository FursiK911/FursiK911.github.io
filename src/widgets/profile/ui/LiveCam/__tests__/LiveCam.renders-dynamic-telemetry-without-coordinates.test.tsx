import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('renders changing stream telemetry without coordinates', async () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(1)
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement
  const telemetry = container.querySelector('[data-live-cam-telemetry]')

  act(() => observer.emit(true))
  fireEvent.canPlay(video)
  await act(async () => {
    vi.advanceTimersByTime(2000)
    await Promise.resolve()
  })

  expect(telemetry).toHaveTextContent('SIGNAL:62.5%')
  expect(telemetry).toHaveTextContent('UPLINK:6 MB/S')
  expect(telemetry).toHaveTextContent('LATENCY:155 MS')
  expect(telemetry).toHaveTextContent('FPS:24.5')
  expect(telemetry).not.toHaveTextContent('COORD')

  act(() => vi.advanceTimersByTime(650))

  expect(telemetry).toHaveTextContent('SIGNAL:63.2%')
  expect(telemetry).toHaveTextContent('UPLINK:6.4 MB/S')
  expect(telemetry).toHaveTextContent('LATENCY:169 MS')
  expect(telemetry).toHaveTextContent('FPS:24.8')
})
