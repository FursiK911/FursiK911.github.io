import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from './ExperienceDetailsItem'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

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

it('shows a private status for projects without a public URL', () => {
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[3]} />)
  expect(screen.getByText('Private project')).toBeVisible()
})

it('localizes project descriptions and points in Russian', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[2]} />)

  expect(
    screen.getByText(
      'Онлайн-шахматная платформа с мультиплеерными партиями, турнирами, анализом, головоломками и функциями сообщества.',
    ),
  ).toBeInTheDocument()
  expect(
    screen.queryByText(
      'An online chess platform with multiplayer games, tournaments, analysis, puzzles and community functionality.',
    ),
  ).not.toBeInTheDocument()
})
