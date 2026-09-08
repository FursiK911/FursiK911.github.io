import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => vi.restoreAllMocks())

it('disconnects the observer on unmount', () => {
  const observer = installIntersectionObserverMock()
  const { unmount } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )

  unmount()

  expect(observer.disconnect).toHaveBeenCalledOnce()
})
