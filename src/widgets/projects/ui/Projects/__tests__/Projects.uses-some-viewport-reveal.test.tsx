import { expect, it, vi } from 'vitest'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

const { useScrollReveal } = vi.hoisted(() => ({
  useScrollReveal: vi.fn(() => ({ initial: false })),
}))

vi.mock('@/shared/lib/useScrollReveal', () => ({
  scrollRevealConfig: { staggerDelay: 0.06 },
  useScrollReveal,
}))

it('uses the some viewport threshold for the projects section', () => {
  renderWithProviders(<Projects />)

  expect(useScrollReveal).toHaveBeenCalledWith({ amount: 'some' })
})
