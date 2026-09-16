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
  const { container, rerender } = renderWithProviders(<AppRouter />)
  const contentFrame = screen.getByTestId('route-content-frame')
  expect(contentFrame).toContainElement(
    container.querySelector('#page-content'),
  )
  expect(contentFrame).toContainElement(container.querySelector('.site-footer'))
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
  )
  window.history.pushState({}, '', '/terms/')
  rerender(<AppRouter />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ',
  )
  window.history.pushState({}, '', '/unknown')
  rerender(<AppRouter />)
  expect(
    screen.getByRole('textbox', { name: /ПОИСКОВОЙ ЗАПРОС/i }),
  ).toBeInTheDocument()
  window.history.pushState({}, '', '/')
  rerender(<AppRouter />)
  expect(
    screen.getByRole('textbox', { name: /ПОИСКОВОЙ ЗАПРОС/i }),
  ).toBeInTheDocument()
})
