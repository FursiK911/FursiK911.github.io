import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
beforeEach(() => sessionStorage.clear())
it('falls back when video does not become ready in time', () => {
  vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  const { result } = renderHook(() => useLoadingSequence('QUERY'))
  act(() => vi.advanceTimersByTime(3000))
  expect(result.current.videoFallback).toBe(true)
  expect(result.current.allReady).toBe(true)
  vi.useRealTimers()
})
