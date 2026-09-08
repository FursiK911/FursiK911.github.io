import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('types terminal commands with varied per-character delays and a visible caret', async () => {
  vi.useFakeTimers()
  const random = vi.spyOn(Math, 'random').mockReturnValue(0)
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

  expect(terminal).toHaveTextContent('|')
  expect(terminal).not.toHaveTextContent('systemctl')

  await act(async () => {
    await vi.advanceTimersByTimeAsync(47)
  })

  expect(terminal).toHaveTextContent('|')

  random.mockReturnValue(1)
  await act(async () => {
    await vi.advanceTimersByTimeAsync(1)
  })

  expect(terminal).toHaveTextContent('$|')

  await act(async () => {
    await vi.advanceTimersByTimeAsync(83)
  })

  expect(terminal).toHaveTextContent('$|')

  await act(async () => {
    await vi.advanceTimersByTimeAsync(1)
  })

  expect(terminal).toHaveTextContent('$ |')
  expect(
    terminal?.querySelector('[data-terminal-tone="keyword"]'),
  ).not.toBeInTheDocument()
  expect(random.mock.calls.length).toBeGreaterThanOrEqual(3)
})
