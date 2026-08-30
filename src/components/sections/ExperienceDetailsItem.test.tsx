import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from './ExperienceDetailsItem'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'

it('renders achievements, technologies, projects and public links', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[2]} />)

  expect(screen.getByText('ООО ЦУП')).toBeVisible()
  expect(screen.getByText('myChess')).toBeVisible()
  expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute(
    'href',
    'https://info.mychess.app/',
  )
  expect(screen.getByText('React')).toBeVisible()
})

it('shows a private status for projects without a public URL', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[3]} />)
  expect(screen.getByText('Private project')).toBeVisible()
})
