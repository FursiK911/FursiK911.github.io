import { screen } from '@testing-library/react'
import { ExperienceDetailsModal } from '../ExperienceDetailsModal'
import { workExperience } from '@/entities/work-experience'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('renders the selected entry with a localized dialog label', async () => {
  await changeLanguage('ru')
  renderWithProviders(
    <ExperienceDetailsModal entry={workExperience[0]} onClose={() => {}} />,
  )

  const dialog = await screen.findByRole('dialog', {
    name: /Подробности о работе в YELLOW ELEMENT/i,
  })
  expect(dialog).toHaveTextContent('YELLOW ELEMENT')
  expect(dialog).toHaveTextContent('CAREER_DETAILS')
  expect(dialog).toHaveTextContent('Земля драконов АШАН')
  expect(
    screen.getByRole('button', { name: /Закрыть подробности о работе/i }),
  ).toBeVisible()
  await changeLanguage('en')
})
