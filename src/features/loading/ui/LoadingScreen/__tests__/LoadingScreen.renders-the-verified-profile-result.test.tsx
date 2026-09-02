import { screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/render'
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
