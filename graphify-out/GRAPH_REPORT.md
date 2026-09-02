# Graph Report - . (2026-09-02)

## Corpus Check

- cluster-only mode — file stats not available

## Summary

- 758 nodes · 945 edges · 113 communities (77 shown, 36 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `6fa7cfa5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- devDependencies
- loading/index.ts
- ExperienceTimeline.tsx
- compilerOptions
- scripts
- dependencies
- compilerOptions
- 2026-08-30
- profile/index.ts
- project/index.ts
- EducationTimeline.tsx
- ActionLink.tsx
- site-layout/index.ts
- i18n.ts
- ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx
- ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx
- ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx
- ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx
- konami-debug/index.ts
- MetricCounter.tsx
- ExperienceTimeline.localizes-short-timeline-roles-and-the-future-cta-in-russian.test.tsx
- ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx
- usePortraitGlitch.ts
- project-filtering/index.ts
- workExperience.ts
- useTypingText.ts
- 2026-08-31
- Projects.tsx
- entities/education/index.ts
- ProjectDetails.tsx
- IntersectionObserverStub
- App.tsx
- AppRouter.tsx
- HomePage.tsx
- PrivacyPage.tsx
- TermsPage.tsx
- render.tsx
- SectionHeading.tsx
- TypingText.tsx
- Contact.tsx
- Skills.tsx
- 2026-08-27
- GlitchPortrait.configures-the-edited-effect-for-manual-short-bursts.test.tsx
- GlitchPortrait.destroys-glitch-js-when-an-active-portrait-unmounts.test.tsx
- GlitchPortrait.does-not-schedule-bursts-for-reduced-motion-and-cleans-up-on-unmount.test.tsx
- GlitchPortrait.renders-one-accessible-portrait-and-hides-glitch-js-clones.test.tsx
- tsconfig.json
- data.contains-21-unique-projects-with-valid-categories.test.ts
- main.tsx
- 2026-09-01
- agent-logs/README.md
- 2026-09-02.md
- Unified profile and about block
- Experience.tsx
- 2026-08-25
- 2026-08-29
- Agent Operating Rules
- ExperienceDetailsItem.tsx
- Dmitry Fursov — Software Developer
- ExperienceTimelineItem.tsx
- AI Agent Change Log Index
- Disabled loading animation speed debug panel
- Education timeline and language terminal
- Centered cyan education timeline
- Education timeline centered-axis layout
- Hero spacing and portfolio taxonomy update
- Fixed Mantine centered Education Timeline axis
- Localized experience project details
- Professionalized SOS COMPUTER course content
- Centered Education detail metadata
- Centered Education cards around Timeline bullets
- Centered Education bullets within cards
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
- styles/index.ts

## God Nodes (most connected - your core abstractions)

1. `2026-08-30` - 41 edges
2. `compilerOptions` - 21 edges
3. `2026-08-27` - 16 edges
4. `compilerOptions` - 15 edges
5. `scripts` - 14 edges
6. `useLoadingSequence()` - 12 edges
7. `Unified profile and about block` - 12 edges
8. `LoadingScreen()` - 11 edges
9. `ExperienceTimeline()` - 11 edges
10. `2026-08-31` - 11 edges

## Surprising Connections (you probably didn't know these)

- `ProjectCardProps` --references--> `Project` [EXTRACTED]
  src/entities/project/ui/ProjectCard/ProjectCard.tsx → src/entities/project/model/portfolio.ts
- `ActionButtonProps` --references--> `ActionVariant` [EXTRACTED]
  src/shared/ui/ActionButton/ActionButton.tsx → src/shared/ui/action/action.types.ts
- `ActionLinkProps` --references--> `ActionVariant` [EXTRACTED]
  src/shared/ui/ActionLink/ActionLink.tsx → src/shared/ui/action/action.types.ts
- `LoadingAnimationDebug()` --calls--> `setLoadingAnimationSpeed()` [EXTRACTED]
  src/features/loading/ui/LoadingAnimationDebug/LoadingAnimationDebug.tsx → src/features/loading/model/config/loadingAnimation.ts
- `LoadingAnimationDebug()` --calls--> `useLoadingAnimationSpeed()` [EXTRACTED]
  src/features/loading/ui/LoadingAnimationDebug/LoadingAnimationDebug.tsx → src/features/loading/model/config/loadingAnimation.ts

## Import Cycles

- None detected.

## Communities (113 total, 36 thin omitted)

### Community 0 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 1 - "loading/index.ts"

Cohesion: 0.07
Nodes (33): armTimer(), getLoadingAnimationSpeed(), listeners, loadingAnimationConfig, LoadingTimer, scheduleLoadingAnimation(), setLoadingAnimationSpeed(), subscribeToLoadingAnimationSpeed() (+25 more)

### Community 2 - "ExperienceTimeline.tsx"

Cohesion: 0.23
Nodes (9): experienceTimelineEdgeInset, getEvenlySpacedX(), ExperienceTimeline(), ExperienceTimelineProps, fallbackPoints, pointToSceneAtX(), ScenePoint, FutureExperienceItem() (+1 more)

### Community 3 - "compilerOptions"

Cohesion: 0.07
Nodes (27): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, baseUrl (+19 more)

### Community 4 - "scripts"

Cohesion: 0.07
Nodes (26): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+18 more)

### Community 5 - "dependencies"

Cohesion: 0.08
Nodes (25): gsap, i18next, i18next-browser-languagedetector, @isonimus/glitch-js, @mantine/core, @mantine/hooks, motion, @number-flow/react (+17 more)

### Community 6 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 7 - "2026-08-30"

Cohesion: 0.07
Nodes (28): 00:14 +03:00 — Candidate list overflow fix, 00:17 +03:00 — Fixed loader terminal height, 00:27 +03:00 — Added verified final candidate stage, 00:30 +03:00 — Matched candidate uses normal spawn cadence, 00:42 +03:00 — Added candidate scan loop, 00:42 +03:00 — Fixed site header, 00:45 +03:00 — Added candidate scan status indicator, 00:51 +03:00 — Anchored scan label and accelerated card scan (+20 more)

### Community 8 - "profile/index.ts"

Cohesion: 0.21
Nodes (11): Direction, directions, Directions(), DirectionsProps, GlitchPortrait(), GlitchPortraitProps, Hero(), heroItemVariants (+3 more)

### Community 9 - "project/index.ts"

Cohesion: 0.33
Nodes (10): cvUrl, Project, ProjectCategory, ProjectLink, ProjectMedia, ProjectPeriod, projects, skillGroups (+2 more)

### Community 10 - "EducationTimeline.tsx"

Cohesion: 0.26
Nodes (5): Education(), EducationCopy, EducationTimeline(), getYear(), toIsoDate()

### Community 11 - "ActionLink.tsx"

Cohesion: 0.33
Nodes (6): actionClassName(), ActionVariant, ActionButton(), ActionButtonProps, ActionLink(), ActionLinkProps

### Community 12 - "site-layout/index.ts"

Cohesion: 0.26
Nodes (8): Footer(), sectionIds, socialLinks, Header(), HeaderProps, sectionIds, LegalPageLayout(), LegalPageLayoutProps

### Community 13 - "i18n.ts"

Cohesion: 0.22
Nodes (6): LANGUAGE_STORAGE_KEY, resources, SupportedLanguage, supportedLanguages, cyan, theme

### Community 14 - "ExperienceTimeline.cancels-a-pending-refresh-when-the-timeline-unmounts.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 15 - "ExperienceTimeline.keeps-the-runner-static-when-reduced-motion-is-requested.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 16 - "ExperienceTimeline.rebuilds-the-runner-after-a-desktop-resize-and-preserves-its-progress.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 17 - "ExperienceTimeline.stops-on-mobile-and-restarts-from-the-beginning-on-desktop.test.tsx"

Cohesion: 0.22
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 18 - "konami-debug/index.ts"

Cohesion: 0.43
Nodes (3): KONAMI_CODE, useKonamiCode(), KonamiDebug()

### Community 20 - "ExperienceTimeline.localizes-short-timeline-roles-and-the-future-cta-in-russian.test.tsx"

Cohesion: 0.25
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 21 - "ExperienceTimeline.renders-the-complete-career-path-and-future-milestone.test.tsx"

Cohesion: 0.25
Nodes (4): animationFrames, { gsapSet, gsapTo, runnerTweens }, resizeDisconnect, resizeObserve

### Community 22 - "usePortraitGlitch.ts"

Cohesion: 0.50
Nodes (7): burstDuration(), createBurstGlitch(), createHologram(), markDecorativeLayers(), nextPause(), randomBetween(), usePortraitGlitch()

### Community 23 - "project-filtering/index.ts"

Cohesion: 0.52
Nodes (3): filters, ProjectFilters(), ProjectFiltersProps

### Community 24 - "workExperience.ts"

Cohesion: 0.53
Nodes (3): ExperienceProject, ExperienceRolePhase, WorkExperience

### Community 26 - "2026-08-31"

Cohesion: 0.10
Nodes (21): 19:44 +03:00 — Switched timeline runner to GSAP MotionPathPlugin, 19:59 +03:00 — Matched Hero portrait with the Glitch.js BROKEN HOLO demo, 2026-08-31, 20:09 +03:00 — Unified the Experience timeline scene geometry, 20:29 +03:00 — Added randomized short Glitch.js bursts, 20:32 +03:00 — Anchored evenly spaced Experience milestones to the SVG wave, 20:55 +03:00 — Introduced shared action components, 21:05 +03:00 — Added persistent hologram with burst-only distortions (+13 more)

### Community 28 - "entities/education/index.ts"

Cohesion: 0.70
Nodes (3): education, EducationEntry, EducationEntryKind

### Community 33 - "HomePage.tsx"

Cohesion: 0.43
Nodes (3): useActiveSection(), App(), sectionIds

### Community 41 - "2026-08-27"

Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 76 - "2026-09-01"

Cohesion: 0.14
Nodes (14): 01:02 +03:00 — Reframed Directions as four experience categories, 01:20 +03:00 — Added reusable animated metric counters, 01:27 +03:00 — Synchronized Directions entrance with Hero, 01:41 +03:00 — Deferred metric animation until Directions entrance, 01:45 +03:00 — Anchored direction tools to card bottoms, 01:50 +03:00 — Removed direction card numbering and tightened cells, 2026-09-01, Decision DEC-20260901-01 (+6 more)

### Community 77 - "agent-logs/README.md"

Cohesion: 0.31
Nodes (3): August 2026, September 2026, Global Decision Index

### Community 78 - "2026-09-02.md"

Cohesion: 0.15
Nodes (12): 2026-09-02 17:31 +03:00, 2026-09-02 21:10 +03:00, 2026-09-02 21:38 +03:00, 2026-09-02 21:58 +03:00, Completed final Education Timeline axis segment, Cyan experience project titles, Decision DEC-20260902-12, Decision DEC-20260902-15 (+4 more)

### Community 79 - "Unified profile and about block"

Cohesion: 0.17
Nodes (12): 2026-09-02 13:23 +03:00, 2026-09-02 13:31 +03:00, 2026-09-02 13:57 +03:00, 2026-09-02 14:05 +03:00, 2026-09-02 23:07 +03:00, Decision DEC-20260902-02, Decision DEC-20260902-03, Decision DEC-20260902-04 (+4 more)

### Community 80 - "Experience.tsx"

Cohesion: 0.36
Nodes (3): Experience(), ExperienceDetails(), ExperienceDetailsProps

### Community 81 - "2026-08-25"

Cohesion: 0.25
Nodes (8): 01:36 +03:00 — [scaffold] Initialize the portfolio project, 01:45 +03:00 — [graphify] Build the initial project knowledge graph, 01:46 +03:00 — [governance] Normalize repository line endings, 2026-08-25, Decision DEC-20260825-01, Decision DEC-20260825-02, Decision DEC-20260825-03, Decision DEC-20260825-04

### Community 82 - "2026-08-29"

Cohesion: 0.25
Nodes (8): 2026-08-29, 21:10 +03:00 — [ui] Add synchronized typing roles to Header and Hero, 21:13 +03:00 — [i18n] Localize the Header name, 22:56 +03:00 — [governance] Require grilling in Plan Mode, 23:32 +03:00 — [feature] Add cyberpunk personnel search loader, 23:52 +03:00 — [config] Temporarily replay and slow the loader, Decision DEC-20260829-01, Decision DEC-20260829-02

### Community 83 - "Agent Operating Rules"

Cohesion: 0.25
Nodes (7): Agent Operating Rules, Change logs and decisions, FSD architecture and component structure, Graphify, Grilling, Project baseline, Quality gate

### Community 85 - "Dmitry Fursov — Software Developer"

Cohesion: 0.33
Nodes (5): Dmitry Fursov — Software Developer, GitHub Pages, Project assets, Локальная разработка, Языки

### Community 86 - "ExperienceTimelineItem.tsx"

Cohesion: 0.53
Nodes (3): ExperienceTimelineItem(), ExperienceTimelineItemProps, initials()

### Community 87 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (4): AI Agent Change Log Index, Browse by decision, Browse by period, Latest entries

### Community 88 - "Disabled loading animation speed debug panel"

Cohesion: 0.67
Nodes (3): 2026-09-02 12:58 +03:00, Decision DEC-20260902-01, Disabled loading animation speed debug panel

### Community 89 - "Education timeline and language terminal"

Cohesion: 0.67
Nodes (3): 2026-09-02 15:32 +03:00, Decision DEC-20260902-06, Education timeline and language terminal

### Community 90 - "Centered cyan education timeline"

Cohesion: 0.67
Nodes (3): 2026-09-02 15:54 +03:00, Centered cyan education timeline, Decision DEC-20260902-07

### Community 91 - "Education timeline centered-axis layout"

Cohesion: 0.67
Nodes (3): 2026-09-02 16:07 +03:00, Decision DEC-20260902-08, Education timeline centered-axis layout

### Community 92 - "Hero spacing and portfolio taxonomy update"

Cohesion: 0.67
Nodes (3): 2026-09-02 16:24 +03:00, Decision DEC-20260902-09, Hero spacing and portfolio taxonomy update

### Community 93 - "Fixed Mantine centered Education Timeline axis"

Cohesion: 0.67
Nodes (3): 2026-09-02 16:37 +03:00, Decision DEC-20260902-10, Fixed Mantine centered Education Timeline axis

### Community 94 - "Localized experience project details"

Cohesion: 0.67
Nodes (3): 2026-09-02 17:28 +03:00, Decision DEC-20260902-11, Localized experience project details

### Community 95 - "Professionalized SOS COMPUTER course content"

Cohesion: 0.67
Nodes (3): 2026-09-02 17:56 +03:00, Decision DEC-20260902-13, Professionalized SOS COMPUTER course content

### Community 96 - "Centered Education detail metadata"

Cohesion: 0.67
Nodes (3): 2026-09-02 20:36 +03:00, Centered Education detail metadata, Decision DEC-20260902-14

### Community 97 - "Centered Education cards around Timeline bullets"

Cohesion: 0.67
Nodes (3): 2026-09-02 21:45 +03:00, Centered Education cards around Timeline bullets, Decision DEC-20260902-17

### Community 98 - "Centered Education bullets within cards"

Cohesion: 0.67
Nodes (3): 2026-09-02 21:52 +03:00, Centered Education bullets within cards, Decision DEC-20260902-18

## Knowledge Gaps

- **320 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+315 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `2026-08-30` connect `2026-08-30` to `00:06 +03:00 — Configuration-driven loader speed controls`, `01:28 +03:00 — Added intermittent cyberpunk portrait glitch`, `01:40 +03:00 — Made portrait glitch visibly readable`, `01:49 +03:00 — Stabilized the portrait base layer`, `02:01 +03:00 — Replaced slices with bounded corruption blocks`, `02:03 +03:00 — Verified block-only portrait corruption`, `02:27 +03:00 — Switched to a cellular data-corruption glitch`, `16:06 +03:00 — Replaced cellular portrait glitch with Glitch.js`, `16:31 +03:00 — Switched portrait glitch to continuous demo mode`, `19:46 +03:00 — Added localized resume link to header`, `agent-logs/README.md`, `20:01 +03:00 — Standardized cyan resume download buttons`, `20:24 +03:00 — Rebuilt EXPERIENCE LOG as a data-driven career timeline`, `20:58 +03:00 — Replaced timeline axis with animated SVG wave`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `2026-08-31` connect `2026-08-31` to `agent-logs/README.md`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _320 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `loading/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07033315705975675 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
