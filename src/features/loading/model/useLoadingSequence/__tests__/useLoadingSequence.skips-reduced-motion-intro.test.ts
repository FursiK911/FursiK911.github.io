import { renderHook } from '@testing-library/react'
import { beforeEach, expect, it, vi } from 'vitest'
import { useLoadingSequence } from '../useLoadingSequence'

beforeEach(() => sessionStorage.clear())

it('starts on the ready page when reduced motion is preferred', () => {
  vi.mocked(window.matchMedia).mockImplementation((query) => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  }))

  const { result } = renderHook(() => useLoadingSequence('QUERY'))

  expect(result.current.phase).toBe('complete')
  expect(sessionStorage.getItem('df-intro-seen')).toBeNull()
})
