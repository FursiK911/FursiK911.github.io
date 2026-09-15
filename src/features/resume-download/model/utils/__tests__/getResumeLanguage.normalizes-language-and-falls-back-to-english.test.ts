import { getResumeLanguage } from '../getResumeLanguage'

it('selects Russian variants and defaults missing or unsupported languages to English', () => {
  expect(getResumeLanguage('ru-RU')).toBe('ru')
  expect(getResumeLanguage('RU')).toBe('ru')
  expect(getResumeLanguage('en-GB')).toBe('en')
  expect(getResumeLanguage('de')).toBe('en')
  expect(getResumeLanguage()).toBe('en')
})
