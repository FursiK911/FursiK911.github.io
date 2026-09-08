import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('keeps no more than six completed terminal lines without timestamps', async () => {
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
  await act(async () => {
    await vi.advanceTimersByTimeAsync(20000)
  })

  const terminal = container.querySelector('[data-live-cam-terminal]')
  const completed = terminal?.querySelectorAll(
    '[data-terminal-severity], .live-cam-terminal-entry:not([data-terminal-active])',
  )

  expect(completed?.length).toBeLessThanOrEqual(6)
  expect(terminal).not.toHaveTextContent('00:')
  expect(terminal).toHaveTextContent('PS>')
})
