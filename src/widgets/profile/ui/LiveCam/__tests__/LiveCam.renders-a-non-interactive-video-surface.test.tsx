import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => vi.restoreAllMocks())

it('renders a non-interactive video surface', () => {
  installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video') as HTMLVideoElement

  expect(video).not.toHaveAttribute('controls')
  expect(video).toHaveAttribute(
    'controlslist',
    expect.stringContaining('nofullscreen'),
  )
  expect(video).toHaveAttribute('disablepictureinpicture')
  expect(video).toHaveAttribute('tabindex', '-1')
  expect(video).toHaveAttribute('preload', 'none')
})
