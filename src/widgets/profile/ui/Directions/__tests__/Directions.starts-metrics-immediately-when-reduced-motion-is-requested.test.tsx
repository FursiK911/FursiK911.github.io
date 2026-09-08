import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Directions } from '@/widgets/profile'
it('starts metrics immediately when reduced motion is requested', () => {
  renderWithProviders(<Directions entered reducedMotion />)
  expect(
    document.querySelectorAll('.metric-counter[data-active="true"]'),
  ).toHaveLength(4)
  expect(
    Array.from(document.querySelectorAll('article')).map(
      (card) => card.dataset.iconAnimating,
    ),
  ).toEqual(['false', 'false', 'false', 'false'])
})
