import { screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingScreen } from '../LoadingScreen'

it('keeps the result portrait in the fading loader', () => {
  const { container } = renderWithProviders(
    <LoadingScreen
      allReady
      buttonActive
      candidates={[]}
      cursorClicked
      notifyVideo={vi.fn()}
      phase="fading"
      queryText="Find Dmitry"
      resultVisible
      skip={vi.fn()}
      videoFallback={false}
    />,
  )

  expect(container.querySelector('.loading-screen')).toHaveClass('is-fading')
  expect(screen.getByRole('img').parentElement).not.toHaveStyle({
    visibility: 'hidden',
  })
})
