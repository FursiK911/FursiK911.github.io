import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { ExperienceTimeline } from '../ExperienceTimeline'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('orders mobile timeline cards from next to earliest and alternates their sides', () => {
  renderWithProviders(
    <ExperienceTimeline entries={workExperience} onEntrySelect={vi.fn()} />,
  )

  const futureCard = screen.getByText('New Project?').closest('article')
  const currentCard = screen.getByText('VR Developer').closest('article')
  const earliestCard = screen
    .getByText('Unity / Frontend Developer')
    .closest('article')

  expect(futureCard).toHaveAttribute('data-mobile-side', 'left')
  expect(futureCard).toHaveStyle('--mobile-timeline-order: 0')
  expect(currentCard).toHaveAttribute('data-mobile-side', 'right')
  expect(currentCard).toHaveStyle('--mobile-timeline-order: 1')
  expect(earliestCard).toHaveAttribute('data-mobile-side', 'right')
  expect(earliestCard).toHaveStyle(
    `--mobile-timeline-order: ${workExperience.length}`,
  )
})
