import type { Resource } from 'i18next'
import { projectCaseCopy } from './projectCase.data'
import { projectCircuitGameCopy } from './projectCircuitGame.data'

export const resources = {
  ru: {
    translation: {
      language: 'RU',
      projectCase: projectCaseCopy.ru,
      projectCircuitGame: projectCircuitGameCopy.ru,
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
      hud: {
        ariaLabel: 'Индикатор прокрутки страницы',
        valueText: '{{percentage}}% — {{section}}',
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
        liveCam: {
          ariaLabel: 'Камера прямой трансляции',
          live: 'LIVE CAM',
          channel: 'CH-09 // EAST SECTOR',
          status: {
            connecting: 'UPLINK INITIALIZING...',
            retry: 'RETRY IN {{seconds}}S',
            signalLost: 'SIGNAL LOST // RECONNECTING',
          },
          telemetry: {
            signal: 'SIGNAL',
            uplink: 'UPLINK',
            latency: 'LATENCY',
            fps: 'FPS',
          },
        },
        projects: 'СМОТРЕТЬ ПРОЕКТЫ',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
        contact: 'СВЯЗАТЬСЯ',
        portraitAlt: 'Дмитрий Фурсов, Software Developer',
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
        title: 'ОПЫТ',
        intro: 'PAST · CURRENT · NEXT',
        present: 'НАСТОЯЩЕЕ ВРЕМЯ',
        detailsLabel: 'CAREER_DETAILS',
        openDetails: 'Открыть подробности о работе в {{company}} за {{period}}',
        detailsTitle: 'Подробности о работе в {{company}} за {{period}}',
        closeDetails: 'Закрыть подробности о работе',
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
          'Кроссплатформенное мобильное приложение myChess на Flutter и Dart',
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
        itTabVrPhaseSummary: 'SARiDU actuator VR training simulator',
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
          'React/TypeScript web architecture and Flutter/Dart mobile development',
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
        soloUnity: 'Unity Developer',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Разработчик функциональности',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
        juniorFrontend: 'Junior Frontend Developer',
        reactNativeDeveloper: 'React Native Developer',
        testing: 'Manual QA / Testing',
        unityDeveloper: 'Unity Developer',
        middleFrontend: 'Middle Frontend Developer',
        mobileDeveloper: 'Middle Mobile Developer',
      },
      platforms: {
        platformPcVrSteam: 'PC VR / Steam',
        platformMetaQuest: 'Meta Quest 2 / 3S / 3',
        platformVr: 'VR',
        platformViveAstra: 'HTC VIVE Pro / Astra Linux',
        platformPcAstraLinux: 'ПК / Astra Linux',
        platformVive: 'HTC VIVE',
        platformMobile: 'Android / iOS',
        platformAndroid: 'Android',
        platformPcWeb: 'PC / Web',
        platformWeb: 'Web',
        platformWindows: 'Windows',
        platformPcWindows: 'ПК / Windows',
        platformWebGl: 'WebGL',
      },
      projects: {
        title: 'ПРОЕКТЫ',
        all: 'ВСЕ',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        'xr-ar': 'XR / AR',
        multiplayer: 'МУЛЬТИПЛЕЕР',
        view: 'VIEW PROJECT',
        technologies: 'Технологии',
        directions: 'Направления проектов',
        technologyFilters: 'Технологии проектов',
        allTechnologies: 'Все технологии',
        webPlatforms: 'Веб-платформы',
        gamesApps: 'Игры и приложения',
        vrTraining: 'VR-тренажёры',
        photoUnavailable: 'Фото пока нет',
        resetFilters: 'Сбросить фильтры',
        noMatchingProjects: 'Проекты с такими фильтрами не найдены.',
        details: 'ДЕТАЛИ ПРОЕКТА',
        role: 'РОЛЬ',
        platform: 'ПЛАТФОРМА',
        company: 'КОМАНДА / КОМПАНИЯ',
        period: 'ПЕРИОД',
        overview: 'ОБЗОР',
        worked: 'ЧТО СДЕЛАНО',
        close: 'ЗАКРЫТЬ',
        viewDetails: 'ПОДРОБНЕЕ О ПРОЕКТЕ',
        backToProjects: 'К ПРОЕКТАМ',
        techStack: 'Технологии',
        contributions: 'Вклад в проект',
        mediaLabel: 'Медиа проекта {{title}}',
        mediaPagination: 'Навигация по медиа',
        selectMedia: 'Показать медиа {{index}}',
        previousMedia: 'Предыдущее медиа',
        nextMedia: 'Следующее медиа',
        playVideo: 'СМОТРЕТЬ ВИДЕО',
        videoTitle: 'Видео проекта {{title}}',
        notFoundMetaTitle: 'Проект не найден — Дмитрий Фурсов',
        notFoundTitle: 'ПРОЕКТ НЕ НАЙДЕН',
        notFoundDescription:
          'Возможно, адрес устарел или проект был перемещён.',
        actions: {
          live: 'ОТКРЫТЬ ДЕМО',
          download: 'СКАЧАТЬ',
          external: 'ВНЕШНЯЯ ССЫЛКА',
        },
        actionLabels: {
          sariduVkPost1: 'VK · публикация 1',
          sariduVkPost2: 'VK · публикация 2',
          vulkanVerseClient: 'Клиент',
        },
        unavailableActions: {
          mychessWebsite:
            'Сайт MyChess закрыт и больше недоступен для просмотра.',
          friezeViewingRoomApp:
            'Историческое мобильное приложение Frieze Viewing Room больше недоступно в магазине.',
          vulkanVerseClient:
            'Клиент VulcanVerse больше недоступен: проект закрыт, а официальный сайт удалён.',
        },
        mychessvr: 'MyChessVR',
        industrial: 'Промышленные VR-тренажёры',
        drilling: 'VR-тренажёр бурильщиков',
        sariduActuator: 'VR-тренажёр САРиДУ и исполнительный механизм',
        mobileRts: 'Мобильная multiplayer RTS',
        earthDragons: 'Земля драконов АШАН',
        vulkanVerse: 'Vulkan Verse',
        mychessWeb: 'myChess',
        mychessMobile: 'MyChess Mobile',
        friezeViewingRoom: 'Frieze Viewing Room',
        cardTeasers: {
          mychessWeb:
            'myChess — первая российская шахматная экосистема, объединяющая онлайн-игры, турниры, обучение и общение на одной платформе. Реальные соперники, AI-чемпионы, шахматные задачи и анализ партий Stockfish создают пространство для игроков любого уровня.',
          mobileRts:
            'Мобильная PvP-стратегия с турнирами и повторами сражений. Сетевые сценарии и серверные события собраны в единый игровой контур.',
          sariduActuator:
            'VR-тренажёр на Unigine, который превращает отработку неисправностей на атомном оборудовании в безопасную и реалистичную практику с 15+ сценариями. Одиночный и кооперативный режимы, три варианта оборудования и встроенный экзамен помогают проверить готовность сотрудника на полностью российском ПО, лицензированном для использования в РФ.',
          mychessvr:
            'MyChess VR переносит шахматы в виртуальную реальность: здесь можно играть в классические партии, решать десятки шахматных головоломок и разбирать свои ходы с помощью Stockfish. Проект помогает играть, тренироваться и совершенствовать шахматные навыки.',
          catCitten:
            'Интернет-магазин с каталогом, заказами и отдельными B2B/B2C-кабинетами. Интерфейс помогает пройти путь от выбора товара до оформления.',
          industrial:
            'Интерактивные VR-сценарии для обучения работе с промышленным оборудованием. Пошаговые операции и проверка ошибок делают практику понятной.',
          aptiveEducation:
            'Образовательная платформа для учеников, родителей и преподавателей. Прогресс, задания и рабочие пространства собраны в одном интерфейсе.',
          friezeViewingRoom:
            'Мобильная галерея Frieze для знакомства с картинами ведущих галерей: тематические подборки, удобный поиск, детальные карточки работ, AR-примерка и более 10 000 пользователей.',
          neo4Sightline:
            'Unreal Engine-визуализация жилых комплексов, доступная прямо в браузере с компьютера или смартфона: исследуйте территорию, выбирайте квартиры и настраивайте интерьер в интерактивном 3D.',
          fuelCms:
            'CMS для поставок топлива, учёта заправок и расчёта цен. Рабочие экраны помогают управлять ежедневными операциями.',
          drilling:
            'VR-тренажёр бурильщиков для безопасной отработки рабочих процессов на буровой установке: взаимодействие с оборудованием, совместная работа нескольких операторов и реалистичная практика в виртуальной среде.',
          vulkanVerse:
            'VulcanVerse — открытая MMORPG в греко-римском фэнтезийном мире, где исследование регионов, развитие персонажа и владение NFT-активами объединены в одном multiplayer-пространстве. 100K+ уникальных игроков уже познакомились с этим миром.',
          korobka:
            'Адаптивный сайт транспортной компании, собранный по дизайн-системе. Компоненты и навигация работают на любом экране.',
          doorsCms:
            'CMS магазина дверей для каталога, заказов и контента. Административные сценарии собраны в понятные рабочие экраны.',
          earthDragons:
            'AR-приложение кампании АШАН, где карточки и комикс оживляют коллекцию драконов. Есть коллекция, runner-режим и виртуальный кубик.',
          virtualSommelierVillaKrim:
            'AR-приложение Villa Krim превращает этикетку бутылки в виртуального сомелье: AR-видео, рекомендации о вине и короткое тестирование превращают знакомство с напитком в интерактивную дегустацию.',
          authorsWineVillaKrim:
            'AR-приложение для авторского вина Villa Krim: этикетка запускает видео и интерактивную историю о коллекции, вкусе, аромате и гастрономических сочетаниях.',
          chudoProjector:
            'Chudo Projector превращает детскую раскраску в интерактивное шоу на стене: ребёнок раскрашивает персонажа или предмет, сканирует его смартфоном и видит собственную версию в проекционной сцене. Несколько игровых режимов и светящаяся палочка превращают обычный лист бумаги в цифровое приключение.',
          arColoring:
            'Раскраски оживают через камеру смартфона. AR-персонажи и тематические сцены превращают печатную страницу в игру.',
          arColoringZebra:
            'AR-раскраски для детей от Творческой мастерской Зебра: бумажные рисунки оживают в дополненной реальности.',
          chudobooks:
            'Детские книги с AR-сценами, которые запускаются с печатных страниц. Контент доставляется и обновляется внутри приложения.',
          arChudaboxes:
            'AR-приложение для промо-материалов: изображение становится интерактивной сценой через камеру смартфона.',
          chudoFloor:
            'Интерактивный пол, реагирующий на движения посетителей. Проекционная инсталляция собрана на Unity и OpenCV.',
          questRoom:
            'Тестирование сетевой Unity-игры с поиском и описанием ошибок. Проверял multiplayer-сценарии и стабильность игровых потоков.',
          mychessMobile:
            'Мобильная версия первой российской шахматной экосистемы myChess, объединяющая онлайн-игры, турниры, обучение и общение в мобильном приложении на Flutter. Реальные соперники, AI-чемпионы, шахматные задачи и анализ партий Stockfish доступны на Android и iOS.',
        },
        mychessvrDesc:
          'MyChess VR переносит шахматы за пределы плоского экрана — в полноценное виртуальное пространство с физическим взаимодействием с доской, фигурами и игровыми объектами. Пользователь может брать фигуры руками, перемещать их по доске, взаимодействовать с шахматными часами и проходить партии в естественной для VR форме.\n\nВ классическом режиме доступны три формата игры: Classic, Rapid и Blitz, а также три уровня сложности соперника. Система шахматных часов добавляет партиям привычную механику контроля времени и делает игровой процесс ближе к настоящему турнирному формату.\n\nДля развития тактического мышления в MyChess VR предусмотрен режим шахматных пазлов. В нём собраны десятки типов задач, каждый из которых доступен на трёх уровнях сложности. Отдельный режим «Игра с учителем» использует локально запущенный Stockfish: после каждого хода система оценивает решение игрока, показывает более сильную альтернативу и отображает численное преимущество выбранной стороны.\n\nВсе режимы доступны в трёх игровых локациях: библиотеке, парке и ресторане. MyChess VR уже можно приобрести в Steam и запустить через SteamVR.',
        industrialDesc:
          'Интерактивные промышленные сценарии обучения с пошаговыми операциями, проверкой действий, подсказками, обработкой ошибок и реалистичным взаимодействием с оборудованием.',
        drillingDesc:
          'VR-тренажёр бурильщиков, в котором операторы отрабатывают ключевые рабочие процессы на буровой установке в виртуальной среде. Приложение воспроизводит взаимодействие с оборудованием и инструментами, поддерживает совместную работу нескольких участников и синхронизирует действия в реальном времени, позволяя безопасно готовиться к производственным сценариям без остановки реального оборудования.',
        sariduActuatorDesc:
          'Промышленное VR-приложение предназначено для обучения сотрудников действиям при неисправностях на рабочем месте. Пользователь может проходить сценарии самостоятельно или в кооперативе с другим участником в VR-шлеме. Приложение полностью построено на российском программном обеспечении, лицензированном для использования в РФ. В нём смоделированы рабочее место и реальное оборудование, включая Type A, Type M и пневматическую систему, а режимы обучения и экзамена позволяют сначала освоить правильный алгоритм, а затем проверить знания и навыки.',
        mobileRtsDesc:
          'Мобильная RTS с мультиплеерным PvP, турнирами, серверными событиями и сетевой инфраструктурой.',
        earthDragonsDesc:
          'Мобильное AR-приложение промо-кампании АШАН: физические карточки и комикс открывают коллекцию из 16 драконов на планете Заурус.',
        earthDragonsMetrics: [
          { value: '16', label: 'драконов в коллекции' },
          { value: '26.04–13.06.2021', label: 'период кампании в Украине' },
          {
            value: 'iOS 1.3',
            label: 'последняя подтверждённая версия · 30.10.2023',
          },
          { value: 'Android 0.4', label: 'сохранённая версия · 07.01.2022' },
        ],
        vulkanVerseDesc:
          'VulcanVerse — открытая MMORPG в греко-римском фэнтезийном мире, построенная вокруг идеи личного пространства и цифрового владения. Игрок исследует четыре региона вокруг Vulcan City, знакомится с мифологическим миром и развивает собственную историю внутри большого multiplayer-пространства. 100K+ уникальных игроков уже познакомились с проектом.\n\nКлючевая особенность VulcanVerse — сочетание приключения и владения: земельные участки существуют как NFT-активы, а их владельцы могут изменять ландшафт, строить собственные пространства и открывать новые игровые возможности. Это превращает карту не просто в фон для приключений, а в мир, который игрок помогает формировать сам.\n\nВ игровом цикле соединены исследование, сбор ресурсов, выполнение заданий, рыбалка, сражения и развитие персонажей и активов. Локация Tartarus добавляет в этот мир отдельный боевой контекст, а клиент-серверные сценарии поддерживают совместную игру и постоянное взаимодействие игроков.',
        mychessWebDesc:
          'myChess — первая российская шахматная экосистема, созданная как единое цифровое пространство для игры, соревнований, обучения и общения. На платформе зарегистрировались более 100 000 пользователей, сыгравших свыше 600 000 партий: они могут находить равных соперников, играть с друзьями и AI-чемпионами, участвовать в индивидуальных и командных турнирах, решать шахматные задачи и подробно анализировать свои партии с помощью Stockfish. Сообщества, команды, чаты, трансляции, рейтинги и инструменты честной игры формируют вокруг шахмат полноценную социальную среду. Масштаб и зрелость продукта подтверждает его включение в реестр российского программного обеспечения.',
        mychessMobileDesc:
          'MyChess Mobile — мобильная версия первой российской шахматной экосистемы, созданная как кроссплатформенное Flutter-приложение для Android и iOS. Более 100 000 пользователей уже сыграли свыше 600 000 партий: в приложении доступны матчи с реальными соперниками, друзьями и AI-чемпионами, индивидуальные и командные турниры, шахматные задачи и подробный анализ партий с помощью Stockfish. Сообщества, команды, чаты, трансляции, рейтинги и инструменты честной игры помогают оставаться в экосистеме независимо от того, где находится игрок. Как и веб-версия, мобильное приложение входит в реестр российского программного обеспечения.',
        friezeViewingRoomDesc:
          'Frieze Viewing Room превращает международную арт-ярмарку в персональную галерею в смартфоне. Пользователь может исследовать кураторские подборки и коллекции галерей, находить картины по художнику, цене, медиуму, разделу и дате, открывать подробную информацию о работе и рассматривать изображения высокого разрешения. Путь от первого знакомства с картиной до контакта с галереей выстроен прямо внутри приложения: заинтересованный покупатель может отправить запрос, добавить сообщение и свои контактные данные. AR-сценарий помогает примерить картину на стене и оценить её масштаб в реальном пространстве. Приложение уже выбрали более 10 000 пользователей Google Play — показатель востребованности цифрового опыта Frieze среди любителей искусства.',
        friezeViewingRoomPoints: [
          'Разрабатывал кроссплатформенные мобильные интерфейсы и пользовательские сценарии Frieze на React Native для iOS и Android',
          'Реализовывал поиск и многоуровневую фильтрацию картин по художнику, цене, галерее, разделу и дате',
          'Собирал сценарии исследования коллекций: тематические подборки, галереи, карточки работ и просмотр изображений высокого разрешения',
          'Проектировал сценарий прямого обращения к галерее по выбранной картине: сообщение и контактные данные пользователя собирались в одном понятном потоке',
          'Поддерживал AR-сценарий размещения картины в пространстве пользователя с оценкой масштаба работы',
        ],
        friezeViewingRoomMetrics: [
          { value: '10K+', label: 'скачиваний в Google Play' },
        ],
        mychessMetrics: [
          { value: '121 577', label: 'зарегистрированных пользователей' },
          { value: '665 880', label: 'сыгранных партий' },
          { value: '459', label: 'созданных сообществ' },
          { value: '50+', label: 'проведённых турниров' },
          { value: '2 000+', label: 'участников в крупнейшем турнире' },
        ],
        mychessMobilePoints: [
          'Разрабатывал кроссплатформенное приложение на Flutter',
          'Поддерживал публикационные версии приложения для Android и iOS',
        ],
        mychessMobileMetrics: [
          { value: '121 577', label: 'зарегистрированных пользователей' },
          { value: '665 880', label: 'сыгранных партий' },
          { value: '459', label: 'созданных сообществ' },
          { value: '50+', label: 'проведённых турниров' },
          { value: '2 000+', label: 'участников в крупнейшем турнире' },
        ],
        mychessvrPoints: [
          'Полная реализация на Unity в качестве единственного разработчика',
          'Полный цикл разработки приложения — от нуля до релиза — выполнен самостоятельно',
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
          'Полный цикл разработки приложения — от архитектуры и реализации до подготовки релизной версии — выполнен самостоятельно',
          'Реализовал сетевое взаимодействие и синхронизацию действий нескольких операторов через Netcode for GameObjects',
          'Реализовал рабочие процессы бурового оборудования и интерактивное взаимодействие с ключевыми элементами установки',
          'Интегрировал Final IK для реалистичной кинематической модели персонажей и синхронизации их движений в VR',
        ],
        drillingMediaScreen1: 'Сцена VR-обучения бурению — экран 1',
        drillingMediaScreen2: 'Сцена VR-обучения бурению — экран 2',
        drillingMediaScreen3: 'Сцена VR-обучения бурению — экран 3',
        drillingMediaScreen4: 'Сцена VR-обучения бурению — экран 4',
        drillingMediaScreen5: 'Сцена VR-обучения бурению — экран 5',
        drillingMediaScreen6: 'Сцена VR-обучения бурению — экран 6',
        drillingMediaScreen7: 'Сцена VR-обучения бурению — экран 7',
        drillingMediaScreen8: 'Сцена VR-обучения бурению — экран 8',
        drillingMediaScreen9: 'Сцена VR-обучения бурению — экран 9',
        sariduActuatorPoints: [
          'Разработал приложение полностью на российском ПО, лицензированном для использования в РФ',
          'Реализовал одиночный и кооперативный режимы с синхронизацией двух участников в VR-шлемах',
          'Разработал режимы обучения и экзамена для проверки знаний и навыков сотрудника',
          'Реализовал 15+ сценариев неисправностей для Type A, Type M и пневматической системы',
          'Смоделировал рабочее место и три варианта реального оборудования атомных электростанций',
          'Добавил режим наблюдателя для экзаменатора и группы на внешнем мониторе без VR-шлема',
          'Реализовал хронометраж экзамена, работу с инструментами, переключение проводов и разборку оборудования',
          'Добавил журнал действий пользователя, сохранение и выгрузку результатов, а также таблицу сравнения',
          'Разработал собственный voice chat через микрофон без сторонних плагинов',
        ],
        sariduActuatorMediaAtomSkills:
          'Презентация VR-тренажёра САРиДУ на AtomSkills-2023',
        sariduActuatorMediaManInVr:
          'Участник демонстрации VR-тренажёра САРиДУ в гарнитуре',
        sariduActuatorMetrics: [
          { value: '15+', label: 'сценариев неисправностей' },
          { value: '3', label: 'варианта оборудования' },
          { value: 'Single + Co-op', label: 'режимы взаимодействия' },
          {
            value: 'Training + Exam + Observer',
            label: 'режимы обучения, экзамена и наблюдения',
          },
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
          'Связка мобильного AR-приложения с физическими карточками и комиксом кампании',
          'Коллекция из 16 персонажей, runner-режим, виртуальный кубик и публикация в соцсетях',
        ],
        earthDragonsMediaSplash:
          'Стартовый экран приложения «Земля Драконів» с логотипом АШАН',
        earthDragonsMediaLogo: 'Логотип приложения «Земля Драконів»',
        earthDragonsMediaGameplayOne: 'Геймплейный экран приложения, сцена 1',
        earthDragonsMediaGameplayTwo: 'Геймплейный экран приложения, сцена 2',
        earthDragonsMediaGameplayThree: 'Геймплейный экран приложения, сцена 3',
        earthDragonsMediaDragonElnus:
          'Карточка персонажа ЕЛЬНУС в AR-приложении',
        earthDragonsMediaDragonNaura:
          'Карточка персонажа НАУРА в AR-приложении',
        earthDragonsMediaCollection:
          'Экран коллекции с 16 слотами драконов и открытыми персонажами',
        earthDragonsMediaPreview: '3D-просмотр дракона перед запуском игры',
        earthDragonsMediaRunner:
          'Runner-режим с драконом, препятствиями и счётчиками',
        earthDragonsMediaRunnerScore:
          'Runner-режим с результатом, дистанцией и собранными кристаллами',
        earthDragonsMediaDie: 'AR-интерфейс виртуального кубика',
        vulkanVersePoints: [
          'Разрабатывал и интегрировал игровые механики локации Tartarus в основной клиент VulcanVerse',
          'Реализовывал клиент-серверное взаимодействие и multiplayer-сценарии на Photon',
        ],
        vulkanVerseMetrics: [
          { value: '100K+', label: 'уникальных игроков' },
          { value: '3 × 3 км', label: 'размер игрового мира' },
          { value: '4', label: 'тематических региона вокруг Vulcan City' },
          { value: '20 × 20 м', label: 'размер земельного участка' },
          { value: 'Windows', label: 'основная платформа клиента' },
        ],
        vulkanVerseMediaCity: 'Классическая городская сцена Vulcan Verse',
        vulkanVerseMediaShrine: 'Лесная дорожка и святилище в игровом мире',
        vulkanVerseMediaWorld: 'Панорамный вид на окружение Vulcan Verse',
        vulkanVerseMediaTemple: 'Храмовая площадь с символикой регионов',
        vulkanVerseMediaNotus: 'Пустынная сцена региона Notus',
        mychessvrMediaChessPuzzles: 'Режим шахматных головоломок',
        mychessvrMediaGameplay1: 'Игровая сцена MyChessVR',
        mychessvrMediaGameplay2: 'VR-партия в MyChessVR',
        mychessvrMediaGameplay3: 'Взаимодействие с шахматной доской в VR',
        mychessvrMediaGameplay4: 'Шахматная партия в виртуальном окружении',
        mychessvrMediaGameplay5: 'Игровой процесс MyChessVR',
        mychessvrMediaLocationCafe: 'Кафе — окружение MyChessVR',
        mychessvrMediaLocationLibrary: 'Библиотека — окружение MyChessVR',
        mychessvrMediaLocationPark: 'Парк — окружение MyChessVR',
        mychessvrMediaStockfishAnalysis: 'Анализ ходов Stockfish',
        mychessWebMediaAllVersusOne: 'Экран режима «все против одного»',
        mychessWebMediaAnalysis: 'Анализ шахматной партии',
        mychessWebMediaAuthorization: 'Экран авторизации myChess',
        mychessWebMediaChampions: 'Таблица чемпионов myChess',
        mychessWebMediaLogo: 'Логотип myChess',
        mychessWebMediaMessages: 'Сообщения и чаты myChess',
        mychessWebMediaNotifications: 'Уведомления myChess',
        mychessWebMediaObserverTournament: 'Наблюдение за турниром',
        mychessWebMediaProfile: 'Профиль пользователя myChess',
        mychessWebMediaPuzzles: 'Шахматные головоломки myChess',
        mychessWebMediaPuzzles2: 'Дополнительный экран головоломок',
        mychessWebMediaSelectGame: 'Выбор шахматной партии',
        mychessWebMediaTournament: 'Турнирный экран myChess',
        friezeViewingRoomMediaCover:
          'Обложка мобильного приложения Frieze Viewing Room',
        friezeViewingRoomMediaInquiry:
          'Экран обращения к галерее по поводу произведения искусства',
        friezeViewingRoomMediaFilters: 'Экран фильтров произведений искусства',
        friezeViewingRoomMediaSections:
          'Экран тематических разделов приложения',
        friezeViewingRoomMediaArtwork: 'Экран просмотра произведения искусства',
        friezeViewingRoomMediaGallery:
          'Экран просмотра произведения из другой галереи',
        mychessMobileMedia1: 'Экран мобильного приложения myChess',
        mychessMobileMedia2: 'Игровой экран myChess Mobile',
        mychessMobileMedia3: 'Турнирный экран myChess Mobile',
        mychessMobileMedia4: 'Профиль в myChess Mobile',
        mychessMobileMedia5: 'Социальный экран myChess Mobile',
        mychessWebPoints: [
          'Разработал весь пользовательский интерфейс MyChess для десктопных и мобильных устройств',
          'Обеспечил стабильный и удобный игровой процесс в реальном времени с отзывчивым интерфейсом',
          'Реализовал различные шахматные режимы, внутриигровую систему рейтингов, матчмейкинг и лидерборды по рейтингу',
          'Интегрировал режим игры с AI-чемпионами, созданными по образу известных шахматистов, включая Яна Непомнящего и Магнуса Карлсена',
          'Разработал систему соревновательных сценариев для одиночных и командных турниров разных форматов, включая создание пользовательских соревнований и поддержку событий с аудиторией свыше 2 000 участников',
          'Разработал социальную инфраструктуру платформы: сообщества, командные пространства и инструменты управления участниками',
          'Реализовал чаты в лобби, турнирах и сообществах, личную переписку и систему уведомлений',
          'Реализовал два режима одновременной игры: один игрок против нескольких соперников и коллективное голосование за ход против одного игрока',
          'Реализовал уникальный режим chessboxing с чередованием шахматных партий и боксерских раундов',
          'Разработал MyChess Patrol для просмотра чужих партий и рассмотрения жалоб на подозрительные действия игроков',
          'Создал раздел обучения с шахматными задачами, матами в один/несколько ходов и сериями решений',
          'Добавил историю ходов с переключением позиций, возможность пожаловаться на игрока, поделиться партией и запустить пост-игровой разбор',
          'Реализовал многоуровневый анализ партий с Stockfish: кешированный глубокий, облачный и локальный прямо в браузере — с лучшими ходами, зевками, вариантами и альтернативными линиями',
          'Реализовал шахматные трансляции, чтобы пользователи могли проводить и смотреть прямые эфиры матчей на платформе',
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
        neo4Sightline: 'Neo4 Web / Interior Sightline',
        neo4SightlineDesc:
          'Neo4 превращает выбор жилья в полноценное 3D-путешествие по будущему жилому комплексу. Пользователь может рассмотреть архитектуру и территорию с любого ракурса, пройтись по двору, почувствовать ритм живого города, а затем перейти к подбору конкретной квартиры. В карточке каждого варианта доступны планировка, площадь, стоимость и другие параметры, а виртуальная прогулка позволяет заранее изучить все комнаты — от кухни до ванной. Интерьер можно адаптировать под себя: менять мебель, собирать собственную конфигурацию и сразу оценивать её влияние на итоговую стоимость. Смена времени суток и сезонов помогает увидеть проект в разных сценариях и почувствовать атмосферу места ещё до визита. За реалистичной графикой и плавной работой прямо в браузере — связка Unreal Engine и Pixel Streaming.',
        neo4SightlinePoints: [
          'Связывал браузерный интерфейс с интерактивной Unreal Engine-сценой через командный и событийный обмен данными',
          'Реализовывал пользовательские сценарии выбора жилого комплекса, просмотра квартир, перехода в интерьер и настройки мебели',
          'Реализовывал синхронизацию пользовательского ввода в браузере с Unreal Engine-приложением и обмен данными о состоянии интерфейса',
          'Поддерживал навигацию по территории, смену времени суток и сезонов как единый пользовательский сценарий',
        ],
        neo4SightlineMediaScreen1: 'Neo4 Web — экран 1',
        neo4SightlineMediaScreen2: 'Neo4 Web — экран 2',
        neo4SightlineMediaScreen3: 'Neo4 Web — экран 3',
        neo4SightlineMediaScreen4: 'Neo4 Web — экран 4',
        neo4SightlineMediaScreen5: 'Neo4 Web — экран 5',
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
        virtualSommelierVillaKrim: 'Виртуальный сомелье Villa Krim',
        virtualSommelierVillaKrimDesc:
          'Виртуальный сомелье Villa Krim превращает этикетку бутылки в интерактивный гид по вину. Достаточно навести камеру смартфона на этикетку, чтобы запустить AR-видео, узнать больше о напитке и подходящих гастрономических сочетаниях, а затем проверить впечатления коротким тестированием. Приложение объединяет дополненную реальность, сторителлинг и игровой сценарий дегустации, превращая знакомство с вином в запоминающийся брендовый опыт.',
        virtualSommelierVillaKrimPoints: [
          'Реализовал распознавание этикетки бутылки и запуск AR-сценария с видео, сведениями о вине и рекомендациями по гастрономическим сочетаниям',
          'Интегрировал интерактивный сценарий виртуального сомелье: консультационные подсказки и тестирование, позволяющее пользователю проверить знания после дегустации',
        ],
        virtualSommelierVillaKrimMediaRu:
          'Иконка русскоязычной версии «Виртуального сомелье Villa Krim»',
        virtualSommelierVillaKrimMediaUa:
          'Иконка украиноязычной версии «Віртуальний сомельє Villa Krim»',
        virtualSommelierVillaKrimMediaLogo1:
          'Промо-изображение приложения «Виртуальный сомелье Villa Krim»',
        virtualSommelierVillaKrimMediaLogo2:
          'Иконка приложения «Виртуальный сомелье Villa Krim»',
        virtualSommelierVillaKrimMediaScreen1:
          'Первый экран приложения «Виртуальный сомелье Villa Krim»',
        virtualSommelierVillaKrimMediaScreen2:
          'Второй экран приложения «Виртуальный сомелье Villa Krim»',
        virtualSommelierVillaKrimMediaScreen3:
          'Третий экран приложения «Виртуальный сомелье Villa Krim»',
        authorsWineVillaKrim: 'Авторское вино Villa Krim',
        authorsWineVillaKrimDesc:
          'Авторское вино Villa Krim превращает этикетку бутылки в точку входа в интерактивную историю коллекции. Камера смартфона запускает AR-видео, а приложение помогает узнать больше о вине, его купаже, вкусе, аромате и гастрономических сочетаниях. Такой формат связывает физический продукт с цифровым контентом и позволяет бренду рассказывать о коллекции прямо в момент знакомства с бутылкой.',
        authorsWineVillaKrimPoints: [
          'Реализовал распознавание этикетки и запуск AR-видео о конкретном вине в едином мобильном сценарии',
          'Интегрировал структурированный контент о коллекции: сведения о купаже, вкусе, аромате и гастрономических сочетаниях',
        ],
        authorsWineVillaKrimMediaCampaign:
          'Промо-изображение AR-сценария Villa Krim: пользователь сканирует бутылку смартфоном',
        authorsWineVillaKrimMediaApp:
          'Иконка приложения «Авторское вино Villa Krim»',
        authorsWineVillaKrimMediaLogo1:
          'Промо-изображение приложения «Авторское вино Villa Krim»',
        authorsWineVillaKrimMediaLogo2:
          'Иконка приложения «Авторское вино Villa Krim»',
        authorsWineVillaKrimMediaScreen1:
          'Первый экран приложения «Авторское вино Villa Krim»',
        authorsWineVillaKrimMediaScreen2:
          'Второй экран приложения «Авторское вино Villa Krim»',
        authorsWineVillaKrimMediaScreen3:
          'Третий экран приложения «Авторское вино Villa Krim»',
        chudoProjector: 'Chudo Projector',
        chudoProjectorDesc:
          'Chudo Projector — интерактивная проекционная система для детских пространств, в которой бумажная раскраска становится частью живой сцены. Проект объединял два приложения: мобильный клиент для сканирования раскрашенных рисунков и Windows-приложение, выводившее сцену на проектор. Ребёнок сам выбирал цвета, а система переносила результат с рисунка на 3D-персонажа или объект интерьера — поэтому каждая сцена получалась персональной.\n\nВ первом режиме ребёнок собирал комнату из более чем 20 рисунков: сканировал персонажей и предметы интерьера, после чего они появлялись на проекционной сцене в собственной раскраске. Когда комната была готова, все объекты оживали в музыкальной сценке: персонажи танцевали, появлялись частицы и звуковые реакции. Сцену можно было запускать снова, открывая новые комбинации.\n\nДва дополнительных режима добавляли интерактив с физическим пространством. В одном ребёнок возвращал цвет отдельным персонажам и предметам светящейся палочкой, направляя её на проецируемую стену. В другом — раскрашивал всю чёрно-белую сцену, словно проявляя изображение светом. Так проект объединял творчество, движение и игру, превращая обычную стену в пространство, которое реагирует на действия детей.',
        chudoProjectorPoints: [
          'Спроектировал связку мобильного и Windows-приложений, которая превращала детскую раскраску в персонализированную проекционную сцену',
          'Реализовал перенос пользовательской раскраски на 3D-персонажей и объекты интерьера с синхронизацией данных между Android и ПК',
          'Связал мобильный и desktop-клиенты для синхронной передачи текстур и состояния сцены с использованием Photon',
          'Разработал сценарий сборки комнаты из более чем 20 рисунков и повторно запускаемую музыкальную сцену с анимацией персонажей, частицами и звуковыми реакциями',
          'Реализовал два режима взаимодействия со светящейся палочкой: восстановление цвета отдельных объектов и раскрашивание всей сцены на проекционной стене',
          'Настроил компьютерное зрение для распознавания источника света и перевода координат камеры в координаты проекционной сцены, чтобы движения ребёнка точно управляли визуальным эффектом',
        ],
        chudoProjectorMediaScreen1: 'Первый экран приложения Chudo Projector',
        chudoProjectorMediaScreen2: 'Второй экран приложения Chudo Projector',
        chudoProjectorMediaScreen3: 'Третий экран приложения Chudo Projector',
        arColoring: 'AR Coloring',
        arColoringDesc:
          'Мобильное AR-приложение Chudoboxes, превращающее бумажные раскраски в ожившие анимации через камеру смартфона.',
        arColoringPoints: [
          'Реализовал сценарий QR-код / обложка → раскраска → сканирование → AR-анимация',
          'Настроил распознавание печатных изображений и показ контента поверх раскраски',
          'Поддерживал мобильные релизы для iOS и Android и тематические наборы контента',
        ],
        arColoringMediaHome:
          'Главный экран AR Coloring с брендингом Chudoboxes Coloring',
        arColoringMediaThemes: 'Экран выбора тематического набора раскрасок',
        arColoringMediaAnimals:
          'Экран набора Wild Animals с контентом животных',
        arColoringMetrics: [
          { value: 'iOS + Android', label: 'платформы' },
          { value: '1.7 / 11', label: 'последние версии iOS / Android' },
          { value: '5', label: 'именованных контент-паков iOS' },
          { value: '200', label: 'загрузок Android по архивной метрике' },
        ],
        arColoringZebra: 'AR Раскраски',
        arColoringZebraDesc:
          'Приложение AR Раскраски от Творческой мастерской Зебра превращает бумажные раскраски в 3D-анимации через камеру смартфона или планшета. Пользователь активирует набор по QR-коду, раскрашивает страницу, оживляет героев и может снять фото или видео.',
        arColoringZebraPoints: [
          'Реализовал flow QR-код → активация набора → раскрашивание → сканирование → AR-анимация',
          'Настроил сравнение раскрашенной и авторской версии рисунка с оригинальными цветами художника',
          'Поддержал AR-фото, AR-видео, социальный шеринг и счётчик оживших рисунков',
        ],
        arColoringZebraMediaScreen1: 'Скриншот 1 AR Раскраски из RuStore',
        arColoringZebraMediaScreen2: 'Скриншот 2 AR Раскраски из RuStore',
        arColoringZebraMediaScreen3: 'Скриншот 3 AR Раскраски из RuStore',
        arColoringZebraMediaScreen4: 'Скриншот 4 AR Раскраски из RuStore',
        arColoringZebraMediaScreen5: 'Скриншот 5 AR Раскраски из RuStore',
        arColoringZebraMetrics: [
          { value: 'Android', label: 'платформа RuStore' },
          { value: '0.1', label: 'первая версия' },
          { value: 'до 1K', label: 'скачиваний в RuStore' },
          { value: '122.7 MB', label: 'размер приложения' },
        ],
        chudobooks: 'Chudobooks',
        arChudaboxes: 'AR Chudoboxes / Chudoboxes EKO',
        chudobooksDesc:
          'Мобильное AR-приложение для детской книги Chudoboxes: печатные маркеры запускали 3D-персонажей и сцены, а загружаемый контент, аудио, фото и видео связывали физическую книгу с интерактивным приложением.',
        chudobooksPoints: [
          'Собрал сценовый flow Root → MainMenu → QR/Scanning → CardSets для работы с наборами контента',
          'Реализовал marker-based AR-сцены и распознавание печатных страниц через Vuforia',
          'Настроил проверку MD5 и динамическую загрузку платформенных 3D/AR AssetBundle-пакетов с CDN',
          'Связал QR-активацию наборов, локализацию RU/EN/UK, аудиосценарии и фото/видео с AR-персонажами',
        ],
        chudobooksMediaScreen1: 'Главный экран приложения Chudobooks',
        chudobooksMediaScreen2: 'Игровой экран приложения Chudobooks',
        chudobooksMetrics: [
          { value: 'iOS + Android', label: 'платформы' },
          { value: '1.9 / 1.11', label: 'последние версии iOS / Android' },
          { value: '~900', label: 'Android-установок по архивной метрике' },
          { value: '3.64 / 5', label: 'рейтинг Android по 14 оценкам' },
          { value: 'Unity 2018.4', label: 'версия движка в исходном проекте' },
          { value: 'v9.0', label: 'версия CDN-контентных пакетов' },
        ],
        arChudaboxesDesc:
          'Коммерческий мобильный AR-компаньон интерактивной детской книги: печатные страницы и промоматериалы запускали анимации персонажей, AR-фото и AR-видео. Версия Chudoboxes EKO расширила экосистему коллекционными наклейками, открыткой и мини-играми для кампании ЕКО Маркет.',
        arChudaboxesPoints: [
          'Развивал marker-based AR-сценарии для печатных материалов',
          'Связал интерактивный контент книги с фото- и видеосценариями',
          'Поддерживал мобильный AR-продукт и его EKO Market-вариант',
        ],
        arChudaboxesMediaOne: 'Исторический стартовый экран AR Chudoboxes',
        arChudaboxesMediaTwo: 'Исторический экран библиотеки AR Chudoboxes',
        arChudaboxesMediaThree: 'Исторический экран контента AR Chudoboxes',
        projectFootprint: 'ОХВАТ ПРОЕКТА',
        arChudaboxesMetrics: [
          {
            value: '1.3K+',
            label: 'установок Android для вариантов приложения',
          },
          { value: '1.26M+', label: 'просмотров проморолика EKO' },
          { value: '137 · 15', label: 'магазинов · регионов в кампании' },
          {
            value: 'iOS + Android',
            label: 'коммерческое мобильное AR-приложение',
          },
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
        webDescription: 'Современные веб-приложения и платформы',
        gameDescription: 'Интерактивные 3D-проекты и симуляции',
        mobileDescription: 'Нативные и кроссплатформенные приложения',
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
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'КОПИРОВАТЬ EMAIL',
        copied: 'СКОПИРОВАНО',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
      },
      footer: {
        role: 'SOFTWARE DEVELOPER',
        connect: 'КОНТАКТЫ',
        explore: 'НАВИГАЦИЯ',
        cv: 'СКАЧАТЬ РЕЗЮМЕ',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
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
      projectCase: projectCaseCopy.en,
      projectCircuitGame: projectCircuitGameCopy.en,
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
      hud: {
        ariaLabel: 'Page scroll indicator',
        valueText: '{{percentage}}% — {{section}}',
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
        liveCam: {
          ariaLabel: 'Live camera feed',
          live: 'LIVE CAM',
          channel: 'CH-09 // EAST SECTOR',
          status: {
            connecting: 'UPLINK INITIALIZING...',
            retry: 'RETRY IN {{seconds}}S',
            signalLost: 'SIGNAL LOST // RECONNECTING',
          },
          telemetry: {
            signal: 'SIGNAL',
            uplink: 'UPLINK',
            latency: 'LATENCY',
            fps: 'FPS',
          },
        },
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
        title: 'EXPERIENCE',
        intro: 'PAST · CURRENT · NEXT',
        present: 'PRESENT',
        detailsLabel: 'CAREER_DETAILS',
        openDetails: 'Open work details for {{company}}, {{period}}',
        detailsTitle: 'Work details at {{company}}, {{period}}',
        closeDetails: 'Close work details',
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
          'Built the cross-platform myChess mobile application with Flutter and Dart',
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
        itTabVrPhaseSummary: 'VR-тренажёр САРиДУ и исполнительный механизм',
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
          'React/TypeScript web architecture and Flutter/Dart mobile development',
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
        soloUnity: 'Unity Developer',
        middleVr: 'Middle VR Developer',
        soloFunctionality: 'Solo functionality developer',
        middleUnity: 'Middle Unity Developer',
        juniorUnity: 'Intern / Junior Unity Developer',
        juniorFrontend: 'Junior Frontend Developer',
        reactNativeDeveloper: 'React Native Developer',
        testing: 'Manual QA / Testing',
        unityDeveloper: 'Unity Developer',
        middleFrontend: 'Middle Frontend Developer',
        mobileDeveloper: 'Middle Mobile Developer',
      },
      platforms: {
        platformPcVrSteam: 'PC VR / Steam',
        platformMetaQuest: 'Meta Quest 2 / 3S / 3',
        platformVr: 'VR',
        platformViveAstra: 'HTC VIVE Pro / Astra Linux',
        platformPcAstraLinux: 'PC / Astra Linux',
        platformVive: 'HTC VIVE',
        platformMobile: 'Android / iOS',
        platformAndroid: 'Android',
        platformPcWeb: 'PC / Web',
        platformWeb: 'Web',
        platformWindows: 'Windows',
        platformPcWindows: 'PC / Windows',
        platformWebGl: 'WebGL',
      },
      projects: {
        title: 'PROJECTS',
        all: 'ALL',
        web: 'WEB',
        mobile: 'MOBILE',
        unity: 'UNITY',
        unigine: 'UNIGINE',
        xrAr: 'XR / AR',
        'xr-ar': 'XR / AR',
        multiplayer: 'MULTIPLAYER',
        view: 'VIEW PROJECT',
        technologies: 'Technologies',
        directions: 'Project directions',
        technologyFilters: 'Project technologies',
        allTechnologies: 'All technologies',
        webPlatforms: 'Web platforms',
        gamesApps: 'Games and apps',
        vrTraining: 'VR training simulators',
        photoUnavailable: 'Photo coming soon',
        resetFilters: 'Reset filters',
        noMatchingProjects: 'No projects match these filters.',
        details: 'PROJECT DETAILS',
        role: 'ROLE',
        platform: 'PLATFORM',
        company: 'TEAM / COMPANY',
        period: 'PERIOD',
        overview: 'OVERVIEW',
        worked: 'WHAT I WORKED ON',
        close: 'CLOSE',
        viewDetails: 'MORE ABOUT THE PROJECT',
        backToProjects: 'BACK TO PROJECTS',
        techStack: 'Technology stack',
        contributions: 'Project contribution',
        mediaLabel: 'Media for {{title}}',
        mediaPagination: 'Media navigation',
        selectMedia: 'Show media {{index}}',
        previousMedia: 'Previous media',
        nextMedia: 'Next media',
        playVideo: 'WATCH VIDEO',
        videoTitle: 'Video for {{title}}',
        notFoundMetaTitle: 'Project not found — Dmitry Fursov',
        notFoundTitle: 'PROJECT NOT FOUND',
        notFoundDescription:
          'The address may be outdated or the project has moved.',
        actions: {
          live: 'OPEN LIVE DEMO',
          download: 'DOWNLOAD',
          external: 'EXTERNAL LINK',
        },
        actionLabels: {
          sariduVkPost1: 'VK · post 1',
          sariduVkPost2: 'VK · post 2',
          vulkanVerseClient: 'Client',
        },
        unavailableActions: {
          mychessWebsite:
            'The MyChess website is closed and no longer available to open.',
          friezeViewingRoomApp:
            'The historical Frieze Viewing Room mobile app is no longer available in the store.',
          vulkanVerseClient:
            'The VulcanVerse client is no longer available: the project has closed and its official website has been removed.',
        },
        mychessvr: 'MyChessVR',
        industrial: 'Industrial VR Training Simulations',
        drilling: 'VR Drilling Training Simulator',
        sariduActuator: 'SARiDU Actuator VR Training Simulator',
        mobileRts: 'Mobile Multiplayer RTS',
        earthDragons: 'Earth of Dragons — Auchan',
        vulkanVerse: 'Vulkan Verse',
        mychessWeb: 'myChess',
        mychessMobile: 'MyChess Mobile',
        friezeViewingRoom: 'Frieze Viewing Room',
        cardTeasers: {
          mychessWeb:
            'myChess is the first Russian chess ecosystem, bringing online games, tournaments, learning and communication together on one platform. Real opponents, AI champions, chess puzzles and Stockfish game analysis create a space for players at every level.',
          mobileRts:
            'A mobile PvP strategy game with tournaments and battle replays. Network flows and server events support the match experience.',
          sariduActuator:
            'A Unigine VR trainer that turns fault response on nuclear-power equipment into safe, realistic practice across 15+ scenarios. Solo and co-op modes, three equipment variants and an integrated exam help verify operator readiness on an application built entirely on Russian software licensed for use in Russia.',
          mychessvr:
            'MyChess VR brings chess into virtual reality: play classic games, solve dozens of chess puzzles and review your moves with Stockfish. The project helps players compete, train and improve their chess skills.',
          catCitten:
            'An online store with catalogue, ordering and separate B2B/B2C accounts. The interface supports the full path from product choice to checkout.',
          industrial:
            'Interactive VR scenarios for industrial-equipment training. Step-by-step operations and error validation make practice clear.',
          aptiveEducation:
            'An education platform for students, parents and teachers. Progress, assignments and workspaces share one interface.',
          friezeViewingRoom:
            'A Frieze mobile app for artwork discovery, gallery browsing and placing artworks in the user’s space with AR.',
          neo4Sightline:
            'An Unreal Engine property experience available directly in the browser on desktop and mobile: explore the development, compare apartments and configure interiors in interactive 3D.',
          fuelCms:
            'A CMS for fuel deliveries, refuelling records and price calculations. Working screens support everyday operations.',
          drilling:
            'A VR drilling training simulator for safely practising rig workflows: interact with equipment, coordinate several operators and build hands-on experience in a realistic virtual environment.',
          vulkanVerse:
            'VulcanVerse is an open-world MMORPG set in a Greco-Roman fantasy world, combining regional exploration, character progression and NFT asset ownership in one multiplayer space. 100K+ unique players have already encountered this world.',
          korobka:
            'A responsive transport-company site built from a design system. Components and navigation work across screen sizes.',
          doorsCms:
            'A door-store CMS for catalogue, orders and content. Administrative workflows are collected in clear working screens.',
          earthDragons:
            'An Auchan AR campaign where cards and a comic bring a dragon collection to life. It includes collecting, a runner mode and a virtual die.',
          virtualSommelierVillaKrim:
            'A Villa Krim AR app that turns a bottle label into a virtual sommelier: AR video, wine guidance and a short quiz make discovering the drink an interactive tasting experience.',
          authorsWineVillaKrim:
            'An AR app for Villa Krim author’s wine: the label launches video and an interactive story about the collection, taste, aroma and food pairings.',
          chudoProjector:
            'Chudo Projector turns a child’s coloring page into an interactive show on the wall: color a character or object, scan it with a phone and see a personal version appear in the projected scene. Multiple modes and a glowing wand turn an ordinary sheet of paper into a digital adventure.',
          arColoring:
            'Colouring pages come alive through a phone camera. AR characters and themed scenes turn a printed page into a game.',
          arColoringZebra:
            'A children’s AR coloring app from Zebra Creative Workshop: paper drawings come alive in augmented reality.',
          chudobooks:
            'Children’s books with AR scenes launched from printed pages. Content is delivered and updated inside the app.',
          arChudaboxes:
            'An AR app for promotional materials: an image becomes an interactive scene through the phone camera.',
          chudoFloor:
            'An interactive floor that reacts to visitor movement. The projection installation is built with Unity and OpenCV.',
          questRoom:
            'Testing a networked Unity game by finding and documenting defects. Multiplayer scenarios and gameplay-flow stability were checked.',
          mychessMobile:
            'The mobile edition of the first Russian chess ecosystem, bringing online games, tournaments, learning and communication together in a Flutter app. Real opponents, AI champions, chess puzzles and Stockfish game analysis are available on Android and iOS.',
        },
        mychessvrDesc:
          'MyChess VR takes chess beyond the flat screen and into a complete virtual space with physical interaction with the board, pieces and game objects. Players can pick up pieces by hand, move them across the board, interact with the chess clock and play games in a natural VR format.\n\nThe classic mode offers three game formats: Classic, Rapid and Blitz, along with three opponent difficulty levels. The chess clock adds familiar time-control mechanics and brings the gameplay closer to a real tournament format.\n\nMyChess VR also includes a chess puzzle mode designed to develop tactical thinking. It contains dozens of puzzle types, each available across three difficulty levels. The separate Play with Teacher mode uses Stockfish running locally: after every move, it evaluates the player’s decision, shows a stronger alternative and displays the numerical advantage for the selected side.\n\nAll modes are available in three game locations: a library, a park and a restaurant. MyChess VR is available to purchase on Steam and play through SteamVR.',
        industrialDesc:
          'Interactive industrial training scenarios with step-by-step operations, action validation, hints, error handling and realistic equipment interactions.',
        drillingDesc:
          'A VR drilling training simulator where operators practise core rig workflows in a virtual environment. The application reproduces equipment and tool interactions, supports several participants working together and synchronizes their actions in real time, enabling safe preparation for production scenarios without interrupting real equipment operations.',
        sariduActuatorDesc:
          'This industrial VR application trains employees to respond to faults at a real-world workstation. A user can complete scenarios alone or cooperate with another participant wearing a VR headset. The application is built entirely on Russian software licensed for use in Russia. It models the workstation and real equipment, including Type A, Type M and the pneumatic system, while training and examination modes first teach the correct procedure and then assess the employee’s knowledge and skills.',
        mobileRtsDesc:
          'A mobile RTS with multiplayer PvP, tournament systems, server-driven events and multiplayer infrastructure.',
        earthDragonsDesc:
          'A mobile AR application for Auchan’s campaign: physical cards and a comic unlock a collection of 16 dragons on the planet Zaurus.',
        earthDragonsMetrics: [
          { value: '16', label: 'dragons in the collection' },
          { value: '26 Apr–13 Jun 2021', label: 'campaign period in Ukraine' },
          { value: 'iOS 1.3', label: 'latest confirmed version · 30 Oct 2023' },
          { value: 'Android 0.4', label: 'preserved build · 7 Jan 2022' },
        ],
        vulkanVerseDesc:
          'VulcanVerse is an open-world MMORPG set in a Greco-Roman fantasy world built around personal space and digital ownership. Players explore four regions surrounding Vulcan City, discover a mythological world and build their own story inside a large multiplayer environment. 100K+ unique players have already encountered the project.\n\nThe defining feature of VulcanVerse is the combination of adventure and ownership: land plots exist as NFT assets, allowing owners to reshape the terrain, build their own spaces and unlock new ways to engage with the world. The map is not just a backdrop for adventure — it is a world that players can help shape.\n\nThe core loop combines exploration, resource gathering, quests, fishing, combat and progression for characters and assets. The Tartarus location adds a dedicated combat context, while client-server gameplay supports shared play and ongoing interaction between players.',
        mychessWebDesc:
          'myChess is the first Russian chess ecosystem, created as a unified digital space for playing, competing, learning and connecting. More than 100,000 users have joined the platform and played over 600,000 games: they can find evenly matched opponents, play with friends and AI champions, enter individual and team tournaments, solve chess puzzles and analyse their games in depth with Stockfish. Communities, teams, chats, broadcasts, ratings and fair-play tools form a complete social environment around chess. The product’s scale and maturity are reinforced by its inclusion in the Russian software registry.',
        mychessMobileDesc:
          'MyChess Mobile is the mobile edition of the first Russian chess ecosystem, built as a cross-platform Flutter application for Android and iOS. More than 100,000 users have already played over 600,000 games: the app offers matches with real opponents, friends and AI champions, individual and team tournaments, chess puzzles and in-depth Stockfish game analysis. Communities, teams, chats, broadcasts, ratings and fair-play tools help players stay connected to the ecosystem wherever they are. The myChess ecosystem is included in the Russian software registry.',
        friezeViewingRoomDesc:
          'Frieze Viewing Room turns an international art fair into a personal gallery on a smartphone. Users can explore curated selections and gallery collections, find paintings by artist, price, medium, section and date, open detailed artwork pages and browse high-resolution images. The journey from discovering a painting to contacting its gallery is built into the app: an interested buyer can send an inquiry, add a message and provide contact details. An AR scenario lets users preview a painting on their wall and understand its scale in a real space. More than 10,000 Google Play users have already chosen the app — a clear sign of the digital experience’s appeal to art lovers.',
        friezeViewingRoomPoints: [
          'Developed cross-platform Frieze mobile interfaces and user flows with React Native for iOS and Android',
          'Implemented multi-criteria painting search and filtering by artist, price, gallery, section and date',
          'Built collection discovery flows with curated sections, gallery pages, artwork cards and high-resolution media viewing',
          'Designed a direct inquiry flow for a selected painting, bringing the gallery message and user contact details into one clear journey',
          'Supported the AR scenario for placing a painting in the user’s space and assessing its scale',
        ],
        friezeViewingRoomMetrics: [
          { value: '10K+', label: 'Google Play downloads' },
        ],
        mychessMetrics: [
          { value: '121,577', label: 'registered users' },
          { value: '665,880', label: 'games played' },
          { value: '459', label: 'communities created' },
          { value: '50+', label: 'tournaments held' },
          { value: '2,000+', label: 'participants in the largest tournament' },
        ],
        mychessMobilePoints: [
          'Developed a cross-platform application with Flutter',
          'Supported release builds for Android and iOS',
        ],
        mychessMobileMetrics: [
          { value: '121,577', label: 'registered users' },
          { value: '665,880', label: 'games played' },
          { value: '459', label: 'communities created' },
          { value: '50+', label: 'tournaments held' },
          { value: '2,000+', label: 'participants in the largest tournament' },
        ],
        mychessvrPoints: [
          'Full Unity implementation as sole developer',
          'Owned the complete application lifecycle from scratch to release',
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
          'Owned the complete application lifecycle independently, from architecture and implementation to release preparation',
          'Implemented networked interaction and multi-operator action synchronization with Netcode for GameObjects',
          'Implemented drilling-equipment workflows and interactive operation of the rig’s key components',
          'Integrated Final IK to provide a realistic character kinematic model and synchronized VR movement',
        ],
        drillingMediaScreen1: 'VR drilling training scene — screen 1',
        drillingMediaScreen2: 'VR drilling training scene — screen 2',
        drillingMediaScreen3: 'VR drilling training scene — screen 3',
        drillingMediaScreen4: 'VR drilling training scene — screen 4',
        drillingMediaScreen5: 'VR drilling training scene — screen 5',
        drillingMediaScreen6: 'VR drilling training scene — screen 6',
        drillingMediaScreen7: 'VR drilling training scene — screen 7',
        drillingMediaScreen8: 'VR drilling training scene — screen 8',
        drillingMediaScreen9: 'VR drilling training scene — screen 9',
        sariduActuatorPoints: [
          'Built the application entirely on Russian software licensed for use in Russia',
          'Implemented solo and co-op modes with synchronization for two participants in VR headsets',
          'Developed training and examination modes for assessing employee knowledge and skills',
          'Implemented 15+ fault scenarios for Type A, Type M and the pneumatic system',
          'Modelled the workstation and three variants of real nuclear-power equipment',
          'Added an observer mode for the examiner and group on an external monitor without a VR headset',
          'Implemented examination timing, tool handling, wire switching and equipment disassembly',
          'Added a user action log, result saving and export, plus a comparison table',
          'Developed a custom microphone voice chat without third-party plugins',
        ],
        sariduActuatorMediaAtomSkills:
          'SARiDU VR trainer presented at AtomSkills-2023',
        sariduActuatorMediaManInVr:
          'Participant demonstrating the SARiDU VR trainer in a headset',
        sariduActuatorMetrics: [
          { value: '15+', label: 'fault scenarios' },
          { value: '3', label: 'equipment variants' },
          { value: 'Single + Co-op', label: 'interaction modes' },
          {
            value: 'Training + Exam + Observer',
            label: 'training, examination and observer modes',
          },
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
          'Connected the mobile AR app with the campaign’s physical cards and comic',
          '16-character collection, runner mode, virtual die and social sharing',
        ],
        earthDragonsMediaSplash:
          'Earth of Dragons splash screen with the Auchan logo',
        earthDragonsMediaLogo: 'Earth of Dragons application logo',
        earthDragonsMediaGameplayOne: 'Application gameplay screen, scene 1',
        earthDragonsMediaGameplayTwo: 'Application gameplay screen, scene 2',
        earthDragonsMediaGameplayThree: 'Application gameplay screen, scene 3',
        earthDragonsMediaDragonElnus:
          'Elnus character screen in the AR application',
        earthDragonsMediaDragonNaura:
          'Naura character screen in the AR application',
        earthDragonsMediaCollection:
          'Collection screen with 16 dragon slots and unlocked characters',
        earthDragonsMediaPreview: '3D dragon preview before starting the game',
        earthDragonsMediaRunner:
          'Runner mode with dragon, obstacles and counters',
        earthDragonsMediaRunnerScore:
          'Runner mode with score, distance and collected crystals',
        earthDragonsMediaDie: 'Virtual AR die interface',
        vulkanVersePoints: [
          'Developed and integrated gameplay mechanics for the Tartarus location into the main VulcanVerse client',
          'Implemented client-server interaction and multiplayer flows with Photon',
        ],
        vulkanVerseMetrics: [
          { value: '100K+', label: 'unique players' },
          { value: '3 × 3 km', label: 'game world size' },
          { value: '4', label: 'themed regions around Vulcan City' },
          { value: '20 × 20 m', label: 'land plot size' },
          { value: 'Windows', label: 'primary client platform' },
        ],
        vulkanVerseMediaCity: 'Classical city scene in Vulcan Verse',
        vulkanVerseMediaShrine: 'Wooded path and shrine in the game world',
        vulkanVerseMediaWorld: 'Panoramic Vulcan Verse environment',
        vulkanVerseMediaTemple: 'Temple plaza with regional symbols',
        vulkanVerseMediaNotus: 'Desert scene from the Notus region',
        mychessvrMediaChessPuzzles: 'Chess puzzle mode',
        mychessvrMediaGameplay1: 'MyChessVR gameplay scene',
        mychessvrMediaGameplay2: 'VR chess game in MyChessVR',
        mychessvrMediaGameplay3: 'Hand interaction with the VR chessboard',
        mychessvrMediaGameplay4: 'Chess game in a virtual environment',
        mychessvrMediaGameplay5: 'MyChessVR gameplay',
        mychessvrMediaLocationCafe: 'Cafe environment in MyChessVR',
        mychessvrMediaLocationLibrary: 'Library environment in MyChessVR',
        mychessvrMediaLocationPark: 'Park environment in MyChessVR',
        mychessvrMediaStockfishAnalysis: 'Stockfish move analysis',
        mychessWebMediaAllVersusOne: 'All-versus-one mode screen',
        mychessWebMediaAnalysis: 'Chess game analysis',
        mychessWebMediaAuthorization: 'myChess authorization screen',
        mychessWebMediaChampions: 'myChess champions table',
        mychessWebMediaLogo: 'myChess logo',
        mychessWebMediaMessages: 'myChess messages and chats',
        mychessWebMediaNotifications: 'myChess notifications',
        mychessWebMediaObserverTournament: 'Tournament observer screen',
        mychessWebMediaProfile: 'myChess user profile',
        mychessWebMediaPuzzles: 'myChess chess puzzles',
        mychessWebMediaPuzzles2: 'Additional puzzle screen',
        mychessWebMediaSelectGame: 'Chess game selection screen',
        mychessWebMediaTournament: 'myChess tournament screen',
        friezeViewingRoomMediaCover: 'Frieze Viewing Room mobile app cover',
        friezeViewingRoomMediaInquiry:
          'Artwork inquiry screen connecting the user with a gallery',
        friezeViewingRoomMediaFilters: 'Artwork filters screen',
        friezeViewingRoomMediaSections: 'Themed sections screen',
        friezeViewingRoomMediaArtwork: 'Artwork viewing screen',
        friezeViewingRoomMediaGallery:
          'Artwork viewing screen from another gallery',
        mychessMobileMedia1: 'myChess mobile app screen',
        mychessMobileMedia2: 'myChess Mobile gameplay screen',
        mychessMobileMedia3: 'myChess Mobile tournament screen',
        mychessMobileMedia4: 'myChess Mobile profile',
        mychessMobileMedia5: 'myChess Mobile social screen',
        mychessWebPoints: [
          'Developed the entire MyChess user interface for desktop and mobile devices',
          'Ensured a stable and convenient real-time gameplay experience with a responsive interface',
          'Implemented various chess modes, an in-game rating system, matchmaking and rating leaderboards',
          'Integrated a game mode with AI champions modeled after famous chess players, including Ian Nepomniachtchi and Magnus Carlsen',
          'Developed a competition framework for individual and team tournaments across different formats, including user-created competitions and events supporting more than 2,000 participants',
          'Developed the platform’s social infrastructure with communities, team spaces and participant management tools',
          'Implemented chat in lobbies, tournaments and communities, alongside direct messaging and notifications',
          'Implemented two simultaneous-play modes: one player against multiple opponents and a group voting on moves against one player',
          'Implemented the unique chessboxing mode, alternating chess games with boxing rounds',
          'Developed MyChess Patrol for reviewing games and handling complaints about suspicious player activity',
          'Created the learning section with chess puzzles, mate-in-one/mate-in-several tasks and solving streaks',
          'Added move-history navigation, player reports, game sharing and post-game review',
          'Implemented multi-level Stockfish game analysis: cached deep, cloud and local in-browser modes with best moves, blunders, variations and alternative lines',
          'Implemented live chess broadcasts so users could host and watch match streams on the platform',
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
        neo4Sightline: 'Neo4 Web / Interior Sightline',
        neo4SightlineDesc:
          'Neo4 turns the search for a new home into a full 3D journey through a future residential development. Explore the architecture and grounds from any angle, move through the courtyard, experience the rhythm of a living city, and then move on to selecting a specific apartment. Each option presents its layout, area, price and other key details, while a virtual walkthrough lets you inspect every room, from the kitchen to the bathroom. The interior can be shaped around your preferences: change the furniture, assemble your own configuration and see how it affects the final price. Switching between seasons and times of day reveals the development in different scenarios and helps you feel the atmosphere of the place before a visit. Unreal Engine and Pixel Streaming provide the visual richness and smooth browser experience behind it all.',
        neo4SightlinePoints: [
          'Connected the browser interface to the interactive Unreal Engine scene through command and event data exchange',
          'Implemented user flows for selecting a development, exploring apartments, entering interiors and configuring furniture',
          'Implemented synchronization between browser input and the Unreal Engine application, including the exchange of interface state data',
          'Supported territory navigation, time-of-day and seasonal switching as one continuous product experience',
        ],
        neo4SightlineMediaScreen1: 'Neo4 Web — screen 1',
        neo4SightlineMediaScreen2: 'Neo4 Web — screen 2',
        neo4SightlineMediaScreen3: 'Neo4 Web — screen 3',
        neo4SightlineMediaScreen4: 'Neo4 Web — screen 4',
        neo4SightlineMediaScreen5: 'Neo4 Web — screen 5',
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
        virtualSommelierVillaKrim: 'Virtual Sommelier Villa Krim',
        virtualSommelierVillaKrimDesc:
          'Virtual Sommelier Villa Krim turns a bottle label into an interactive guide to wine. Point a smartphone camera at the label to launch AR video, learn more about the drink and food pairings, and then test your knowledge with a short quiz. The app combines augmented reality, storytelling and a gamified tasting flow to turn first contact with the wine into a memorable brand experience.',
        virtualSommelierVillaKrimPoints: [
          'Implemented bottle-label recognition and an AR scenario with video, wine information and food-pairing guidance',
          'Integrated an interactive virtual-sommelier flow with guidance and a quiz that lets users test their knowledge after tasting',
        ],
        virtualSommelierVillaKrimMediaRu:
          'Icon of the Russian Virtual Sommelier Villa Krim release',
        virtualSommelierVillaKrimMediaUa:
          'Icon of the Ukrainian Віртуальний сомельє Villa Krim release',
        virtualSommelierVillaKrimMediaLogo1:
          'Promotional image for the Virtual Sommelier Villa Krim app',
        virtualSommelierVillaKrimMediaLogo2:
          'Virtual Sommelier Villa Krim app icon',
        virtualSommelierVillaKrimMediaScreen1:
          'First screen of the Virtual Sommelier Villa Krim app',
        virtualSommelierVillaKrimMediaScreen2:
          'Second screen of the Virtual Sommelier Villa Krim app',
        virtualSommelierVillaKrimMediaScreen3:
          'Third screen of the Virtual Sommelier Villa Krim app',
        authorsWineVillaKrim: 'Author’s Wine Villa Krim',
        authorsWineVillaKrimDesc:
          'Author’s Wine Villa Krim turns a bottle label into an entry point to an interactive story about the collection. A smartphone camera launches AR video, while the app explains the wine’s blend, taste, aroma and food pairings. The format connects the physical product with digital content and lets the brand tell the collection’s story at the moment of discovery.',
        authorsWineVillaKrimPoints: [
          'Implemented label recognition and AR video launch for a specific wine as one mobile flow',
          'Integrated structured collection content covering the blend, taste, aroma and food pairings',
        ],
        authorsWineVillaKrimMediaCampaign:
          'Villa Krim AR campaign visual: a user scans a bottle with a smartphone',
        authorsWineVillaKrimMediaApp:
          'Icon of the Author’s Wine Villa Krim application',
        authorsWineVillaKrimMediaLogo1:
          'Promotional image for the Author’s Wine Villa Krim app',
        authorsWineVillaKrimMediaLogo2: 'Author’s Wine Villa Krim app icon',
        authorsWineVillaKrimMediaScreen1:
          'First screen of the Author’s Wine Villa Krim app',
        authorsWineVillaKrimMediaScreen2:
          'Second screen of the Author’s Wine Villa Krim app',
        authorsWineVillaKrimMediaScreen3:
          'Third screen of the Author’s Wine Villa Krim app',
        chudoProjector: 'Chudo Projector',
        chudoProjectorDesc:
          'Chudo Projector is an interactive projection system for children’s spaces where a paper coloring page becomes part of a living scene. The project combined two applications: a mobile client for scanning colored drawings and a Windows application that sent the scene to a projector. Children chose the colors themselves, and the system transferred the result from the page onto a 3D character or interior object, making every scene personal.\n\nIn the first mode, a child built a room from more than 20 drawings by scanning characters and interior objects; each one appeared in the child’s own colors. Once the room was complete, the whole scene came alive with music: characters danced, particles appeared and the environment reacted with sound. The scene could be replayed to explore new combinations.\n\nTwo additional modes connected the digital scene with the physical space. In one, a child restored color to individual characters and objects with a glowing wand pointed at the projected wall. In the other, the entire scene started in black and white and the child revealed its colors by moving the same wand across the wall. The result combined creativity, movement and play, turning an ordinary wall into a responsive space for children.',
        chudoProjectorPoints: [
          'Designed the mobile and Windows application pair that turned a child’s coloring page into a personalized projection scene',
          'Implemented the transfer of user coloring onto 3D characters and interior objects, with data synchronization between Android and PC',
          'Connected the mobile and desktop clients for synchronized texture and scene-state exchange with Photon',
          'Built the room-assembly flow around more than 20 drawings and a replayable musical finale with animated characters, particles and sound reactions',
          'Implemented two glowing-wand interaction modes: restoring color to individual objects and revealing color across the full projected scene',
          'Configured computer vision to detect the light source and map camera coordinates into the projection scene, so the child’s movement directly controlled the visual effect',
        ],
        chudoProjectorMediaScreen1:
          'First screen of the Chudo Projector application',
        chudoProjectorMediaScreen2:
          'Second screen of the Chudo Projector application',
        chudoProjectorMediaScreen3:
          'Third screen of the Chudo Projector application',
        arColoring: 'AR Coloring',
        arColoringDesc:
          'Mobile Chudoboxes AR application that turns paper coloring pages into animated experiences through a smartphone camera.',
        arColoringPoints: [
          'Implemented the QR code / cover → color → scan → AR animation flow',
          'Configured printed-image recognition and content rendering over the coloring page',
          'Supported iOS and Android releases with themed content packs',
        ],
        arColoringMediaHome:
          'AR Coloring home screen with Chudoboxes Coloring branding',
        arColoringMediaThemes: 'Coloring theme selection screen',
        arColoringMediaAnimals: 'Wild Animals theme screen with animal content',
        arColoringMetrics: [
          { value: 'iOS + Android', label: 'platforms' },
          { value: '1.7 / 11', label: 'latest iOS / Android versions' },
          { value: '5', label: 'named iOS content packs' },
          { value: '200', label: 'Android downloads in archived metric' },
        ],
        arColoringZebra: 'AR Coloring',
        arColoringZebraDesc:
          'AR Coloring by Zebra Creative Workshop turns paper coloring pages into 3D animations through a smartphone or tablet camera. Users activate a set with a QR code, color a page, bring its characters to life, and can capture photos or videos.',
        arColoringZebraPoints: [
          'Implemented the QR code → set activation → coloring → scanning → AR animation flow',
          'Configured comparison between the user-colored version and the artist’s original colors',
          'Supported AR photos, AR videos, social sharing and a counter of animated drawings',
        ],
        arColoringZebraMediaScreen1: 'AR Coloring screenshot 1 from RuStore',
        arColoringZebraMediaScreen2: 'AR Coloring screenshot 2 from RuStore',
        arColoringZebraMediaScreen3: 'AR Coloring screenshot 3 from RuStore',
        arColoringZebraMediaScreen4: 'AR Coloring screenshot 4 from RuStore',
        arColoringZebraMediaScreen5: 'AR Coloring screenshot 5 from RuStore',
        arColoringZebraMetrics: [
          { value: 'Android', label: 'RuStore platform' },
          { value: '0.1', label: 'first version' },
          { value: 'up to 1K', label: 'RuStore downloads' },
          { value: '122.7 MB', label: 'app size' },
        ],
        chudobooks: 'Chudobooks',
        arChudaboxes: 'AR Chudoboxes / Chudoboxes EKO',
        chudobooksDesc:
          'Mobile AR application for the Chudoboxes children’s book: printed markers launched 3D characters and scenes, while downloadable content, audio, photos, and video connected the physical book to the interactive app.',
        chudobooksPoints: [
          'Built the Root → MainMenu → QR/Scanning → CardSets scene flow for content sets',
          'Implemented marker-based AR scenes and printed-page recognition with Vuforia',
          'Configured MD5 validation and dynamic platform-specific 3D/AR AssetBundle delivery from a CDN',
          'Connected QR set activation, RU/EN/UK localization, audio scenarios, and AR character photo/video flows',
        ],
        chudobooksMediaScreen1: 'Chudobooks app home screen',
        chudobooksMediaScreen2: 'Chudobooks app gameplay screen',
        chudobooksMetrics: [
          { value: 'iOS + Android', label: 'platforms' },
          { value: '1.9 / 1.11', label: 'latest iOS / Android versions' },
          { value: '~900', label: 'Android installs in archived metric' },
          { value: '3.64 / 5', label: 'Android rating from 14 ratings' },
          { value: 'Unity 2018.4', label: 'engine version in source project' },
          { value: 'v9.0', label: 'CDN content bundle version' },
        ],
        arChudaboxesDesc:
          'A commercial mobile AR companion for an interactive children’s book: printed pages and promotional materials launched animated characters, AR photos and AR videos. The Chudoboxes EKO release expanded the ecosystem with collectible stickers, an interactive postcard and mini-games for an EKO Market campaign.',
        arChudaboxesPoints: [
          'Extended marker-based AR scenarios for printed materials',
          'Connected interactive book content with photo and video flows',
          'Supported the mobile AR product and its EKO Market variant',
        ],
        arChudaboxesMediaOne: 'Historical AR Chudoboxes start screen',
        arChudaboxesMediaTwo: 'Historical AR Chudoboxes library screen',
        arChudaboxesMediaThree: 'Historical AR Chudoboxes content screen',
        projectFootprint: 'PROJECT FOOTPRINT',
        arChudaboxesMetrics: [
          { value: '1.3K+', label: 'Android installs across variants' },
          { value: '1.26M+', label: 'EKO promo video views' },
          { value: '137 · 15', label: 'stores · regions in campaign' },
          { value: 'iOS + Android', label: 'commercial mobile AR' },
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
        webDescription: 'Modern web applications and platforms',
        gameDescription: 'Interactive 3D experiences and simulations',
        mobileDescription: 'Native and cross-platform applications',
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
        email: 'EMAIL',
        telegram: 'TELEGRAM',
        copy: 'COPY EMAIL',
        copied: 'COPIED',
        cv: 'DOWNLOAD CV',
      },
      footer: {
        role: 'SOFTWARE DEVELOPER',
        connect: 'CONNECT',
        explore: 'EXPLORE',
        cv: 'DOWNLOAD CV',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
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
