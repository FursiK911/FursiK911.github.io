import { fireEvent, screen } from '@testing-library/react'
import { ProjectCardPreview } from '../ProjectCardPreview'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('replaces a failed image with the localized placeholder', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <ProjectCardPreview
      active={false}
      images={[{ kind: 'image', src: '/missing.png', altKey: 'mychessWeb' }]}
    />,
  )

  fireEvent.error(screen.getByRole('img', { name: 'myChess' }))

  expect(
    screen.getByRole('img', { name: 'Photo coming soon' }),
  ).toBeInTheDocument()
})
