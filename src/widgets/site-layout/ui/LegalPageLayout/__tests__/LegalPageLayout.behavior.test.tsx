import { fireEvent, screen } from '@testing-library/react'
import { LegalPageLayout } from '../LegalPageLayout'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the shared legal shell and updates metadata', async () => {
  await changeLanguage('ru')
  renderWithProviders(
    <LegalPageLayout
      title="Test policy"
      description="Test description"
      hudSectionLabel="Test policy"
    >
      <h1>Legal content</h1>
    </LegalPageLayout>,
  )
  expect(screen.getByRole('banner')).toBeVisible()
  expect(screen.getByRole('contentinfo')).toBeVisible()
  expect(screen.getByRole('link', { name: /На главную/ })).toHaveAttribute(
    'href',
    '/',
  )
  expect(document.title).toBe('Test policy')
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    'Test description',
  )
  fireEvent.click(screen.getByRole('button', { name: /change language/i }))
  expect(document.documentElement).toHaveAttribute('lang', 'en')
})
