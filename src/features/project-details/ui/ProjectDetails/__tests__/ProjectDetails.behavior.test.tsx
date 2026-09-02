import { screen } from '@testing-library/react'
import { ProjectDetails } from '../ProjectDetails'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders accessible project dialog', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectDetails
      project={projects[0]}
      returnFocus={null}
      onClose={() => undefined}
    />,
  )
  expect(screen.getByRole('dialog')).toBeInTheDocument()
  expect(screen.getByText(/PROJECT DETAILS/)).toBeInTheDocument()
  expect(screen.getByText('ООО ЦУП')).toBeInTheDocument()
})
