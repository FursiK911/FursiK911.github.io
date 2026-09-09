import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { liveCamHudConfig } from '../config/liveCamHud.config'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('cycles tracker visibility after hidden pauses', async () => {
  vi.useFakeTimers()
  vi.spyOn(Math, 'random').mockReturnValue(0)
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement

  act(() => observer.emit(true))
  fireEvent.canPlay(video)
  await act(async () => {
    vi.advanceTimersByTime(2000)
    await Promise.resolve()
  })

  const tracker = container.querySelector('[data-live-cam-tracker-visible]')

  expect(tracker).toHaveAttribute('data-live-cam-tracker-visible', 'false')

  act(() => vi.advanceTimersByTime(liveCamHudConfig.trackerHiddenMinimumMs))

  expect(tracker).toHaveAttribute('data-live-cam-tracker-visible', 'true')

  act(() => vi.advanceTimersByTime(liveCamHudConfig.trackerVisibleDurationMs))

  expect(tracker).toHaveAttribute('data-live-cam-tracker-visible', 'false')

  act(() =>
    vi.advanceTimersByTime(
      liveCamHudConfig.trackerFadeDurationMs +
        liveCamHudConfig.trackerHiddenMinimumMs -
        1,
    ),
  )

  expect(tracker).toHaveAttribute('data-live-cam-tracker-visible', 'false')

  act(() => vi.advanceTimersByTime(1))

  expect(tracker).toHaveAttribute('data-live-cam-tracker-visible', 'true')
})
