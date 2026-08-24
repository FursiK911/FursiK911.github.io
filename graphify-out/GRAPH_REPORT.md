# Graph Report - . (2026-08-25)

## Corpus Check

- Corpus is ~4,188 words - fits in a single context window. You may not need a graph.

## Summary

- 179 nodes · 170 edges · 44 communities (14 shown, 30 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)

- TypeScript app config
- Build configuration
- Runtime dependencies
- Npm developer commands
- Application and i18n
- Package metadata
- Development dependencies
- Agent change history
- Quality gate
- GitHub Pages delivery
- TypeScript project refs
- Prettier ESLint config
- ESLint base config
- Accessibility lint plugin
- React Hooks lint plugin
- React Refresh lint plugin
- Browser globals
- Git hook tooling
- HTML entry point
- DOM test environment
- Staged file linting
- Legacy Vite linter
- Jest DOM matchers
- React testing library
- User event testing
- Node type definitions
- React DOM type definitions
- TypeScript compiler
- TypeScript ESLint
- Vite bundler
- Vite React plugin
- Vitest runner
- V8 coverage provider
- Graphify governance
- Project baseline
- Social icon assets
- Vite template docs
- Hero image asset
- React logo asset
- Vite logo asset

## God Nodes (most connected - your core abstractions)

1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 14 edges
4. `engines` - 3 edges
5. `lint-staged` - 3 edges
6. `*.{ts,tsx,js,jsx}` - 3 edges
7. `App()` - 3 edges
8. `renderWithProviders()` - 3 edges
9. `lib` - 3 edges
10. `types` - 3 edges

## Surprising Connections (you probably didn't know these)

- `Application Entry Point` --references--> `Vite Favicon` [EXTRACTED]
  index.html → public/favicon.svg
- `Quality Validation` --conceptually_related_to--> `Quality Gate` [INFERRED]
  .github/workflows/quality.yml → AGENTS.md
- `Change Log Governance` --implements--> `Global Decision Index` [INFERRED]
  AGENTS.md → agent-logs/DECISIONS.md
- `Change Log Governance` --implements--> `AI Agent Change Log Index` [INFERRED]
  AGENTS.md → agent-logs/README.md
- `August 2026 Change Log Index` --references--> `Portfolio Scaffold Initialization` [EXTRACTED]
  agent-logs/2026/08/README.md → agent-logs/2026/08/2026-08-25.md

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Portfolio Scaffold Governance Flow** — agents_project_baseline, agents_quality_gate, agents_change_log_governance, agents_graphify_policy, agent_logs_2026_08_2026_08_25_scaffold_initialization [INFERRED 0.85]
- **GitHub Pages Delivery Pipeline** — github_workflows_deploy_build_job, github_workflows_deploy_deploy_job, github_workflows_deploy_github_pages_deployment [EXTRACTED 1.00]

## Communities (44 total, 30 thin omitted)

### Community 0 - "TypeScript app config"

Cohesion: 0.08
Nodes (24): DOM, src, vite/client, vitest/globals, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly (+16 more)

### Community 1 - "Build configuration"

Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 2 - "Runtime dependencies"

Cohesion: 0.12
Nodes (17): i18next, i18next-browser-languagedetector, @mantine/core, @mantine/hooks, motion, dependencies, i18next, i18next-browser-languagedetector (+9 more)

### Community 3 - "Npm developer commands"

Cohesion: 0.14
Nodes (14): scripts, build, dev, format, format:check, lint, lint:fix, prepare (+6 more)

### Community 4 - "Application and i18n"

Cohesion: 0.24
Nodes (8): App(), changeLanguage(), LANGUAGE_STORAGE_KEY, resources, SupportedLanguage, supportedLanguages, renderWithProviders(), TestProviders()

### Community 5 - "Package metadata"

Cohesion: 0.15
Nodes (12): engines, node, npm, lint-staged, *.{json,md,yml,yaml,css,html}, *.{ts,tsx,js,jsx}, name, private (+4 more)

### Community 6 - "Development dependencies"

Cohesion: 0.29
Nodes (7): eslint, devDependencies, eslint, prettier, @types/react, prettier, @types/react

### Community 7 - "Agent change history"

Cohesion: 0.50
Nodes (5): Portfolio Scaffold Initialization, August 2026 Change Log Index, Global Decision Index, AI Agent Change Log Index, Change Log Governance

### Community 8 - "Quality gate"

Cohesion: 0.67
Nodes (3): Quality Gate, Quality Validation, Validate Job

### Community 9 - "GitHub Pages delivery"

Cohesion: 1.00
Nodes (3): Build Job, Deploy Job, GitHub Pages Deployment

## Knowledge Gaps

- **104 isolated node(s):** `name`, `private`, `version`, `type`, `node` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development dependencies` to `Package metadata`, `Prettier ESLint config`, `ESLint base config`, `Accessibility lint plugin`, `React Hooks lint plugin`, `React Refresh lint plugin`, `Browser globals`, `Git hook tooling`, `DOM test environment`, `Staged file linting`, `Legacy Vite linter`, `Jest DOM matchers`, `React testing library`, `User event testing`, `Node type definitions`, `React DOM type definitions`, `TypeScript compiler`, `TypeScript ESLint`, `Vite bundler`, `Vite React plugin`, `Vitest runner`, `V8 coverage provider`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime dependencies` to `Package metadata`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `scripts` connect `Npm developer commands` to `Package metadata`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript app config` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Build configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Runtime dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
