import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
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
