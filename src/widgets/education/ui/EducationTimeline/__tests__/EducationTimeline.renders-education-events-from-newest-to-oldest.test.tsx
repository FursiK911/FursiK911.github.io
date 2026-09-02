import { screen } from '@testing-library/react'
import { EducationTimeline } from '../EducationTimeline'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders education events from newest to oldest', async () => {
  await changeLanguage('ru')
  renderWithProviders(<EducationTimeline />)
  const dates = screen.getAllByRole('time')
  expect(dates.map((date) => date.textContent)).toEqual([
    '2023',
    '2020',
    '2019',
    '2018',
    '2018',
    '2018',
    '2016',
    '2015',
  ])
  expect(dates.map((date) => date.getAttribute('datetime'))).toEqual([
    '2023',
    '2020',
    '2019-01-29',
    '2018-10-30',
    '2018-10-28',
    '2018-09-04',
    '2016',
    '2015',
  ])
})
