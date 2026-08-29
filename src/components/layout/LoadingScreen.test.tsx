import { screen } from '@testing-library/react'
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

it('renders the terminal, query and candidate rows', () => {
  renderWithProviders(<LoadingScreen {...baseProps} />)
  expect(screen.getByText('PERSONNEL DATABASE')).toBeVisible()
  expect(screen.getByDisplayValue(baseProps.queryText)).toBeVisible()
  expect(screen.getByText('ALEXANDER MORGAN')).toBeVisible()
  expect(screen.getByRole('button', { name: /skip/i })).toBeVisible()
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
