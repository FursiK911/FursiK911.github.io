import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/test/render'
import { Directions } from '@/widgets/profile'
import { changeLanguage } from '@/shared/config/i18n'
it('localizes the metric label in English', async () => {
  await changeLanguage('en')
  renderWithProviders(<Directions />)
  expect(screen.getAllByText('PROJECTS')).toHaveLength(4)
  expect(screen.getByText('GAME ENGINES')).toBeInTheDocument()
  expect(screen.getByText('VR · AR · MR')).toBeInTheDocument()
})
