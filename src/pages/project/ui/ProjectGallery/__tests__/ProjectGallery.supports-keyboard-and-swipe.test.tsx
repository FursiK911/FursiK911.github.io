import { screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('navigates a mixed gallery with arrows and horizontal swipes without intercepting vertical gestures', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  renderWithProviders(
    <ProjectGallery project={getProjectById('ar-chudaboxes')!} />,
  )
  const next = screen.getByRole('button', { name: 'Next media' })
  next.focus()
  await user.keyboard('{ArrowRight}')
  expect(screen.getByRole('button', { name: 'Open media 2' })).toHaveAttribute(
    'aria-current',
    'true',
  )
  await user.keyboard('{ArrowLeft}')
  expect(screen.getByRole('button', { name: 'Open media 1' })).toHaveAttribute(
    'aria-current',
    'true',
  )
  const gallery = screen.getByRole('group', { name: 'Project gallery' })
  fireEvent.touchStart(gallery, { touches: [{ clientX: 200, clientY: 50 }] })
  fireEvent.touchEnd(gallery, {
    changedTouches: [{ clientX: 100, clientY: 55 }],
  })
  expect(screen.getByRole('button', { name: 'Open media 2' })).toHaveAttribute(
    'aria-current',
    'true',
  )
  fireEvent.touchStart(gallery, { touches: [{ clientX: 200, clientY: 50 }] })
  fireEvent.touchEnd(gallery, {
    changedTouches: [{ clientX: 190, clientY: 180 }],
  })
  expect(screen.getByRole('button', { name: 'Open media 2' })).toHaveAttribute(
    'aria-current',
    'true',
  )
  await user.click(next)
  expect(screen.getByRole('button', { name: 'Open media 3' })).toHaveAttribute(
    'aria-current',
    'true',
  )
})
