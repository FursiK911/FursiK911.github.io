import { renderHook } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { useScrollReveal } from '../useScrollReveal'

vi.mock('motion/react', () => ({
  useReducedMotion: () => true,
  useReducedMotionConfig: () => false,
}))

it('does not hide content when reduced motion is requested', () => {
  const { result } = renderHook(() => useScrollReveal())

  expect(result.current).toEqual({ initial: false })
})
