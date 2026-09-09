import { act, renderHook } from '@testing-library/react'
import { useProjectCircuitGame } from '../useProjectCircuitGame'
import { TestProviders } from '@/shared/test/TestProviders/TestProviders'

it('resets the current route and cycles to the next puzzle after a solved route', () => {
  vi.useFakeTimers()
  const { result } = renderHook(() => useProjectCircuitGame(), {
    wrapper: TestProviders,
  })
  const initial = result.current.tiles
  act(() => result.current.rotateTile(1))
  expect(result.current.tiles).not.toEqual(initial)
  act(() => result.current.resetPuzzle())
  expect(result.current.tiles).toEqual(initial)
  act(() => result.current.nextPuzzle())
  expect(result.current.puzzle.id).toBe('b')
  expect(result.current.phase).toBe('playing')
  vi.useRealTimers()
})
