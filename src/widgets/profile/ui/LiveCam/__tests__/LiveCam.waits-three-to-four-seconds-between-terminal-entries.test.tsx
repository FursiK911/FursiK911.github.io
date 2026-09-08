import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { liveCamTerminalConfig } from '../config/liveCamHud.config'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('waits for the configured three-second minimum before starting the next terminal entry', async () => {
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

  const terminal = container.querySelector('[data-live-cam-terminal]')
  const firstEntryLength = '$ sudo systemctl restart media-relay'.length

  await act(async () => {
    await vi.advanceTimersByTimeAsync(
      firstEntryLength * liveCamTerminalConfig.typingMinimumMs,
    )
  })
  await act(async () => {
    await vi.advanceTimersByTimeAsync(liveCamTerminalConfig.pauseMinimumMs - 1)
  })

  expect(terminal?.querySelectorAll('.live-cam-terminal-entry')).toHaveLength(1)

  await act(async () => {
    await vi.advanceTimersByTimeAsync(1)
  })

  expect(terminal?.querySelectorAll('.live-cam-terminal-entry')).toHaveLength(2)
})
