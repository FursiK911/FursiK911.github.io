import { afterEach, expect, it } from 'vitest'
import { vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingScreen } from '../LoadingScreen'
const baseProps = {
  allReady: true,
  buttonActive: true,
  candidates: [
    { id: '#ABC123', name: 'ALEXANDER MORGAN', status: 'searching' as const },
  ],
  complete: vi.fn(),
  cursorClicked: false,
  notifyVideo: vi.fn(),
  phase: 'searching' as const,
  queryText: 'Find the best developer for our project',
  resultVisible: false,
  skip: vi.fn(),
  videoFallback: false,
}
const mobileMedia = (reducedMotion = false) =>
  vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
    matches:
      query === '(max-width: 560px)' ||
      (reducedMotion && query === '(prefers-reduced-motion: reduce)'),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
afterEach(() => {
  vi.restoreAllMocks()
})
it('smoothly follows the newest candidate on mobile', () => {
  mobileMedia()
  const scrollIntoView = vi.fn()
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
    configurable: true,
    value: scrollIntoView,
  })
  const first = renderWithProviders(
    <LoadingScreen {...baseProps} candidates={[]} />,
  )
  first.rerender(
    <LoadingScreen
      {...baseProps}
      candidates={[
        ...baseProps.candidates,
        { id: '#DEF456', name: 'NEW CANDIDATE', status: 'rejected' },
      ]}
    />,
  )
  expect(scrollIntoView).toHaveBeenCalledWith({
    behavior: 'smooth',
    block: 'nearest',
  })
})
