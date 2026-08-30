export interface ExperienceProject {
  id: string
  titleKey: string
  descriptionKey: string
  pointsKey: string
  url?: string
  linkLabel?: string
}

export interface WorkExperience {
  id: string
  company: string
  period: {
    from: string
    to?: string
  }
  roleKey: string
  summaryKey: string
  achievementsKey: string
  technologies: string[]
  logo?: string
  current?: boolean
  projects: ExperienceProject[]
}

export const workExperience: WorkExperience[] = [
  {
    id: 'yellow-element-early',
    company: 'YELLOW ELEMENT',
    period: { from: '10.2019', to: '02.2022' },
    roleKey: 'experience.yellowJuniorRole',
    summaryKey: 'experience.yellowJuniorProject',
    achievementsKey: 'experience.yellowJuniorAchievements',
    technologies: ['Unity', 'C#', 'Vuforia', 'AssetBundles', 'Android', 'iOS'],
    projects: [
      {
        id: 'earth-dragons',
        titleKey: 'projects.earthDragons',
        descriptionKey: 'projects.earthDragonsDesc',
        pointsKey: 'projects.earthDragonsPoints',
        url: 'https://apps.apple.com/us/app/земля-драконів/id1563999015',
        linkLabel: 'App Store',
      },
    ],
  },
  {
    id: 'it-tab',
    company: 'IT TAB',
    period: { from: '01.2023', to: '09.2023' },
    roleKey: 'experience.itTabRole',
    summaryKey: 'experience.itTabProject',
    achievementsKey: 'experience.itTabAchievements',
    technologies: [
      'Unity',
      'C#',
      'VR',
      'XR Interaction Toolkit',
      'Netcode for GameObjects',
      'Final IK',
    ],
    projects: [
      {
        id: 'rosatom',
        titleKey: 'projects.rosatom',
        descriptionKey: 'projects.rosatomDesc',
        pointsKey: 'projects.rosatomPoints',
        url: 'https://youtu.be/nnmgHldVKMg',
        linkLabel: 'YouTube',
      },
    ],
  },
  {
    id: 'cup',
    company: 'ООО ЦУП',
    period: { from: '09.2023', to: '09.2025' },
    roleKey: 'experience.cupRole',
    summaryKey: 'experience.cupProject',
    achievementsKey: 'experience.cupAchievements',
    technologies: [
      'React',
      'TypeScript',
      'Unity',
      'C#',
      'XR Interaction Toolkit',
      'Stockfish',
    ],
    projects: [
      {
        id: 'mychess-web',
        titleKey: 'projects.mychessWeb',
        descriptionKey: 'projects.mychessWebDesc',
        pointsKey: 'projects.mychessWebPoints',
        url: 'https://info.mychess.app/',
        linkLabel: 'Website',
      },
      {
        id: 'mychessvr',
        titleKey: 'projects.mychessvr',
        descriptionKey: 'projects.mychessvrDesc',
        pointsKey: 'projects.mychessvrPoints',
        url: 'https://store.steampowered.com/app/3468250/myChess_VR',
        linkLabel: 'Steam',
      },
      {
        id: 'drilling-vr',
        titleKey: 'projects.drilling',
        descriptionKey: 'projects.drillingDesc',
        pointsKey: 'projects.drillingPoints',
        url: 'https://youtu.be/LLJtFASLiHM',
        linkLabel: 'YouTube',
      },
    ],
  },
  {
    id: 'yellow-element-middle',
    company: 'YELLOW ELEMENT',
    period: { from: '09.2025', to: '03.2026' },
    roleKey: 'experience.yellowUnityRole',
    summaryKey: 'experience.yellowUnityProject',
    achievementsKey: 'experience.yellowUnityAchievements',
    technologies: [
      'Unity',
      'C#',
      'Mirror',
      'PlayFab',
      'Firebase',
      'Azure Functions',
    ],
    projects: [
      {
        id: 'mobile-rts',
        titleKey: 'projects.mobileRts',
        descriptionKey: 'projects.mobileRtsDesc',
        pointsKey: 'projects.mobileRtsPoints',
      },
      {
        id: 'vulkan-verse',
        titleKey: 'projects.vulkanVerse',
        descriptionKey: 'projects.vulkanVerseDesc',
        pointsKey: 'projects.vulkanVersePoints',
        url: 'https://vv.vulcanforged.com/',
        linkLabel: 'Website',
      },
    ],
  },
  {
    id: 'too-me-group',
    company: 'TOO ME GROUP',
    period: { from: '03.2026' },
    roleKey: 'experience.meRole',
    summaryKey: 'experience.meProject',
    achievementsKey: 'experience.meAchievements',
    technologies: [
      'Unity',
      'C#',
      'VR',
      'Meta Quest',
      'XR Interaction Toolkit',
      'Zenject',
      'UniTask',
      'DOTween',
      'Addressables',
      'Git',
    ],
    current: true,
    projects: [
      {
        id: 'industrial-vr',
        titleKey: 'projects.industrial',
        descriptionKey: 'projects.industrialDesc',
        pointsKey: 'projects.industrialPoints',
      },
    ],
  },
]
