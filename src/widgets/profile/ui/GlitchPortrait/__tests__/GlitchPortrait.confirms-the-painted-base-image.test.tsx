import { createRef } from 'react'
import { fireEvent } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GlitchPortrait } from '../GlitchPortrait'

it('notifies the handoff after the visible image has loaded and received a frame', () => {
  const imageRef = createRef<HTMLImageElement>()
  const onPortraitReady = vi.fn()
  const requestFrame = vi
    .spyOn(window, 'requestAnimationFrame')
    .mockImplementation((callback) => {
      callback(0)
      return 1
    })

  renderWithProviders(
    <GlitchPortrait
      active={false}
      alt="Portrait"
      imageRef={imageRef}
      onPortraitReady={onPortraitReady}
      portraitVisible
      reducedMotion
      src="/portrait.webp"
    />,
  )

  fireEvent.load(imageRef.current!)

  expect(requestFrame).toHaveBeenCalledOnce()
  expect(onPortraitReady).toHaveBeenCalledOnce()
})
