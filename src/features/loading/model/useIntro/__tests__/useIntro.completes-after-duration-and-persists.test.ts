import { act, renderHook } from '@testing-library/react'
import { useIntro } from '../useIntro'

it('marks the intro ready after the configured duration and persists completion', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useIntro(250))

  expect(result.current).toBe(false)
  act(() => vi.advanceTimersByTime(249))
  expect(result.current).toBe(false)
  act(() => vi.advanceTimersByTime(1))
  expect(result.current).toBe(true)
  expect(sessionStorage.getItem('df-intro-seen')).toBe('1')
  vi.useRealTimers()
})
