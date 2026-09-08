export function installDirectionsIntersectionObserverMock() {
  let callback: IntersectionObserverCallback | undefined

  class IntersectionObserverMock {
    constructor(nextCallback: IntersectionObserverCallback) {
      callback = nextCallback
    }

    disconnect() {}

    observe() {}

    unobserve() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    value: IntersectionObserverMock,
  })

  return {
    trigger(isIntersecting: boolean) {
      callback?.(
        [
          {
            intersectionRatio: isIntersecting ? 0.25 : 0,
            isIntersecting,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    },
  }
}
