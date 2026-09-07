import { createRef } from 'react'
import { screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingScreen } from '../LoadingScreen'

it('marks the source portrait as excluded when the loader starts fading', () => {
  const photoRef = createRef<HTMLDivElement>()

  const { container } = renderWithProviders(
    <LoadingScreen
      allReady
      buttonActive
      candidates={[]}
      cursorClicked
      notifyVideo={vi.fn()}
      phase="fading"
      photoRef={photoRef}
      queryText="Find Dmitry"
      resultVisible
      skip={vi.fn()}
      videoFallback={false}
    />,
  )

  expect(container.querySelector('.loading-screen')).toHaveClass('is-fading')
  expect(photoRef.current).toBe(screen.getByRole('img').parentElement)
})
