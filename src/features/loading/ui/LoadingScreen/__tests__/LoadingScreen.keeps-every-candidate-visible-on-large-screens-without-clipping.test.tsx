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
