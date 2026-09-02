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
it('renders an animated number with suffix and label', async () => {
  renderWithProviders(<MetricCounter value={8} suffix="+" label="PROJECTS" />)
  expect(screen.getByLabelText('8+ PROJECTS')).toBeInTheDocument()
  expect(screen.getByText('PROJECTS')).toBeInTheDocument()
  expect(screen.getByTestId('number-flow')).toHaveTextContent('0+')
  await act(async () => {
    frameCallback?.(0)
  })
  expect(screen.getByTestId('number-flow')).toHaveTextContent('8+')
})
