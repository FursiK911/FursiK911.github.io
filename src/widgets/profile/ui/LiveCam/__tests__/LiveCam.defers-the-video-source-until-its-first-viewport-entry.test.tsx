import { act } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LiveCam } from '../LiveCam'
import { installIntersectionObserverMock } from './liveCamTestUtils'

afterEach(() => vi.restoreAllMocks())

it('defers the video source until its first viewport entry', () => {
  const observer = installIntersectionObserverMock()
  const { container } = renderWithProviders(
    <LiveCam entered reducedMotion={false} />,
  )
  const video = container.querySelector('video')

  expect(video).not.toHaveAttribute('src')

  act(() => observer.emit(true))

  expect(video).toHaveAttribute('src', '/videos/live_cam_loop.webm')
})
