import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
beforeEach(() => sessionStorage.clear())
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
