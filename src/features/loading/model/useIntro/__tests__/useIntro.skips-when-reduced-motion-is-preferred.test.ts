import { act, renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useIntro } from '../useIntro'

vi.mock('motion/react', () => ({ useReducedMotion: () => true }))

it('is immediately ready and does not schedule completion when reduced motion is preferred', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useIntro(250))

  expect(result.current).toBe(false)
  act(() => vi.advanceTimersByTime(250))
  expect(result.current).toBe(false)
  expect(sessionStorage.getItem('df-intro-seen')).toBeNull()
  vi.useRealTimers()
})
