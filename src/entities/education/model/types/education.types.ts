export type EducationEntryKind = 'degree' | 'course'

export interface EducationEntry {
  id: string
  kind: EducationEntryKind
  translationKey: string
}
