import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from './useLoadingSequence'

beforeEach(() => sessionStorage.clear())

it('waits for video readiness before starting the sequence', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  const { result } = renderHook(() =>
    useLoadingSequence('Find the best developer'),
  )
  expect(result.current.phase).toBe('initializing')
  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(800))
  expect(result.current.phase).toBe('typing')
  vi.useRealTimers()
})

it('skips only after the page is ready', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('initializing')
  act(() => result.current.notifyVideo(false))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('exiting')
  vi.useRealTimers()
})

it('falls back when video does not become ready in time', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => vi.advanceTimersByTime(3000))
  expect(result.current.videoFallback).toBe(true)
  expect(result.current.allReady).toBe(true)
  vi.useRealTimers()
})

it('runs the candidate stream and persists completion', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(30000))
  expect(result.current.candidates).toHaveLength(10)
  expect(result.current.resultVisible).toBe(true)
  expect(result.current.phase).toBe('exiting')
  act(() => result.current.complete())
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  expect(result.current.phase).toBe('complete')
  vi.useRealTimers()
})

it('adds Dmitry as searching, verifies him, then opens the result modal', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.notifyVideo(true))

  act(() => vi.advanceTimersByTime(7000))
  expect(result.current.candidates).toHaveLength(9)

  act(() => vi.advanceTimersByTime(1000))
  expect(result.current.candidates).toHaveLength(10)
  expect(result.current.candidates.at(-1)).toMatchObject({
    name: 'DMITRY FURSOV',
    status: 'searching',
  })
  expect(result.current.resultVisible).toBe(false)

  act(() => vi.advanceTimersByTime(1100))
  expect(result.current.candidates.at(-1)?.status).toBe('matched')
  expect(result.current.resultVisible).toBe(false)

  act(() => vi.advanceTimersByTime(800))
  expect(result.current.resultVisible).toBe(true)
  vi.useRealTimers()
})

it('dims rejected candidates after a short visible failed state', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  vi.spyOn(Math, 'random').mockReturnValue(0)
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(4600))

  const rejected = result.current.candidates.find(
    (candidate) => candidate.status === 'rejected',
  )
  expect(rejected).toBeDefined()
  expect(rejected?.dimmed).toBeUndefined()

  act(() => vi.advanceTimersByTime(299))
  expect(
    result.current.candidates.find((candidate) => candidate.id === rejected?.id)
      ?.dimmed,
  ).toBeUndefined()
  act(() => vi.advanceTimersByTime(200))
  expect(
    result.current.candidates.find((candidate) => candidate.id === rejected?.id)
      ?.dimmed,
  ).toBe(true)
  vi.useRealTimers()
})
