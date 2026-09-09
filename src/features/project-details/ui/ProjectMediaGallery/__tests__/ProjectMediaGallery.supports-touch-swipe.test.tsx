import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('changes the active media item after a horizontal touch swipe', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectMediaGallery
      project={projects.find((project) => project.id === 'ar-chudaboxes')!}
      variant="preview"
    />,
  )
  const frame = screen.getByRole('group', { name: /Media for AR Chudoboxes/i })

  fireEvent.touchStart(frame, { touches: [{ clientX: 240, clientY: 80 }] })
  fireEvent.touchEnd(frame, { changedTouches: [{ clientX: 120, clientY: 84 }] })

  expect(screen.getByRole('button', { name: 'Show media 2' })).toHaveAttribute(
    'aria-current',
    'true',
  )
})
