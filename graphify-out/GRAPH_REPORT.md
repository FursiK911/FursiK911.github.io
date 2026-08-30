# Graph Report - . (2026-08-30)

## Corpus Check

- cluster-only mode — file stats not available

## Summary

- 411 nodes · 632 edges · 31 communities (20 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `d3487637`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- devDependencies
- 2026-08-30
- render.tsx
- loadingAnimation.ts
- App.tsx
- scripts
- data/portfolio.ts
- compilerOptions
- dependencies
- Hero.tsx
- compilerOptions
- 2026-08-27
- 2026-08-29
- KonamiDebug.tsx
- AI Agent Change Log Index
- IntersectionObserverStub
- useIntro.ts
- Quality Validation
- Build Job
- tsconfig.json
- Application Entry Point
- Graphify Policy
- Project Baseline
- Social Icon Set
- React TypeScript Vite Template
- Hero Image
- React Logo
- Vite Logo

## God Nodes (most connected - your core abstractions)

1. `2026-08-30` - 36 edges
2. `renderWithProviders()` - 25 edges
3. `compilerOptions` - 18 edges
4. `2026-08-27` - 16 edges
5. `compilerOptions` - 15 edges
6. `WorkExperience` - 15 edges
7. `scripts` - 14 edges
8. `2026-08-29` - 8 edges
9. `Project` - 8 edges
10. `changeLanguage()` - 8 edges

## Surprising Connections (you probably didn't know these)

- `Application Entry Point` --references--> `Vite Favicon` [EXTRACTED]
  index.html → public/favicon.svg
- `Quality Validation` --conceptually_related_to--> `Quality Gate` [INFERRED]
  .github/workflows/quality.yml → AGENTS.md
- `Change Log Governance` --implements--> `Global Decision Index` [INFERRED]
  AGENTS.md → agent-logs/DECISIONS.md
- `Change Log Governance` --implements--> `AI Agent Change Log Index` [INFERRED]
  AGENTS.md → agent-logs/README.md
- `renderReadyApp()` --calls--> `renderWithProviders()` [EXTRACTED]
  src/app/App.test.tsx → src/test/render.tsx

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Portfolio Scaffold Governance Flow** — agents_project_baseline, agents_quality_gate, agents_change_log_governance, agents_graphify_policy, agent_logs_2026_08_2026_08_25_scaffold_initialization [INFERRED 0.85]
- **GitHub Pages Delivery Pipeline** — github_workflows_deploy_build_job, github_workflows_deploy_deploy_job, github_workflows_deploy_github_pages_deployment [EXTRACTED 1.00]

## Communities (31 total, 11 thin omitted)

### Community 0 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 1 - "2026-08-30"

Cohesion: 0.04
Nodes (45): 00:06 +03:00 — Configuration-driven loader speed controls, 00:14 +03:00 — Candidate list overflow fix, 00:17 +03:00 — Fixed loader terminal height, 00:27 +03:00 — Added verified final candidate stage, 00:30 +03:00 — Matched candidate uses normal spawn cadence, 00:42 +03:00 — Added candidate scan loop, 00:42 +03:00 — Fixed site header, 00:45 +03:00 — Added candidate scan status indicator (+37 more)

### Community 2 - "render.tsx"

Cohesion: 0.11
Nodes (22): renderReadyApp(), baseProps, Experience(), ExperienceDetails(), ExperienceDetailsProps, ExperienceDetailsItem(), ExperienceDetailsItemProps, ExperienceTimeline() (+14 more)

### Community 3 - "loadingAnimation.ts"

Cohesion: 0.13
Nodes (24): LoadingAnimationDebug(), LoadingAnimationDebugProps, LoadingScreen(), LoadingScreenProps, phaseLabel(), armTimer(), getLoadingAnimationSpeed(), listeners (+16 more)

### Community 4 - "App.tsx"

Cohesion: 0.12
Nodes (14): App(), sectionIds, Footer(), SectionHeading(), SectionHeadingProps, Projects(), About(), Contact() (+6 more)

### Community 5 - "scripts"

Cohesion: 0.07
Nodes (26): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+18 more)

### Community 6 - "data/portfolio.ts"

Cohesion: 0.21
Nodes (15): filters, ProjectCard(), ProjectCardProps, ProjectDetails(), ProjectDetailsProps, ProjectFilters(), ProjectFiltersProps, cvUrl (+7 more)

### Community 7 - "compilerOptions"

Cohesion: 0.08
Nodes (24): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly (+16 more)

### Community 8 - "dependencies"

Cohesion: 0.10
Nodes (21): i18next, i18next-browser-languagedetector, @isonimus/glitch-js, @mantine/core, @mantine/hooks, motion, dependencies, i18next (+13 more)

### Community 9 - "Hero.tsx"

Cohesion: 0.13
Nodes (14): GlitchPortrait(), GlitchPortraitProps, { glitchMock, GlitchMock }, props, Hero(), heroItemVariants, HeroProps, Header() (+6 more)

### Community 10 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 11 - "2026-08-27"

Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 12 - "2026-08-29"

Cohesion: 0.22
Nodes (8): 2026-08-29, 21:10 +03:00 — [ui] Add synchronized typing roles to Header and Hero, 21:13 +03:00 — [i18n] Localize the Header name, 22:56 +03:00 — [governance] Require grilling in Plan Mode, 23:32 +03:00 — [feature] Add cyberpunk personnel search loader, 23:52 +03:00 — [config] Temporarily replay and slow the loader, Decision DEC-20260829-01, Decision DEC-20260829-02

### Community 13 - "KonamiDebug.tsx"

Cohesion: 0.52
Nodes (3): KonamiDebug(), KONAMI_CODE, useKonamiCode()

### Community 14 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (5): Portfolio Scaffold Initialization, August 2026 Change Log Index, Global Decision Index, AI Agent Change Log Index, Change Log Governance

### Community 17 - "Quality Validation"

Cohesion: 0.67
Nodes (3): Quality Gate, Quality Validation, Validate Job

### Community 18 - "Build Job"

Cohesion: 1.00
Nodes (3): Build Job, Deploy Job, GitHub Pages Deployment

## Knowledge Gaps

- **183 isolated node(s):** `sectionIds`, `LoadingAnimationDebugProps`, `SectionHeadingProps`, `TypingTextProps`, `listeners` (+178 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `renderWithProviders()` connect `render.tsx` to `loadingAnimation.ts`, `App.tsx`, `data/portfolio.ts`, `Hero.tsx`, `KonamiDebug.tsx`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `sectionIds`, `LoadingAnimationDebugProps`, `SectionHeadingProps` to the rest of the system?**
  _183 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `2026-08-30` be split into smaller, more focused modules?**
  _Cohesion score 0.043478260869565216 - nodes in this community are weakly interconnected._
- **Should `render.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10707070707070707 - nodes in this community are weakly interconnected._
