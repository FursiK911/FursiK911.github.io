import { fireEvent } from '@testing-library/react'
import { expect, it } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { directions } from '../../../../../model/directions/data/directions.data'
import { DirectionCard } from '../DirectionCard'

it('hides the pointer glow without resetting its position to the card center', () => {
  const { container } = renderWithProviders(
    <DirectionCard
      direction={directions[0]}
      hasEntered
      index={0}
      reducedMotion={false}
      scanning={false}
    />,
  )
  const card = container.querySelector('article') as HTMLElement

  Object.defineProperty(card, 'getBoundingClientRect', {
    value: () => ({
      bottom: 100,
      height: 100,
      left: 0,
      right: 200,
      top: 0,
      width: 200,
    }),
  })

  fireEvent.pointerMove(card, {
    clientX: 40,
    clientY: 30,
    pointerType: 'mouse',
  })
  expect(card.dataset.hovering).toBe('true')
  expect(card.style.getPropertyValue('--directions-pointer-x')).toBe('20%')
  expect(card.style.getPropertyValue('--directions-pointer-y')).toBe('30%')

  fireEvent.pointerLeave(card)
  expect(card.dataset.hovering).toBe('false')
  expect(card.style.getPropertyValue('--directions-pointer-x')).toBe('20%')
  expect(card.style.getPropertyValue('--directions-pointer-y')).toBe('30%')
})
