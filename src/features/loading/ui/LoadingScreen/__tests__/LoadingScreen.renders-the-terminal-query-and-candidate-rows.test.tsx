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
it('renders the terminal, query and candidate rows', () => {
  renderWithProviders(<LoadingScreen {...baseProps} />)
  expect(screen.getByText('PERSONNEL DATABASE')).toBeVisible()
  expect(screen.getByDisplayValue(baseProps.queryText)).toBeVisible()
  expect(screen.getByText('ALEXANDER MORGAN')).toBeVisible()
  expect(screen.getByRole('button', { name: /skip/i })).toBeVisible()
  expect(screen.getAllByText('SCANNING DATABASE...')).toHaveLength(3)
})
