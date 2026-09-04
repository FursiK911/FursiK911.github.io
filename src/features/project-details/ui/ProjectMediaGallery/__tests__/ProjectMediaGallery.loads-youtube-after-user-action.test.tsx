import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectMediaGallery } from '../ProjectMediaGallery'

it('loads the YouTube player only after the visitor requests playback', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectMediaGallery project={projects[0]} variant="preview" />,
  )

  expect(screen.queryByTitle(/Video for myChess/i)).not.toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: /WATCH VIDEO/i }))
  expect(screen.getByTitle(/Video for myChess/i)).toHaveAttribute(
    'src',
    expect.stringContaining('youtube-nocookie.com/embed/t-PDCpjdJvs'),
  )
})
