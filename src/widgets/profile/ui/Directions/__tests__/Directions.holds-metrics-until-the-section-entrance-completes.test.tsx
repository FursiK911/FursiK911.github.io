import { waitFor } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/render'
import { Directions } from '@/widgets/profile'
it('holds metrics until the section entrance completes', async () => {
  const view = renderWithProviders(
    <Directions entered={false} reducedMotion={false} />,
  )
  expect(
    document.querySelectorAll('.metric-counter[data-active="false"]'),
  ).toHaveLength(4)
  view.rerender(<Directions entered reducedMotion={false} />)
  await waitFor(() => {
    expect(
      document.querySelectorAll('.metric-counter[data-active="true"]'),
    ).toHaveLength(4)
  })
})
