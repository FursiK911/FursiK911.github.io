import { act, screen } from '@testing-library/react'
import { afterEach } from 'vitest'
import { setLoadingAnimationSpeed } from '@/features/loading'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingAnimationDebug } from '../LoadingAnimationDebug'
afterEach(() => act(() => setLoadingAnimationSpeed(1)))
it('is hidden after the loader completes', () => {
  renderWithProviders(<LoadingAnimationDebug visible={false} />)
  expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
})
