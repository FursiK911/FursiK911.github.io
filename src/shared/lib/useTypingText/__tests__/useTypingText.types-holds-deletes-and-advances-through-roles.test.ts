import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useTypingText } from '../useTypingText'
beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())
it('types, holds, deletes and advances through roles', () => {
  const { result } = renderHook(() => useTypingText(['One', 'Two'], 'en'))
  expect(result.current.displayText).toBe('')
  act(() => vi.advanceTimersByTime(90))
  act(() => vi.advanceTimersByTime(90))
  act(() => vi.advanceTimersByTime(90))
  act(() => vi.advanceTimersByTime(90))
  expect(result.current.displayText).toBe('One')
  act(() => vi.advanceTimersByTime(800))
  act(() => vi.advanceTimersByTime(45))
  act(() => vi.advanceTimersByTime(45))
  act(() => vi.advanceTimersByTime(45))
  act(() => vi.advanceTimersByTime(45))
  act(() => vi.advanceTimersByTime(45))
  expect(result.current.displayText).toBe('')
  act(() => vi.advanceTimersByTime(90))
  expect(result.current.displayText).toBe('T')
})
