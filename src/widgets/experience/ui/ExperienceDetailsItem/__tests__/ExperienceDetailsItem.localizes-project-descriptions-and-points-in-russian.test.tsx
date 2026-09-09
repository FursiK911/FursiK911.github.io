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
      'Пользовательский React/TypeScript-клиент первой российской шахматной экосистемы: адаптивные desktop- и mobile-сценарии, онлайн-партии, турниры, сообщества, стримы, обучение и ИИ-аватары гроссмейстеров.',
    ),
  ).toBeInTheDocument()
  expect(
    screen.queryByText(
      'A Russian chess ecosystem with web and mobile versions, online games, tournaments, communities, streams, learning and grandmaster AI avatars.',
    ),
  ).not.toBeInTheDocument()
})
