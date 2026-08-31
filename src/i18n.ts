import i18n, { type Resource } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const supportedLanguages = ['ru', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]
export const LANGUAGE_STORAGE_KEY = 'portfolio-language'

export const resources = {
  ru: {
    translation: {
      language: 'RU',
      header: {
        name: 'Дмитрий Фурсов',
        homeLabel: 'Главная — Дмитрий Фурсов',
        resume: 'СКАЧАТЬ РЕЗЮМЕ',
      },
      nav: {
        projects: 'Проекты',
        about: 'Обо мне',
        experience: 'Опыт',
        stack: 'Стек',
        contact: 'Контакты',
      },
      intro: [
        'ИНИЦИАЛИЗАЦИЯ ПОРТФОЛИО...',
        'ЗАГРУЗКА WEB-МОДУЛЕЙ...',
        'MOBILE SYSTEMS ..... OK',
        'UNITY / UNIGINE .... OK',
        'REALTIME ........... OK',
        'ПРОЕКТЫ ЗАГРУЖЕНЫ',
        'ГОТОВО.',
      ],
      loader: {
        ariaLabel: 'Терминал поиска сотрудников',
        title: 'БАЗА ДАННЫХ СОТРУДНИКОВ',
        queryLabel: 'ПОИСКОВОЙ ЗАПРОС',
        find: 'НАЙТИ',
        candidates: 'Проверяемые кандидаты',
        checking: 'ПРОВЕРКА',
        noMatch: 'НЕТ СОВПАДЕНИЯ',
        verified: 'ПОДТВЕРЖДЕНО',
        skip: 'ENTER / SPACE — ПРОПУСТИТЬ',
        status: {
          initializing: 'ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...',
          query: 'ФОРМИРОВАНИЕ ЗАПРОСА...',
          scanning: 'СКАНИРОВАНИЕ БАЗЫ...',
          match: 'СОВПАДЕНИЕ НАЙДЕНО',
          loaded: 'ПРОФИЛЬ ЗАГРУЖЕН',
        },
        result: {
          kicker: 'ПОИСК СОТРУДНИКА',
          title: 'СОВПАДЕНИЕ НАЙДЕНО',
          role: 'SOFTWARE DEVELOPER',
          verified: 'ЛИЧНОСТЬ ПОДТВЕРЖДЕНА',
        },
        debug: {
          title: 'СКОРОСТЬ DEBUG',
          pause: 'Поставить загрузочную анимацию на паузу',
          resume: 'Продолжить загрузочную анимацию',
          pauseShort: 'ПАУЗА',
          resumeShort: 'ПРОДОЛЖИТЬ',
        },
      },
      hero: {
        eyebrow: 'PLAYER_PROFILE',
        hi: 'ПРИВЕТ, Я',
        name: 'ДМИТРИЙ ФУРСОВ',
        role: 'SOFTWARE DEVELOPER',
        roles: [
          'Software Developer',
          'Frontend Developer',
          'Fullstack Developer',
          'Mobile Developer',
          'Unity Developer',
          'Unigine Developer',
        ],
        body: 'Software Developer с почти 6-летним опытом в web, mobile, realtime-системах и интерактивных продуктах — от frontend и CMS до Unity, Unigine и XR.',
        terminal: 'currently_building: cross-platform software systems_',
        projects: 'СМОТРЕТЬ ПРОЕКТЫ',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
        contact: 'СВЯЗАТЬСЯ',
        portraitAlt: 'Дмитрий Фурсов, Software Developer',
        stats: [
          '6+ ЛЕТ В РАЗРАБОТКЕ',
          'WEB / FRONTEND',
          'MOBILE ANDROID / IOS',
          'UNITY / C#',
          'UNIGINE / C#',
          'REALTIME / BACKEND',
        ],
      },
      sections: {
        projects: 'SELECTED WORK',
        about: 'ABOUT',
        experience: 'EXPERIENCE LOG',
        stack: 'TECH STACK',
        contact: 'CONTACT CHANNEL',
      },
      experience: {
        intro: 'PAST · CURRENT · NEXT',
        present: 'НАСТОЯЩЕЕ ВРЕМЯ',
        moreDetails: 'ПОДРОБНЕЕ',
        lessDetails: 'СВЕРНУТЬ',
        detailsLabel: 'CAREER_DETAILS',
        timelineLabel: 'Карьерная хронология',
        achievementsLabel: 'КЛЮЧЕВЫЕ ЗАДАЧИ',
        projectsLabel: 'ПРОЕКТЫ',
        privateProject: 'Закрытый проект',
        nextLabel: 'ДАЛЬШЕ',
        nextTitle: 'Новый проект?',
        nextCta: 'НАНЯТЬ МЕНЯ',
        meTimelineRole: 'VR-разработчик',
        meRole: 'Middle Unity / VR Developer',
        meProject: 'Industrial VR training simulations · Meta Quest',
        meAchievements: [
          'Разработка VR-тренажёров для Meta Quest 2 / 3S / 3',
          'Интерактивные сценарии, проверка действий и режимы обучения',
          'Расширение production-кода и поддержка локализации',
        ],
        yellowUnityRole: 'Middle Unity Developer',
        yellowUnityTimelineRole: 'Unity-разработчик',
        yellowUnityProject: 'Mobile RTS · Vulkan Verse',
        yellowUnityAchievements: [
          'Сетевые PvP-механики, турниры и replay-система',
          'Интеграции Firebase, PlayFab и Azure Functions',
          'Pathfinding AI и production UI для Android / iOS',
        ],
        cupRole: 'Frontend / Unity Developer',
        cupTimelineRole: 'Frontend / Unity Developer',
        cupProject: 'myChess · MyChessVR · product interfaces',
        cupAchievements: [
          'Web-платформа с realtime-играми, турнирами и анализом Stockfish',
          'Полная VR-реализация MyChessVR с IK-взаимодействиями',
          'Разработка multiplayer VR-демо для промышленных сценариев',
        ],
        itTabRole: 'Middle Frontend / Unigine Developer',
        itTabTimelineRole: 'Frontend / Unigine разработчик',
        itTabProject: 'React projects · РосАтом VR-тренажёр',
        itTabAchievements: [
          'Frontend-разработка сайта и CMS-проектов',
          'Единоличная разработка функционала VR-тренажёра РосАтом',
          'Client-server, multiplayer/co-op, instructor mode и custom VOIP',
        ],
        yellowJuniorUnityPhaseRole: 'Intern / Junior Unity Developer',
        yellowJuniorUnityPhaseSummary:
          'AR applications and interactive installations',
        yellowJuniorUnityPhaseAchievements: [
          'Image tracking, OpenCV and Photon integrations',
          'AssetBundle delivery, caching and content updates',
          'Unity features for mobile, desktop and WebGL',
        ],
        yellowJuniorFrontendPhaseRole: 'Junior Frontend Developer',
        yellowJuniorFrontendPhaseSummary:
          'Education portals and interactive web interfaces',
        yellowJuniorFrontendPhaseAchievements: [
          'Student, teacher and parent portals',
          'Authentication, forms, refresh tokens and pagination',
          'Charts, workspaces and Unreal Pixel Streaming integration',
        ],
        itTabFrontendPhaseRole: 'Middle Frontend Developer',
        itTabFrontendPhaseSummary: 'Korobka website and door retailer CMS',
        itTabFrontendPhaseAchievements: [
          'Implemented interfaces from design',
          'Built catalog, order and content administration',
          'Used React, Redux, React Query and Ant Design',
        ],
        itTabVrPhaseRole: 'Middle VR / Unigine Developer',
        itTabVrPhaseSummary: 'РосАтом VR training simulator',
        itTabVrPhaseAchievements: [
          'Delivered all simulator functionality independently',
          'Built training, examination, multiplayer and cooperative modes',
          'Implemented instructor monitoring, session recording and custom VOIP',
        ],
        cupFrontendPhaseRole: 'Middle Frontend Developer',
        cupFrontendPhaseSummary: 'myChess online chess platform',
        cupFrontendPhaseAchievements: [
          'Realtime games, tournaments, communities and chats',
          'Stockfish analysis, Chessbox and responsive UI',
          'React/TypeScript architecture with Socket.io',
        ],
        cupUnityPhaseRole: 'Middle Unity / VR Developer',
        cupUnityPhaseSummary: 'MyChessVR and drilling training demo',
        cupUnityPhaseAchievements: [
          'Full VR chess product delivered independently',
          'IK interactions, AI commentary and puzzle modes',
          'Multiplayer drilling workflows with Netcode',
        ],
        cupProductFrontendPhaseRole: 'Middle Frontend Developer',
        cupProductFrontendPhaseSummary:
          'E-commerce website and fuel supplier CMS',
        cupProductFrontendPhaseAchievements: [
          'Product browsing, filtering, ordering and B2B/B2C accounts',
          'CMS for supplies, refueling records and pricing',
          'SEO, forms, validation and responsive UI',
        ],
        yellowJuniorRole:
          'Intern / Junior Unity Developer → Junior Frontend Developer',
        yellowJuniorTimelineRole: 'Unity / Frontend разработчик',
        yellowJuniorProject: 'AR applications · Web platforms',
        yellowJuniorAchievements: [
          'AR-приложения с трекингом изображений и интерактивными персонажами',
          'AssetBundle-доставка, кэширование и обновление контента',
          'Первые production-задачи в Unity и frontend-разработке',
        ],
      },
      roles: {
        soloUnity: 'Единственный Unity-разработчик',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Разработчик функциональности',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
        juniorFrontend: 'Junior Frontend Developer',
        testing: 'Manual QA / Testing',
        unityDeveloper: 'Unity Developer',
        middleFrontend: 'Middle Frontend Developer',
      },
      platforms: {
        platformPcVrSteam: 'PC VR / Steam',
        platformMetaQuest: 'Meta Quest 2 / 3S / 3',
        platformVr: 'VR',
        platformViveAstra: 'HTC VIVE Pro / Astra Linux',
        platformMobile: 'Android / iOS',
        platformPcWeb: 'PC / Web',
        platformWeb: 'Web',
        platformWindows: 'Windows',
        platformWebGl: 'WebGL',
      },
      projects: {
        intro:
          'Системы, симуляции, игры и интерфейсы, созданные на Unity, XR и web.',
        all: 'ВСЕ',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        'xr-ar': 'XR / AR',
        realtime: 'REALTIME',
        view: 'VIEW PROJECT',
        details: 'ДЕТАЛИ ПРОЕКТА',
        role: 'РОЛЬ',
        platform: 'ПЛАТФОРМА',
        company: 'КОМАНДА / КОМПАНИЯ',
        period: 'ПЕРИОД',
        overview: 'ОБЗОР',
        worked: 'ЧТО СДЕЛАНО',
        close: 'ЗАКРЫТЬ',
        mychessvr: 'MyChessVR',
        industrial: 'Industrial VR Training Simulations',
        drilling: 'VR Drilling Training Demo',
        rosatom: 'Industrial VR Training Simulator',
        mobileRts: 'Mobile Multiplayer RTS',
        earthDragons: 'Earth of Dragons',
        vulkanVerse: 'Vulkan Verse — Tartarus',
        mychessWeb: 'myChess',
        mychessvrDesc:
          'A complete VR chess experience with multiple game modes, puzzles, an AI opponent, IK interactions and Stockfish move analysis.',
        industrialDesc:
          'Interactive industrial training scenarios with step-by-step operations, action validation, hints, error handling and realistic equipment interactions.',
        drillingDesc:
          'A multiplayer VR training demo reproducing drilling equipment workflows and operator interactions.',
        rosatomDesc:
          'A VR training simulator for industrial equipment operation with single-player, multiplayer and instructor workflows.',
        mobileRtsDesc:
          'A mobile RTS with real-time PvP, tournament systems, server-driven events and multiplayer infrastructure.',
        earthDragonsDesc:
          'A mobile AR application where physical cards unlock animated collectible dragons and interactive content.',
        vulkanVerseDesc:
          'Gameplay mechanics and client-server functionality developed for the Tartarus location of Vulkan Verse.',
        mychessWebDesc:
          'An online chess platform with real-time games, tournaments, analysis, puzzles and community functionality.',
        mychessvrPoints: [
          'Full Unity implementation as sole developer',
          'Classic, Rapid and Blitz modes with configurable AI',
          'Puzzle system with dozens of task types',
          'Stockfish-powered Play with Teacher mode',
          'Final IK avatars, hand interactions and uLipSync',
          'Three additive-loaded environments',
        ],
        industrialPoints: [
          'Interactive training and examination modes',
          'Equipment and tool interaction with validation',
          'Visual, audio and VFX feedback',
          'Localization and production-code extension',
        ],
        drillingPoints: [
          'Full functional demo developed independently',
          'Interactive drilling equipment workflows',
          'Netcode multiplayer synchronization',
          'Blender assets and Final IK interactions',
        ],
        rosatomPoints: [
          'Training, examination and cooperative scenarios',
          'Instructor monitoring interface',
          'Custom VOIP and avatar interaction',
          'HTC VIVE Pro and Astra Linux support',
        ],
        mobileRtsPoints: [
          'Mirror client-server PvP interaction',
          'Replay system for battles',
          'Firebase, PlayFab and Azure Functions integrations',
          'Olympic-format tournaments and pathfinding AI',
        ],
        earthDragonsPoints: [
          'Vuforia image tracking and animated AR characters',
          'Dynamic AssetBundle delivery and caching',
          'Hash-based content updates with retry handling',
          'Collectible characters, runner and social sharing',
        ],
        vulkanVersePoints: [
          'Gameplay mechanics for the Tartarus location',
          'Client-server functionality with Photon',
          'Addressables, Zenject and UniTask integration',
        ],
        mychessWebPoints: [
          'Real-time chess games and simultaneous sessions',
          'Tournament formats and chess puzzles',
          'Stockfish analysis modes and Chessbox',
          'React/TypeScript frontend architecture',
        ],
        catCitten: 'Cat-citten company website',
        catCittenDesc:
          'E-commerce website with product browsing, category filtering, ordering and separate B2B/B2C accounts.',
        catCittenPoints: [
          'Implemented responsive UI from design',
          'Built catalog, filtering and ordering flows',
          'Added account interfaces and SEO improvements',
        ],
        aptiveEducation: 'Aptive Education',
        aptiveEducationDesc:
          'Education platform for students, teachers and parents with learning workflows and progress tracking.',
        aptiveEducationPoints: [
          'Built news, forum, workspaces and assignment flows',
          'Implemented authentication, refresh tokens and password recovery',
          'Created progress dashboards, charts and avatar upload/cropping',
        ],
        virtualCity: 'Virtual city for apartment sales',
        virtualCityDesc:
          'React interface connected to an Unreal Engine Pixel Streaming experience for exploring apartments.',
        virtualCityPoints: [
          'Integrated Unreal Engine Pixel Streaming',
          'Forwarded selection, clicks and furniture placement to the 3D scene',
          'Connected web UI state with the interactive application',
        ],
        fuelCms: 'Fuel supplier CMS',
        fuelCmsDesc:
          'Administrative system for supplies, refueling records and price calculations.',
        fuelCmsPoints: [
          'Developed supply and refueling management screens',
          'Implemented price calculation interfaces',
          'Built the React UI with Mantine and React Query',
        ],
        korobka: 'Korobka transport company website',
        korobkaDesc:
          'Responsive transport company website implemented from a design system.',
        korobkaPoints: [
          'Translated the design into reusable React components',
          'Implemented navigation and responsive layouts',
          'Used Ant Design for interface primitives',
        ],
        doorsCms: 'Door retailer CMS',
        doorsCmsDesc:
          'Administrative system for managing a door retailer catalog, orders and website content.',
        doorsCmsPoints: [
          'Built catalog and order management screens',
          'Implemented content administration flows',
          'Connected Redux and React Query state',
        ],
        villaKrim: 'Villa Krim',
        villaKrimDesc:
          'AR wine-bottle experience with image recognition and interactive product content.',
        villaKrimPoints: [
          'Implemented bottle scanning and AR presentation',
          'Integrated interactive product content',
          'Prepared mobile Unity delivery',
        ],
        chudoProjector: 'Chudo Projector',
        chudoProjectorDesc:
          'Interactive projection application using computer vision and a desktop companion app.',
        chudoProjectorPoints: [
          'Recognized light sources and markers with OpenCV',
          'Transferred textures through Photon',
          'Built interactive Unity projection behavior',
        ],
        arColoring: 'AR Coloring',
        arColoringDesc:
          'Mobile AR application turning paper coloring pages into animated 3D content.',
        arColoringPoints: [
          'Implemented marker tracking and texture transfer',
          'Delivered dynamic AssetBundle content',
          'Built gallery and seasonal event flows',
        ],
        goonsBalatroon: 'Goons of Balatroon',
        goonsBalatroonDesc:
          'Unity WebGL interface integration for a PvP card game with an NFT economy.',
        goonsBalatroonPoints: [
          'Integrated the Unity WebGL UI',
          'Connected card-game interactions with the host page',
          'Supported PvP product flows',
        ],
        chudobooks: 'Chudobooks / AR Chudoboxes',
        chudobooksDesc:
          'AR content for children’s magazines with interactive books and audio experiences.',
        chudobooksPoints: [
          'Implemented marker-based AR scenes',
          'Built AssetBundle content delivery',
          'Connected interactive book and audiobook flows',
        ],
        chudoFloor: 'Chudo Floor',
        chudoFloorDesc:
          'Interactive projection-floor game with people tracking and multiple play modes.',
        chudoFloorPoints: [
          'Tracked people with OpenCV',
          'Implemented interactive floor game modes',
          'Built Unity content for live installations',
        ],
        photonFps: 'Photon multiplayer FPS task',
        photonFpsDesc:
          'A focused multiplayer FPS feature for player-damage feedback.',
        photonFpsPoints: [
          'Implemented player-damage UI notifications',
          'Connected the feedback to Photon multiplayer events',
        ],
        questRoom: 'Quest room testing',
        questRoomDesc:
          'Manual QA of puzzle interactions and Photon multiplayer flows for a Unity quest-room project.',
        questRoomPoints: [
          'Tested puzzles and object interactions',
          'Reproduced multiplayer issues',
          'Documented discovered bugs',
        ],
      },
      about: {
        lead: 'Software Developer с почти 6-летним коммерческим опытом: создаю web-приложения, mobile-продукты, realtime-системы и интерактивные решения.',
        body: 'Работал как Frontend, Fullstack, Mobile и Unity/Unigine Developer — в команде и самостоятельно. Беру задачи от интерфейса и архитектуры до сетевой логики, интеграций, 3D/XR-сценариев и production-сборок.',
        facts: [
          ['ROLE', 'Software Developer'],
          ['LOCATION', 'Ростов-на-Дону, Россия'],
          ['FOCUS', 'Web · Mobile · Unity · Realtime'],
          ['EDUCATION', 'Магистр · Информатика · 2023'],
          ['LANGUAGES', 'RU родной · UA B2 · EN B1'],
        ],
      },
      directions: {
        eyebrow: 'CAPABILITY_MAP',
        title: 'НАПРАВЛЕНИЯ',
        intro:
          'Разные инструменты и платформы, объединённые умением доводить сложные идеи до работающего продукта.',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        realtime: 'REALTIME',
        webDesc:
          'Frontend и fullstack-интерфейсы: от e-commerce и CMS до realtime-платформ.',
        mobileDesc:
          'Приложения для Android и iOS — mobile games, AR и кросс-платформенные сценарии.',
        unityDesc:
          'Игры и интерактивные приложения на Unity/C# для mobile, PC и WebGL.',
        unigineDesc:
          'Промышленные симуляторы на Unigine с поддержкой SteamVR и Astra Linux.',
        xrArDesc:
          'VR, AR и MR-взаимодействия, обучение, трекинг изображений и работа с 3D.',
        realtimeDesc:
          'Клиент-серверные системы, multiplayer, турниры, синхронизация и backend-интеграции.',
        webProof: 'React · Next.js · Vue · TypeScript',
        mobileProof: 'Android · iOS · AR',
        unityProof: 'Unity · C# · WebGL',
        unigineProof: 'Unigine · SteamVR · Astra Linux',
        xrArProof: 'OpenXR · Vuforia · OpenCV',
        realtimeProof: 'Mirror · Photon · PlayFab · Firebase',
      },
      contact: {
        title: 'LET’S BUILD SOMETHING.',
        body: 'Открыт к задачам в web, mobile, realtime, Unity/Unigine и интерактивных продуктах.',
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'КОПИРОВАТЬ EMAIL',
        copied: 'СКОПИРОВАНО',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
      },
      footer: 'Построено на React + TypeScript.',
      debug: {
        active: 'DEBUG MODE',
        hint: '↑ ↑ ↓ ↓ ← → ← → B A',
        message: 'all systems nominal // fps monitor online',
      },
    },
  },
  en: {
    translation: {
      language: 'EN',
      header: {
        name: 'Dmitry Fursov',
        homeLabel: 'Home — Dmitry Fursov',
        resume: 'DOWNLOAD CV',
      },
      nav: {
        projects: 'Projects',
        about: 'About',
        experience: 'Experience',
        stack: 'Stack',
        contact: 'Contact',
      },
      intro: [
        'INITIALIZING PORTFOLIO...',
        'LOADING WEB MODULES...',
        'MOBILE SYSTEMS ..... OK',
        'UNITY / UNIGINE .... OK',
        'REALTIME ........... OK',
        'LOADING PROJECTS...',
        'READY.',
      ],
      loader: {
        ariaLabel: 'Personnel search terminal',
        title: 'PERSONNEL DATABASE',
        queryLabel: 'SEARCH QUERY',
        find: 'FIND',
        candidates: 'Candidates under verification',
        checking: 'CHECKING',
        noMatch: 'NO MATCH',
        verified: 'VERIFIED',
        skip: 'ENTER / SPACE — SKIP',
        status: {
          initializing: 'INITIALIZING SYSTEM...',
          query: 'COMPOSING QUERY...',
          scanning: 'SCANNING DATABASE...',
          match: 'MATCH FOUND',
          loaded: 'PROFILE LOADED',
        },
        result: {
          kicker: 'PERSONNEL SEARCH',
          title: 'MATCH FOUND',
          role: 'SOFTWARE DEVELOPER',
          verified: 'IDENTITY VERIFIED',
        },
        debug: {
          title: 'DEBUG SPEED',
          pause: 'Pause loading animation',
          resume: 'Resume loading animation',
          pauseShort: 'PAUSE',
          resumeShort: 'RESUME',
        },
      },
      hero: {
        eyebrow: 'PLAYER_PROFILE',
        hi: "HI, I'M",
        name: 'DMITRY FURSOV',
        role: 'SOFTWARE DEVELOPER',
        roles: [
          'Software Developer',
          'Frontend Developer',
          'Fullstack Developer',
          'Mobile Developer',
          'Unity Developer',
          'Unigine Developer',
        ],
        body: 'Software Developer with almost 6 years of commercial experience across web, mobile, realtime systems and interactive products — from frontend and CMS to Unity, Unigine and XR.',
        terminal: 'currently_building: cross-platform software systems_',
        projects: 'VIEW PROJECTS',
        cv: 'DOWNLOAD CV',
        contact: 'GET IN TOUCH',
        portraitAlt: 'Dmitry Fursov, Software Developer',
        stats: [
          '6+ YEARS IN DEVELOPMENT',
          'WEB / FRONTEND',
          'MOBILE ANDROID / IOS',
          'UNITY / C#',
          'UNIGINE / C#',
          'REALTIME / BACKEND',
        ],
      },
      sections: {
        projects: 'SELECTED WORK',
        about: 'ABOUT',
        experience: 'EXPERIENCE LOG',
        stack: 'TECH STACK',
        contact: 'CONTACT CHANNEL',
      },
      experience: {
        intro: 'PAST · CURRENT · NEXT',
        present: 'PRESENT',
        moreDetails: 'MORE DETAILS',
        lessDetails: 'LESS DETAILS',
        detailsLabel: 'CAREER_DETAILS',
        timelineLabel: 'Career timeline',
        achievementsLabel: 'KEY CONTRIBUTIONS',
        projectsLabel: 'PROJECTS',
        privateProject: 'Private project',
        nextLabel: 'NEXT',
        nextTitle: 'New Project?',
        nextCta: 'HIRE ME',
        meTimelineRole: 'VR Developer',
        meRole: 'Middle Unity / VR Developer',
        meProject: 'Industrial VR training simulations · Meta Quest',
        meAchievements: [
          'Developed VR training products for Meta Quest 2 / 3S / 3',
          'Built interactive scenarios, validation flows and training modes',
          'Extended production code and supported localization workflows',
        ],
        yellowUnityRole: 'Middle Unity Developer',
        yellowUnityTimelineRole: 'Unity Developer',
        yellowUnityProject: 'Mobile RTS · Vulkan Verse',
        yellowUnityAchievements: [
          'Implemented networked PvP mechanics, tournaments and replay systems',
          'Integrated Firebase, PlayFab and Azure Functions',
          'Built pathfinding AI and production UI for Android / iOS',
        ],
        cupRole: 'Frontend / Unity Developer',
        cupTimelineRole: 'Frontend / Unity Developer',
        cupProject: 'myChess · MyChessVR · product interfaces',
        cupAchievements: [
          'Built a web platform with real-time games, tournaments and Stockfish analysis',
          'Delivered the MyChessVR experience with IK interactions',
          'Developed multiplayer VR demos for industrial scenarios',
        ],
        itTabRole: 'Middle Frontend / Unigine Developer',
        itTabTimelineRole: 'Frontend / Unigine Developer',
        itTabProject: 'React projects · РосАтом VR simulator',
        itTabAchievements: [
          'Built frontend websites and CMS products',
          'Independently delivered all functionality for the РосАтом VR simulator',
          'Implemented client-server, multiplayer/co-op, instructor mode and custom VOIP',
        ],
        yellowJuniorUnityPhaseRole: 'Intern / Junior Unity Developer',
        yellowJuniorUnityPhaseSummary:
          'AR applications and interactive installations',
        yellowJuniorUnityPhaseAchievements: [
          'Image tracking, OpenCV and Photon integrations',
          'AssetBundle delivery, caching and content updates',
          'Unity features for mobile, desktop and WebGL',
        ],
        yellowJuniorFrontendPhaseRole: 'Junior Frontend Developer',
        yellowJuniorFrontendPhaseSummary:
          'Education portals and interactive web interfaces',
        yellowJuniorFrontendPhaseAchievements: [
          'Student, teacher and parent portals',
          'Authentication, forms, refresh tokens and pagination',
          'Charts, workspaces and Unreal Pixel Streaming integration',
        ],
        itTabFrontendPhaseRole: 'Middle Frontend Developer',
        itTabFrontendPhaseSummary: 'Korobka website and door retailer CMS',
        itTabFrontendPhaseAchievements: [
          'Implemented interfaces from design',
          'Built catalog, order and content administration',
          'Used React, Redux, React Query and Ant Design',
        ],
        itTabVrPhaseRole: 'Middle VR / Unigine Developer',
        itTabVrPhaseSummary: 'РосАтом VR training simulator',
        itTabVrPhaseAchievements: [
          'Delivered all simulator functionality independently',
          'Built training, examination, multiplayer and cooperative modes',
          'Implemented instructor monitoring, session recording and custom VOIP',
        ],
        cupFrontendPhaseRole: 'Middle Frontend Developer',
        cupFrontendPhaseSummary: 'myChess online chess platform',
        cupFrontendPhaseAchievements: [
          'Realtime games, tournaments, communities and chats',
          'Stockfish analysis, Chessbox and responsive UI',
          'React/TypeScript architecture with Socket.io',
        ],
        cupUnityPhaseRole: 'Middle Unity / VR Developer',
        cupUnityPhaseSummary: 'MyChessVR and drilling training demo',
        cupUnityPhaseAchievements: [
          'Full VR chess product delivered independently',
          'IK interactions, AI commentary and puzzle modes',
          'Multiplayer drilling workflows with Netcode',
        ],
        cupProductFrontendPhaseRole: 'Middle Frontend Developer',
        cupProductFrontendPhaseSummary:
          'E-commerce website and fuel supplier CMS',
        cupProductFrontendPhaseAchievements: [
          'Product browsing, filtering, ordering and B2B/B2C accounts',
          'CMS for supplies, refueling records and pricing',
          'SEO, forms, validation and responsive UI',
        ],
        yellowJuniorRole:
          'Intern / Junior Unity Developer → Junior Frontend Developer',
        yellowJuniorTimelineRole: 'Unity / Frontend Developer',
        yellowJuniorProject: 'AR applications · Web platforms',
        yellowJuniorAchievements: [
          'Built AR applications with image tracking and interactive characters',
          'Implemented AssetBundle delivery, caching and content updates',
          'Started production work across Unity and frontend development',
        ],
      },
      roles: {
        soloUnity: 'Solo Unity Developer',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Solo functionality developer',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
        juniorFrontend: 'Junior Frontend Developer',
        testing: 'Manual QA / Testing',
        unityDeveloper: 'Unity Developer',
        middleFrontend: 'Middle Frontend Developer',
      },
      platforms: {
        platformPcVrSteam: 'PC VR / Steam',
        platformMetaQuest: 'Meta Quest 2 / 3S / 3',
        platformVr: 'VR',
        platformViveAstra: 'HTC VIVE Pro / Astra Linux',
        platformMobile: 'Android / iOS',
        platformPcWeb: 'PC / Web',
        platformWeb: 'Web',
        platformWindows: 'Windows',
        platformWebGl: 'WebGL',
      },
      projects: {
        intro:
          'Systems, simulations, games and interfaces shipped across Unity, XR and web.',
        all: 'ALL',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        'xr-ar': 'XR / AR',
        realtime: 'REALTIME',
        view: 'VIEW PROJECT',
        details: 'PROJECT DETAILS',
        role: 'ROLE',
        platform: 'PLATFORM',
        company: 'TEAM / COMPANY',
        period: 'PERIOD',
        overview: 'OVERVIEW',
        worked: 'WHAT I WORKED ON',
        close: 'CLOSE',
        mychessvr: 'MyChessVR',
        industrial: 'Industrial VR Training Simulations',
        drilling: 'VR Drilling Training Demo',
        rosatom: 'Industrial VR Training Simulator',
        mobileRts: 'Mobile Multiplayer RTS',
        earthDragons: 'Earth of Dragons',
        vulkanVerse: 'Vulkan Verse — Tartarus',
        mychessWeb: 'myChess',
        mychessvrDesc:
          'A complete VR chess experience with multiple game modes, puzzles, an AI opponent, IK interactions and Stockfish move analysis.',
        industrialDesc:
          'Interactive industrial training scenarios with step-by-step operations, action validation, hints, error handling and realistic equipment interactions.',
        drillingDesc:
          'A multiplayer VR training demo reproducing drilling equipment workflows and operator interactions.',
        rosatomDesc:
          'A VR training simulator for industrial equipment operation with single-player, multiplayer and instructor workflows.',
        mobileRtsDesc:
          'A mobile RTS with real-time PvP, tournament systems, server-driven events and multiplayer infrastructure.',
        earthDragonsDesc:
          'A mobile AR application where physical cards unlock animated collectible dragons and interactive content.',
        vulkanVerseDesc:
          'Gameplay mechanics and client-server functionality developed for the Tartarus location of Vulkan Verse.',
        mychessWebDesc:
          'An online chess platform with real-time games, tournaments, analysis, puzzles and community functionality.',
        mychessvrPoints: [
          'Full Unity implementation as sole developer',
          'Classic, Rapid and Blitz modes with configurable AI',
          'Puzzle system with dozens of task types',
          'Stockfish-powered Play with Teacher mode',
          'Final IK avatars, hand interactions and uLipSync',
          'Three additive-loaded environments',
        ],
        industrialPoints: [
          'Interactive training and examination modes',
          'Equipment and tool interaction with validation',
          'Visual, audio and VFX feedback',
          'Localization and production-code extension',
        ],
        drillingPoints: [
          'Full functional demo developed independently',
          'Interactive drilling equipment workflows',
          'Netcode multiplayer synchronization',
          'Blender assets and Final IK interactions',
        ],
        rosatomPoints: [
          'Training, examination and cooperative scenarios',
          'Instructor monitoring interface',
          'Custom VOIP and avatar interaction',
          'HTC VIVE Pro and Astra Linux support',
        ],
        mobileRtsPoints: [
          'Mirror client-server PvP interaction',
          'Replay system for battles',
          'Firebase, PlayFab and Azure Functions integrations',
          'Olympic-format tournaments and pathfinding AI',
        ],
        earthDragonsPoints: [
          'Vuforia image tracking and animated AR characters',
          'Dynamic AssetBundle delivery and caching',
          'Hash-based content updates with retry handling',
          'Collectible characters, runner and social sharing',
        ],
        vulkanVersePoints: [
          'Gameplay mechanics for the Tartarus location',
          'Client-server functionality with Photon',
          'Addressables, Zenject and UniTask integration',
        ],
        mychessWebPoints: [
          'Real-time chess games and simultaneous sessions',
          'Tournament formats and chess puzzles',
          'Stockfish analysis modes and Chessbox',
          'React/TypeScript frontend architecture',
        ],
        catCitten: 'Cat-citten company website',
        catCittenDesc:
          'E-commerce website with product browsing, category filtering, ordering and separate B2B/B2C accounts.',
        catCittenPoints: [
          'Implemented responsive UI from design',
          'Built catalog, filtering and ordering flows',
          'Added account interfaces and SEO improvements',
        ],
        aptiveEducation: 'Aptive Education',
        aptiveEducationDesc:
          'Education platform for students, teachers and parents with learning workflows and progress tracking.',
        aptiveEducationPoints: [
          'Built news, forum, workspaces and assignment flows',
          'Implemented authentication, refresh tokens and password recovery',
          'Created progress dashboards, charts and avatar upload/cropping',
        ],
        virtualCity: 'Virtual city for apartment sales',
        virtualCityDesc:
          'React interface connected to an Unreal Engine Pixel Streaming experience for exploring apartments.',
        virtualCityPoints: [
          'Integrated Unreal Engine Pixel Streaming',
          'Forwarded selection, clicks and furniture placement to the 3D scene',
          'Connected web UI state with the interactive application',
        ],
        fuelCms: 'Fuel supplier CMS',
        fuelCmsDesc:
          'Administrative system for supplies, refueling records and price calculations.',
        fuelCmsPoints: [
          'Developed supply and refueling management screens',
          'Implemented price calculation interfaces',
          'Built the React UI with Mantine and React Query',
        ],
        korobka: 'Korobka transport company website',
        korobkaDesc:
          'Responsive transport company website implemented from a design system.',
        korobkaPoints: [
          'Translated the design into reusable React components',
          'Implemented navigation and responsive layouts',
          'Used Ant Design for interface primitives',
        ],
        doorsCms: 'Door retailer CMS',
        doorsCmsDesc:
          'Administrative system for managing a door retailer catalog, orders and website content.',
        doorsCmsPoints: [
          'Built catalog and order management screens',
          'Implemented content administration flows',
          'Connected Redux and React Query state',
        ],
        villaKrim: 'Villa Krim',
        villaKrimDesc:
          'AR wine-bottle experience with image recognition and interactive product content.',
        villaKrimPoints: [
          'Implemented bottle scanning and AR presentation',
          'Integrated interactive product content',
          'Prepared mobile Unity delivery',
        ],
        chudoProjector: 'Chudo Projector',
        chudoProjectorDesc:
          'Interactive projection application using computer vision and a desktop companion app.',
        chudoProjectorPoints: [
          'Recognized light sources and markers with OpenCV',
          'Transferred textures through Photon',
          'Built interactive Unity projection behavior',
        ],
        arColoring: 'AR Coloring',
        arColoringDesc:
          'Mobile AR application turning paper coloring pages into animated 3D content.',
        arColoringPoints: [
          'Implemented marker tracking and texture transfer',
          'Delivered dynamic AssetBundle content',
          'Built gallery and seasonal event flows',
        ],
        goonsBalatroon: 'Goons of Balatroon',
        goonsBalatroonDesc:
          'Unity WebGL interface integration for a PvP card game with an NFT economy.',
        goonsBalatroonPoints: [
          'Integrated the Unity WebGL UI',
          'Connected card-game interactions with the host page',
          'Supported PvP product flows',
        ],
        chudobooks: 'Chudobooks / AR Chudoboxes',
        chudobooksDesc:
          'AR content for children’s magazines with interactive books and audio experiences.',
        chudobooksPoints: [
          'Implemented marker-based AR scenes',
          'Built AssetBundle content delivery',
          'Connected interactive book and audiobook flows',
        ],
        chudoFloor: 'Chudo Floor',
        chudoFloorDesc:
          'Interactive projection-floor game with people tracking and multiple play modes.',
        chudoFloorPoints: [
          'Tracked people with OpenCV',
          'Implemented interactive floor game modes',
          'Built Unity content for live installations',
        ],
        photonFps: 'Photon multiplayer FPS task',
        photonFpsDesc:
          'A focused multiplayer FPS feature for player-damage feedback.',
        photonFpsPoints: [
          'Implemented player-damage UI notifications',
          'Connected the feedback to Photon multiplayer events',
        ],
        questRoom: 'Quest room testing',
        questRoomDesc:
          'Manual QA of puzzle interactions and Photon multiplayer flows for a Unity quest-room project.',
        questRoomPoints: [
          'Tested puzzles and object interactions',
          'Reproduced multiplayer issues',
          'Documented discovered bugs',
        ],
      },
      about: {
        lead: 'Software Developer with almost 6 years of commercial experience across web, mobile, realtime systems and interactive products.',
        body: 'I have worked as a Frontend, Fullstack, Mobile and Unity/Unigine Developer — both in teams and independently. I take work from interface and architecture through networking, integrations, 3D/XR scenarios and production builds.',
        facts: [
          ['ROLE', 'Software Developer'],
          ['LOCATION', 'Rostov-on-Don, Russia'],
          ['FOCUS', 'Web · Mobile · Unity · Realtime'],
          ['EDUCATION', 'Master’s degree · Computer Science · 2023'],
          ['LANGUAGES', 'RU native · UA B2 · EN B1'],
        ],
      },
      directions: {
        eyebrow: 'CAPABILITY_MAP',
        title: 'DIRECTIONS',
        intro:
          'Different tools and platforms connected by the ability to turn complex ideas into working products.',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        realtime: 'REALTIME',
        webDesc:
          'Frontend and fullstack interfaces: from e-commerce and CMS to realtime platforms.',
        mobileDesc:
          'Android and iOS products — mobile games, AR and cross-platform scenarios.',
        unityDesc:
          'Games and interactive applications built with Unity/C# for mobile, PC and WebGL.',
        unigineDesc:
          'Industrial simulators on Unigine with SteamVR and Astra Linux support.',
        xrArDesc:
          'VR, AR and MR interactions, training, image tracking and 3D workflows.',
        realtimeDesc:
          'Client-server systems, multiplayer, tournaments, synchronization and backend integrations.',
        webProof: 'React · Next.js · Vue · TypeScript',
        mobileProof: 'Android · iOS · AR',
        unityProof: 'Unity · C# · WebGL',
        unigineProof: 'Unigine · SteamVR · Astra Linux',
        xrArProof: 'OpenXR · Vuforia · OpenCV',
        realtimeProof: 'Mirror · Photon · PlayFab · Firebase',
      },
      contact: {
        title: 'LET’S BUILD SOMETHING.',
        body: 'Open to work across web, mobile, realtime, Unity/Unigine and interactive products.',
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'COPY EMAIL',
        copied: 'COPIED',
        cv: 'DOWNLOAD CV',
      },
      footer: 'Built with React + TypeScript.',
      debug: {
        active: 'DEBUG MODE',
        hint: '↑ ↑ ↓ ↓ ← → ← → B A',
        message: 'all systems nominal // fps monitor online',
      },
    },
  },
} satisfies Resource

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language.startsWith('ru') ? 'ru' : 'en'
})

export async function changeLanguage(language: SupportedLanguage) {
  await i18n.changeLanguage(language)
}

export default i18n
