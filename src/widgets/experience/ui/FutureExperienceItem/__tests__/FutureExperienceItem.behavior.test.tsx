import { screen } from '@testing-library/react'
import { FutureExperienceItem } from '../FutureExperienceItem'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders a keyboard-accessible future CTA', () => {
  renderWithProviders(
    <FutureExperienceItem
      index={0}
      reducedMotion
      axisPoint={{ x: 94, y: 48 }}
    />,
  )
  expect(screen.getByText('NEXT')).toBeVisible()
  expect(screen.getByText('New Project?')).toBeVisible()
  expect(document.querySelector('.experience-future-icon svg')).toBeVisible()
  expect(screen.getByRole('link', { name: 'HIRE ME' })).toHaveAttribute(
    'href',
    '#contact',
  )
  expect(
    screen.queryByRole('button', { name: /Open work details/i }),
  ).not.toBeInTheDocument()
})
