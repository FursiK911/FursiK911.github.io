import { fireEvent, screen } from '@testing-library/react'
import { projects } from '@/entities/project'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectGallery } from '../ProjectGallery'

it('shows the MyChess logo and profile immediately after the video', async () => {
  await changeLanguage('en')
  const project = projects.find((item) => item.id === 'mychess-web')
  if (!project) throw new Error('MyChess Web project is missing')

  renderWithProviders(<ProjectGallery project={project} />)

  expect(screen.getByRole('button', { name: 'Open media 1' })).toHaveAttribute(
    'aria-current',
    'true',
  )
  fireEvent.click(screen.getByRole('button', { name: 'Open media 2' }))
  expect(screen.getByRole('img', { name: 'myChess logo' })).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: 'Open media 3' }))
  expect(
    screen.getByRole('img', { name: 'myChess user profile' }),
  ).toBeInTheDocument()
})
