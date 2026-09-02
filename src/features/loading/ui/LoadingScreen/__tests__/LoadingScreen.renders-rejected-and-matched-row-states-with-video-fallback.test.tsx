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
