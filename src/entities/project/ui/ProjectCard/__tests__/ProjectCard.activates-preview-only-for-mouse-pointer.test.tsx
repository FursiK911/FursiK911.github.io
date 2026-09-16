import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCard } from '../ProjectCard'

it('activates the card preview for a mouse pointer and clears it on leave', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCard project={projects[0]} />)
  const link = screen.getByRole('link', { name: /myChess/i })
  const preview = link.querySelector('div')

  fireEvent.pointerEnter(link, { pointerType: 'touch' })
  expect(preview).toBeInTheDocument()
  fireEvent.pointerEnter(link, { pointerType: 'mouse' })
  fireEvent.pointerLeave(link)
  expect(link).toBeInTheDocument()
})
