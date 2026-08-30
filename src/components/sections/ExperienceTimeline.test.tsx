import { screen } from '@testing-library/react'
import { ExperienceTimeline } from './ExperienceTimeline'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'

it('renders the complete career path and future milestone', () => {
  renderWithProviders(<ExperienceTimeline entries={workExperience} />)

  expect(screen.getAllByRole('article')).toHaveLength(workExperience.length + 1)
  expect(screen.getByText('Next Adventure?')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'HIRE ME' })).toHaveAttribute(
    'href',
    '#contact',
  )
})
