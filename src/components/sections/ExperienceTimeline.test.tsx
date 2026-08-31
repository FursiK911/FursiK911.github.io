import { screen } from '@testing-library/react'
import { changeLanguage } from '../../i18n'
import { ExperienceTimeline } from './ExperienceTimeline'
import { workExperience } from '../../data/workExperience'
import { renderWithProviders } from '../../test/render'

it('renders the complete career path and future milestone', () => {
  renderWithProviders(<ExperienceTimeline entries={workExperience} />)

  expect(screen.getAllByRole('article')).toHaveLength(workExperience.length + 1)
  expect(screen.getByText('New Project?')).toBeInTheDocument()
  expect(document.querySelector('svg.experience-timeline-axis')).toBeVisible()
  expect(
    document.querySelectorAll('.experience-timeline-wave-path'),
  ).toHaveLength(2)
  expect(
    document.querySelector('.experience-timeline-wave-desktop'),
  ).toHaveAttribute('stroke-dasharray', '5 7')
  expect(document.querySelectorAll('.experience-milestone')).toHaveLength(
    workExperience.length + 1,
  )
  expect(document.querySelector('.experience-timeline-runner')).toBeVisible()
  expect(screen.getByRole('link', { name: 'HIRE ME' })).toHaveAttribute(
    'href',
    '#contact',
  )
  expect(workExperience.some((entry) => 'pathProgress' in entry)).toBe(false)
  expect(screen.getAllByRole('article')[0]).toHaveStyle('--timeline-x: 50px')
})

it('keeps the runner static when reduced motion is requested', () => {
  renderWithProviders(
    <ExperienceTimeline entries={workExperience} reducedMotion />,
  )

  expect(document.querySelector('.experience-timeline-runner')).toHaveAttribute(
    'data-reduced-motion',
    'true',
  )
})

it('localizes short timeline roles and the future CTA in Russian', async () => {
  await changeLanguage('ru')
  renderWithProviders(
    <ExperienceTimeline entries={workExperience} reducedMotion />,
  )

  expect(screen.getByText('Unity / Frontend разработчик')).toBeVisible()
  expect(screen.getByText('Новый проект?')).toBeVisible()
  expect(screen.getByRole('link', { name: 'НАНЯТЬ МЕНЯ' })).toHaveAttribute(
    'href',
    '#contact',
  )

  await changeLanguage('en')
})
