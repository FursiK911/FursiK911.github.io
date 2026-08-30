export type ProjectCategory = 'vr' | 'games' | 'ar' | 'multiplayer' | 'web'

export type ProjectLink = { label: string; href: string }
export type ProjectMedia = { kind: 'image' | 'video'; src: string; alt: string }
export type Project = {
  id: string
  titleKey: string
  category: ProjectCategory[]
  platformKey: string
  roleKey?: string
  descriptionKey: string
  pointsKey: string
  tech: string[]
  links?: ProjectLink[]
  media?: ProjectMedia[]
  featured?: boolean
}

export const cvUrl = '/cv/Dmitry-Fursov-Unity-Developer-CV.pdf'

export const projects: Project[] = [
  {
    id: 'mychessvr',
    titleKey: 'mychessvr',
    category: ['vr'],
    platformKey: 'platformPcVrSteam',
    roleKey: 'soloUnity',
    descriptionKey: 'mychessvrDesc',
    pointsKey: 'mychessvrPoints',
    tech: [
      'Unity',
      'C#',
      'XR Interaction Toolkit',
      'OpenXR',
      'Final IK',
      'Stockfish',
    ],
    links: [
      {
        label: 'Steam',
        href: 'https://store.steampowered.com/app/3468250/myChess_VR',
      },
    ],
    featured: true,
  },
  {
    id: 'industrial-vr',
    titleKey: 'industrial',
    category: ['vr'],
    platformKey: 'platformMetaQuest',
    roleKey: 'middleVr',
    descriptionKey: 'industrialDesc',
    pointsKey: 'industrialPoints',
    tech: [
      'Unity',
      'C#',
      'Meta Quest',
      'XR Interaction Toolkit',
      'Zenject',
      'Addressables',
    ],
    featured: true,
  },
  {
    id: 'drilling-vr',
    titleKey: 'drilling',
    category: ['vr', 'multiplayer'],
    platformKey: 'platformVr',
    roleKey: 'soloUnity',
    descriptionKey: 'drillingDesc',
    pointsKey: 'drillingPoints',
    tech: [
      'Unity',
      'C#',
      'XR Interaction Toolkit',
      'Netcode for GameObjects',
      'Final IK',
      'Blender',
    ],
    links: [{ label: 'YouTube', href: 'https://youtu.be/LLJtFASLiHM' }],
    featured: true,
  },
  {
    id: 'rosatom',
    titleKey: 'rosatom',
    category: ['vr', 'multiplayer'],
    platformKey: 'platformViveAstra',
    roleKey: 'soloFunctionality',
    descriptionKey: 'rosatomDesc',
    pointsKey: 'rosatomPoints',
    tech: ['Unigine', 'C#', 'SteamVR', 'Astra Linux', 'Custom VOIP'],
    links: [{ label: 'YouTube', href: 'https://youtu.be/nnmgHldVKMg' }],
  },
  {
    id: 'mobile-rts',
    titleKey: 'mobileRts',
    category: ['games', 'multiplayer'],
    platformKey: 'platformMobile',
    roleKey: 'middleUnity',
    descriptionKey: 'mobileRtsDesc',
    pointsKey: 'mobileRtsPoints',
    tech: ['Unity', 'C#', 'Mirror', 'PlayFab', 'Firebase', 'Azure Functions'],
  },
  {
    id: 'earth-dragons',
    titleKey: 'earthDragons',
    category: ['ar'],
    platformKey: 'platformMobile',
    roleKey: 'juniorUnity',
    descriptionKey: 'earthDragonsDesc',
    pointsKey: 'earthDragonsPoints',
    tech: ['Unity', 'C#', 'Vuforia', 'AssetBundles', 'Android', 'iOS'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/земля-драконів/id1563999015',
      },
      {
        label: 'YouTube',
        href: 'https://youtu.be/iXrNLl6rpXI?si=cJY1EeP8mlEvtxuc&t=483',
      },
    ],
  },
  {
    id: 'vulkan-verse',
    titleKey: 'vulkanVerse',
    category: ['games'],
    platformKey: 'platformPcWeb',
    roleKey: 'unityDeveloper',
    descriptionKey: 'vulkanVerseDesc',
    pointsKey: 'vulkanVersePoints',
    tech: ['Unity', 'C#', 'Photon', 'Addressables', 'Zenject', 'UniTask'],
    links: [{ label: 'Website', href: 'https://vv.vulcanforged.com/' }],
  },
  {
    id: 'mychess-web',
    titleKey: 'mychessWeb',
    category: ['web'],
    platformKey: 'platformWeb',
    roleKey: 'middleFrontend',
    descriptionKey: 'mychessWebDesc',
    pointsKey: 'mychessWebPoints',
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'Socket.io',
      'Vite',
    ],
    links: [
      { label: 'Website', href: 'https://info.mychess.app/' },
      { label: 'YouTube', href: 'https://www.youtube.com/watch?v=t-PDCpjdJvs' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'UNITY & GAME DEVELOPMENT',
    skills: [
      'Unity',
      'C#',
      'URP',
      'ScriptableObject',
      'Addressables',
      'DOTween',
      'UniTask',
      'Zenject',
    ],
  },
  {
    title: 'XR / VR / AR',
    skills: [
      'Meta Quest',
      'OpenXR',
      'XR Interaction Toolkit',
      'SteamVR',
      'Final IK',
      'Vuforia',
      'AR',
    ],
  },
  {
    title: 'MULTIPLAYER & BACKEND',
    skills: [
      'Mirror',
      'Photon',
      'Netcode for GameObjects',
      'PlayFab',
      'Firebase',
      'Azure Functions',
    ],
  },
  {
    title: 'PLATFORMS',
    skills: ['Android', 'iOS', 'Windows', 'PC VR', 'Astra Linux'],
  },
  {
    title: 'WEB',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux Toolkit',
      'React Query',
      'Socket.io',
      'Vite',
    ],
  },
  { title: 'OTHER', skills: ['Git', 'Blender', 'OpenCV', 'Unigine'] },
]
