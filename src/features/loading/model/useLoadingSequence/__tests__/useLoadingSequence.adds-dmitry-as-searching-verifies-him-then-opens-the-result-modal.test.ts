import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
beforeEach(() => sessionStorage.clear())
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
