export interface ExperienceProject {
  id: string
  titleKey: string
  descriptionKey: string
  pointsKey: string
  url?: string
  linkLabel?: string
}

export interface ExperienceRolePhase {
  period: { from: string; to?: string }
  roleKey: string
  summaryKey: string
  achievementsKey: string
  technologies: string[]
  projects: ExperienceProject[]
}

export interface WorkExperience {
  id: string
  company: string
  period: { from: string; to?: string }
  roleKey: string
  timelineRoleKey: string
  summaryKey: string
  achievementsKey: string
  technologies: string[]
  logo?: string
  current?: boolean
  projects: ExperienceProject[]
  phases: ExperienceRolePhase[]
}

const project = (
  id: string,
  titleKey: string,
  descriptionKey: string,
  pointsKey: string,
  url?: string,
  linkLabel?: string,
): ExperienceProject => ({
  id,
  titleKey,
  descriptionKey,
  pointsKey,
  url,
  linkLabel,
})

export const workExperience: WorkExperience[] = [
  {
    id: 'yellow-element-early',
    company: 'YELLOW ELEMENT',
    period: { from: '10.2019', to: '02.2022' },
    roleKey: 'experience.yellowJuniorRole',
    timelineRoleKey: 'experience.yellowJuniorTimelineRole',
    summaryKey: 'experience.yellowJuniorProject',
    achievementsKey: 'experience.yellowJuniorAchievements',
    technologies: ['Unity', 'C#', 'React', 'Vue.js', 'Vuforia', 'AssetBundles'],
    projects: [
      project(
        'earth-dragons',
        'projects.earthDragons',
        'projects.earthDragonsDesc',
        'projects.earthDragonsPoints',
        'https://apps.apple.com/us/app/земля-драконів/id1563999015',
        'App Store',
      ),
      project(
        'aptive-education',
        'projects.aptiveEducation',
        'projects.aptiveEducationDesc',
        'projects.aptiveEducationPoints',
      ),
      project(
        'virtual-city',
        'projects.virtualCity',
        'projects.virtualCityDesc',
        'projects.virtualCityPoints',
      ),
      project(
        'villa-krim',
        'projects.villaKrim',
        'projects.villaKrimDesc',
        'projects.villaKrimPoints',
      ),
      project(
        'chudo-projector',
        'projects.chudoProjector',
        'projects.chudoProjectorDesc',
        'projects.chudoProjectorPoints',
      ),
      project(
        'ar-coloring',
        'projects.arColoring',
        'projects.arColoringDesc',
        'projects.arColoringPoints',
      ),
      project(
        'goons-balatroon',
        'projects.goonsBalatroon',
        'projects.goonsBalatroonDesc',
        'projects.goonsBalatroonPoints',
      ),
      project(
        'chudobooks',
        'projects.chudobooks',
        'projects.chudobooksDesc',
        'projects.chudobooksPoints',
      ),
      project(
        'chudo-floor',
        'projects.chudoFloor',
        'projects.chudoFloorDesc',
        'projects.chudoFloorPoints',
      ),
      project(
        'photon-fps',
        'projects.photonFps',
        'projects.photonFpsDesc',
        'projects.photonFpsPoints',
      ),
      project(
        'quest-room',
        'projects.questRoom',
        'projects.questRoomDesc',
        'projects.questRoomPoints',
      ),
    ],
    phases: [
      {
        period: { from: '10.2019', to: '02.2021' },
        roleKey: 'experience.yellowJuniorUnityPhaseRole',
        summaryKey: 'experience.yellowJuniorUnityPhaseSummary',
        achievementsKey: 'experience.yellowJuniorUnityPhaseAchievements',
        technologies: [
          'Unity',
          'C#',
          'Vuforia',
          'AssetBundles',
          'Android',
          'iOS',
        ],
        projects: [
          project(
            'earth-dragons',
            'projects.earthDragons',
            'projects.earthDragonsDesc',
            'projects.earthDragonsPoints',
            'https://apps.apple.com/us/app/земля-драконів/id1563999015',
            'App Store',
          ),
          project(
            'villa-krim',
            'projects.villaKrim',
            'projects.villaKrimDesc',
            'projects.villaKrimPoints',
          ),
          project(
            'chudo-projector',
            'projects.chudoProjector',
            'projects.chudoProjectorDesc',
            'projects.chudoProjectorPoints',
          ),
          project(
            'ar-coloring',
            'projects.arColoring',
            'projects.arColoringDesc',
            'projects.arColoringPoints',
          ),
          project(
            'goons-balatroon',
            'projects.goonsBalatroon',
            'projects.goonsBalatroonDesc',
            'projects.goonsBalatroonPoints',
          ),
          project(
            'chudobooks',
            'projects.chudobooks',
            'projects.chudobooksDesc',
            'projects.chudobooksPoints',
          ),
          project(
            'chudo-floor',
            'projects.chudoFloor',
            'projects.chudoFloorDesc',
            'projects.chudoFloorPoints',
          ),
          project(
            'photon-fps',
            'projects.photonFps',
            'projects.photonFpsDesc',
            'projects.photonFpsPoints',
          ),
          project(
            'quest-room',
            'projects.questRoom',
            'projects.questRoomDesc',
            'projects.questRoomPoints',
          ),
        ],
      },
      {
        period: { from: '02.2021', to: '02.2022' },
        roleKey: 'experience.yellowJuniorFrontendPhaseRole',
        summaryKey: 'experience.yellowJuniorFrontendPhaseSummary',
        achievementsKey: 'experience.yellowJuniorFrontendPhaseAchievements',
        technologies: [
          'React',
          'Vue.js',
          'Vuex',
          'GraphQL',
          'Apollo Client',
          'Chart.js',
        ],
        projects: [
          project(
            'aptive-education',
            'projects.aptiveEducation',
            'projects.aptiveEducationDesc',
            'projects.aptiveEducationPoints',
          ),
          project(
            'virtual-city',
            'projects.virtualCity',
            'projects.virtualCityDesc',
            'projects.virtualCityPoints',
          ),
        ],
      },
    ],
  },
  {
    id: 'it-tab',
    company: 'IT TAB',
    period: { from: '01.2023', to: '09.2023' },
    roleKey: 'experience.itTabRole',
    timelineRoleKey: 'experience.itTabTimelineRole',
    summaryKey: 'experience.itTabProject',
    achievementsKey: 'experience.itTabAchievements',
    technologies: [
      'React',
      'JavaScript',
      'Unigine',
      'C#',
      'SteamVR',
      'Astra Linux',
    ],
    projects: [
      project(
        'korobka',
        'projects.korobka',
        'projects.korobkaDesc',
        'projects.korobkaPoints',
      ),
      project(
        'doors-cms',
        'projects.doorsCms',
        'projects.doorsCmsDesc',
        'projects.doorsCmsPoints',
      ),
      project(
        'rosatom',
        'projects.rosatom',
        'projects.rosatomDesc',
        'projects.rosatomPoints',
        'https://youtu.be/nnmgHldVKMg',
        'YouTube',
      ),
    ],
    phases: [
      {
        period: { from: '01.2023', to: '04.2023' },
        roleKey: 'experience.itTabFrontendPhaseRole',
        summaryKey: 'experience.itTabFrontendPhaseSummary',
        achievementsKey: 'experience.itTabFrontendPhaseAchievements',
        technologies: [
          'React',
          'JavaScript',
          'TypeScript',
          'Redux',
          'React Query',
          'Ant Design',
        ],
        projects: [
          project(
            'korobka',
            'projects.korobka',
            'projects.korobkaDesc',
            'projects.korobkaPoints',
          ),
          project(
            'doors-cms',
            'projects.doorsCms',
            'projects.doorsCmsDesc',
            'projects.doorsCmsPoints',
          ),
        ],
      },
      {
        period: { from: '04.2023', to: '09.2023' },
        roleKey: 'experience.itTabVrPhaseRole',
        summaryKey: 'experience.itTabVrPhaseSummary',
        achievementsKey: 'experience.itTabVrPhaseAchievements',
        technologies: [
          'Unigine',
          'C#',
          'SteamVR',
          'Astra Linux',
          'HTC VIVE Pro',
          'Custom VOIP',
        ],
        projects: [
          project(
            'rosatom',
            'projects.rosatom',
            'projects.rosatomDesc',
            'projects.rosatomPoints',
            'https://youtu.be/nnmgHldVKMg',
            'YouTube',
          ),
        ],
      },
    ],
  },
  {
    id: 'cup',
    company: 'ООО ЦУП',
    period: { from: '09.2023', to: '07.2025' },
    roleKey: 'experience.cupRole',
    timelineRoleKey: 'experience.cupTimelineRole',
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
      project(
        'mychess-web',
        'projects.mychessWeb',
        'projects.mychessWebDesc',
        'projects.mychessWebPoints',
        'https://info.mychess.app/',
        'Website',
      ),
      project(
        'mychessvr',
        'projects.mychessvr',
        'projects.mychessvrDesc',
        'projects.mychessvrPoints',
        'https://store.steampowered.com/app/3468250/myChess_VR',
        'Steam',
      ),
      project(
        'drilling-vr',
        'projects.drilling',
        'projects.drillingDesc',
        'projects.drillingPoints',
        'https://youtu.be/LLJtFASLiHM',
        'YouTube',
      ),
      project(
        'cat-citten',
        'projects.catCitten',
        'projects.catCittenDesc',
        'projects.catCittenPoints',
      ),
      project(
        'fuel-cms',
        'projects.fuelCms',
        'projects.fuelCmsDesc',
        'projects.fuelCmsPoints',
      ),
    ],
    phases: [
      {
        period: { from: '09.2023', to: '10.2024' },
        roleKey: 'experience.cupFrontendPhaseRole',
        summaryKey: 'experience.cupFrontendPhaseSummary',
        achievementsKey: 'experience.cupFrontendPhaseAchievements',
        technologies: [
          'React',
          'TypeScript',
          'Redux Toolkit',
          'React Query',
          'Socket.io',
          'Mantine',
        ],
        projects: [
          project(
            'mychess-web',
            'projects.mychessWeb',
            'projects.mychessWebDesc',
            'projects.mychessWebPoints',
            'https://info.mychess.app/',
            'Website',
          ),
        ],
      },
      {
        period: { from: '10.2024', to: '02.2025' },
        roleKey: 'experience.cupUnityPhaseRole',
        summaryKey: 'experience.cupUnityPhaseSummary',
        achievementsKey: 'experience.cupUnityPhaseAchievements',
        technologies: [
          'Unity',
          'C#',
          'XR Interaction Toolkit',
          'OpenXR',
          'Final IK',
          'Netcode for GameObjects',
        ],
        projects: [
          project(
            'mychessvr',
            'projects.mychessvr',
            'projects.mychessvrDesc',
            'projects.mychessvrPoints',
            'https://store.steampowered.com/app/3468250/myChess_VR',
            'Steam',
          ),
          project(
            'drilling-vr',
            'projects.drilling',
            'projects.drillingDesc',
            'projects.drillingPoints',
            'https://youtu.be/LLJtFASLiHM',
            'YouTube',
          ),
        ],
      },
      {
        period: { from: '02.2025', to: '07.2025' },
        roleKey: 'experience.cupProductFrontendPhaseRole',
        summaryKey: 'experience.cupProductFrontendPhaseSummary',
        achievementsKey: 'experience.cupProductFrontendPhaseAchievements',
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'React Query',
          'Mantine',
        ],
        projects: [
          project(
            'cat-citten',
            'projects.catCitten',
            'projects.catCittenDesc',
            'projects.catCittenPoints',
          ),
          project(
            'fuel-cms',
            'projects.fuelCms',
            'projects.fuelCmsDesc',
            'projects.fuelCmsPoints',
          ),
        ],
      },
    ],
  },
  {
    id: 'yellow-element-middle',
    company: 'YELLOW ELEMENT',
    period: { from: '09.2025', to: '03.2026' },
    roleKey: 'experience.yellowUnityRole',
    timelineRoleKey: 'experience.yellowUnityTimelineRole',
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
      project(
        'mobile-rts',
        'projects.mobileRts',
        'projects.mobileRtsDesc',
        'projects.mobileRtsPoints',
      ),
      project(
        'vulkan-verse',
        'projects.vulkanVerse',
        'projects.vulkanVerseDesc',
        'projects.vulkanVersePoints',
        'https://vv.vulcanforged.com/',
        'Website',
      ),
    ],
    phases: [
      {
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
          project(
            'mobile-rts',
            'projects.mobileRts',
            'projects.mobileRtsDesc',
            'projects.mobileRtsPoints',
          ),
          project(
            'vulkan-verse',
            'projects.vulkanVerse',
            'projects.vulkanVerseDesc',
            'projects.vulkanVersePoints',
            'https://vv.vulcanforged.com/',
            'Website',
          ),
        ],
      },
    ],
  },
  {
    id: 'too-me-group',
    company: 'TOO ME GROUP',
    period: { from: '03.2026' },
    roleKey: 'experience.meRole',
    timelineRoleKey: 'experience.meTimelineRole',
    summaryKey: 'experience.meProject',
    achievementsKey: 'experience.meAchievements',
    technologies: [
      'Unity',
      'C#',
      'VR',
      'Meta Quest',
      'XR Interaction Toolkit',
      'Addressables',
    ],
    current: true,
    projects: [
      project(
        'industrial-vr',
        'projects.industrial',
        'projects.industrialDesc',
        'projects.industrialPoints',
      ),
    ],
    phases: [
      {
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
          'Addressables',
        ],
        projects: [
          project(
            'industrial-vr',
            'projects.industrial',
            'projects.industrialDesc',
            'projects.industrialPoints',
          ),
        ],
      },
    ],
  },
]
