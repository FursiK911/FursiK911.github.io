import { screen } from '@testing-library/react'
import { ExperienceDetails } from './ExperienceDetails'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'

it('renders details in current-to-earliest order when expanded', () => {
  renderWithProviders(
    <ExperienceDetails entries={workExperience} expanded reducedMotion />,
  )

  const companies = screen.getAllByText(/GROUP|ELEMENT|ЦУП|IT TAB/)
  expect(companies[0]).toHaveTextContent('TOO ME GROUP')
  expect(screen.getByText('CAREER_DETAILS')).toBeVisible()
})

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
