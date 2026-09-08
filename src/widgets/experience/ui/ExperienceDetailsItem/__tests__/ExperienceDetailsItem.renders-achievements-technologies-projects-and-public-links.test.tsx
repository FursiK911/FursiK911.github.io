import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders achievements, technologies, projects and public links', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[2]} />)
  expect(screen.getByText('ООО ЦУП')).toBeVisible()
  expect(screen.getByText('myChess')).toBeVisible()
  expect(screen.getByRole('button', { name: /Website/ })).toBeDisabled()
  expect(screen.getAllByText('React').length).toBeGreaterThan(0)
})
