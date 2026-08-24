import i18n, {
  changeLanguage,
  LANGUAGE_STORAGE_KEY,
  resources,
  supportedLanguages,
} from './i18n'

describe('i18n scaffold', () => {
  afterEach(async () => {
    localStorage.clear()
    await changeLanguage('ru')
  })

  it('keeps matching translation keys for every supported language', () => {
    expect(supportedLanguages).toEqual(['ru', 'en'])
    expect(Object.keys(resources.ru.translation)).toEqual(
      Object.keys(resources.en.translation),
    )
  })

  it('changes language and persists an explicit user selection', async () => {
    await changeLanguage('en')

    expect(i18n.resolvedLanguage).toBe('en')
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
  })

  it('uses Russian as the fallback language', async () => {
    await i18n.changeLanguage('de')

    expect(i18n.resolvedLanguage).toBe('ru')
  })
})
