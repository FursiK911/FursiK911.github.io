import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import React from 'react'
import { DesktopGridScanBackground } from '../DesktopGridScanBackground'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

vi.mock('@/shared/ui/GridScan', () => ({
  GridScan: (props: { enableWebcam?: boolean }) =>
    React.createElement('div', {
      'data-testid': 'grid-scan',
      'data-webcam': String(props.enableWebcam),
    }),
}))

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

it('selects the desktop animated, mobile hidden, and reduced-motion static variants', () => {
  let queryState = { desktop: true, reduced: false }
  vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches:
      query === '(min-width: 901px)' ? queryState.desktop : queryState.reduced,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

  renderWithProviders(<DesktopGridScanBackground />)
  expect(screen.getByTestId('grid-scan')).toHaveAttribute(
    'data-webcam',
    'false',
  )

  cleanup()
  queryState = { desktop: false, reduced: false }
  renderWithProviders(<DesktopGridScanBackground />)
  expect(screen.queryByTestId('desktop-grid-scan-background')).toBeNull()

  cleanup()
  queryState = { desktop: true, reduced: true }
  renderWithProviders(<DesktopGridScanBackground />)
  expect(screen.getByTestId('desktop-grid-scan-background')).toHaveAttribute(
    'data-static',
    'true',
  )
  expect(screen.queryByTestId('grid-scan')).toBeNull()
})
