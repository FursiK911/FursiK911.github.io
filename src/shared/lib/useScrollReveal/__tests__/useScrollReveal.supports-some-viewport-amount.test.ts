import { renderHook } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { useScrollReveal } from '../useScrollReveal'

vi.mock('motion/react', () => ({
  useReducedMotion: () => false,
  useReducedMotionConfig: () => false,
}))

it('passes the some viewport amount through to Motion', () => {
  const { result } = renderHook(() => useScrollReveal({ amount: 'some' }))

  expect(result.current.viewport).toEqual({ amount: 'some', once: true })
})
