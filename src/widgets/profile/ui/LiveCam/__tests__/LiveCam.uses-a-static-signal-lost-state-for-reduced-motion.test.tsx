import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => vi.restoreAllMocks())

it('uses a static signal-lost state for reduced motion', () => {
  installIntersectionObserverMock()
  const { container } = renderWithProviders(<LiveCam entered reducedMotion />)
  const camera = container.querySelector('[data-live-cam-status]')

  expect(camera).toHaveAttribute('data-live-cam-status', 'signal-lost')
  expect(container.querySelector('video')).not.toHaveAttribute('src')
})
