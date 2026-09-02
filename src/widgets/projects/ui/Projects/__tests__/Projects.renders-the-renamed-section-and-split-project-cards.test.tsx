import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
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
