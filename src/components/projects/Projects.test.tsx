import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

it('filters projects by category', async () => {
  const user = userEvent.setup()
  renderWithProviders(<Projects />)
  await user.click(screen.getByRole('button', { name: 'WEB' }))
  expect(screen.getByRole('heading', { name: 'myChess' })).toBeVisible()
})

it('renders the renamed section and split project cards', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)

  expect(screen.getByRole('heading', { name: 'ПРОЕКТЫ' })).toBeVisible()
  expect(
    screen.getByRole('heading', { name: 'Chudobooks' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'AR Chudoboxes' }),
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('heading', { name: 'Goons of Balatroon' }),
  ).not.toBeInTheDocument()
  expect(
    screen.queryByRole('heading', { name: 'Photon multiplayer FPS task' }),
  ).not.toBeInTheDocument()
})

it('uses the multiplayer category label', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)

  expect(
    screen.getByRole('button', { name: 'МУЛЬТИПЛЕЕР' }),
  ).toBeInTheDocument()
})
