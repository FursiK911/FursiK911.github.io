import { screen } from '@testing-library/react'
import { FutureExperienceItem } from './FutureExperienceItem'
import { renderWithProviders } from '../../test/render'

it('renders a keyboard-accessible future CTA', () => {
  renderWithProviders(<FutureExperienceItem index={0} reducedMotion />)

  expect(screen.getByText('NEXT')).toBeVisible()
  expect(screen.getByRole('link', { name: 'HIRE ME' })).toHaveAttribute(
    'href',
    '#contact',
  )
})
