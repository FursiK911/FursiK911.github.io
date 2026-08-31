import { act, screen } from '@testing-library/react'
import { renderWithProviders } from '../../test/render'
import { MetricCounter } from './MetricCounter'

vi.mock('@number-flow/react', () => ({
  default: ({ value, suffix }: { value: number; suffix?: string }) => (
    <span data-testid="number-flow">
      {value}
      {suffix}
    </span>
  ),
}))

describe('MetricCounter', () => {
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

  it('supports reduced motion through NumberFlow props', () => {
    renderWithProviders(<MetricCounter value={15} label="PROJECTS" />)
    act(() => frameCallback?.(0))

    expect(screen.getByTestId('number-flow')).toHaveTextContent('15')
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

  it('animates subsequent value changes after activation', async () => {
    const view = renderWithProviders(
      <MetricCounter value={8} label="PROJECTS" />,
    )
    await act(async () => frameCallback?.(0))

    view.rerender(<MetricCounter value={12} label="PROJECTS" />)
    expect(screen.getByTestId('number-flow')).toHaveTextContent('8')

    await act(async () => frameCallback?.(0))
    expect(screen.getByTestId('number-flow')).toHaveTextContent('12')
  })
})
