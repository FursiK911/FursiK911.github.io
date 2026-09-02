import { screen } from '@testing-library/react'
import { ExperienceDetails } from '../ExperienceDetails'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/render'
it('does not render details while collapsed', () => {
  renderWithProviders(
    <ExperienceDetails
      entries={workExperience}
      expanded={false}
      reducedMotion
    />,
  )
  expect(screen.queryByText('CAREER_DETAILS')).not.toBeInTheDocument()
})
