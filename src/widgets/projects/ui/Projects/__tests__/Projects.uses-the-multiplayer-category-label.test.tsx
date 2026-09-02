import { screen } from '@testing-library/react'
import { Projects } from '../Projects'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
it('uses the multiplayer category label', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Projects />)
  expect(
    screen.getByRole('button', { name: 'МУЛЬТИПЛЕЕР' }),
  ).toBeInTheDocument()
})
