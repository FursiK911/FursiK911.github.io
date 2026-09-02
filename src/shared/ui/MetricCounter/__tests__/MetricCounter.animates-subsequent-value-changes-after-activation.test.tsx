import { act, screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { MetricCounter } from '../MetricCounter'
vi.mock('@number-flow/react', () => ({
  default: ({ value, suffix }: { value: number; suffix?: string }) => (
    <span data-testid="number-flow">
      {value}
      {suffix}
    </span>
  ),
}))
let frameCallback: FrameRequestCallback | undefined
beforeEach(() => {
  frameCallback = undefined
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frameCallback = callback
    return 0
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
})
afterEach(() => {
  vi.unstubAllGlobals()
})
it('animates subsequent value changes after activation', async () => {
  const view = renderWithProviders(<MetricCounter value={8} label="PROJECTS" />)
  await act(async () => frameCallback?.(0))
  view.rerender(<MetricCounter value={12} label="PROJECTS" />)
  expect(screen.getByTestId('number-flow')).toHaveTextContent('8')
  await act(async () => frameCallback?.(0))
  expect(screen.getByTestId('number-flow')).toHaveTextContent('12')
})
