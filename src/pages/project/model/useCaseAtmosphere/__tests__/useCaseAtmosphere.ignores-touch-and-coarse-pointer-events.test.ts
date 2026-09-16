import { act, renderHook } from '@testing-library/react'
import { useCaseAtmosphere } from '../useCaseAtmosphere'

vi.mock('motion/react', async (importOriginal) => ({
  ...(await importOriginal<typeof import('motion/react')>()),
  useReducedMotion: () => false,
}))

it('updates the atmosphere only for fine non-touch pointers and exposes reduced state', () => {
  const fine = {
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }
  const matchMedia = vi.fn(() => fine)
  vi.stubGlobal('matchMedia', matchMedia)
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    value: 1000,
  })
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    value: 800,
  })
  const { result, unmount } = renderHook(() => useCaseAtmosphere())

  act(() => {
    const touch = new Event('pointermove') as PointerEvent
    Object.assign(touch, { pointerType: 'touch', clientX: 900, clientY: 700 })
    const mouse = new Event('pointermove') as PointerEvent
    Object.assign(mouse, { pointerType: 'mouse', clientX: 900, clientY: 700 })
    window.dispatchEvent(touch)
    window.dispatchEvent(mouse)
    const coarsePointer = new Event('pointermove') as PointerEvent
    Object.assign(coarsePointer, {
      pointerType: 'mouse',
      clientX: 100,
      clientY: 100,
    })
    fine.matches = false
    window.dispatchEvent(coarsePointer)
  })
  expect(result.current.x.get()).toBe(48)
  expect(result.current.y.get()).toBe(30)
  unmount()
})
