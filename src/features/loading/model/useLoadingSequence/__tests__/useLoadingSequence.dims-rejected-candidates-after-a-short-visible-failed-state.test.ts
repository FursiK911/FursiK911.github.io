import { act, renderHook } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'
beforeEach(() => sessionStorage.clear())
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
