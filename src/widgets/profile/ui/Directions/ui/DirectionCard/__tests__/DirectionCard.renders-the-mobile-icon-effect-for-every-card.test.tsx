import { expect, it } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { directions } from '../../../../../model/directions/data/directions.data'
import { DirectionCard } from '../DirectionCard'
import localStyles from '../styles/DirectionCard.module.css'

it('renders the mobile icon effect layers for every direction card', () => {
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

  expect(
    container.querySelectorAll(`.${localStyles.directionIconScan}`),
  ).toHaveLength(4)
})
