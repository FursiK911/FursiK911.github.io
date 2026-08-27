import { screen } from '@testing-library/react'
import { ProjectDetails } from './ProjectDetails'
import { projects } from '../../data/portfolio'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

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
  expect(screen.getByText('PROJECT DETAILS // MYCHESSVR')).toBeInTheDocument()
})
