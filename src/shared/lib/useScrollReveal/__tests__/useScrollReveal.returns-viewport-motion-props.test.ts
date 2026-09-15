import { renderHook } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { useScrollReveal } from '../useScrollReveal'

vi.mock('motion/react', () => ({
  useReducedMotion: () => false,
  useReducedMotionConfig: () => false,
}))

it('returns one-time viewport motion props with the requested delay', () => {
  const { result } = renderHook(() => useScrollReveal({ delay: 0.12 }))

  expect(result.current).toMatchObject({
    initial: { opacity: 0, y: 16 },
    transition: { delay: 0.12, duration: 0.35, ease: 'easeOut' },
    viewport: { amount: 0.15, once: true },
    whileInView: { opacity: 1, y: 0 },
  })
})
