import '@testing-library/jest-dom/vitest'
import React from 'react'
import { vi } from 'vitest'

vi.mock('@number-flow/react', () => ({
  default: ({
    value,
    suffix = '',
    className,
  }: {
    value: number
    suffix?: string
    className?: string
  }) =>
    React.createElement(
      'span',
      { className, 'data-testid': 'number-flow' },
      `${value}${suffix}`,
    ),
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

if (!('IntersectionObserver' in window)) {
  class IntersectionObserverStub {
    observe() {}

    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    value: IntersectionObserverStub,
  })
}
