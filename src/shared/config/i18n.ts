import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { resources } from './i18n/data/i18n.data'
import { LANGUAGE_STORAGE_KEY } from './i18n/config/i18n.config'
import { supportedLanguages } from './i18n/config/i18n.config'
import type { SupportedLanguage } from './i18n/types/i18n.types'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language.startsWith('ru') ? 'ru' : 'en'
})

export async function changeLanguage(language: SupportedLanguage) {
  await i18n.changeLanguage(language)
}

export { resources } from './i18n/data/i18n.data'
export { LANGUAGE_STORAGE_KEY } from './i18n/config/i18n.config'
export { supportedLanguages } from './i18n/config/i18n.config'
export type { SupportedLanguage } from './i18n/types/i18n.types'
export default i18n
