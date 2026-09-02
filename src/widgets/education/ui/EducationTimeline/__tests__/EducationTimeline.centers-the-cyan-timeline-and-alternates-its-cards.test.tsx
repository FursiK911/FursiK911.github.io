import { EducationTimeline } from '../EducationTimeline'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('centers the cyan timeline and alternates its cards', async () => {
  await changeLanguage('ru')
  renderWithProviders(<EducationTimeline />)
  const timeline = document.querySelector('.education-timeline')
  const items = Array.from(
    document.querySelectorAll('.education-timeline-item'),
  )
  expect(timeline).toHaveClass('mantine-Timeline-root')
  expect(timeline).toHaveAttribute('data-opposite', 'true')
  expect(timeline?.children).toHaveLength(8)
  expect(items).toHaveLength(8)
  expect(items[0]).toHaveAttribute('data-alternate', 'true')
  expect(items[1]).not.toHaveAttribute('data-alternate')
  expect(items[2]).toHaveAttribute('data-alternate', 'true')
  expect(items[3]).not.toHaveAttribute('data-alternate')
  expect(items[0].querySelector('time')).toHaveTextContent('2023')
  expect(
    items[0].querySelector('.education-timeline-opposite'),
  ).toHaveTextContent('')
  expect(document.querySelectorAll('.education-timeline-bullet')).toHaveLength(
    8,
  )
})
