import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { LoadingScreen } from '../LoadingScreen'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('keeps the decorative find pointer inside the find button', () => {
  renderWithProviders(
    <LoadingScreen
      allReady
      buttonActive
      candidates={[]}
      cursorClicked
      notifyVideo={vi.fn()}
      phase="searching"
      queryText="Find the best developer for our project"
      resultVisible={false}
      skip={vi.fn()}
      videoFallback={false}
    />,
  )

  const findButton = screen.getByRole('button', { name: 'FIND' })
  expect(findButton.querySelector('.loading-fake-cursor')).toHaveClass(
    'is-clicked',
  )
})
