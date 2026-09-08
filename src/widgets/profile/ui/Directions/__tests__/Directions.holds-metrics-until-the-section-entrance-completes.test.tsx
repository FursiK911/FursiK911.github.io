import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { Directions } from '@/widgets/profile'
import { installDirectionsIntersectionObserverMock } from './directionsTestUtils'
it('holds metrics until the section enters the viewport and its entrance completes', async () => {
  const observer = installDirectionsIntersectionObserverMock()
  const view = renderWithProviders(
    <Directions entered={false} reducedMotion={false} />,
  )
  expect(
    document.querySelectorAll('.metric-counter[data-active="false"]'),
  ).toHaveLength(4)
  observer.trigger(true)
  view.rerender(<Directions entered reducedMotion={false} />)
  await waitFor(() => {
    expect(
      document.querySelectorAll('.metric-counter[data-active="true"]'),
    ).toHaveLength(4)
  })
})
