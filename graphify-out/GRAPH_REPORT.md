# Graph Report - . (2026-08-27)

## Corpus Check

- cluster-only mode — file stats not available

## Summary

- 255 nodes · 331 edges · 26 communities (16 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `c0156c57`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- devDependencies
- render.tsx
- scripts
- data/portfolio.ts
- compilerOptions
- compilerOptions
- dependencies
- i18n.ts
- useKonamiCode
- AI Agent Change Log Index
- Quality Validation
- Build Job
- tsconfig.json
- Application Entry Point
- Graphify Policy
- Project Baseline
- Social Icon Set
- React TypeScript Vite Template
- sectionIds
- Hero Image
- React Logo
- Vite Logo

## God Nodes (most connected - your core abstractions)

1. `compilerOptions` - 18 edges
2. `renderWithProviders()` - 17 edges
3. `compilerOptions` - 15 edges
4. `scripts` - 14 edges
5. `SectionHeading()` - 7 edges
6. `changeLanguage()` - 5 edges
7. `useKonamiCode()` - 5 edges
8. `filters` - 5 edges
9. `App()` - 4 edges
10. `useClipboard()` - 4 edges

## Surprising Connections (you probably didn't know these)

- `Application Entry Point` --references--> `Vite Favicon` [EXTRACTED]
  index.html → public/favicon.svg
- `Quality Validation` --conceptually_related_to--> `Quality Gate` [INFERRED]
  .github/workflows/quality.yml → AGENTS.md
- `Change Log Governance` --implements--> `Global Decision Index` [INFERRED]
  AGENTS.md → agent-logs/DECISIONS.md
- `Change Log Governance` --implements--> `AI Agent Change Log Index` [INFERRED]
  AGENTS.md → agent-logs/README.md
- `ProjectFiltersProps` --references--> `filters` [EXTRACTED]
  src/components/projects/ProjectFilters.tsx → src/components/projects/project-filter-options.ts

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Portfolio Scaffold Governance Flow** — agents_project_baseline, agents_quality_gate, agents_change_log_governance, agents_graphify_policy, agent_logs_2026_08_2026_08_25_scaffold_initialization [INFERRED 0.85]
- **GitHub Pages Delivery Pipeline** — github_workflows_deploy_build_job, github_workflows_deploy_deploy_job, github_workflows_deploy_github_pages_deployment [EXTRACTED 1.00]

## Communities (26 total, 10 thin omitted)

### Community 0 - "devDependencies"

Cohesion: 0.04
Nodes (49): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-jsx-a11y, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, husky (+41 more)

### Community 1 - "render.tsx"

Cohesion: 0.10
Nodes (16): Hero(), Footer(), Header(), HeaderProps, sectionIds, LoadingScreen(), LoadingScreenProps, SectionHeading() (+8 more)

### Community 2 - "scripts"

Cohesion: 0.07
Nodes (26): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+18 more)

### Community 3 - "data/portfolio.ts"

Cohesion: 0.16
Nodes (16): filters, ProjectCard(), ProjectCardProps, ProjectDetails(), ProjectDetailsProps, ProjectFilters(), ProjectFiltersProps, Projects() (+8 more)

### Community 4 - "compilerOptions"

Cohesion: 0.08
Nodes (24): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly (+16 more)

### Community 5 - "compilerOptions"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 6 - "dependencies"

Cohesion: 0.12
Nodes (17): i18next, i18next-browser-languagedetector, @mantine/core, @mantine/hooks, motion, dependencies, i18next, i18next-browser-languagedetector (+9 more)

### Community 7 - "i18n.ts"

Cohesion: 0.18
Nodes (9): App(), useActiveSection(), INTRO_STORAGE_KEY, useIntro(), changeLanguage(), LANGUAGE_STORAGE_KEY, resources, SupportedLanguage (+1 more)

### Community 8 - "useKonamiCode"

Cohesion: 0.52
Nodes (3): KonamiDebug(), KONAMI_CODE, useKonamiCode()

### Community 9 - "AI Agent Change Log Index"

Cohesion: 0.50
Nodes (5): Portfolio Scaffold Initialization, August 2026 Change Log Index, Global Decision Index, AI Agent Change Log Index, Change Log Governance

### Community 10 - "Quality Validation"

Cohesion: 0.67
Nodes (3): Quality Gate, Quality Validation, Validate Job

### Community 11 - "Build Job"

Cohesion: 1.00
Nodes (3): Build Job, Deploy Job, GitHub Pages Deployment

## Knowledge Gaps

- **112 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+107 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _112 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `render.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09672830725462304 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
