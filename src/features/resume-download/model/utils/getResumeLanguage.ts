import type { ResumeLanguage } from '../types/resume.types'

export function getResumeLanguage(language?: string): ResumeLanguage {
  return language?.toLowerCase().split('-')[0] === 'ru' ? 'ru' : 'en'
}
