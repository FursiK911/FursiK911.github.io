import { act, fireEvent } from '@testing-library/react'
import { ProjectCircuitGame } from '../ProjectCircuitGame'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('rotates accessible tiles, announces a solved route, and exposes reset controls', () => {
  vi.useFakeTimers()
  const { getAllByRole, getByRole, getByText } = renderWithProviders(
    <ProjectCircuitGame />,
  )
  const tiles = getAllByRole('button', { name: /Rotate node/ })
  expect(tiles).toHaveLength(7)

  act(() => {
    fireEvent.click(getByRole('button', { name: /Rotate node 2/ }))
    fireEvent.click(getByRole('button', { name: /Rotate node 7/ }))
    fireEvent.click(getByRole('button', { name: /Rotate node 9/ }))
    fireEvent.click(getByRole('button', { name: /Rotate node 4/ }))
  })
  act(() => vi.advanceTimersByTime(500))
  expect(getByText('CONNECTION ESTABLISHED')).toBeInTheDocument()
  expect(getByRole('button', { name: '↻ RESET' })).toBeInTheDocument()
  act(() => vi.advanceTimersByTime(2500))
  expect(getByRole('button', { name: '[ NEW ROUTE ]' })).toBeInTheDocument()
  vi.useRealTimers()
})
