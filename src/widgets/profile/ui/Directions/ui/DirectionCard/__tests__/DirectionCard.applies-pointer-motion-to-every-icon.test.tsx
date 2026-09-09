import { fireEvent } from '@testing-library/react'
import { expect, it } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { directions } from '../../../../../model/directions/data/directions.data'
import { DirectionCard } from '../DirectionCard'
import localStyles from '../styles/DirectionCard.module.css'

it('applies pointer motion to every direction icon', () => {
  const { container } = renderWithProviders(
    <>
      {directions.map((direction, index) => (
        <DirectionCard
          direction={direction}
          hasEntered
          index={index}
          key={direction.id}
          reducedMotion={false}
          scanning={false}
        />
      ))}
    </>,
  )
  const cards = Array.from(container.querySelectorAll('article'))

  cards.forEach((card) => {
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
  })

  const pointerGlyphs = container.querySelectorAll(
    `.${localStyles.directionIconPointerGlyph}`,
  )
  expect(pointerGlyphs).toHaveLength(4)
  expect(
    Array.from(pointerGlyphs).every((glyph) => glyph.hasAttribute('style')),
  ).toBe(true)
  expect(cards.every((card) => card.dataset.hovering === 'true')).toBe(true)
})
