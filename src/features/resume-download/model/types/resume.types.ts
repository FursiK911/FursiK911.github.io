export type ResumeLanguage = 'ru' | 'en'

export interface ResumeDocument {
  id: 'unity' | 'frontend'
  title: string
  files: Record<ResumeLanguage, string>
}
