import i18n, { changeLanguage } from '@/shared/config/i18n'
afterEach(async () => {
  localStorage.clear()
  await changeLanguage('ru')
})
it('uses English as the fallback language', async () => {
  await i18n.changeLanguage('de')
  expect(i18n.resolvedLanguage).toBe('en')
})
