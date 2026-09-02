import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EducationTimeline } from '../EducationTimeline'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
it('allows multiple education entries to stay open', async () => {
  await changeLanguage('ru')
  const user = userEvent.setup()
  renderWithProviders(<EducationTimeline />)
  const toggles = screen.getAllByRole('button', {
    name: /ПОДРОБНЕЕ|MORE DETAILS/i,
  })
  await user.click(toggles[0])
  await user.click(toggles[1])
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'true')
  expect(
    screen.getAllByText('Информатика и вычислительная техника'),
  ).toHaveLength(2)
})
