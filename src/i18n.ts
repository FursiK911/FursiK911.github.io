import i18n, { type Resource } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const supportedLanguages = ['ru', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]
export const LANGUAGE_STORAGE_KEY = 'portfolio-language'

export const resources = {
  ru: {
    translation: {
      scaffold: 'Vite project scaffold',
    },
  },
  en: {
    translation: {
      scaffold: 'Vite project scaffold',
    },
  },
} satisfies Resource

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export async function changeLanguage(language: SupportedLanguage) {
  await i18n.changeLanguage(language)
}

export default i18n
