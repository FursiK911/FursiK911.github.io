import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { ExperienceTimelineItem } from '../ExperienceTimelineItem'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders a concise company card and selects its entry', async () => {
  const user = userEvent.setup()
  const onSelect = vi.fn()
  renderWithProviders(
    <ExperienceTimelineItem
      entry={workExperience[0]}
      index={0}
      reducedMotion
      axisPoint={{ x: 8, y: 52 }}
      onSelect={onSelect}
    />,
  )
  expect(screen.getByText('YELLOW ELEMENT')).toBeVisible()
  expect(screen.getByText('Unity / Frontend Developer')).toBeVisible()
  expect(screen.getByText('YE')).toBeVisible()
  expect(screen.queryByText('Vuforia')).not.toBeInTheDocument()
  expect(
    screen.queryByText('AR applications · Web platforms'),
  ).not.toBeInTheDocument()
  const trigger = screen.getByRole('button', {
    name: /Open work details for YELLOW ELEMENT, 10\.2019 — 02\.2022/i,
  })
  await user.click(trigger)
  expect(onSelect).toHaveBeenCalledOnce()
})
