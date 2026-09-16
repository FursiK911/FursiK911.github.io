import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCardPreview } from '../ProjectCardPreview'

it('shows the localized placeholder when a project has no preview images', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectCardPreview active={false} images={[]} />)

  expect(
    screen.getByRole('img', { name: 'Photo coming soon' }),
  ).toBeInTheDocument()
})
