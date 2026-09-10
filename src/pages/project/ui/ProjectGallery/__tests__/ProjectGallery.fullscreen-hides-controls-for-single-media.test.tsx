import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Project } from '@/entities/project'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectGallery } from '../ProjectGallery'

it('hides fullscreen navigation controls when a project has one media item', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const project: Project = {
    ...projects[0],
    media: [{ kind: 'image', src: '/single.png', altKey: 'mychessWeb' }],
  }
  renderWithProviders(<ProjectGallery project={project} />)

  await user.click(
    screen.getByRole('button', { name: 'View full-screen photo' }),
  )
  const dialog = await screen.findByRole('dialog', { name: 'Media viewer' })
  expect(
    within(dialog).queryByRole('button', { name: 'Previous media' }),
  ).not.toBeInTheDocument()
  expect(
    within(dialog).queryByRole('button', { name: 'Next media' }),
  ).not.toBeInTheDocument()
  expect(within(dialog).queryByText('1 of 1')).not.toBeInTheDocument()
})
