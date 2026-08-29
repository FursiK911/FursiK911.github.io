import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useTypingText } from './useTypingText'

describe('useTypingText', () => {
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

  it('shows the first role without animation when reduced motion is preferred', () => {
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    const { result } = renderHook(() =>
      useTypingText(['Unity Developer'], 'en'),
    )
    expect(result.current.displayText).toBe('Unity Developer')
    expect(result.current.reducedMotion).toBe(true)
  })
})
