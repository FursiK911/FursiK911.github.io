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
        legalRole: 'SOFTWARE DEVELOPER',
      },
      nav: {
        top: 'Профиль',
        projects: 'Проекты',
        experience: 'Опыт',
        stack: 'Стек',
        education: 'Образование',
        contact: 'Контакты',
      },
      intro: [
        'ИНИЦИАЛИЗАЦИЯ ПОРТФОЛИО...',
        'ЗАГРУЗКА WEB-МОДУЛЕЙ...',
        'MOBILE SYSTEMS ..... OK',
        'UNITY / UNIGINE .... OK',
        'MULTIPLAYER ........ OK',
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
        terminal: 'currently_building: cross-platform software systems_',
        projects: 'СМОТРЕТЬ ПРОЕКТЫ',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
        contact: 'СВЯЗАТЬСЯ',
        portraitAlt: 'Дмитрий Фурсов, Software Developer',
        languages: 'LANG: RU_NATIVE / UA_B2 / EN_B1',
      },
      sections: {
        projects: 'ПРОЕКТЫ',
        experience: 'EXPERIENCE LOG',
        stack: 'TECH STACK',
        education: 'ОБРАЗОВАНИЕ',
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
          'Web-платформа с мультиплеерными играми, турнирами и анализом Stockfish',
          'Полная VR-реализация MyChessVR с IK-взаимодействиями',
          'Разработка мультиплеерных VR-демо для промышленных сценариев',
        ],
        itTabRole: 'Middle Frontend / Unigine Developer',
        itTabTimelineRole: 'Frontend / Unigine разработчик',
        itTabProject: 'React projects · РосАтом VR-тренажёр',
        itTabAchievements: [
          'Frontend-разработка сайта и CMS-проектов',
          'Единоличная разработка функционала VR-тренажёра РосАтом',
          'Client-server, мультиплеер/co-op, instructor mode и custom VOIP',
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
          'Built training, examination, мультиплеер and cooperative modes',
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
        multiplayer: 'МУЛЬТИПЛЕЕР',
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
        industrial: 'Промышленные VR-тренажёры',
        drilling: 'VR-демо буровой установки',
        rosatom: 'Промышленный VR-тренажёр',
        mobileRts: 'Мобильная multiplayer RTS',
        earthDragons: 'Земля драконов',
        vulkanVerse: 'Vulkan Verse — Tartarus',
        mychessWeb: 'myChess',
        mychessvrDesc:
          'Полноценный VR-шахматный опыт с несколькими режимами игры, головоломками, AI-соперником, IK-взаимодействиями и анализом ходов Stockfish.',
        industrialDesc:
          'Интерактивные промышленные сценарии обучения с пошаговыми операциями, проверкой действий, подсказками, обработкой ошибок и реалистичным взаимодействием с оборудованием.',
        drillingDesc:
          'Мультиплеерное VR-демо с рабочими процессами бурового оборудования и взаимодействием операторов.',
        rosatomDesc:
          'VR-тренажёр управления промышленным оборудованием с одиночным и мультиплеерным режимами, а также сценарием инструктора.',
        mobileRtsDesc:
          'Мобильная RTS с мультиплеерным PvP, турнирами, серверными событиями и сетевой инфраструктурой.',
        earthDragonsDesc:
          'Мобильное AR-приложение, в котором физические карточки открывают коллекционных драконов и интерактивный контент.',
        vulkanVerseDesc:
          'Игровые механики и клиент-серверная функциональность для локации Tartarus в Vulkan Verse.',
        mychessWebDesc:
          'Онлайн-шахматная платформа с мультиплеерными партиями, турнирами, анализом, головоломками и функциями сообщества.',
        mychessvrPoints: [
          'Полная реализация на Unity в качестве единственного разработчика',
          'Режимы Classic, Rapid и Blitz с настраиваемым AI',
          'Система головоломок с десятками типов заданий',
          'Режим Play with Teacher на базе Stockfish',
          'Аватары Final IK, взаимодействия руками и uLipSync',
          'Три окружения с additive-загрузкой',
        ],
        industrialPoints: [
          'Интерактивные режимы обучения и экзамена',
          'Взаимодействие с оборудованием и инструментами с проверкой действий',
          'Визуальная, аудио- и VFX-обратная связь',
          'Локализация и расширение production-кода',
        ],
        drillingPoints: [
          'Полностью функциональное демо, разработанное самостоятельно',
          'Интерактивные рабочие процессы бурового оборудования',
          'Мультиплеерная синхронизация через Netcode',
          'Ассеты Blender и взаимодействия Final IK',
        ],
        rosatomPoints: [
          'Сценарии обучения, экзамена и совместной работы',
          'Интерфейс мониторинга инструктора',
          'Кастомный VOIP и взаимодействие с аватарами',
          'Поддержка HTC VIVE Pro и Astra Linux',
        ],
        mobileRtsPoints: [
          'Клиент-серверное PvP-взаимодействие на Mirror',
          'Система повторов сражений',
          'Интеграции Firebase, PlayFab и Azure Functions',
          'Турниры олимпийского формата и pathfinding AI',
        ],
        earthDragonsPoints: [
          'Распознавание изображений через Vuforia и анимированные AR-персонажи',
          'Доставка и кэширование динамических AssetBundle',
          'Обновление контента по хэшу с повторной обработкой ошибок',
          'Коллекционные персонажи, раннер и публикация в соцсетях',
        ],
        vulkanVersePoints: [
          'Игровые механики для локации Tartarus',
          'Клиент-серверная функциональность на Photon',
          'Интеграция Addressables, Zenject и UniTask',
        ],
        mychessWebPoints: [
          'Мультиплеерные шахматные партии и одновременные сессии',
          'Форматы турниров и шахматные головоломки',
          'Режимы анализа Stockfish и Chessbox',
          'Frontend-архитектура на React/TypeScript',
        ],
        catCitten: 'Сайт компании Cat-citten',
        catCittenDesc:
          'Интернет-магазин с каталогом товаров, фильтрацией по категориям, заказами и отдельными B2B/B2C-аккаунтами.',
        catCittenPoints: [
          'Реализовал адаптивный интерфейс по дизайну',
          'Создал каталог, фильтрацию и сценарии оформления заказа',
          'Добавил интерфейсы аккаунтов и улучшения SEO',
        ],
        aptiveEducation: 'Aptive Education',
        aptiveEducationDesc:
          'Образовательная платформа для учеников, учителей и родителей с учебными сценариями и отслеживанием прогресса.',
        aptiveEducationPoints: [
          'Создал разделы новостей, форума, рабочих пространств и заданий',
          'Реализовал аутентификацию, refresh-токены и восстановление пароля',
          'Создал дашборды прогресса, графики и загрузку/кадрирование аватаров',
        ],
        virtualCity: 'Виртуальный город для продажи квартир',
        virtualCityDesc:
          'React-интерфейс, подключённый к Unreal Engine Pixel Streaming для просмотра квартир.',
        virtualCityPoints: [
          'Интегрировал Unreal Engine Pixel Streaming',
          'Передавал выбор, клики и расстановку мебели в 3D-сцену',
          'Связал состояние web-интерфейса с интерактивным приложением',
        ],
        fuelCms: 'CMS поставщика топлива',
        fuelCmsDesc:
          'Административная система для поставок, учёта заправок и расчёта цен.',
        fuelCmsPoints: [
          'Разработал экраны управления поставками и заправками',
          'Реализовал интерфейсы расчёта цен',
          'Создал React-интерфейс на Mantine и React Query',
        ],
        korobka: 'Сайт транспортной компании Korobka',
        korobkaDesc:
          'Адаптивный сайт транспортной компании, реализованный по дизайн-системе.',
        korobkaPoints: [
          'Перенёс дизайн в переиспользуемые React-компоненты',
          'Реализовал навигацию и адаптивные макеты',
          'Использовал Ant Design для базовых элементов интерфейса',
        ],
        doorsCms: 'CMS магазина дверей',
        doorsCmsDesc:
          'Административная система для управления каталогом, заказами и контентом магазина дверей.',
        doorsCmsPoints: [
          'Создал экраны управления каталогом и заказами',
          'Реализовал сценарии администрирования контента',
          'Связал состояние Redux и React Query',
        ],
        villaKrim: 'Villa Krim',
        villaKrimDesc:
          'AR-приложение для винной бутылки с распознаванием изображения и интерактивным контентом о продукте.',
        villaKrimPoints: [
          'Реализовал сканирование бутылки и AR-презентацию',
          'Интегрировал интерактивный контент о продукте',
          'Подготовил мобильную сборку на Unity',
        ],
        chudoProjector: 'Chudo Projector',
        chudoProjectorDesc:
          'Интерактивное проекционное приложение на базе компьютерного зрения и desktop-компаньона.',
        chudoProjectorPoints: [
          'Распознавал источники света и маркеры через OpenCV',
          'Передавал текстуры через Photon',
          'Создал интерактивную проекционную логику на Unity',
        ],
        arColoring: 'AR Coloring',
        arColoringDesc:
          'Мобильное AR-приложение, превращающее бумажные раскраски в анимированный 3D-контент.',
        arColoringPoints: [
          'Реализовал отслеживание маркеров и передачу текстур',
          'Настроил доставку динамического контента через AssetBundle',
          'Создал галерею и сценарии сезонных событий',
        ],
        chudobooks: 'Chudobooks',
        arChudaboxes: 'AR Chudoboxes',
        chudobooksDesc:
          'AR-контент для детских журналов с интерактивными книгами и аудиосценариями.',
        chudobooksPoints: [
          'Реализовал AR-сцены на основе маркеров',
          'Создал доставку контента через AssetBundle',
          'Связал сценарии интерактивной книги и аудиокниги',
        ],
        chudoFloor: 'Chudo Floor',
        chudoFloorDesc:
          'Интерактивная игра для проекционного пола с отслеживанием людей и несколькими режимами.',
        chudoFloorPoints: [
          'Отслеживал людей через OpenCV',
          'Реализовал режимы интерактивной игры на полу',
          'Создал Unity-контент для live-инсталляций',
        ],
        questRoom: 'Quest room testing',
        questRoomDesc:
          'Ручное тестирование головоломок и Photon-мультиплеера в Unity-проекте квест-комнаты.',
        questRoomPoints: [
          'Тестировал головоломки и взаимодействие с объектами',
          'Воспроизводил проблемы мультиплеера',
          'Документировал найденные ошибки',
        ],
      },
      directions: {
        web: 'WEB',
        gameEngines: 'GAME ENGINES',
        mobile: 'MOBILE',
        xr: 'XR',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        multiplayer: 'МУЛЬТИПЛЕЕР',
        projects: 'ПРОЕКТОВ',
        xrQualifier: 'VR · AR · MR',
      },
      education: {
        title: 'ОБРАЗОВАНИЕ И КУРСЫ',
        intro: 'СИСТЕМНАЯ ПОДГОТОВКА · КУРСЫ · СЕРТИФИКАЦИИ',
        showDetails: 'ПОДРОБНЕЕ',
        hideDetails: 'СВЕРНУТЬ',
        topics: 'ОСНОВНЫЕ ТЕМЫ',
        entries: {
          master: {
            date: '2023',
            title: 'Магистратура',
            organization: 'Донецкий национальный университет',
            details: [
              { label: 'СТЕПЕНЬ', value: 'Магистр' },
              {
                label: 'НАПРАВЛЕНИЕ',
                value: 'Информатика и вычислительная техника',
              },
              { label: 'ФАКУЛЬТЕТ', value: 'Физико-технический факультет' },
            ],
            topics: [],
          },
          bachelor: {
            date: '2020',
            title: 'Бакалавриат',
            organization: 'Донецкий национальный университет',
            details: [
              { label: 'СТЕПЕНЬ', value: 'Бакалавр' },
              {
                label: 'НАПРАВЛЕНИЕ',
                value: 'Информатика и вычислительная техника',
              },
              { label: 'ФАКУЛЬТЕТ', value: 'Физико-технический факультет' },
            ],
            topics: [],
          },
          ccna2: {
            date: '29.01.2019',
            title: 'CCNA 2 — Routing and Switching Essentials',
            organization: 'Cisco Networking Academy',
            accountRecord: 'CCNA2-19-IVT1',
            details: [
              {
                label: 'ОФИЦИАЛЬНОЕ НАЗВАНИЕ',
                value:
                  'CCNA Routing and Switching: Routing and Switching Essentials (RSE)',
              },
              {
                label: 'УРОВЕНЬ',
                value: 'Второй курс программы CCNA Routing and Switching',
              },
            ],
            topics: [
              'Архитектура и настройка коммутируемых сетей',
              'Базовая настройка Cisco Switch',
              'VLAN',
              'Trunk-соединения',
              'Маршрутизация между VLAN',
              'Принципы маршрутизации',
              'Статическая маршрутизация',
              'Динамическая маршрутизация',
              'OSPF',
              'ACL (Access Control Lists)',
              'DHCP',
              'NAT/PAT',
              'Безопасность портов и сетевого оборудования',
              'Практические задания и моделирование сетей в Cisco Packet Tracer',
            ],
          },
          cybersecurityEssentials: {
            date: '30.10.2018',
            title: 'Cybersecurity Essentials',
            organization: 'Cisco Networking Academy',
            accountRecord: 'Cybersecurity_Essentials_18',
            details: [{ label: 'НАЗВАНИЕ', value: 'Основы кибербезопасности' }],
            topics: [
              'Принципы информационной и кибербезопасности',
              'Угрозы, уязвимости и атаки',
              'Вредоносное ПО и методы атак',
              'Защита устройств, сетей и данных',
              'Контроль доступа и аутентификация',
              'Основы криптографии',
              'Конфиденциальность, целостность и доступность данных',
              'Обнаружение и анализ инцидентов',
              'Управление рисками и защита инфраструктуры',
            ],
          },
          packetTracer: {
            date: '28.10.2018',
            title: 'Introduction to Packet Tracer',
            organization: 'Cisco Networking Academy',
            accountRecord: 'Introduction to Packet Tracer 1018',
            details: [
              { label: 'НАЗВАНИЕ', value: 'Введение в Cisco Packet Tracer' },
            ],
            topics: [
              'Интерфейс Cisco Packet Tracer',
              'Создание и моделирование компьютерных сетей',
              'Настройка маршрутизаторов, коммутаторов, серверов и конечных устройств',
              'Проверка прохождения трафика по сети',
              'Готовые лабораторные задания',
              'Моделирование беспроводных сетей',
              'Базовые сценарии IoT',
              'Практика сетевых технологий в Packet Tracer',
            ],
          },
          ccna1: {
            date: '04.09.2018',
            title: 'CCNA 1 — Introduction to Networks',
            organization: 'Cisco Networking Academy',
            accountRecord: 'CCNA1-18-IVT1',
            details: [
              {
                label: 'ОФИЦИАЛЬНОЕ НАЗВАНИЕ',
                value:
                  'CCNA Routing and Switching: Introduction to Networks (ITN)',
              },
              {
                label: 'УРОВЕНЬ',
                value: 'Первый курс программы CCNA Routing and Switching',
              },
            ],
            topics: [
              'Компьютерные сети, LAN, WAN и Internet',
              'Модели и сетевые протоколы',
              'Ethernet',
              'Сетевой и транспортный уровни',
              'IPv4/IPv6-адресация',
              'Разбиение IP-сетей на подсети',
              'Базовая настройка сетевых устройств Cisco',
              'Прикладные сетевые протоколы',
              'Базовые вопросы сетевой безопасности',
              'Практические задания в Cisco Packet Tracer',
            ],
          },
          programming: {
            date: '2016',
            title: 'Программирование',
            organization: 'SOS COMPUTER',
            details: [
              { label: 'СПЕЦИАЛИЗАЦИЯ', value: 'Программист, разработчик' },
            ],
            topics: [
              'Алгоритмизация и структурированный подход к решению задач',
              'Процедурное программирование и декомпозиция логики приложения',
              'Типы данных, выражения и управление потоком выполнения',
              'Массивы, строки и базовые структуры данных',
              'Процедуры, функции и повторное использование программного кода',
              'Работа с файлами, поиск и базовые алгоритмы сортировки',
            ],
          },
          graphics: {
            date: '2015',
            title: 'Курс растровой и векторной графики',
            organization: 'SOS COMPUTER',
            details: [{ label: 'СПЕЦИАЛИЗАЦИЯ', value: 'Дизайнер' }],
            topics: [
              'Основы растровой и векторной графики',
              'Adobe Photoshop: обработка, ретушь и цветокоррекция изображений',
              'Работа с композицией, типографикой и визуальной иерархией',
              'CorelDRAW: создание векторных иллюстраций, логотипов и макетов',
              'Подготовка графических материалов к публикации и печати',
              'Экспорт и передача материалов в распространённых графических форматах',
            ],
          },
        },
      },
      contact: {
        title: 'СОЗДАДИМ ЧТО-НИБУДЬ ВМЕСТЕ.',
        body: 'Открыт к задачам в web и mobile, к мультиплеерным, Unity/Unigine- и другим интерактивным продуктам.',
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'КОПИРОВАТЬ EMAIL',
        copied: 'СКОПИРОВАНО',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
      },
      footer: {
        tagline: 'Построено на React + TypeScript.',
        role: 'SOFTWARE DEVELOPER',
        connect: 'КОНТАКТЫ',
        explore: 'НАВИГАЦИЯ',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        signature: 'WEB · MOBILE · UNITY · MULTIPLAYER',
      },
      legal: {
        back: 'На главную',
        updated: 'Последнее обновление: 1 сентября 2026',
        privacy: {
          metaTitle: 'Политика конфиденциальности — Дмитрий Фурсов',
          metaDescription:
            'Краткая политика конфиденциальности портфолио Дмитрия Фурсова.',
          title: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
          intro:
            'Эта страница описывает, какие данные могут обрабатываться при использовании портфолио Дмитрия Фурсова.',
          collectionTitle: 'Какие данные собираются',
          collection:
            'Сайт не запрашивает регистрацию и не собирает специальные категории персональных данных. Хостинг и браузер могут автоматически передавать технические данные, необходимые для доставки страницы и обеспечения её безопасности. Если вы пишете на email, обрабатываются данные, которые вы добровольно указываете в сообщении.',
          useTitle: 'Как используются данные',
          use: 'Технические данные используются для работы, диагностики и защиты сайта. Данные из email используются только для ответа на сообщение и обсуждения запроса. Мы не продаём персональные данные и не используем их для рекламных рассылок.',
          externalTitle: 'Внешние ссылки',
          external:
            'На сайте есть ссылки на GitHub, LinkedIn, Telegram и другие внешние ресурсы. После перехода на сторонний ресурс действуют его собственные правила и политика конфиденциальности.',
          contactTitle: 'Контакт',
          contact:
            'По вопросам обработки данных можно написать на 19fursik99@gmail.com.',
        },
        terms: {
          metaTitle: 'Условия использования — Дмитрий Фурсов',
          metaDescription:
            'Краткие условия использования портфолио Дмитрия Фурсова.',
          title: 'УСЛОВИЯ ИСПОЛЬЗОВАНИЯ',
          intro:
            'Используя этот сайт, вы соглашаетесь соблюдать приведённые ниже условия. Это информационная страница портфолио, а не юридическая консультация.',
          useTitle: 'Использование сайта',
          use: 'Сайт предоставляется для ознакомления с профессиональным опытом, проектами и контактной информацией Дмитрия Фурсова. Не следует использовать его для незаконных действий или попыток нарушить работу сайта.',
          contentTitle: 'Материалы и интеллектуальная собственность',
          content:
            'Тексты, изображения, дизайн и исходные материалы принадлежат своим правообладателям, если не указано иное. Материалы портфолио нельзя выдавать за собственные или использовать в коммерческих целях без разрешения правообладателя.',
          externalTitle: 'Внешние сервисы',
          external:
            'Сайт содержит ссылки на внешние сервисы. Мы не контролируем их доступность, содержание или условия использования.',
          liabilityTitle: 'Ограничение ответственности',
          liability:
            'Информация предоставляется «как есть» и может изменяться без предварительного уведомления. Мы не гарантируем отсутствие ошибок или постоянную доступность сайта.',
          contactTitle: 'Контакт',
          contact:
            'Вопросы по материалам и условиям можно направить на 19fursik99@gmail.com.',
        },
      },
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
        legalRole: 'SOFTWARE DEVELOPER',
      },
      nav: {
        top: 'Profile',
        projects: 'Projects',
        experience: 'Experience',
        stack: 'Stack',
        education: 'Education',
        contact: 'Contact',
      },
      intro: [
        'INITIALIZING PORTFOLIO...',
        'LOADING WEB MODULES...',
        'MOBILE SYSTEMS ..... OK',
        'UNITY / UNIGINE .... OK',
        'MULTIPLAYER ........ OK',
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
        terminal: 'currently_building: cross-platform software systems_',
        projects: 'VIEW PROJECTS',
        cv: 'DOWNLOAD CV',
        contact: 'GET IN TOUCH',
        portraitAlt: 'Dmitry Fursov, Software Developer',
        languages: 'LANG: RU_NATIVE / UA_B2 / EN_B1',
      },
      sections: {
        projects: 'PROJECTS',
        experience: 'EXPERIENCE LOG',
        stack: 'TECH STACK',
        education: 'EDUCATION',
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
          'Built a web platform with multiplayer games, tournaments and Stockfish analysis',
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
        multiplayer: 'MULTIPLAYER',
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
          'A mobile RTS with multiplayer PvP, tournament systems, server-driven events and multiplayer infrastructure.',
        earthDragonsDesc:
          'A mobile AR application where physical cards unlock animated collectible dragons and interactive content.',
        vulkanVerseDesc:
          'Gameplay mechanics and client-server functionality developed for the Tartarus location of Vulkan Verse.',
        mychessWebDesc:
          'An online chess platform with multiplayer games, tournaments, analysis, puzzles and community functionality.',
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
        chudobooks: 'Chudobooks',
        arChudaboxes: 'AR Chudoboxes',
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
        questRoom: 'Quest room testing',
        questRoomDesc:
          'Manual QA of puzzle interactions and Photon multiplayer flows for a Unity quest-room project.',
        questRoomPoints: [
          'Tested puzzles and object interactions',
          'Reproduced multiplayer issues',
          'Documented discovered bugs',
        ],
      },
      directions: {
        web: 'WEB',
        gameEngines: 'GAME ENGINES',
        mobile: 'MOBILE',
        xr: 'XR',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        multiplayer: 'MULTIPLAYER',
        projects: 'PROJECTS',
        xrQualifier: 'VR · AR · MR',
      },
      education: {
        title: 'EDUCATION AND COURSES',
        intro: 'SYSTEMS TRAINING · COURSES · CERTIFICATIONS',
        showDetails: 'MORE DETAILS',
        hideDetails: 'LESS DETAILS',
        topics: 'KEY TOPICS',
        entries: {
          master: {
            date: '2023',
            title: 'Master’s degree',
            organization: 'Donetsk National University',
            details: [
              { label: 'DEGREE', value: 'Master’s degree' },
              { label: 'FIELD', value: 'Informatics and Computer Engineering' },
              { label: 'FACULTY', value: 'Faculty of Physics and Technology' },
            ],
            topics: [],
          },
          bachelor: {
            date: '2020',
            title: 'Bachelor’s degree',
            organization: 'Donetsk National University',
            details: [
              { label: 'DEGREE', value: 'Bachelor’s degree' },
              { label: 'FIELD', value: 'Informatics and Computer Engineering' },
              { label: 'FACULTY', value: 'Faculty of Physics and Technology' },
            ],
            topics: [],
          },
          ccna2: {
            date: '29.01.2019',
            title: 'CCNA 2 — Routing and Switching Essentials',
            organization: 'Cisco Networking Academy',
            accountRecord: 'CCNA2-19-IVT1',
            details: [
              {
                label: 'OFFICIAL COURSE TITLE',
                value:
                  'CCNA Routing and Switching: Routing and Switching Essentials (RSE)',
              },
              {
                label: 'LEVEL',
                value:
                  'Second course of the CCNA Routing and Switching program',
              },
            ],
            topics: [
              'Switched network architecture and configuration',
              'Basic Cisco Switch configuration',
              'VLANs',
              'Trunk connections',
              'Inter-VLAN routing',
              'Routing principles',
              'Static routing',
              'Dynamic routing',
              'OSPF',
              'ACL (Access Control Lists)',
              'DHCP',
              'NAT/PAT',
              'Port and network equipment security',
              'Practical assignments and network modeling in Cisco Packet Tracer',
            ],
          },
          cybersecurityEssentials: {
            date: '30.10.2018',
            title: 'Cybersecurity Essentials',
            organization: 'Cisco Networking Academy',
            accountRecord: 'Cybersecurity_Essentials_18',
            details: [{ label: 'COURSE', value: 'Cybersecurity Essentials' }],
            topics: [
              'Information and cybersecurity principles',
              'Threats, vulnerabilities and attacks',
              'Malware and attack methods',
              'Device, network and data protection',
              'Access control and authentication',
              'Cryptography fundamentals',
              'Data confidentiality, integrity and availability',
              'Incident detection and analysis',
              'Risk management and infrastructure protection',
            ],
          },
          packetTracer: {
            date: '28.10.2018',
            title: 'Introduction to Packet Tracer',
            organization: 'Cisco Networking Academy',
            accountRecord: 'Introduction to Packet Tracer 1018',
            details: [
              { label: 'COURSE', value: 'Introduction to Cisco Packet Tracer' },
            ],
            topics: [
              'Cisco Packet Tracer interface',
              'Building and modeling computer networks',
              'Configuring routers, switches, servers and end devices',
              'Verifying traffic flow through a network',
              'Ready-made laboratory exercises',
              'Wireless network modeling',
              'Basic IoT scenarios',
              'Network technology practice in Packet Tracer',
            ],
          },
          ccna1: {
            date: '04.09.2018',
            title: 'CCNA 1 — Introduction to Networks',
            organization: 'Cisco Networking Academy',
            accountRecord: 'CCNA1-18-IVT1',
            details: [
              {
                label: 'OFFICIAL COURSE TITLE',
                value:
                  'CCNA Routing and Switching: Introduction to Networks (ITN)',
              },
              {
                label: 'LEVEL',
                value: 'First course of the CCNA Routing and Switching program',
              },
            ],
            topics: [
              'Computer networks, LANs, WANs and the Internet',
              'Network models and protocols',
              'Ethernet',
              'Network and transport layers',
              'IPv4/IPv6 addressing',
              'IP subnetting',
              'Basic Cisco network device configuration',
              'Application-layer network protocols',
              'Basic network security concepts',
              'Practical assignments in Cisco Packet Tracer',
            ],
          },
          programming: {
            date: '2016',
            title: 'Programming',
            organization: 'SOS COMPUTER',
            details: [
              { label: 'SPECIALIZATION', value: 'Programmer, developer' },
            ],
            topics: [
              'Algorithmic thinking and a structured approach to problem solving',
              'Procedural programming and decomposition of application logic',
              'Data types, expressions and flow control',
              'Arrays, strings and basic data structures',
              'Procedures, functions and reusable program code',
              'File handling, search and fundamental sorting algorithms',
            ],
          },
          graphics: {
            date: '2015',
            title: 'Raster and vector graphics',
            organization: 'SOS COMPUTER',
            details: [{ label: 'SPECIALIZATION', value: 'Designer' }],
            topics: [
              'Fundamentals of raster and vector graphics',
              'Adobe Photoshop: image processing, retouching and color correction',
              'Composition, typography and visual hierarchy',
              'CorelDRAW: vector illustration, logo and layout creation',
              'Preparing graphic materials for publication and print',
              'Exporting and delivering assets in common graphic formats',
            ],
          },
        },
      },
      contact: {
        title: 'LET’S BUILD SOMETHING.',
        body: 'Open to work across web, mobile, multiplayer, Unity/Unigine and interactive products.',
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'COPY EMAIL',
        copied: 'COPIED',
        cv: 'DOWNLOAD CV',
      },
      footer: {
        tagline: 'Built with React + TypeScript.',
        role: 'SOFTWARE DEVELOPER',
        connect: 'CONNECT',
        explore: 'EXPLORE',
        cv: 'DOWNLOAD CV',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        signature: 'WEB · MOBILE · UNITY · MULTIPLAYER',
      },
      legal: {
        back: 'Back home',
        updated: 'Last updated: September 1, 2026',
        privacy: {
          metaTitle: 'Privacy Policy — Dmitry Fursov',
          metaDescription:
            'A short privacy policy for Dmitry Fursov’s portfolio.',
          title: 'PRIVACY POLICY',
          intro:
            'This page explains what information may be processed when you use Dmitry Fursov’s portfolio.',
          collectionTitle: 'Information we collect',
          collection:
            'The site does not require registration or collect special categories of personal data. Hosting and browser systems may automatically provide technical information needed to deliver and secure the page. If you email us, we process the information you voluntarily include in your message.',
          useTitle: 'How information is used',
          use: 'Technical information is used to operate, diagnose and protect the site. Email data is used only to reply to your message and discuss your request. We do not sell personal data or use it for marketing mailings.',
          externalTitle: 'External links',
          external:
            'The site links to GitHub, LinkedIn, Telegram and other external resources. Once you leave this site, the third party’s own terms and privacy policy apply.',
          contactTitle: 'Contact',
          contact:
            'For questions about data processing, email 19fursik99@gmail.com.',
        },
        terms: {
          metaTitle: 'Terms of Use — Dmitry Fursov',
          metaDescription: 'Short terms of use for Dmitry Fursov’s portfolio.',
          title: 'TERMS OF USE',
          intro:
            'By using this site, you agree to the terms below. This is an informational portfolio page, not legal advice.',
          useTitle: 'Using the site',
          use: 'The site is provided to present Dmitry Fursov’s professional experience, projects and contact information. Do not use it for unlawful activity or attempts to disrupt the site.',
          contentTitle: 'Content and intellectual property',
          content:
            'Texts, images, design and source materials belong to their respective rights holders unless stated otherwise. Portfolio materials may not be presented as your own or used commercially without permission from the rights holder.',
          externalTitle: 'External services',
          external:
            'The site contains links to external services. We do not control their availability, content or terms of use.',
          liabilityTitle: 'Disclaimer',
          liability:
            'Information is provided “as is” and may change without notice. We do not guarantee that the site is error-free or continuously available.',
          contactTitle: 'Contact',
          contact:
            'Questions about the materials or these terms can be sent to 19fursik99@gmail.com.',
        },
      },
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
