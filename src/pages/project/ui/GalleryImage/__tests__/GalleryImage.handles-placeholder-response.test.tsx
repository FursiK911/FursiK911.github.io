import { fireEvent, screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { GalleryImage } from '../GalleryImage'
it('rejects YouTube missing-thumbnail images served with a successful HTTP response', async () => {
  await changeLanguage('en')
  renderWithProviders(
    <GalleryImage
      src="https://i.ytimg.com/vi/example/maxresdefault.jpg"
      alt="Video"
      youtube
    />,
  )
  const image = screen.getByRole('img', { name: 'Video' })
  Object.defineProperty(image, 'naturalWidth', { value: 120 })
  fireEvent.load(image)
  expect(image).toHaveAttribute('src', expect.stringContaining('hq720.jpg'))
  fireEvent.load(image)
  expect(screen.getByText('Image unavailable')).toBeInTheDocument()
})
