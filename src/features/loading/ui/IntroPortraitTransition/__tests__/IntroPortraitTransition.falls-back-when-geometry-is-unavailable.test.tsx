import { createRef } from 'react'
import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { IntroPortraitTransition } from '../IntroPortraitTransition'

it('continues to the page reveal when portrait geometry is unavailable', () => {
  const onTransferComplete = vi.fn()
  const onHandoffComplete = vi.fn()

  renderWithProviders(
    <IntroPortraitTransition
      heroPortraitReady={false}
      handoffComplete={false}
      onHandoffComplete={onHandoffComplete}
      onTransferComplete={onTransferComplete}
      phase="transferring"
      sourceRef={createRef<HTMLElement>()}
      targetRef={createRef<HTMLElement>()}
    />,
  )

  expect(onTransferComplete).toHaveBeenCalledOnce()
})
