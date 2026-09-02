# Agent Operating Rules

## Project baseline

- Use React, strict TypeScript, Vite, Mantine, Motion (`motion/react`), and i18next.
- Use npm and commit `package-lock.json`. Support Node 24 only unless the maintainers deliberately revise the toolchain policy.
- The current UI is a portfolio application. Preserve its routes, visual language, responsive behavior, animations, i18next behavior, and reduced-motion support unless a task explicitly requests a product change.
- Keep user-facing copy in i18next resources. Supported languages are `ru` and `en`; preserve identical keys and use `en` as fallback.
- Respect the user's reduced-motion preference through Motion configuration.

## FSD architecture and component structure

- Organize `src` by Feature-Sliced Design layers: `app → pages → widgets → features → entities → shared`.
- Dependencies may point only toward layers to the right (`app` may use every layer; `shared` must not import application-specific code). Cross-slice imports must use the slice's public `index.ts`; imports inside a slice remain relative.
- Use kebab-case slice names and PascalCase component names. Every page and component owns a folder following `ui/ComponentName/ComponentName.tsx`, `ComponentName.module.css`, and `__tests__/ComponentName.behavior.test.tsx` where applicable. Hooks live in an own-named folder under `model` with colocated tests.
- Each slice exposes an explicit public `index.ts`. Keep providers, bootstrap, and the thin root `App` in `app`; route content belongs to `pages`.
- Every React component must be created in its own `.tsx` file. Do not add component implementations to `App.tsx` or unrelated files.
- Component styles must be colocated CSS Modules (`ComponentName.module.css` or the nearest owning slice module). `src/index.css` is reserved for tokens, reset, document-level HTML/body rules, selection, and global state such as `body.is-loading`. Never put component selectors, component media queries, or component keyframes in `index.css`; do not create new shared global CSS files.
- Every test file must contain exactly one `it` or `test` declaration. Split scenarios into separate behavior-named files under the owning slice's `__tests__`; put shared fixtures and setup in files without test declarations.

- Keep components focused; extract hooks, types, and data into separate files when they have independent responsibilities.
- When refactoring an existing component, preserve its behavior and update its colocated test.

## Quality gate

- Run `npm run validate` before handing off a material change. It covers formatting, linting, type checking, coverage, and production build.
- Keep global coverage at or above 80% for the configured application sources. Add or update tests with behaviour changes.
- The pre-commit hook runs lint-staged only. Do not bypass hooks or commit generated `dist`, `coverage`, or secrets.

## Change logs and decisions

- Log every material change in `agent-logs/YYYY/MM/YYYY-MM-DD.md` using English and `HH:mm +03:00` timestamps.
- Every daily entry must state its type, tags, summary, affected areas, rationale, and verification result.
- Update `agent-logs/README.md`, the relevant monthly index, and `agent-logs/DECISIONS.md` in the same change session. Global decisions receive IDs in the `DEC-YYYYMMDD-NN` format and are recorded in the daily log; indexes only link and summarize them.
- To find history, start with `agent-logs/README.md` or `agent-logs/DECISIONS.md`, then follow the targeted link or tag. Do not scan all daily logs by default.

## Graphify

- If `graphify-out/graph.json` exists and the task asks about the codebase, query it before rebuilding the graph.
- Run a full Graphify analysis after establishing a new project structure and an incremental update after material structural changes.
- Commit only `graphify-out/graph.json` and `graphify-out/GRAPH_REPORT.md`; keep generated HTML, caches, absolute paths, and temporary files ignored.
- Treat Graphify refreshes as derived artifacts: record the source change in the normal log entry, but do not create recursive log-only updates.

## Grilling

- Always use the `grilling` skill when operating in Plan Mode, before acting on the plan.
- Use the `grilling` skill when the user asks to "grill me" or requests stress-testing of a plan, decision, or idea.
- Ask the full current decision frontier in numbered rounds, state a recommended answer for each question, and wait for the user's answers before continuing.
- Do not act on the plan until the decision tree has been fully explored and shared understanding is confirmed.
