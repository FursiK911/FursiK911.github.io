import { screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { vi } from 'vitest'
import { renderWithProviders } from '../../test/render'
import { LoadingScreen } from './LoadingScreen'

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

it('renders the terminal, query and candidate rows', () => {
  renderWithProviders(<LoadingScreen {...baseProps} />)
  expect(screen.getByText('PERSONNEL DATABASE')).toBeVisible()
  expect(screen.getByDisplayValue(baseProps.queryText)).toBeVisible()
  expect(screen.getByText('ALEXANDER MORGAN')).toBeVisible()
  expect(screen.getByRole('button', { name: /skip/i })).toBeVisible()
  expect(screen.getAllByText('SCANNING DATABASE...')).toHaveLength(3)
})

it('shows the decorative typing caret only while the query is being typed', () => {
  const view = renderWithProviders(
    <LoadingScreen {...baseProps} phase="typing" />,
  )
  const typingInput = screen.getByDisplayValue(baseProps.queryText)
  expect(screen.getByText('|')).toHaveClass('typing-cursor')
  expect(typingInput).toHaveAttribute('readonly')
  expect(typingInput).toHaveAttribute('tabindex', '-1')

  view.rerender(<LoadingScreen {...baseProps} phase="searching" />)
  expect(screen.queryByText('|')).not.toBeInTheDocument()
})

it('renders the verified profile result', () => {
  renderWithProviders(
    <LoadingScreen
      {...baseProps}
      phase="result"
      candidates={[]}
      resultVisible
    />,
  )
  expect(screen.getByRole('heading', { name: /MATCH FOUND/i })).toBeVisible()
  expect(screen.getByRole('img')).toHaveAttribute('alt')
  const loadingScreen = screen.getByLabelText('Personnel search terminal')
  expect(loadingScreen).toHaveStyle({
    '--loading-scan-duration': '1.4s',
    '--loading-photo-delay': '0.56s',
  })
  expect(loadingScreen).not.toHaveStyle('--loading-photo-reveal-duration: 1.4s')
  expect(screen.queryByText('SCANNING DATABASE...')).not.toBeInTheDocument()
})

it('renders rejected and matched row states with video fallback', () => {
  renderWithProviders(
    <LoadingScreen
      {...baseProps}
      candidates={[
        { id: '#ABC123', name: 'ALEXANDER MORGAN', status: 'rejected' },
        { id: '#DF2026', name: 'DMITRY FURSOV', status: 'matched' },
      ]}
      cursorClicked
      phase="exiting"
      resultVisible
      videoFallback
    />,
  )
  expect(screen.getByText('NO MATCH')).toBeVisible()
  expect(screen.getByText('VERIFIED')).toBeVisible()
  expect(screen.getByRole('img')).toBeVisible()
  expect(screen.getByRole('button', { name: /FIND/i })).toHaveClass('is-active')
})

describe('candidate list layout', () => {
  it('keeps every candidate visible on large screens without clipping', () => {
    const candidates = Array.from({ length: 10 }, (_, index) => ({
      id: `#${index}`,
      name: `CANDIDATE ${index}`,
      status: 'rejected' as const,
    }))
    const { container } = renderWithProviders(
      <LoadingScreen {...baseProps} candidates={candidates} />,
    )

    const list = container.querySelector('.loading-candidates')
    expect(list).toBeInTheDocument()
    expect(list).not.toHaveStyle({ maxHeight: '275px' })
    expect(list?.children).toHaveLength(10)
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

  it('uses instant scrolling for reduced motion and skips desktop scrolling', () => {
    const scrollIntoView = vi.fn()
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })
    vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    const desktop = renderWithProviders(<LoadingScreen {...baseProps} />)
    expect(scrollIntoView).not.toHaveBeenCalled()

    desktop.unmount()
    mobileMedia(true)
    renderWithProviders(<LoadingScreen {...baseProps} />)
    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'nearest',
    })
  })
})
