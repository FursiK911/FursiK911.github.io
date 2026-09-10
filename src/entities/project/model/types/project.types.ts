export type ProjectCategory =
  'web' | 'mobile' | 'unity' | 'unigine' | 'xr-ar' | 'multiplayer'

export type ProjectActionType = 'live' | 'download' | 'external'

export type ProjectAction = {
  type: ProjectActionType
  label: string
  href: string
  labelKey?: string
  unavailableReasonKey?: string
}

export type ProjectMedia =
  | { kind: 'image'; src: string; altKey: string }
  | { kind: 'youtube'; videoId: string; startSeconds?: number }

export type ProjectDirection = 'web' | 'games-apps' | 'vr-training'

export type ProjectCardTag =
  | 'React'
  | 'Vue'
  | 'Unigine'
  | 'Unity'
  | 'Unreal Engine'
  | 'Flutter'
  | 'VR'
  | 'AR'
  | 'Mobile'
  | 'TypeScript'
  | 'OpenCV'
  | 'Photon'

export type ProjectCardPresentation = {
  direction: ProjectDirection
  teaserKey: string
  tags: ProjectCardTag[]
  previewImages: Array<Extract<ProjectMedia, { kind: 'image' }>>
}
export type ProjectPeriod = { from: string; to?: string }

export type ProjectMetric = {
  label: string
  value: string
}

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
  card: ProjectCardPresentation
  metricsKey?: string
  featured?: boolean
}
