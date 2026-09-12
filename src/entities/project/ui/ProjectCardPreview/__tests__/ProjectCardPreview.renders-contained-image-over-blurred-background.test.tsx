import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectCardPreview } from '../ProjectCardPreview'

it('renders one accessible image over a background sourced from the same preview', async () => {
  await changeLanguage('en')
  const { container } = renderWithProviders(
    <ProjectCardPreview
      active={false}
      images={[{ kind: 'image', src: '/portrait.png', altKey: 'mychessWeb' }]}
    />,
  )

  expect(screen.getAllByRole('img')).toHaveLength(1)
  expect(screen.getByRole('img', { name: 'myChess' })).toHaveAttribute(
    'src',
    '/portrait.png',
  )
  expect(container.querySelector('[style]')).toHaveStyle({
    '--project-image-background': 'url("/portrait.png")',
  })
})
