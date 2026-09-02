import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EducationTimeline } from '../EducationTimeline'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
it('presents SOS COMPUTER course content as professional skill groups', async () => {
  await changeLanguage('ru')
  const user = userEvent.setup()
  renderWithProviders(<EducationTimeline />)
  const toggles = screen.getAllByRole('button', {
    name: /ПОДРОБНЕЕ|MORE DETAILS/i,
  })
  await user.click(toggles[6])
  await user.click(toggles[7])
  expect(
    screen.getByText(
      'Алгоритмизация и структурированный подход к решению задач',
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByText(
      'Adobe Photoshop: обработка, ретушь и цветокоррекция изображений',
    ),
  ).toBeInTheDocument()
  expect(screen.queryByText('работа со слоями')).not.toBeInTheDocument()
})
