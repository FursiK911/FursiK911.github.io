import { fireEvent, screen } from '@testing-library/react'
import { ExperienceTimelineItem } from '../ExperienceTimelineItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('falls back to initials when a logo cannot be loaded', () => {
  renderWithProviders(
    <ExperienceTimelineItem
      entry={{ ...workExperience[0], logo: '/missing-logo.svg' }}
      index={0}
      reducedMotion
      axisPoint={{ x: 8, y: 52 }}
      onSelect={() => {}}
    />,
  )
  fireEvent.error(screen.getByAltText('YELLOW ELEMENT logo'))
  expect(screen.getByText('YE')).toBeVisible()
})
