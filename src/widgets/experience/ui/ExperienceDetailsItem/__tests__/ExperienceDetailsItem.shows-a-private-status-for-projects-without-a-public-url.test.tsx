import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/render'
it('shows a private status for projects without a public URL', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[3]} />)
  expect(screen.getByText('Private project')).toBeVisible()
})
