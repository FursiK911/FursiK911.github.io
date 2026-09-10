# Graph Report - .  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1388 nodes · 2163 edges · 162 communities (103 shown, 59 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e2464666`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- loading/index.ts
- ProjectPage.tsx
- LiveCam.tsx
- projectCircuitGame.config.ts
- useHudScroll.ts
- DirectionCard.tsx
- entities/project/index.ts
- Seamless Hero portrait handoff
- 2026-09-02.md
- 2026-09-10
- usePortraitGlitch.ts
- 2026-08-30
- 2026-09-09.md
- compilerOptions
- agent-logs/README.md
- 2026-08-31
- 2026-09-08.md
- ProjectMediaGallery.tsx
- compilerOptions
- Dynamic live-cam HUD refinement
- config/index.ts
- ActionVariant
- EducationTimeline.tsx
- dependencies
- experience/index.ts
- 2026-08-27
- 2026-09-01
- scripts
- Unified profile and about block
- useTypingText.ts
- GridScan.tsx
- ExperienceTimeline.tsx
- ExperienceDetailsItem.tsx
- Projects.tsx
- project-filtering/index.ts
- HUD scroll indicator and overflow correction
- work-experience/index.ts
- useKonamiCode.ts
- MetricCounter.tsx
- ExperienceTimeline
- ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx
- ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx
- ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx
- ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx
- 2026-08-25
- 2026-08-29
- Dmitry Fursov — Software Developer
- Agent Operating Rules
- package.json
- HomePage.tsx
- ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx
- ExperienceTimelineItem.tsx
- MyChess Web — project brief
- devDependencies
- TestProviders.tsx
- entities/education/index.ts
- styles/index.ts
- UnavailableAction.tsx
- Persistent project media mock
- Project Circuit mini-game in Projects
- lint-staged
- AppRouter.tsx
- IntersectionObserverStub
- SectionHeading/index.ts
- TypingText/index.ts
- experience-timeline-geometry.ts
- AI Agent Change Log Index
- App.tsx
- PrivacyPage.tsx
- TermsPage.tsx
- Skills.tsx
- Localized experience project details
- Centered Education cards around Timeline bullets
- Completed final Education Timeline axis segment
- Separated source responsibilities
- Grouped role folders for source responsibilities
- Project preview backlog
- Directions.holds-metrics-until-the-section-entrance-completes.test.tsx
- tsconfig.json
- 00:06 +03:00 — Configuration-driven loader speed controls
- 01:28 +03:00 — Added intermittent cyberpunk portrait glitch
- 01:40 +03:00 — Made portrait glitch visibly readable
- 01:49 +03:00 — Stabilized the portrait base layer
- 02:01 +03:00 — Replaced slices with bounded corruption blocks
- 02:03 +03:00 — Verified block-only portrait corruption
- 02:27 +03:00 — Switched to a cellular data-corruption glitch
- 16:06 +03:00 — Replaced cellular portrait glitch with Glitch.js
- 16:31 +03:00 — Switched portrait glitch to continuous demo mode
- 19:46 +03:00 — Added localized resume link to header
- 20:01 +03:00 — Standardized cyan resume download buttons
- 20:24 +03:00 — Rebuilt EXPERIENCE LOG as a data-driven career timeline
- 20:58 +03:00 — Replaced timeline axis with animated SVG wave
- @eslint/js
- eslint-plugin-jsx-a11y
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- gsap
- husky
- i18next-browser-languagedetector
- jsdom
- lint-staged
- @mantine/core
- @mantine/hooks
- oxlint
- react
- react-dom
- react-i18next
- @tabler/icons-react
- prettier
- @testing-library/jest-dom
- @testing-library/react
- @types/node
- @types/react
- @types/react-dom
- @types/three
- typescript
- typescript-eslint
- vite
- @vitejs/plugin-react
- vitest
- @vitest/coverage-v8
- data.contains-21-unique-projects-with-valid-categories.test.ts

## God Nodes (most connected - your core abstractions)
1. `2026-08-30` - 41 edges
2. `Seamless Hero portrait handoff` - 38 edges
3. `2026-09-10` - 36 edges
4. `LiveCam()` - 24 edges
5. `compilerOptions` - 21 edges
6. `Dynamic live-cam HUD refinement` - 18 edges
7. `installIntersectionObserverMock()` - 17 edges
8. `2026-08-27` - 16 edges
9. `compilerOptions` - 15 edges
10. `scripts` - 14 edges

## Surprising Connections (you probably didn't know these)
- `useLoadingAnimationSpeed()` --indirect_call--> `getLoadingAnimationSpeed()`  [INFERRED]
  src/features/loading/model/useLoadingAnimationSpeed/useLoadingAnimationSpeed.ts → src/features/loading/model/store/loadingAnimationStore.ts
- `useLoadingAnimationSpeed()` --indirect_call--> `subscribeToLoadingAnimationSpeed()`  [INFERRED]
  src/features/loading/model/useLoadingAnimationSpeed/useLoadingAnimationSpeed.ts → src/features/loading/model/store/loadingAnimationStore.ts
- `useTypingText()` --indirect_call--> `getReducedMotion()`  [INFERRED]
  src/shared/lib/useTypingText/useTypingText.ts → src/shared/lib/useTypingText/utils/getReducedMotion.ts
- `renderWithProviders()` --indirect_call--> `TestProviders()`  [INFERRED]
  src/shared/test/utils/renderWithProviders.tsx → src/shared/test/TestProviders/TestProviders.tsx
- `ExperienceTimeline()` --calls--> `getEvenlySpacedX()`  [EXTRACTED]
  src/widgets/experience/ui/ExperienceTimeline/ExperienceTimeline.tsx → src/widgets/experience/model/experience-timeline-geometry/utils/experience-timeline-geometry.ts

## Import Cycles
- None detected.

## Communities (162 total, 59 thin omitted)

### Community 0 - "loading/index.ts"
Cohesion: 0.06
Nodes (32): ALWAYS_REPLAY_INTRO, INTRO_STORAGE_KEY, loadingAnimationConfig, loadingCandidateNames, scheduleLoadingAnimation(), LoadingTimer, getLoadingAnimationSpeed(), listeners (+24 more)

### Community 1 - "ProjectPage.tsx"
Cohesion: 0.06
Nodes (28): metricPlacement, CaseNavigationProps, CaseSectionProps, GalleryImageProps, GallerySlideProps, MetricPlacement, ProjectContentProps, ProjectGalleryFullscreenProps (+20 more)

### Community 2 - "LiveCam.tsx"
Cohesion: 0.08
Nodes (34): liveCamConfig, liveCamStatusClassNames, liveCamHudConfig, liveCamTerminalConfig, initialLiveCamTelemetry, initialLiveCamTracker, initialLiveCamWaveform, liveCamTerminalEntries (+26 more)

### Community 3 - "projectCircuitGame.config.ts"
Cohesion: 0.07
Nodes (39): basePorts, CIRCUIT_COLUMNS, CIRCUIT_ROWS, directionDelta, directions, NEW_ROUTE_DELAY_MS, oppositeDirection, rotations (+31 more)

### Community 4 - "useHudScroll.ts"
Cohesion: 0.08
Nodes (31): DesktopGridScanBackground(), sectionIds, socialLinks, Footer(), sectionIds, headerEntranceVariants, Header(), HeaderProps (+23 more)

### Community 5 - "DirectionCard.tsx"
Cohesion: 0.09
Nodes (28): DIRECTION_CARD_STAGGER_MS, DIRECTION_CONTENT_DELAY_MS, DIRECTION_ICON_PULSE_DURATION_MS, DIRECTION_METRIC_DELAY_MS, DIRECTION_METRIC_LABEL_DELAY_MS, DIRECTION_SCAN_DURATION_MS, DIRECTION_SCAN_INTERVAL_MS, DIRECTION_TILT_LIMIT (+20 more)

### Community 6 - "entities/project/index.ts"
Cohesion: 0.09
Nodes (25): cvUrl, projectCardPresentations, projectDefinitions, projects, skillGroups, ProjectCardPresentationDefinition, Project, ProjectAction (+17 more)

### Community 7 - "Seamless Hero portrait handoff"
Cohesion: 0.05
Nodes (38): 2026-09-07 20:42 +03:00, 2026-09-07 21:21 +03:00, 2026-09-07 21:55 +03:00, 2026-09-07 22:05 +03:00 — Villa Krim project content, 2026-09-07 22:10 +03:00 — Filled the AR Chudoboxes portfolio case, 2026-09-07 22:13 +03:00 — Constrained project media images, 2026-09-07 22:16 +03:00 — Explicitly constrained project image width, 2026-09-07 22:20 +03:00 — Expanded Author’s Wine Villa Krim research (+30 more)

### Community 8 - "2026-09-02.md"
Cohesion: 0.05
Nodes (36): 2026-09-02 12:58 +03:00, 2026-09-02 15:32 +03:00, 2026-09-02 15:54 +03:00, 2026-09-02 16:07 +03:00, 2026-09-02 16:24 +03:00, 2026-09-02 16:37 +03:00, 2026-09-02 17:31 +03:00, 2026-09-02 17:56 +03:00 (+28 more)

### Community 9 - "2026-09-10"
Cohesion: 0.05
Nodes (37): 2026-09-10, 2026-09-10 00:00 +03:00, Decision DEC-20260910-01, Decision DEC-20260910-01, Decision DEC-20260910-02, Decision DEC-20260910-03, Decision DEC-20260910-04, Decision DEC-20260910-05 (+29 more)

### Community 10 - "usePortraitGlitch.ts"
Cohesion: 0.12
Nodes (13): usePortraitGlitch(), createBurstGlitch(), createHologram(), getBurstDuration(), getNextPause(), markDecorativeLayers(), Contact(), ContactProps (+5 more)

### Community 11 - "2026-08-30"
Cohesion: 0.07
Nodes (28): 00:14 +03:00 — Candidate list overflow fix, 00:17 +03:00 — Fixed loader terminal height, 00:27 +03:00 — Added verified final candidate stage, 00:30 +03:00 — Matched candidate uses normal spawn cadence, 00:42 +03:00 — Added candidate scan loop, 00:42 +03:00 — Fixed site header, 00:45 +03:00 — Added candidate scan status indicator, 00:51 +03:00 — Anchored scan label and accelerated card scan (+20 more)

### Community 12 - "2026-09-09.md"
Cohesion: 0.07
Nodes (27): 2026-09-09 10:00 +03:00, 2026-09-09 14:27 +03:00, 2026-09-09 18:24 +03:00, 2026-09-09 21:03 +03:00, 2026-09-09 21:46 +03:00, 2026-09-09 21:55 +03:00, 2026-09-09 23:20 +03:00, 2026-09-09 23:30 +03:00 (+19 more)

### Community 13 - "compilerOptions"
Cohesion: 0.07
Nodes (27): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, baseUrl (+19 more)

### Community 14 - "agent-logs/README.md"
Cohesion: 0.20
Nodes (5): August 2026, 2026-09-05 01:07 +03:00, Adaptive project modal height, September 2026, Global Decision Index

### Community 15 - "2026-08-31"
Cohesion: 0.10
Nodes (21): 19:44 +03:00 — Switched timeline runner to GSAP MotionPathPlugin, 19:59 +03:00 — Matched Hero portrait with the Glitch.js BROKEN HOLO demo, 2026-08-31, 20:09 +03:00 — Unified the Experience timeline scene geometry, 20:29 +03:00 — Added randomized short Glitch.js bursts, 20:32 +03:00 — Anchored evenly spaced Experience milestones to the SVG wave, 20:55 +03:00 — Introduced shared action components, 21:05 +03:00 — Added persistent hologram with burst-only distortions (+13 more)

### Community 16 - "2026-09-08.md"
Cohesion: 0.10
Nodes (20): 2026-09-08 02:12 +03:00, 2026-09-08 02:19 +03:00, 2026-09-08 15:37 +03:00, 2026-09-08 22:50 +03:00, 2026-09-08 23:06 +03:00, 2026-09-08 23:49 +03:00, 2026-09-08 23:58 +03:00, Centered slow LiveCam terminal (+12 more)

### Community 17 - "ProjectMediaGallery.tsx"
Cohesion: 0.20
Nodes (4): ProjectDetails(), ProjectDetailsProps, ProjectMediaGallery(), ProjectMediaGalleryProps

### Community 18 - "compilerOptions"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 19 - "Dynamic live-cam HUD refinement"
Cohesion: 0.11
Nodes (18): 2026-09-08 00:20 +03:00, 2026-09-08 03:05 +03:00, 2026-09-08 23:18 +03:00, Decision DEC-20260908-03, Decision DEC-20260908-05, Decision DEC-20260908-08, Decision DEC-20260908-09, Directions hover and icon motion correction (+10 more)

### Community 20 - "config/index.ts"
Cohesion: 0.22
Nodes (8): LANGUAGE_STORAGE_KEY, supportedLanguages, resources, projectCaseCopy, projectCircuitGameCopy, SupportedLanguage, cyan, theme

### Community 21 - "ActionVariant"
Cohesion: 0.30
Nodes (6): ActionVariant, actionClassName(), ActionButton(), ActionButtonProps, ActionLink(), ActionLinkProps

### Community 22 - "EducationTimeline.tsx"
Cohesion: 0.22
Nodes (5): Education(), EducationTimeline(), EducationCopy, getYear(), toIsoDate()

### Community 23 - "dependencies"
Cohesion: 0.12
Nodes (17): face-api.js, @fontsource-variable/unbounded, i18next, @isonimus/glitch-js, motion, @number-flow/react, dependencies, face-api.js (+9 more)

### Community 24 - "experience/index.ts"
Cohesion: 0.24
Nodes (5): Experience(), ExperienceDetails(), ExperienceDetailsProps, FutureExperienceItem(), FutureExperienceItemProps

### Community 25 - "2026-08-27"
Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 26 - "2026-09-01"
Cohesion: 0.14
Nodes (14): 01:02 +03:00 — Reframed Directions as four experience categories, 01:20 +03:00 — Added reusable animated metric counters, 01:27 +03:00 — Synchronized Directions entrance with Hero, 01:41 +03:00 — Deferred metric animation until Directions entrance, 01:45 +03:00 — Anchored direction tools to card bottoms, 01:50 +03:00 — Removed direction card numbering and tightened cells, 2026-09-01, Decision DEC-20260901-01 (+6 more)

### Community 27 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, dev, format, format:check, lint, lint:fix, prepare (+6 more)

### Community 28 - "Unified profile and about block"
Cohesion: 0.17
Nodes (12): 2026-09-02 13:23 +03:00, 2026-09-02 13:31 +03:00, 2026-09-02 13:57 +03:00, 2026-09-02 14:05 +03:00, 2026-09-02 23:30 +03:00, Decision DEC-20260902-02, Decision DEC-20260902-03, Decision DEC-20260902-04 (+4 more)

### Community 29 - "useTypingText.ts"
Cohesion: 0.30
Nodes (5): DELETE_DELAY, HOLD_DELAY, TYPE_DELAY, useTypingText(), getReducedMotion()

### Community 30 - "GridScan.tsx"
Cohesion: 0.33
Nodes (9): centroid(), dist2(), GridScan(), median(), medianPush(), smoothDampFloat(), smoothDampVec2(), srgbColor() (+1 more)

### Community 31 - "ExperienceTimeline.tsx"
Cohesion: 0.33
Nodes (7): desktopPath, desktopTimelineQuery, mobilePath, fallbackPoints, ExperienceTimelineProps, ScenePoint, pointToSceneAtX()

### Community 32 - "ExperienceDetailsItem.tsx"
Cohesion: 0.29
Nodes (4): ExperienceDetailsItem(), ExperienceDetailsItemProps, ExperiencePhase(), ExperiencePhaseProps

### Community 34 - "project-filtering/index.ts"
Cohesion: 0.44
Nodes (4): projectDirections, projectTechnologyOrder, ProjectFilters(), ProjectFiltersProps

### Community 35 - "HUD scroll indicator and overflow correction"
Cohesion: 0.22
Nodes (9): 2026-09-04 19:26 +03:00, 2026-09-04 19:39 +03:00, 2026-09-04 19:50 +03:00, 2026-09-04 20:06 +03:00, 2026-09-04 21:53 +03:00, Decision DEC-20260904-01, Decision DEC-20260904-02, Decision DEC-20260904-03 (+1 more)

### Community 36 - "work-experience/index.ts"
Cohesion: 0.47
Nodes (5): workExperience, ExperienceProject, ExperienceRolePhase, WorkExperience, createExperienceProject()

### Community 37 - "useKonamiCode.ts"
Cohesion: 0.39
Nodes (3): KONAMI_CODE, useKonamiCode(), KonamiDebug()

### Community 39 - "ExperienceTimeline"
Cohesion: 0.22
Nodes (5): ExperienceTimeline(), animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 40 - "ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx"
Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 41 - "ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx"
Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 42 - "ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx"
Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 43 - "ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx"
Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 44 - "2026-08-25"
Cohesion: 0.25
Nodes (8): 01:36 +03:00 — [scaffold] Initialize the portfolio project, 01:45 +03:00 — [graphify] Build the initial project knowledge graph, 01:46 +03:00 — [governance] Normalize repository line endings, 2026-08-25, Decision DEC-20260825-01, Decision DEC-20260825-02, Decision DEC-20260825-03, Decision DEC-20260825-04

### Community 45 - "2026-08-29"
Cohesion: 0.25
Nodes (8): 2026-08-29, 21:10 +03:00 — [ui] Add synchronized typing roles to Header and Hero, 21:13 +03:00 — [i18n] Localize the Header name, 22:56 +03:00 — [governance] Require grilling in Plan Mode, 23:32 +03:00 — [feature] Add cyberpunk personnel search loader, 23:52 +03:00 — [config] Temporarily replay and slow the loader, Decision DEC-20260829-01, Decision DEC-20260829-02

### Community 46 - "Dmitry Fursov — Software Developer"
Cohesion: 0.25
Nodes (7): Portfolio research sources, Dmitry Fursov — Software Developer, GitHub Pages, Portfolio research, Project assets, Локальная разработка, Языки

### Community 47 - "Agent Operating Rules"
Cohesion: 0.25
Nodes (7): Agent Operating Rules, Change logs and decisions, FSD architecture and component structure, Graphify, Grilling, Project baseline, Quality gate

### Community 48 - "package.json"
Cohesion: 0.25
Nodes (7): engines, node, npm, name, private, type, version

### Community 49 - "HomePage.tsx"
Cohesion: 0.39
Nodes (3): sectionIds, useActiveSection(), App()

### Community 50 - "ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx"
Cohesion: 0.25
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 51 - "ExperienceTimelineItem.tsx"
Cohesion: 0.43
Nodes (3): ExperienceTimelineItem(), ExperienceTimelineItemProps, getCompanyInitials()

### Community 52 - "MyChess Web — project brief"
Cohesion: 0.29
Nodes (6): MyChess Web — project brief, Личный вклад, Медиа и порядок показа, Публичные метрики в портфолио, Сверка источников и решения, Факты от владельца проекта

### Community 53 - "devDependencies"
Cohesion: 0.29
Nodes (7): eslint, eslint-config-prettier, devDependencies, eslint, eslint-config-prettier, @testing-library/user-event, @testing-library/user-event

### Community 54 - "TestProviders.tsx"
Cohesion: 0.48
Nodes (3): TestProviders(), TestProvidersProps, renderWithProviders()

### Community 55 - "entities/education/index.ts"
Cohesion: 0.67
Nodes (3): education, EducationEntry, EducationEntryKind

### Community 56 - "styles/index.ts"
Cohesion: 0.47
Nodes (3): styles, className(), cx()

### Community 58 - "Persistent project media mock"
Cohesion: 0.40
Nodes (5): 18:58 +03:00 — [feature] Transfer the loader portrait into the Hero scene, 2026-09-06 18:40 +03:00, Decision DEC-20260906-01, Decision DEC-20260906-02, Persistent project media mock

### Community 59 - "Project Circuit mini-game in Projects"
Cohesion: 0.40
Nodes (5): 2026-09-09 22:52 +03:00, 2026-09-09 23:01 +03:00, Decision DEC-20260909-07, Decision DEC-20260909-08, Project Circuit mini-game in Projects

### Community 60 - "lint-staged"
Cohesion: 0.40
Nodes (5): lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, eslint --fix, prettier --write

### Community 66 - "AI Agent Change Log Index"
Cohesion: 0.50
Nodes (4): AI Agent Change Log Index, Browse by decision, Browse by period, Latest entries

### Community 71 - "Localized experience project details"
Cohesion: 0.67
Nodes (3): 2026-09-02 17:28 +03:00, Decision DEC-20260902-11, Localized experience project details

### Community 72 - "Centered Education cards around Timeline bullets"
Cohesion: 0.67
Nodes (3): 2026-09-02 21:45 +03:00, Centered Education cards around Timeline bullets, Decision DEC-20260902-17

### Community 73 - "Completed final Education Timeline axis segment"
Cohesion: 0.67
Nodes (3): 2026-09-02 21:58 +03:00, Completed final Education Timeline axis segment, Decision DEC-20260902-19

### Community 74 - "Separated source responsibilities"
Cohesion: 0.67
Nodes (3): 2026-09-03 00:42 +03:00, Decision DEC-20260903-01, Separated source responsibilities

### Community 75 - "Grouped role folders for source responsibilities"
Cohesion: 0.67
Nodes (3): 2026-09-03 01:07 +03:00, Decision DEC-20260903-02, Grouped role folders for source responsibilities

## Knowledge Gaps
- **443 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+438 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **59 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Seamless Hero portrait handoff` connect `Seamless Hero portrait handoff` to `agent-logs/README.md`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `2026-08-30` connect `2026-08-30` to `agent-logs/README.md`, `00:06 +03:00 — Configuration-driven loader speed controls`, `01:28 +03:00 — Added intermittent cyberpunk portrait glitch`, `01:40 +03:00 — Made portrait glitch visibly readable`, `01:49 +03:00 — Stabilized the portrait base layer`, `02:01 +03:00 — Replaced slices with bounded corruption blocks`, `02:03 +03:00 — Verified block-only portrait corruption`, `02:27 +03:00 — Switched to a cellular data-corruption glitch`, `16:06 +03:00 — Replaced cellular portrait glitch with Glitch.js`, `16:31 +03:00 — Switched portrait glitch to continuous demo mode`, `19:46 +03:00 — Added localized resume link to header`, `20:01 +03:00 — Standardized cyan resume download buttons`, `20:24 +03:00 — Rebuilt EXPERIENCE LOG as a data-driven career timeline`, `20:58 +03:00 — Replaced timeline axis with animated SVG wave`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `2026-09-10` connect `2026-09-10` to `agent-logs/README.md`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _443 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `loading/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06327006327006326 - nodes in this community are weakly interconnected._
- **Should `ProjectPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05921325051759834 - nodes in this community are weakly interconnected._
- **Should `LiveCam.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08065268065268065 - nodes in this community are weakly interconnected._