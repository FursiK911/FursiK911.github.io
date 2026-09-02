import i18n, {
  changeLanguage,
  LANGUAGE_STORAGE_KEY,
} from '@/shared/config/i18n'
afterEach(async () => {
  localStorage.clear()
  await changeLanguage('ru')
})
it('changes language and persists an explicit user selection', async () => {
  await changeLanguage('en')
  expect(i18n.resolvedLanguage).toBe('en')
  expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
})
