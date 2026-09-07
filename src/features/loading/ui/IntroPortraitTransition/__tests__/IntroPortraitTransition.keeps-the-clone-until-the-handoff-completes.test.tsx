import { expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { IntroPortraitTransition } from '../IntroPortraitTransition'

it('keeps the transferred portrait mounted while the Hero portrait is becoming ready', () => {
  const source = document.createElement('div')
  const target = document.createElement('img')
  const sourceRect = {
    bottom: 220,
    height: 160,
    left: 120,
    right: 280,
    toJSON: () => ({}),
    top: 60,
    width: 160,
    x: 120,
    y: 60,
  } as DOMRect
  const targetRect = {
    bottom: 520,
    height: 320,
    left: 720,
    right: 1040,
    toJSON: () => ({}),
    top: 200,
    width: 320,
    x: 720,
    y: 200,
  } as DOMRect
  source.getBoundingClientRect = () => sourceRect
  target.getBoundingClientRect = () => targetRect
  const sourceRef = { current: source }
  const targetRef = { current: target }

  const { rerender } = renderWithProviders(
    <IntroPortraitTransition
      heroPortraitReady={false}
      handoffComplete={false}
      onHandoffComplete={vi.fn()}
      onTransferComplete={vi.fn()}
      phase="transferring"
      sourceRef={sourceRef}
      targetRef={targetRef}
    />,
  )

  const clone = document.querySelector<HTMLElement>(
    '.intro-portrait-transition',
  )
  expect(clone).toBeVisible()

  rerender(
    <IntroPortraitTransition
      heroPortraitReady
      handoffComplete={false}
      onHandoffComplete={vi.fn()}
      onTransferComplete={vi.fn()}
      phase="revealing"
      sourceRef={sourceRef}
      targetRef={targetRef}
    />,
  )

  expect(clone).toBeVisible()
  expect(clone).toHaveStyle({
    left: `${targetRect.left}px`,
    top: `${targetRect.top}px`,
    width: `${targetRect.width}px`,
    height: `${targetRect.height}px`,
  })
})
