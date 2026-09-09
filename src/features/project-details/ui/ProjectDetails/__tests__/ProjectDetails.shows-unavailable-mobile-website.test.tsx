import { screen } from '@testing-library/react'
import { ProjectDetails } from '../ProjectDetails'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('shows the unavailable website state for MyChess Mobile', async () => {
  await changeLanguage('en')
  const project = projects.find((item) => item.id === 'mychess-mobile')

  renderWithProviders(
    <ProjectDetails
      project={project!}
      returnFocus={null}
      onClose={() => undefined}
    />,
  )

  expect(screen.getByRole('button', { name: /OPEN LIVE DEMO/i })).toBeDisabled()
  expect(
    screen.getByRole('button', {
      name: 'The MyChess website is closed and no longer available to open.',
    }),
  ).toBeInTheDocument()
})
