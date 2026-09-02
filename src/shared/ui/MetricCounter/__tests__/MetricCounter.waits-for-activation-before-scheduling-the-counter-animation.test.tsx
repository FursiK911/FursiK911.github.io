import { act, screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/render'
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
it('waits for activation before scheduling the counter animation', async () => {
  const view = renderWithProviders(
    <MetricCounter active={false} value={10} label="PROJECTS" />,
  )
  expect(screen.getByTestId('number-flow')).toHaveTextContent('0')
  expect(frameCallback).toBeUndefined()
  view.rerender(<MetricCounter active value={10} label="PROJECTS" />)
  expect(screen.getByTestId('number-flow')).toHaveTextContent('0')
  await act(async () => frameCallback?.(0))
  expect(screen.getByTestId('number-flow')).toHaveTextContent('10')
})
