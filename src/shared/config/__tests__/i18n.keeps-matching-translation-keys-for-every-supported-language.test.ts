import {
  changeLanguage,
  resources,
  supportedLanguages,
} from '@/shared/config/i18n'
function translationPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return [prefix]
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      translationPaths(child, prefix ? `${prefix}.${key}` : key),
    )
  }
  return [prefix]
}
afterEach(async () => {
  localStorage.clear()
  await changeLanguage('ru')
})
it('keeps matching translation keys for every supported language', () => {
  expect(supportedLanguages).toEqual(['ru', 'en'])
  expect(translationPaths(resources.ru.translation)).toEqual(
    translationPaths(resources.en.translation),
  )
})
