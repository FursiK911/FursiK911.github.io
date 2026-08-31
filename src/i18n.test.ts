import i18n, {
  changeLanguage,
  LANGUAGE_STORAGE_KEY,
  resources,
  supportedLanguages,
} from './i18n'

function translationPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return [prefix]
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      translationPaths(child, prefix ? `${prefix}.${key}` : key),
    )
  }
  return [prefix]
}

describe('i18n scaffold', () => {
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

  it('changes language and persists an explicit user selection', async () => {
    await changeLanguage('en')

    expect(i18n.resolvedLanguage).toBe('en')
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
  })

  it('uses English as the fallback language', async () => {
    await i18n.changeLanguage('de')

    expect(i18n.resolvedLanguage).toBe('en')
  })
})
