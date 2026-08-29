# Graph Report - fursik.github.io (2026-08-29)

## Corpus Check

- 64 files · ~12,432 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 282 nodes · 407 edges · 28 communities (19 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `05fa845a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- devDependencies
- render.tsx
- scripts
- compilerOptions
- compilerOptions
- dependencies
- Projects.tsx
- i18n.ts
- 2026-08-27
- App.tsx
- useKonamiCode
- AI Agent Change Log Index
- Hero.tsx
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

1. `compilerOptions` - 18 edges
2. `renderWithProviders()` - 17 edges
3. `2026-08-27` - 16 edges
4. `compilerOptions` - 15 edges
5. `scripts` - 14 edges
6. `Project` - 8 edges
7. `SectionHeading()` - 7 edges
8. `App()` - 6 edges
9. `projects` - 6 edges
10. `filters` - 5 edges

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

## Communities (28 total, 9 thin omitted)

### Community 0 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 1 - "render.tsx"

Cohesion: 0.19
Nodes (9): SectionHeading(), SectionHeadingProps, Projects(), About(), Contact(), Experience(), Skills(), renderWithProviders() (+1 more)

### Community 2 - "scripts"

Cohesion: 0.07
Nodes (26): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+18 more)

### Community 3 - "compilerOptions"

Cohesion: 0.08
Nodes (24): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly (+16 more)

### Community 4 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 5 - "dependencies"

Cohesion: 0.12
Nodes (17): i18next, i18next-browser-languagedetector, @mantine/core, @mantine/hooks, motion, dependencies, i18next, i18next-browser-languagedetector (+9 more)

### Community 6 - "Projects.tsx"

Cohesion: 0.21
Nodes (15): filters, ProjectCard(), ProjectCardProps, ProjectDetails(), ProjectDetailsProps, ProjectFilters(), ProjectFiltersProps, cvUrl (+7 more)

### Community 7 - "i18n.ts"

Cohesion: 0.43
Nodes (5): changeLanguage(), LANGUAGE_STORAGE_KEY, resources, SupportedLanguage, supportedLanguages

### Community 8 - "2026-08-27"

Cohesion: 0.12
Nodes (16): 01:50 +03:00 — [remote] Confirm the private GitHub destination, 01:55 +03:00 — [ci] Keep Pages deployment manual for the private repository, 02:24 +03:00 — [portfolio] Implement the Dmitry Fursov portfolio, 02:30 +03:00 — [verification] Complete the portfolio quality gate, 14:23 +03:00 — [governance] Add the grilling skill to project agent rules, 14:30 +03:00 — [refactor] Split monolithic React components, 14:54 +03:00 — [tooling] Configure Mantine Codex integration, 15:49 +03:00 — [mantine] Adopt Mantine selectively for interactive behavior (+8 more)

### Community 9 - "App.tsx"

Cohesion: 0.13
Nodes (12): App(), sectionIds, Footer(), LoadingScreen(), LoadingScreenProps, useActiveSection(), INTRO_STORAGE_KEY, useIntro() (+4 more)

### Community 10 - "useKonamiCode"

Cohesion: 0.52
Nodes (3): KonamiDebug(), KONAMI_CODE, useKonamiCode()

### Community 11 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (5): Portfolio Scaffold Initialization, August 2026 Change Log Index, Global Decision Index, AI Agent Change Log Index, Change Log Governance

### Community 12 - "Hero.tsx"

Cohesion: 0.22
Nodes (7): Hero(), HeroProps, Header(), HeaderProps, sectionIds, TypingText(), TypingTextProps

### Community 13 - "Quality Validation"

Cohesion: 0.67
Nodes (3): Quality Gate, Quality Validation, Validate Job

### Community 14 - "Build Job"

Cohesion: 1.00
Nodes (3): Build Job, Deploy Job, GitHub Pages Deployment

## Knowledge Gaps

- **128 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+123 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _128 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
