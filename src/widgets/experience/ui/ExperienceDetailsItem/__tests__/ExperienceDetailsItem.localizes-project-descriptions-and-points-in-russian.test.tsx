import { screen } from '@testing-library/react'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('localizes project descriptions and points in Russian', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ExperienceDetailsItem entry={workExperience[2]} />)
  expect(
    screen.getByText(
      'Первая российская шахматная экосистема, которая уже объединила 121 577 зарегистрированных пользователей, 665 880 сыгранных партий и 459 созданных сообществ — в веб- и мобильных приложениях для игры, турниров, общения, стримов и обучения.',
    ),
  ).toBeInTheDocument()
  expect(
    screen.queryByText(
      'A Russian chess ecosystem with web and mobile versions, online games, tournaments, communities, streams, learning and grandmaster AI avatars.',
    ),
  ).not.toBeInTheDocument()
})
