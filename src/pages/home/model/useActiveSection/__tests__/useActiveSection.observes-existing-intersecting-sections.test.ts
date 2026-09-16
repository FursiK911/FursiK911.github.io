import { act, renderHook } from '@testing-library/react'
import { useActiveSection } from '../useActiveSection'

it('observes only existing section nodes and activates intersecting entries', () => {
  const first = document.createElement('section')
  first.id = 'first'
  document.body.append(first)
  const observe = vi.fn()
  const disconnect = vi.fn()
  let callback: IntersectionObserverCallback | undefined
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(next: IntersectionObserverCallback) {
        callback = next
      }
      observe = observe
      disconnect = disconnect
    },
  )
  const { result, unmount } = renderHook(() =>
    useActiveSection(['first', 'missing'], 'fallback'),
  )

  expect(result.current).toBe('fallback')
  expect(observe).toHaveBeenCalledWith(first)
  act(() =>
    callback?.(
      [
        {
          isIntersecting: false,
          target: first,
        } as unknown as IntersectionObserverEntry,
        {
          isIntersecting: true,
          target: first,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    ),
  )
  expect(result.current).toBe('first')
  unmount()
  expect(disconnect).toHaveBeenCalled()
})
