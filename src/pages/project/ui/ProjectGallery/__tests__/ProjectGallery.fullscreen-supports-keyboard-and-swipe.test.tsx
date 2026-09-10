import { fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('switches fullscreen media with arrow keys and horizontal swipe', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  renderWithProviders(
    <ProjectGallery project={getProjectById('ar-chudaboxes')!} />,
  )

  await user.click(screen.getByRole('button', { name: 'Open media 2' }))
  await user.click(
    screen.getByRole('button', { name: 'View full-screen photo' }),
  )
  const dialog = await screen.findByRole('dialog', { name: 'Media viewer' })
  await user.keyboard('{ArrowLeft}')
  expect(within(dialog).getByText('1 of 4')).toBeInTheDocument()

  const viewport = within(dialog).getByRole('group', {
    name: 'Project gallery',
  })
  fireEvent.touchStart(viewport, {
    touches: [{ clientX: 200, clientY: 50 }],
    changedTouches: [{ clientX: 200, clientY: 50 }],
  })
  fireEvent.touchEnd(viewport, {
    touches: [{ clientX: 100, clientY: 55 }],
    changedTouches: [{ clientX: 100, clientY: 55 }],
  })
  expect(within(dialog).getByText('2 of 4')).toBeInTheDocument()
})
