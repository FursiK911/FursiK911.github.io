import { screen } from '@testing-library/react'
import { Footer } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(async () => {
  await changeLanguage('ru')
})
it('localizes footer labels in English', async () => {
  const { rerender } = renderWithProviders(<Footer />)
  await changeLanguage('en')
  rerender(<Footer />)
  expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeVisible()
  expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeVisible()
})
