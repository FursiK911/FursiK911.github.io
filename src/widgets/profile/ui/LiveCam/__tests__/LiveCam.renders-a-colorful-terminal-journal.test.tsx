import { act, fireEvent } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

it('keeps eight terminal entries with every severity in the live journal', async () => {
  vi.useFakeTimers()
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement
  const journal = container.querySelector('[data-live-cam-journal]')

  act(() => observer.emit(true))
  fireEvent.canPlay(video)
  await act(async () => {
    vi.advanceTimersByTime(2000)
    await Promise.resolve()
  })
  act(() => vi.advanceTimersByTime(2600))

  expect(journal?.querySelectorAll('[data-journal-severity]')).toHaveLength(8)
  expect(journal).toHaveTextContent('SUCCESS')
  expect(journal).toHaveTextContent('WARNING')
  expect(journal).toHaveTextContent('FAILED')
})
