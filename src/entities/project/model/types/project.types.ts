export type ProjectCategory =
  'web' | 'mobile' | 'unity' | 'unigine' | 'xr-ar' | 'multiplayer'

export type ProjectActionType = 'live' | 'download' | 'external'

export type ProjectAction = {
  type: ProjectActionType
  label: string
  href: string
}

export type ProjectMedia =
  | { kind: 'image'; src: string; altKey: string }
  | { kind: 'youtube'; videoId: string; startSeconds?: number }
export type ProjectPeriod = { from: string; to?: string }

export type Project = {
  id: string
  titleKey: string
  category: ProjectCategory[]
  platformKey: string
  roleKey?: string
  descriptionKey: string
  pointsKey: string
  tech: string[]
  company: string
  period: ProjectPeriod
  actions?: ProjectAction[]
  media?: ProjectMedia[]
  featured?: boolean
}
