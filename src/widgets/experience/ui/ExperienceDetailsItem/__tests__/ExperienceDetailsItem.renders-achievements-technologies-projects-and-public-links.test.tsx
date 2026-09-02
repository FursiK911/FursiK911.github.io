import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/render'
it('renders achievements, technologies, projects and public links', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[2]} />)
  expect(screen.getByText('ООО ЦУП')).toBeVisible()
  expect(screen.getByText('myChess')).toBeVisible()
  expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute(
    'href',
    'https://info.mychess.app/',
  )
  expect(screen.getAllByText('React').length).toBeGreaterThan(0)
})
