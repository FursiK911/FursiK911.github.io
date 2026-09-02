import { screen } from '@testing-library/react'
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
afterEach(() => {
  vi.restoreAllMocks()
})
it('shows the decorative typing caret through the loading sequence', () => {
  const view = renderWithProviders(
    <LoadingScreen {...baseProps} phase="typing" />,
  )
  const typingInput = screen.getByDisplayValue(baseProps.queryText)
  expect(screen.getByText('|')).toHaveClass('typing-cursor')
  expect(typingInput).toHaveAttribute('readonly')
  expect(typingInput).toHaveAttribute('tabindex', '-1')
  view.rerender(<LoadingScreen {...baseProps} phase="searching" />)
  expect(screen.getByText('|')).toHaveClass('typing-cursor')
  view.rerender(<LoadingScreen {...baseProps} phase="complete" />)
  expect(screen.queryByText('|')).not.toBeInTheDocument()
})
