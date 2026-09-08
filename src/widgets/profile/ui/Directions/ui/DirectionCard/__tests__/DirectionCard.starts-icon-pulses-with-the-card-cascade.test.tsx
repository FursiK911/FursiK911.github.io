import { act } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { directions } from '../../../../../model/directions/data/directions.data'
import { DirectionCard } from '../DirectionCard'

afterEach(() => {
  vi.useRealTimers()
})

it('starts every icon pulse with its card entrance delay', () => {
  vi.useFakeTimers()
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

  const cards = container.querySelectorAll('article')
  expect(Array.from(cards).map((card) => card.dataset.iconAnimating)).toEqual([
    'false',
    'false',
    'false',
    'false',
  ])

  act(() => vi.advanceTimersByTime(100))
  expect(cards[0].dataset.iconAnimating).toBe('true')

  act(() => vi.advanceTimersByTime(120))
  expect(cards[1].dataset.iconAnimating).toBe('true')

  act(() => vi.advanceTimersByTime(120))
  expect(cards[2].dataset.iconAnimating).toBe('true')

  act(() => vi.advanceTimersByTime(120))
  expect(cards[3].dataset.iconAnimating).toBe('true')
})
