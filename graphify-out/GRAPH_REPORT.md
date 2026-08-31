# Graph Report - . (2026-09-01)

## Corpus Check

- cluster-only mode — file stats not available

## Summary

- 511 nodes · 822 edges · 47 communities (23 shown, 24 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `8a010b0b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- devDependencies
- render.tsx
- loadingAnimation.ts
- App.tsx
- data/portfolio.ts
- 2026-08-30
- scripts
- Hero.tsx
- WorkExperience
- dependencies
- compilerOptions
- 2026-08-31
- compilerOptions
- 2026-08-27
- usePortraitGlitch.ts
- 2026-08-29
- 2026-09-01
- AI Agent Change Log Index
- IntersectionObserverStub
- useIntro.ts
- Quality Validation
- Build Job
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
- Application Entry Point
- Graphify Policy
- Project Baseline
- Social Icon Set
- React TypeScript Vite Template
- Hero Image
- React Logo
- Vite Logo

## God Nodes (most connected - your core abstractions)

1. `2026-08-30` - 41 edges
2. `renderWithProviders()` - 32 edges
3. `compilerOptions` - 18 edges
4. `WorkExperience` - 16 edges
5. `2026-08-27` - 16 edges
6. `compilerOptions` - 15 edges
7. `changeLanguage()` - 15 edges
8. `scripts` - 14 edges
9. `2026-08-31` - 11 edges
10. `ActionLink()` - 9 edges

## Surprising Connections (you probably didn't know these)

- `Application Entry Point` --references--> `Vite Favicon` [EXTRACTED]
  index.html → public/favicon.svg
- `Quality Validation` --conceptually_related_to--> `Quality Gate` [INFERRED]
  .github/workflows/quality.yml → AGENTS.md
- `Change Log Governance` --implements--> `Global Decision Index` [INFERRED]
  AGENTS.md → agent-logs/DECISIONS.md
- `Change Log Governance` --implements--> `AI Agent Change Log Index` [INFERRED]
  AGENTS.md → agent-logs/README.md
- `ProjectCardProps` --references--> `Project` [EXTRACTED]
  src/components/projects/ProjectCard.tsx → src/data.ts

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Portfolio Scaffold Governance Flow** — agents_project_baseline, agents_quality_gate, agents_change_log_governance, agents_graphify_policy, agent_logs_2026_08_2026_08_25_scaffold_initialization [INFERRED 0.85]
- **GitHub Pages Delivery Pipeline** — github_workflows_deploy_build_job, github_workflows_deploy_deploy_job, github_workflows_deploy_github_pages_deployment [EXTRACTED 1.00]

## Communities (47 total, 24 thin omitted)

### Community 0 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 1 - "render.tsx"

Cohesion: 0.10
Nodes (22): AppRouter(), Footer(), sectionIds, socialLinks, LegalPageLayout(), LegalPageLayoutProps, Directions(), DirectionsProps (+14 more)

### Community 2 - "loadingAnimation.ts"

Cohesion: 0.12
Nodes (25): LoadingAnimationDebug(), LoadingAnimationDebugProps, LoadingScreen(), LoadingScreenProps, phaseLabel(), baseProps, armTimer(), getLoadingAnimationSpeed() (+17 more)

### Community 3 - "App.tsx"

Cohesion: 0.11
Nodes (14): sectionIds, KonamiDebug(), SectionHeading(), SectionHeadingProps, Projects(), About(), Contact(), Experience() (+6 more)

### Community 4 - "data/portfolio.ts"

Cohesion: 0.15
Nodes (20): filters, ProjectCard(), ProjectCardProps, ProjectDetails(), ProjectDetailsProps, ProjectFilters(), ProjectFiltersProps, cvUrl (+12 more)

### Community 5 - "2026-08-30"

Cohesion: 0.07
Nodes (28): 00:14 +03:00 — Candidate list overflow fix, 00:17 +03:00 — Fixed loader terminal height, 00:27 +03:00 — Added verified final candidate stage, 00:30 +03:00 — Matched candidate uses normal spawn cadence, 00:42 +03:00 — Added candidate scan loop, 00:42 +03:00 — Fixed site header, 00:45 +03:00 — Added candidate scan status indicator, 00:51 +03:00 — Anchored scan label and accelerated card scan (+20 more)

### Community 6 - "scripts"

Cohesion: 0.07
Nodes (26): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+18 more)

### Community 7 - "Hero.tsx"

Cohesion: 0.13
Nodes (16): Hero(), heroItemVariants, HeroProps, Header(), HeaderProps, sectionIds, TypingText(), TypingTextProps (+8 more)

### Community 8 - "WorkExperience"

Cohesion: 0.15
Nodes (15): ExperienceDetails(), ExperienceDetailsProps, ExperienceDetailsItem(), ExperienceDetailsItemProps, ExperienceTimeline(), ExperienceTimelineProps, fallbackPoints, pointToSceneAtX() (+7 more)

### Community 9 - "dependencies"

Cohesion: 0.08
Nodes (25): gsap, i18next, i18next-browser-languagedetector, @isonimus/glitch-js, @mantine/core, @mantine/hooks, motion, @number-flow/react (+17 more)

### Community 10 - "compilerOptions"

Cohesion: 0.08
Nodes (24): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly (+16 more)

### Community 11 - "2026-08-31"

Cohesion: 0.09
Nodes (21): 19:44 +03:00 — Switched timeline runner to GSAP MotionPathPlugin, 19:59 +03:00 — Matched Hero portrait with the Glitch.js BROKEN HOLO demo, 2026-08-31, 20:09 +03:00 — Unified the Experience timeline scene geometry, 20:29 +03:00 — Added randomized short Glitch.js bursts, 20:32 +03:00 — Anchored evenly spaced Experience milestones to the SVG wave, 20:55 +03:00 — Introduced shared action components, 21:05 +03:00 — Added persistent hologram with burst-only distortions (+13 more)

### Community 12 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 13 - "2026-08-27"

Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 14 - "usePortraitGlitch.ts"

Cohesion: 0.25
Nodes (11): GlitchPortrait(), GlitchPortraitProps, { glitchMock, GlitchMock }, props, burstDuration(), createBurstGlitch(), createHologram(), markDecorativeLayers() (+3 more)

### Community 15 - "2026-08-29"

Cohesion: 0.22
Nodes (8): 2026-08-29, 21:10 +03:00 — [ui] Add synchronized typing roles to Header and Hero, 21:13 +03:00 — [i18n] Localize the Header name, 22:56 +03:00 — [governance] Require grilling in Plan Mode, 23:32 +03:00 — [feature] Add cyberpunk personnel search loader, 23:52 +03:00 — [config] Temporarily replay and slow the loader, Decision DEC-20260829-01, Decision DEC-20260829-02

### Community 16 - "2026-09-01"

Cohesion: 0.25
Nodes (6): 2026-09-01, Decision DEC-20260901-01, Decision DEC-20260901-02, Footer, legal pages, and social contacts, Simplified hero and refreshed contact/experience styling, September 2026

### Community 17 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (5): Portfolio Scaffold Initialization, August 2026 Change Log Index, Global Decision Index, AI Agent Change Log Index, Change Log Governance

### Community 20 - "Quality Validation"

Cohesion: 0.67
Nodes (3): Quality Gate, Quality Validation, Validate Job

### Community 21 - "Build Job"

Cohesion: 1.00
Nodes (3): Build Job, Deploy Job, GitHub Pages Deployment

## Knowledge Gaps

- **212 isolated node(s):** `LoadingAnimationDebugProps`, `{ glitchMock, GlitchMock }`, `props`, `GlitchPortraitProps`, `HeroProps` (+207 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `renderWithProviders()` connect `render.tsx` to `loadingAnimation.ts`, `App.tsx`, `data/portfolio.ts`, `Hero.tsx`, `WorkExperience`, `usePortraitGlitch.ts`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `LoadingAnimationDebugProps`, `{ glitchMock, GlitchMock }`, `props` to the rest of the system?**
  _212 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `render.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `loadingAnimation.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._
