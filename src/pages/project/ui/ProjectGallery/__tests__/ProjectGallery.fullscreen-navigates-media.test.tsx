import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('opens fullscreen at the active item and keeps the shared index while navigating', async () => {
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
  expect(within(dialog).getByText('2 of 4')).toBeInTheDocument()

  await user.click(
    within(dialog).getByRole('button', { name: 'Previous media' }),
  )
  expect(
    within(dialog).getByRole('button', { name: 'Watch video' }),
  ).toBeInTheDocument()

  await user.click(within(dialog).getByRole('button', { name: 'Close viewer' }))
  const selected = screen.getByRole('button', { name: 'Open media 1' })
  expect(selected).toHaveAttribute('aria-current', 'true')
  expect(selected).toHaveFocus()
})
