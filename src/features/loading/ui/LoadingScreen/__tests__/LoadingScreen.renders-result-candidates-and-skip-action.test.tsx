import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingScreen } from '../LoadingScreen'

it('renders every candidate state, the verified result, media callbacks, and the skip action', async () => {
  await changeLanguage('en')
  const notifyVideo = vi.fn()
  const skip = vi.fn()
  renderWithProviders(
    <LoadingScreen
      allReady
      buttonActive
      candidates={[
        { id: 'candidate-1', name: 'Searching', status: 'searching' },
        { id: 'candidate-2', name: 'Matched', status: 'matched', dimmed: true },
        { id: 'candidate-3', name: 'Rejected', status: 'rejected' },
      ]}
      cursorClicked
      notifyVideo={notifyVideo}
      phase="searching"
      queryText="Dmitry Fursov"
      resultVisible
      skip={skip}
      videoFallback
    />,
  )

  expect(screen.getByRole('status')).toBeInTheDocument()
  expect(screen.getByText('Searching')).toBeInTheDocument()
  expect(screen.getByText('Matched')).toBeInTheDocument()
  expect(screen.getByText('Rejected')).toBeInTheDocument()
  expect(screen.getAllByText('SCANNING DATABASE...')).toHaveLength(3)
  const video = document.querySelector('video') as HTMLVideoElement
  fireEvent.canPlay(video)
  fireEvent.error(video)
  expect(notifyVideo).toHaveBeenNthCalledWith(1, true)
  expect(notifyVideo).toHaveBeenNthCalledWith(2, false)
  fireEvent.click(screen.getByRole('button', { name: 'ENTER / SPACE — SKIP' }))
  expect(skip).toHaveBeenCalledOnce()
})
