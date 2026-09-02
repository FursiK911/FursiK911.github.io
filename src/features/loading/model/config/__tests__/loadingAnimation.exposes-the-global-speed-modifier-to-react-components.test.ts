import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'
import {
  getLoadingAnimationSpeed,
  setLoadingAnimationSpeed,
  useLoadingAnimationSpeed,
} from '../loadingAnimation'
beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  setLoadingAnimationSpeed(1)
})
afterEach(() => vi.useRealTimers())
it('exposes the global speed modifier to React components', () => {
  const { result } = renderHook(() => useLoadingAnimationSpeed())
  expect(result.current).toBe(1)
  act(() => setLoadingAnimationSpeed(2))
  expect(result.current).toBe(2)
  expect(getLoadingAnimationSpeed()).toBe(2)
})
