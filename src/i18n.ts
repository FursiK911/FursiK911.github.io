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
        'ЗАГРУЗКА UNITY-МОДУЛЕЙ...',
        'XR SYSTEMS ........ OK',
        'NETWORKING ........ OK',
        'RENDER PIPELINE ... OK',
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
          role: 'UNITY / VR / XR РАЗРАБОТЧИК',
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
        role: 'UNITY / VR / XR DEVELOPER',
        roles: [
          'Unity Developer',
          'VR Developer',
          'Frontend Developer',
          'Fullstack Developer',
          'Тот, кто тебе нужен',
        ],
        body: 'Unity-разработчик с фокусом на VR/XR, multiplayer-системы и интерактивные приложения для Meta Quest, PC и мобильных платформ.',
        terminal: 'currently_building: immersive interactive systems_',
        projects: 'СМОТРЕТЬ ПРОЕКТЫ',
        cv: 'СКАЧАТЬ CV',
        contact: 'СВЯЗАТЬСЯ',
        portraitAlt: 'Дмитрий Фурсов, Unity Developer',
        stats: [
          '6+ ЛЕТ В РАЗРАБОТКЕ',
          '3+ ЛЕТ COMMERCIAL UNITY',
          'VR / XR / AR',
          'MULTIPLAYER',
          'META QUEST',
          'UNITY / C#',
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
        meRole: 'Middle VR Developer',
        meProject: 'Industrial VR training simulations · Meta Quest',
        yellowUnityRole: 'Middle Unity Developer',
        yellowUnityProject: 'Mobile RTS · Vulkan Verse',
        cupRole: 'Middle Frontend Developer / Middle VR Developer',
        cupProject: 'myChess platform · MyChessVR',
        itTabRole: 'Middle Frontend Developer / Middle VR Developer',
        itTabProject: 'React projects · Industrial VR simulator',
        yellowJuniorRole:
          'Intern / Junior Unity Developer → Junior Frontend Developer',
        yellowJuniorProject: 'AR applications · Web platforms',
      },
      roles: {
        soloUnity: 'Единственный Unity-разработчик',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Разработчик функциональности',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
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
      },
      projects: {
        intro:
          'Системы, симуляции, игры и интерфейсы, созданные на Unity, XR и web.',
        all: 'ВСЕ',
        vr: 'VR / XR',
        games: 'GAMES',
        ar: 'AR',
        multiplayer: 'MULTIPLAYER',
        web: 'WEB',
        view: 'VIEW PROJECT',
        details: 'ДЕТАЛИ ПРОЕКТА',
        role: 'РОЛЬ',
        platform: 'ПЛАТФОРМА',
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
      },
      about: {
        lead: 'Unity Developer с 6-летним опытом в разработке программного обеспечения, из них 3 года — в коммерческой разработке игр, VR/AR-приложений и интерактивных тренажёров.',
        body: 'Работаю и в команде, и как единственный Unity-разработчик: от оценки задач и архитектуры до игровых механик, XR-взаимодействий, UI, сетевой логики, SDK-интеграций и production-билдов для Android, iOS, PC и VR-устройств.',
        facts: [
          ['ROLE', 'Unity / VR / XR Developer'],
          ['LOCATION', 'Ростов-на-Дону, Россия'],
          ['FOCUS', 'Gameplay · XR · Networking · UI'],
        ],
      },
      contact: {
        title: 'LET’S BUILD SOMETHING.',
        body: 'Открыт к Unity, VR/XR, game development и интерактивным продуктам.',
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'КОПИРОВАТЬ EMAIL',
        copied: 'СКОПИРОВАНО',
        cv: 'СКАЧАТЬ CV',
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
        'LOADING UNITY MODULES...',
        'XR SYSTEMS ........ OK',
        'NETWORKING ........ OK',
        'RENDER PIPELINE ... OK',
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
          role: 'UNITY / VR / XR DEVELOPER',
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
        role: 'UNITY / VR / XR DEVELOPER',
        roles: [
          'Unity Developer',
          'VR Developer',
          'Frontend Developer',
          'Fullstack Developer',
          'The one you need',
        ],
        body: 'Unity Developer focused on VR/XR, multiplayer systems and interactive applications for Meta Quest, PC and mobile platforms.',
        terminal: 'currently_building: immersive interactive systems_',
        projects: 'VIEW PROJECTS',
        cv: 'DOWNLOAD CV',
        contact: 'GET IN TOUCH',
        portraitAlt: 'Dmitry Fursov, Unity Developer',
        stats: [
          '6+ YEARS IN DEVELOPMENT',
          '3+ YEARS COMMERCIAL UNITY',
          'VR / XR / AR',
          'MULTIPLAYER',
          'META QUEST',
          'UNITY / C#',
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
        meRole: 'Middle VR Developer',
        meProject: 'Industrial VR training simulations · Meta Quest',
        yellowUnityRole: 'Middle Unity Developer',
        yellowUnityProject: 'Mobile RTS · Vulkan Verse',
        cupRole: 'Middle Frontend Developer / Middle VR Developer',
        cupProject: 'myChess platform · MyChessVR',
        itTabRole: 'Middle Frontend Developer / Middle VR Developer',
        itTabProject: 'React projects · Industrial VR simulator',
        yellowJuniorRole:
          'Intern / Junior Unity Developer → Junior Frontend Developer',
        yellowJuniorProject: 'AR applications · Web platforms',
      },
      roles: {
        soloUnity: 'Solo Unity Developer',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Solo functionality developer',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
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
      },
      projects: {
        intro:
          'Systems, simulations, games and interfaces shipped across Unity, XR and web.',
        all: 'ALL',
        vr: 'VR / XR',
        games: 'GAMES',
        ar: 'AR',
        multiplayer: 'MULTIPLAYER',
        web: 'WEB',
        view: 'VIEW PROJECT',
        details: 'PROJECT DETAILS',
        role: 'ROLE',
        platform: 'PLATFORM',
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
      },
      about: {
        lead: 'Unity Developer with 6 years of software development experience, including 3 years of commercial work on games, VR/AR applications and interactive training systems.',
        body: 'I work both in teams and as the sole Unity developer — from estimating and architecture through gameplay, XR interaction, UI, networking, SDK integration and production builds for Android, iOS, PC and VR devices.',
        facts: [
          ['ROLE', 'Unity / VR / XR Developer'],
          ['LOCATION', 'Rostov-on-Don, Russia'],
          ['FOCUS', 'Gameplay · XR · Networking · UI'],
        ],
      },
      contact: {
        title: 'LET’S BUILD SOMETHING.',
        body: 'Open to Unity, VR/XR, game development and interactive product work.',
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
