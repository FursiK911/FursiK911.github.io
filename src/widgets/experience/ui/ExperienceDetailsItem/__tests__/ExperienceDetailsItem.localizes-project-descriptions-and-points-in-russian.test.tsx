import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
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
