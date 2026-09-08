import { vi } from 'vitest'

export function installIntersectionObserverMock() {
  let callback: IntersectionObserverCallback | undefined
  const disconnect = vi.fn()

  class IntersectionObserverMock {
    constructor(nextCallback: IntersectionObserverCallback) {
      callback = nextCallback
    }

    disconnect = disconnect

    observe = vi.fn()

    unobserve = vi.fn()

    takeRecords = vi.fn(() => [])

    root = null

    rootMargin = '0px'

    thresholds = [0]
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    value: IntersectionObserverMock,
  })

  return {
    disconnect,
    emit(isIntersecting: boolean) {
      callback?.(
        [{ isIntersecting } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    },
  }
}
