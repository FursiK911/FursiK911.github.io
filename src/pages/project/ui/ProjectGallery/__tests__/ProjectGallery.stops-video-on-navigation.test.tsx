import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('starts video only on request and unmounts it when selecting a photo', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const { container } = renderWithProviders(
    <ProjectGallery project={getProjectById('ar-chudaboxes')!} />,
  )
  expect(container.querySelector('iframe')).toBeNull()
  await user.click(screen.getByRole('button', { name: 'Watch video' }))
  expect(container.querySelector('iframe')).toHaveAttribute(
    'src',
    expect.stringContaining('youtube-nocookie.com'),
  )
  await user.click(screen.getByRole('button', { name: 'Open media 2' }))
  expect(container.querySelector('iframe')).toBeNull()
  expect(
    screen.getByRole('button', { name: 'View full-screen photo' }),
  ).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Previous media' }))
  expect(
    screen.getByRole('button', { name: 'Watch video' }),
  ).toBeInTheDocument()
})
