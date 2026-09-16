import { renderHook } from '@testing-library/react'
import { useCaseAtmosphere } from '../useCaseAtmosphere'

vi.mock('motion/react', async (importOriginal) => ({
  ...(await importOriginal<typeof import('motion/react')>()),
  useReducedMotion: () => true,
}))

it('disables pointer listeners and drift when reduced motion is preferred', () => {
  const addEventListener = vi.spyOn(window, 'addEventListener')
  const { result } = renderHook(() => useCaseAtmosphere())

  expect(result.current.reduced).toBe(true)
  expect(result.current.drift.get()).toBe(0)
  expect(addEventListener).not.toHaveBeenCalledWith(
    'pointermove',
    expect.any(Function),
    expect.anything(),
  )
})
