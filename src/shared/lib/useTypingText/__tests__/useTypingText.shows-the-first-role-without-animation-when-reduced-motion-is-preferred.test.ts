import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useTypingText } from '../useTypingText'
beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())
it('shows the first role without animation when reduced motion is preferred', () => {
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
  const { result } = renderHook(() => useTypingText(['Unity Developer'], 'en'))
  expect(result.current.displayText).toBe('Unity Developer')
  expect(result.current.reducedMotion).toBe(true)
})
