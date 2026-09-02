import { screen } from '@testing-library/react'
import { afterEach, beforeEach, it, expect } from 'vitest'
import { AppRouter } from '../AppRouter'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(() => {
  window.history.pushState({}, '', '/privacy/')
})
afterEach(() => {
  window.history.pushState({}, '', '/')
})
it('routes privacy and terms paths to legal pages', async () => {
  await changeLanguage('ru')
  const { rerender } = renderWithProviders(<AppRouter />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
  )
  window.history.pushState({}, '', '/terms/')
  rerender(<AppRouter />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ',
  )
})
