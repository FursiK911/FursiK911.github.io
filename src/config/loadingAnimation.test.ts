import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'
import {
  getLoadingAnimationSpeed,
  scheduleLoadingAnimation,
  setLoadingAnimationSpeed,
  useLoadingAnimationSpeed,
} from './loadingAnimation'

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  setLoadingAnimationSpeed(1)
})

afterEach(() => vi.useRealTimers())

it('pauses and resumes a scheduled animation timer', () => {
  const callback = vi.fn()
  scheduleLoadingAnimation(callback, 1000)
  act(() => vi.advanceTimersByTime(400))
  setLoadingAnimationSpeed(0)
  act(() => vi.advanceTimersByTime(2000))
  expect(callback).not.toHaveBeenCalled()
  setLoadingAnimationSpeed(1)
  act(() => vi.advanceTimersByTime(601))
  expect(callback).toHaveBeenCalledOnce()
})

it('exposes the global speed modifier to React components', () => {
  const { result } = renderHook(() => useLoadingAnimationSpeed())
  expect(result.current).toBe(1)
  act(() => setLoadingAnimationSpeed(2))
  expect(result.current).toBe(2)
  expect(getLoadingAnimationSpeed()).toBe(2)
})
