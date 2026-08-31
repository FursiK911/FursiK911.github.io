import { fireEvent, screen } from '@testing-library/react'
import { ExperienceTimelineItem } from './ExperienceTimelineItem'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'

it('renders a company timeline item with tags and initials fallback', () => {
  renderWithProviders(
    <ExperienceTimelineItem
      entry={workExperience[0]}
      index={0}
      reducedMotion
      axisPoint={{ x: 8, y: 52 }}
    />,
  )

  expect(screen.getByText('YELLOW ELEMENT')).toBeVisible()
  expect(screen.getByText('Unity / Frontend Developer')).toBeVisible()
  expect(screen.getByText('YE')).toBeVisible()
  expect(screen.getByText('Vuforia')).toBeVisible()
})

it('falls back to initials when a logo cannot be loaded', () => {
  renderWithProviders(
    <ExperienceTimelineItem
      entry={{ ...workExperience[0], logo: '/missing-logo.svg' }}
      index={0}
      reducedMotion
      axisPoint={{ x: 8, y: 52 }}
    />,
  )

  fireEvent.error(screen.getByAltText('YELLOW ELEMENT logo'))
  expect(screen.getByText('YE')).toBeVisible()
})
