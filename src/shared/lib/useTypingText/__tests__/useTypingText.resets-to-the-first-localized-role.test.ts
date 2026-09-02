import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useTypingText } from '../useTypingText'
beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())
it('resets to the first localized role', () => {
  const { result, rerender } = renderHook(
    ({ language }) =>
      useTypingText(['Unity Developer', 'VR Developer'], language),
    { initialProps: { language: 'en' } },
  )
  act(() => vi.advanceTimersByTime(90))
  expect(result.current.displayText).toBe('U')
  rerender({ language: 'ru' })
  expect(result.current.displayText).toBe('')
})
