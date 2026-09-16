import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ExperiencePhase } from '../ExperiencePhase'

it('renders external, unavailable, and private project states in one phase', async () => {
  await changeLanguage('en')
  const basePhase = workExperience[0].phases[0]
  renderWithProviders(
    <ExperiencePhase
      phase={{
        ...basePhase,
        period: { from: basePhase.period.from },
        projects: [
          {
            ...basePhase.projects[0],
            url: 'https://example.com',
            linkLabel: undefined,
          },
          {
            ...basePhase.projects[1],
            url: 'https://example.com',
            unavailableReasonKey: 'reason',
          },
          {
            ...basePhase.projects[2],
            url: undefined,
          },
        ],
      }}
    />,
  )

  expect(screen.getByRole('link', { name: /view project/i })).toHaveAttribute(
    'href',
    'https://example.com',
  )
  expect(screen.getByRole('button', { name: /view project/i })).toBeDisabled()
  expect(screen.getByText('Private project')).toBeInTheDocument()
})
