import { screen } from '@testing-library/react'
import { ExperienceTimelineItem } from '../ExperienceTimelineItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
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
