import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GalleryImage } from '../GalleryImage'
it('tries a wide fallback poster before rendering an accessible unavailable state', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <GalleryImage
      src="https://i.ytimg.com/vi/example/maxresdefault.jpg"
      alt="Video"
      youtube
    />,
  )
  const image = screen.getByRole('img', { name: 'Video' })
  fireEvent.error(image)
  expect(image).toHaveAttribute(
    'src',
    'https://i.ytimg.com/vi/example/hq720.jpg',
  )
  fireEvent.error(image)
  expect(screen.getByText('Image unavailable')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Video' }).tagName).toBe('SPAN')
})
