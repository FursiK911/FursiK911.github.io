import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from './useLoadingSequence'

beforeEach(() => sessionStorage.clear())

it('waits for video readiness before starting the sequence', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() =>
    useLoadingSequence('Find the best developer'),
  )
  expect(result.current.phase).toBe('initializing')
  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(400))
  expect(result.current.phase).toBe('typing')
  vi.useRealTimers()
})

it('skips only after the page is ready', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('initializing')
  act(() => result.current.notifyVideo(false))
  act(() => result.current.skip())
  expect(result.current.phase).toBe('exiting')
  vi.useRealTimers()
})

it('falls back when video does not become ready in time', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => vi.advanceTimersByTime(3000))
  expect(result.current.videoFallback).toBe(true)
  expect(result.current.allReady).toBe(true)
  vi.useRealTimers()
})

it('runs the candidate stream and persists completion', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => result.current.notifyVideo(true))
  act(() => vi.advanceTimersByTime(9000))
  expect(result.current.candidates).toHaveLength(10)
  expect(result.current.resultVisible).toBe(true)
  expect(result.current.phase).toBe('exiting')
  act(() => result.current.complete())
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  expect(result.current.phase).toBe('complete')
  vi.useRealTimers()
})
