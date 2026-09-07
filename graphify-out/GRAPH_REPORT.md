# Graph Report - fursik.github.io (2026-09-07)

## Corpus Check

- 317 files · ~82,010 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 951 nodes · 1398 edges · 129 communities (90 shown, 39 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `9cb00316`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Portfolio Research Source Map

- `docs/portfolio-research-sources.md` is the repository-local entry point for external portfolio research.
- Linked research corpus: `C:/Work/Резюме/app_from_portfolio_information/`.
- Indexed files: AR Chudoboxes / Chudoboxes EKO, AR Coloring, Villa Krim / Virtual Sommelier, and Neo4 Sightline.
- Graph traversal: `Portfolio research sources` → `references` → each research file node.

## Community Hubs (Navigation)

- loading/index.ts
- useHudScroll.ts
- devDependencies
- 2026-08-30
- compilerOptions
- profile/index.ts
- 2026-09-02.md
- entities/project/index.ts
- 2026-08-31
- compilerOptions
- agent-logs/README.md
- ActionVariant
- EducationTimeline.tsx
- 2026-08-27
- ProjectMediaGallery.tsx
- dependencies
- 2026-09-01
- scripts
- config/index.ts
- Unified profile and about block
- useTypingText.ts
- experience/index.ts
- ExperienceTimeline.tsx
- usePortraitGlitch.ts
- ExperienceDetailsItem.tsx
- HUD scroll indicator and overflow correction
- work-experience/index.ts
- useKonamiCode.ts
- MetricCounter.tsx
- ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx
- ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx
- ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx
- ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx
- 2026-08-25
- 2026-08-29
- Agent Operating Rules
- package.json
- project-filtering/index.ts
- HomePage.tsx
- ExperienceTimeline.localizes-short-timeline-roles-and-the-future-cta-in-russian.test.tsx
- ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx
- ExperienceTimelineItem.tsx
- ProjectPage.tsx
- TestProviders.tsx
- Dmitry Fursov — Software Developer
- entities/education/index.ts
- styles/index.ts
- Projects.tsx
- Persistent project media mock
- lint-staged
- AppRouter.tsx
- IntersectionObserverStub
- SectionHeading/index.ts
- TypingText/index.ts
- experience-timeline-geometry.ts
- ExperienceTimeline
- AI Agent Change Log Index
- App.tsx
- PrivacyPage.tsx
- TermsPage.tsx
- Contact.tsx
- Skills.tsx
- Education timeline and language terminal
- Centered cyan education timeline
- Education timeline centered-axis layout
- Fixed Mantine centered Education Timeline axis
- Cyan experience project titles
- Centered Education detail metadata
- Centered Education cards around Timeline bullets
- Vertically centered Education metadata pairs
- Separated source responsibilities
- Grouped role folders for source responsibilities
- Seamless Hero portrait handoff
- GlitchPortrait.configures-the-edited-effect-for-manual-short-bursts.test.tsx
- GlitchPortrait.destroys-glitch-js-when-an-active-portrait-unmounts.test.tsx
- GlitchPortrait.does-not-schedule-bursts-for-reduced-motion-and-cleans-up-on-unmount.test.tsx
- GlitchPortrait.renders-one-accessible-portrait-and-hides-glitch-js-clones.test.tsx
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
- 2026-09-05.md
- i18next-browser-languagedetector
- @mantine/hooks
- @number-flow/react
- react
- react-i18next
- data.contains-21-unique-projects-with-valid-categories.test.ts
- Centered Education bullets within cards

## God Nodes (most connected - your core abstractions)

1. `2026-08-30` - 41 edges
2. `compilerOptions` - 21 edges
3. `2026-08-27` - 16 edges
4. `compilerOptions` - 15 edges
5. `scripts` - 14 edges
6. `useLoadingSequence()` - 14 edges
7. `Seamless Hero portrait handoff` - 14 edges
8. `LoadingScreen()` - 12 edges
9. `Unified profile and about block` - 12 edges
10. `useLoadingAnimationSpeed()` - 11 edges

## Surprising Connections (you probably didn't know these)

- `useLoadingAnimationSpeed()` --indirect_call--> `getLoadingAnimationSpeed()` [INFERRED]
  src/features/loading/model/useLoadingAnimationSpeed/useLoadingAnimationSpeed.ts → src/features/loading/model/store/loadingAnimationStore.ts
- `useLoadingAnimationSpeed()` --indirect_call--> `subscribeToLoadingAnimationSpeed()` [INFERRED]
  src/features/loading/model/useLoadingAnimationSpeed/useLoadingAnimationSpeed.ts → src/features/loading/model/store/loadingAnimationStore.ts
- `useTypingText()` --indirect_call--> `getReducedMotion()` [INFERRED]
  src/shared/lib/useTypingText/useTypingText.ts → src/shared/lib/useTypingText/utils/getReducedMotion.ts
- `renderWithProviders()` --indirect_call--> `TestProviders()` [INFERRED]
  src/shared/test/utils/renderWithProviders.tsx → src/shared/test/TestProviders/TestProviders.tsx
- `ExperienceTimeline()` --calls--> `getEvenlySpacedX()` [EXTRACTED]
  src/widgets/experience/ui/ExperienceTimeline/ExperienceTimeline.tsx → src/widgets/experience/model/experience-timeline-geometry/utils/experience-timeline-geometry.ts

## Import Cycles

- None detected.

## Communities (129 total, 39 thin omitted)

### Community 0 - "loading/index.ts"

Cohesion: 0.06
Nodes (34): ALWAYS_REPLAY_INTRO, INTRO_STORAGE_KEY, loadingAnimationConfig, loadingCandidateNames, scheduleLoadingAnimation(), LoadingTimer, getLoadingAnimationSpeed(), listeners (+26 more)

### Community 1 - "useHudScroll.ts"

Cohesion: 0.09
Nodes (30): sectionIds, socialLinks, Footer(), sectionIds, headerEntranceVariants, Header(), HeaderProps, HUD_KEYBOARD_STEP (+22 more)

### Community 2 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 3 - "2026-08-30"

Cohesion: 0.07
Nodes (28): 00:14 +03:00 — Candidate list overflow fix, 00:17 +03:00 — Fixed loader terminal height, 00:27 +03:00 — Added verified final candidate stage, 00:30 +03:00 — Matched candidate uses normal spawn cadence, 00:42 +03:00 — Added candidate scan loop, 00:42 +03:00 — Fixed site header, 00:45 +03:00 — Added candidate scan status indicator, 00:51 +03:00 — Anchored scan label and accelerated card scan (+20 more)

### Community 4 - "compilerOptions"

Cohesion: 0.07
Nodes (27): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, baseUrl (+19 more)

### Community 5 - "profile/index.ts"

Cohesion: 0.18
Nodes (11): directions, Direction, Directions(), DirectionsProps, GlitchPortrait(), GlitchPortraitProps, heroItemVariants, Hero() (+3 more)

### Community 6 - "2026-09-02.md"

Cohesion: 0.11
Nodes (18): 2026-09-02 12:58 +03:00, 2026-09-02 16:24 +03:00, 2026-09-02 17:28 +03:00, 2026-09-02 17:56 +03:00, 2026-09-02 21:10 +03:00, 2026-09-02 21:58 +03:00, Completed final Education Timeline axis segment, Decision DEC-20260902-01 (+10 more)

### Community 7 - "entities/project/index.ts"

Cohesion: 0.20
Nodes (13): cvUrl, projects, skillGroups, Project, ProjectAction, ProjectActionType, ProjectCategory, ProjectMedia (+5 more)

### Community 8 - "2026-08-31"

Cohesion: 0.10
Nodes (21): 19:44 +03:00 — Switched timeline runner to GSAP MotionPathPlugin, 19:59 +03:00 — Matched Hero portrait with the Glitch.js BROKEN HOLO demo, 2026-08-31, 20:09 +03:00 — Unified the Experience timeline scene geometry, 20:29 +03:00 — Added randomized short Glitch.js bursts, 20:32 +03:00 — Anchored evenly spaced Experience milestones to the SVG wave, 20:55 +03:00 — Introduced shared action components, 21:05 +03:00 — Added persistent hologram with burst-only distortions (+13 more)

### Community 9 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 10 - "agent-logs/README.md"

Cohesion: 0.26
Nodes (3): August 2026, September 2026, Global Decision Index

### Community 11 - "ActionVariant"

Cohesion: 0.30
Nodes (6): ActionVariant, actionClassName(), ActionButton(), ActionButtonProps, ActionLink(), ActionLinkProps

### Community 12 - "EducationTimeline.tsx"

Cohesion: 0.22
Nodes (5): Education(), EducationTimeline(), EducationCopy, getYear(), toIsoDate()

### Community 13 - "2026-08-27"

Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 14 - "ProjectMediaGallery.tsx"

Cohesion: 0.27
Nodes (4): ProjectDetails(), ProjectDetailsProps, ProjectMediaGallery(), ProjectMediaGalleryProps

### Community 15 - "dependencies"

Cohesion: 0.13
Nodes (15): gsap, i18next, @isonimus/glitch-js, @mantine/core, motion, dependencies, gsap, i18next (+7 more)

### Community 16 - "2026-09-01"

Cohesion: 0.14
Nodes (14): 01:02 +03:00 — Reframed Directions as four experience categories, 01:20 +03:00 — Added reusable animated metric counters, 01:27 +03:00 — Synchronized Directions entrance with Hero, 01:41 +03:00 — Deferred metric animation until Directions entrance, 01:45 +03:00 — Anchored direction tools to card bottoms, 01:50 +03:00 — Removed direction card numbering and tightened cells, 2026-09-01, Decision DEC-20260901-01 (+6 more)

### Community 17 - "scripts"

Cohesion: 0.14
Nodes (14): scripts, build, dev, format, format:check, lint, lint:fix, prepare (+6 more)

### Community 18 - "config/index.ts"

Cohesion: 0.31
Nodes (6): LANGUAGE_STORAGE_KEY, supportedLanguages, resources, SupportedLanguage, cyan, theme

### Community 19 - "Unified profile and about block"

Cohesion: 0.17
Nodes (12): 2026-09-02 13:23 +03:00, 2026-09-02 13:31 +03:00, 2026-09-02 13:57 +03:00, 2026-09-02 14:05 +03:00, 2026-09-02 23:30 +03:00, Decision DEC-20260902-02, Decision DEC-20260902-03, Decision DEC-20260902-04 (+4 more)

### Community 20 - "useTypingText.ts"

Cohesion: 0.30
Nodes (5): DELETE_DELAY, HOLD_DELAY, TYPE_DELAY, useTypingText(), getReducedMotion()

### Community 21 - "experience/index.ts"

Cohesion: 0.33
Nodes (4): ExperienceDetails(), ExperienceDetailsProps, FutureExperienceItem(), FutureExperienceItemProps

### Community 22 - "ExperienceTimeline.tsx"

Cohesion: 0.33
Nodes (7): desktopPath, desktopTimelineQuery, mobilePath, fallbackPoints, ExperienceTimelineProps, ScenePoint, pointToSceneAtX()

### Community 23 - "usePortraitGlitch.ts"

Cohesion: 0.32
Nodes (6): usePortraitGlitch(), createBurstGlitch(), createHologram(), getBurstDuration(), getNextPause(), markDecorativeLayers()

### Community 24 - "ExperienceDetailsItem.tsx"

Cohesion: 0.29
Nodes (4): ExperienceDetailsItem(), ExperienceDetailsItemProps, ExperiencePhase(), ExperiencePhaseProps

### Community 25 - "HUD scroll indicator and overflow correction"

Cohesion: 0.22
Nodes (9): 2026-09-04 19:26 +03:00, 2026-09-04 19:39 +03:00, 2026-09-04 19:50 +03:00, 2026-09-04 20:06 +03:00, 2026-09-04 21:53 +03:00, Decision DEC-20260904-01, Decision DEC-20260904-02, Decision DEC-20260904-03 (+1 more)

### Community 26 - "work-experience/index.ts"

Cohesion: 0.47
Nodes (5): workExperience, ExperienceProject, ExperienceRolePhase, WorkExperience, createExperienceProject()

### Community 27 - "useKonamiCode.ts"

Cohesion: 0.39
Nodes (3): KONAMI_CODE, useKonamiCode(), KonamiDebug()

### Community 29 - "ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 30 - "ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 31 - "ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 32 - "ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 33 - "2026-08-25"

Cohesion: 0.25
Nodes (8): 01:36 +03:00 — [scaffold] Initialize the portfolio project, 01:45 +03:00 — [graphify] Build the initial project knowledge graph, 01:46 +03:00 — [governance] Normalize repository line endings, 2026-08-25, Decision DEC-20260825-01, Decision DEC-20260825-02, Decision DEC-20260825-03, Decision DEC-20260825-04

### Community 34 - "2026-08-29"

Cohesion: 0.25
Nodes (8): 2026-08-29, 21:10 +03:00 — [ui] Add synchronized typing roles to Header and Hero, 21:13 +03:00 — [i18n] Localize the Header name, 22:56 +03:00 — [governance] Require grilling in Plan Mode, 23:32 +03:00 — [feature] Add cyberpunk personnel search loader, 23:52 +03:00 — [config] Temporarily replay and slow the loader, Decision DEC-20260829-01, Decision DEC-20260829-02

### Community 35 - "Agent Operating Rules"

Cohesion: 0.25
Nodes (7): Agent Operating Rules, Change logs and decisions, FSD architecture and component structure, Graphify, Grilling, Project baseline, Quality gate

### Community 36 - "package.json"

Cohesion: 0.25
Nodes (7): engines, node, npm, name, private, type, version

### Community 37 - "project-filtering/index.ts"

Cohesion: 0.64
Nodes (3): filters, ProjectFilters(), ProjectFiltersProps

### Community 38 - "HomePage.tsx"

Cohesion: 0.39
Nodes (3): sectionIds, useActiveSection(), App()

### Community 39 - "ExperienceTimeline.localizes-short-timeline-roles-and-the-future-cta-in-russian.test.tsx"

Cohesion: 0.25
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 40 - "ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx"

Cohesion: 0.25
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 41 - "ExperienceTimelineItem.tsx"

Cohesion: 0.43
Nodes (3): ExperienceTimelineItem(), ExperienceTimelineItemProps, getCompanyInitials()

### Community 43 - "TestProviders.tsx"

Cohesion: 0.48
Nodes (3): TestProviders(), TestProvidersProps, renderWithProviders()

### Community 44 - "Dmitry Fursov — Software Developer"

Cohesion: 0.33
Nodes (5): Dmitry Fursov — Software Developer, GitHub Pages, Project assets, Локальная разработка, Языки

### Community 45 - "entities/education/index.ts"

Cohesion: 0.67
Nodes (3): education, EducationEntry, EducationEntryKind

### Community 46 - "styles/index.ts"

Cohesion: 0.47
Nodes (3): styles, className(), cx()

### Community 48 - "Persistent project media mock"

Cohesion: 0.40
Nodes (5): 18:58 +03:00 — [feature] Transfer the loader portrait into the Hero scene, 2026-09-06 18:40 +03:00, Decision DEC-20260906-01, Decision DEC-20260906-02, Persistent project media mock

### Community 49 - "lint-staged"

Cohesion: 0.40
Nodes (5): lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, eslint --fix, prettier --write

### Community 56 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (4): AI Agent Change Log Index, Browse by decision, Browse by period, Latest entries

### Community 62 - "Education timeline and language terminal"

Cohesion: 0.67
Nodes (3): 2026-09-02 15:32 +03:00, Decision DEC-20260902-06, Education timeline and language terminal

### Community 63 - "Centered cyan education timeline"

Cohesion: 0.67
Nodes (3): 2026-09-02 15:54 +03:00, Centered cyan education timeline, Decision DEC-20260902-07

### Community 64 - "Education timeline centered-axis layout"

Cohesion: 0.67
Nodes (3): 2026-09-02 16:07 +03:00, Decision DEC-20260902-08, Education timeline centered-axis layout

### Community 65 - "Fixed Mantine centered Education Timeline axis"

Cohesion: 0.67
Nodes (3): 2026-09-02 16:37 +03:00, Decision DEC-20260902-10, Fixed Mantine centered Education Timeline axis

### Community 66 - "Cyan experience project titles"

Cohesion: 0.67
Nodes (3): 2026-09-02 17:31 +03:00, Cyan experience project titles, Decision DEC-20260902-12

### Community 67 - "Centered Education detail metadata"

Cohesion: 0.67
Nodes (3): 2026-09-02 20:36 +03:00, Centered Education detail metadata, Decision DEC-20260902-14

### Community 68 - "Centered Education cards around Timeline bullets"

Cohesion: 0.67
Nodes (3): 2026-09-02 21:45 +03:00, Centered Education cards around Timeline bullets, Decision DEC-20260902-17

### Community 69 - "Vertically centered Education metadata pairs"

Cohesion: 0.67
Nodes (3): 2026-09-02 21:38 +03:00, Decision DEC-20260902-16, Vertically centered Education metadata pairs

### Community 70 - "Separated source responsibilities"

Cohesion: 0.67
Nodes (3): 2026-09-03 00:42 +03:00, Decision DEC-20260903-01, Separated source responsibilities

### Community 71 - "Grouped role folders for source responsibilities"

Cohesion: 0.67
Nodes (3): 2026-09-03 01:07 +03:00, Decision DEC-20260903-02, Grouped role folders for source responsibilities

### Community 72 - "Seamless Hero portrait handoff"

Cohesion: 0.14
Nodes (14): 2026-09-07 20:42 +03:00, 2026-09-07 21:21 +03:00, 2026-09-07 21:55 +03:00, 2026-09-07 22:05 +03:00 — Villa Krim project content, 2026-09-07 22:10 +03:00 — Filled the AR Chudoboxes portfolio case, 2026-09-07 22:30 +03:00, AR Coloring project content, Decision DEC-20260907-01 (+6 more)

### Community 128 - "Centered Education bullets within cards"

Cohesion: 0.67
Nodes (3): 2026-09-02 21:52 +03:00, Centered Education bullets within cards, Decision DEC-20260902-18

## Knowledge Gaps

- **316 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+311 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **39 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `2026-08-30` connect `2026-08-30` to `agent-logs/README.md`, `00:06 +03:00 — Configuration-driven loader speed controls`, `01:28 +03:00 — Added intermittent cyberpunk portrait glitch`, `01:40 +03:00 — Made portrait glitch visibly readable`, `01:49 +03:00 — Stabilized the portrait base layer`, `02:01 +03:00 — Replaced slices with bounded corruption blocks`, `02:03 +03:00 — Verified block-only portrait corruption`, `02:27 +03:00 — Switched to a cellular data-corruption glitch`, `16:06 +03:00 — Replaced cellular portrait glitch with Glitch.js`, `16:31 +03:00 — Switched portrait glitch to continuous demo mode`, `19:46 +03:00 — Added localized resume link to header`, `20:01 +03:00 — Standardized cyan resume download buttons`, `20:24 +03:00 — Rebuilt EXPERIENCE LOG as a data-driven career timeline`, `20:58 +03:00 — Replaced timeline axis with animated SVG wave`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `2026-08-31` connect `2026-08-31` to `agent-logs/README.md`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _316 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `loading/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.060240963855421686 - nodes in this community are weakly interconnected._
- **Should `useHudScroll.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09071117561683599 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
