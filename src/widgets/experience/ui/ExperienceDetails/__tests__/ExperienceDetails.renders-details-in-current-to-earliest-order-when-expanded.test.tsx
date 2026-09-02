import { screen } from '@testing-library/react'
import { ExperienceDetails } from '../ExperienceDetails'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders details in current-to-earliest order when expanded', () => {
  renderWithProviders(
    <ExperienceDetails entries={workExperience} expanded reducedMotion />,
  )
  const companies = screen.getAllByText(/GROUP|ELEMENT|ЦУП|IT TAB/)
  expect(companies[0]).toHaveTextContent('TOO ME GROUP')
  expect(screen.getByText('CAREER_DETAILS')).toBeVisible()
})
