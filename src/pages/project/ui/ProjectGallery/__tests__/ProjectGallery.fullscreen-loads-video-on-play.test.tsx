import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('loads fullscreen video on demand with its start timestamp and stops on navigation', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  renderWithProviders(
    <ProjectGallery project={getProjectById('earth-dragons')!} />,
  )

  await user.click(screen.getByRole('button', { name: 'Open media 2' }))
  await user.click(
    screen.getByRole('button', { name: 'View full-screen photo' }),
  )
  const dialog = await screen.findByRole('dialog', { name: 'Media viewer' })
  await user.click(
    within(dialog).getByRole('button', { name: 'Previous media' }),
  )

  expect(
    within(dialog).queryByTitle('Video for Earth of Dragons — Auchan'),
  ).not.toBeInTheDocument()
  await user.click(within(dialog).getByRole('button', { name: 'Watch video' }))
  expect(
    within(dialog).getByTitle('Video for Earth of Dragons — Auchan'),
  ).toHaveAttribute('src', expect.stringContaining('&start=483'))
  expect(
    screen.getAllByTitle('Video for Earth of Dragons — Auchan'),
  ).toHaveLength(1)

  await user.click(within(dialog).getByRole('button', { name: 'Next media' }))
  expect(
    within(dialog).queryByTitle('Video for Earth of Dragons — Auchan'),
  ).not.toBeInTheDocument()
})
