# Agent Operating Rules

## Project baseline

- Use React, strict TypeScript, Vite, Mantine, Motion (`motion/react`), and i18next.
- Use npm and commit `package-lock.json`. Support Node 24 only unless the maintainers deliberately revise the toolchain policy.
- The current UI is the standard Vite demo. Do not introduce portfolio content or a new visual design until a task explicitly requests it.
- Keep user-facing copy in i18next resources. Supported languages are `ru` and `en`; preserve identical keys and use `en` as fallback.
- Respect the user's reduced-motion preference through Motion configuration.

## Component structure

- Every new React component must be created in its own `.tsx` file.
- Every component must have a colocated test file with the same base name, for example `Button.tsx` and `Button.test.tsx`.
- Do not add new component implementations to `App.tsx` or other unrelated component files.
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

- Use the `grilling` skill when the user asks to "grill me" or requests stress-testing of a plan, decision, or idea.
- Ask the full current decision frontier in numbered rounds, state a recommended answer for each question, and wait for the user's answers before continuing.
- Do not act on the plan until the decision tree has been fully explored and shared understanding is confirmed.
