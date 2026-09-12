import { screen } from '@testing-library/react'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GallerySlide } from '../GallerySlide'

it('renders one accessible photo over a background sourced from the same media', async () => {
  await changeLanguage('en')
  const { container } = renderWithProviders(
    <GallerySlide
      media={{ kind: 'image', src: '/portrait.png', altKey: 'mychessWeb' }}
      title="myChess"
      playing={false}
      onPlay={vi.fn()}
      onExpand={vi.fn()}
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
