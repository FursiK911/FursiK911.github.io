import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders the full project details and external actions', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectPage projectId="mychess-web" />)

  expect(
    screen.getByRole('heading', { level: 1, name: 'myChess' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('navigation', { name: 'Project sections' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Achievements' }),
  ).toBeInTheDocument()
  expect(screen.getByText('Technology stack')).toBeInTheDocument()
  expect(screen.getByText('Project contribution')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /OPEN LIVE DEMO/i })).toBeDisabled()
  expect(screen.getByRole('link', { name: /YouTube/i })).toHaveAttribute(
    'href',
    'https://www.youtube.com/watch?v=t-PDCpjdJvs',
  )
})
