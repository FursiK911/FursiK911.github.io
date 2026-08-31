export type Direction = {
  id: 'web' | 'mobile' | 'unity' | 'unigine' | 'xr-ar' | 'realtime'
  titleKey: string
  descriptionKey: string
  proofKey: string
}

export const directions: Direction[] = [
  {
    id: 'web',
    titleKey: 'web',
    descriptionKey: 'webDesc',
    proofKey: 'webProof',
  },
  {
    id: 'mobile',
    titleKey: 'mobile',
    descriptionKey: 'mobileDesc',
    proofKey: 'mobileProof',
  },
  {
    id: 'unity',
    titleKey: 'unity',
    descriptionKey: 'unityDesc',
    proofKey: 'unityProof',
  },
  {
    id: 'unigine',
    titleKey: 'unigine',
    descriptionKey: 'unigineDesc',
    proofKey: 'unigineProof',
  },
  {
    id: 'xr-ar',
    titleKey: 'xrAr',
    descriptionKey: 'xrArDesc',
    proofKey: 'xrArProof',
  },
  {
    id: 'realtime',
    titleKey: 'realtime',
    descriptionKey: 'realtimeDesc',
    proofKey: 'realtimeProof',
  },
]
