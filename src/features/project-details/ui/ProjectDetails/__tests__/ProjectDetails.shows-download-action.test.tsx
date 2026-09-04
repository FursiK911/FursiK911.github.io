import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectDetails } from '../ProjectDetails'

it('shows download actions and omits external links in the compact dialog', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectDetails
      project={projects[3]}
      returnFocus={null}
      onClose={() => undefined}
    />,
  )

  expect(screen.getByRole('link', { name: /DOWNLOAD/i })).toHaveAttribute(
    'href',
    'https://store.steampowered.com/app/3468250/myChess_VR',
  )
  expect(screen.queryByRole('link', { name: /Steam/i })).not.toBeInTheDocument()
})
