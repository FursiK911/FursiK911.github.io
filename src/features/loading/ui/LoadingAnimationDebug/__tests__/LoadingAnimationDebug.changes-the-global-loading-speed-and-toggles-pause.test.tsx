import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach } from 'vitest'
import {
  getLoadingAnimationSpeed,
  setLoadingAnimationSpeed,
} from '@/features/loading'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { LoadingAnimationDebug } from '../LoadingAnimationDebug'
afterEach(() => act(() => setLoadingAnimationSpeed(1)))
it('changes the global loading speed and toggles pause', async () => {
  const user = userEvent.setup()
  renderWithProviders(<LoadingAnimationDebug visible />)
  await user.click(screen.getByRole('button', { name: '2×' }))
  expect(getLoadingAnimationSpeed()).toBe(2)
  await user.click(screen.getByRole('button', { name: /pause/i }))
  expect(getLoadingAnimationSpeed()).toBe(0)
  expect(screen.getByRole('button', { name: /resume/i })).toBeVisible()
})
