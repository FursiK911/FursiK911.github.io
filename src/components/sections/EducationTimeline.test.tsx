import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EducationTimeline } from './EducationTimeline'
import { renderWithProviders } from '../../test/render'
import { changeLanguage, resources } from '../../i18n'

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

it('reveals course account data and topics', async () => {
  await changeLanguage('ru')
  const user = userEvent.setup()
  renderWithProviders(<EducationTimeline />)

  await user.click(
    screen.getAllByRole('button', { name: /ПОДРОБНЕЕ|MORE DETAILS/i })[2],
  )

  expect(screen.queryByText('CCNA2-19-IVT1')).not.toBeInTheDocument()
  expect(resources.ru.translation.education.entries.ccna2.accountRecord).toBe(
    'CCNA2-19-IVT1',
  )
  expect(screen.getByText('VLAN')).toBeInTheDocument()
  expect(screen.getByText('NAT/PAT')).toBeInTheDocument()
  expect(screen.getAllByText('SOS COMPUTER')).toHaveLength(2)
})

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
