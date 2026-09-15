---
name: git-commit-workflow
description: Commit repository changes when the user asks an agent to commit, save, or push work. Derive the message from the actual diff and recent agent logs, preserve unrelated changes, run the project checks, and push only after explicit authorization.
---

# Git commit workflow

Use this skill for requests to commit, save, or push the current repository work. It defines the project's commit workflow; it does not grant permission to mutate the repository or remote by itself.

## Scope and safety

- Inspect `git status --short`, the unstaged diff, the staged diff, the current branch, and its upstream before changing anything.
- Preserve user-owned or unrelated changes. If the request explicitly covers all current changes, include every visible tracked and untracked path except ignored files, while still stopping for secrets or credentials (`.env`, private keys, tokens, credential files, or suspicious binary/config files).
- Never use destructive history or filesystem commands. Never use `git reset --hard`, `git checkout --`, force-push, or `git commit --no-verify` for this workflow.
- A request to commit does not imply permission to push. Push only when the user explicitly asks to push, publish, or send the commit to the remote.
- Do not commit `dist`, `coverage`, temporary files, caches, generated HTML, or other ignored artifacts unless the repository rules explicitly track them. Keep only the Graphify files allowed by `AGENTS.md`.

## Understand the change

1. Read `agent-logs/README.md` or the relevant monthly index first, then inspect only the relevant daily log entries. Do not scan every daily log by default.
2. Compare the log entries with `git diff --stat`, `git diff`, and `git diff --cached`. Use the actual changed behavior as the source of truth; use logs to recover intent, rationale, and verification.
3. Summarize the change in a short subject using Conventional Commit style: `<type>: <imperative summary>`. Prefer `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, or `ci`; choose the type that best describes the dominant user-visible or technical change.
4. Add a body only when it clarifies multiple related areas, important behavior, or verification context. Mention the main outcome and the meaningful subsystems, not a file dump. Keep the message in English unless the user explicitly requests another language; preserve identifiers and product names exactly.
5. If the diff contains unrelated work, ask the user to choose between a scoped commit and an all-current-changes commit. If the user explicitly requested all current changes, one commit is acceptable; split into thematic commits only when hooks or resource limits make one commit unreliable.

## Verify before committing

- Run `git diff --check`.
- For material application changes, run `npm run validate` as required by the repository rules. Report the exact failing stage, test, coverage threshold, timeout, or environment/resource failure; never call a non-zero validation run successful.
- If formatting or lint-staged needs to modify files, inspect the resulting diff and stage those intended changes again.
- Run the repository pre-commit hook through the normal `git commit` path. Do not bypass hooks.
- If a large staged set causes `lint-staged`, Prettier, or ESLint to be killed by resource limits, run the formatter/linter sequentially, then split the staged changes into coherent thematic commits and retry the normal hook. Preserve the same overall user scope and explain the split.
- Before staging, scan the candidate paths for secrets and verify that ignored build outputs and caches are not being added.

## Stage, commit, and push

- For an explicitly all-inclusive request, use `git add -A` only after the safety scan and diff review. Otherwise stage only paths belonging to the requested scope.
- Check the staged summary with `git diff --cached --stat` and `git status --short` before committing.
- Commit with the derived subject/body. Confirm the resulting hash and working-tree state.
- Push only after explicit user authorization. Confirm the remote, branch, and upstream first; use a normal non-force push.
- After pushing, verify `git status -sb` and report the commit hash, message, remote branch, validation result, and any known non-blocking failures.

## Expected handoff

The final response should be concise and in Russian for this project. State:

- what was committed and the commit hash;
- whether it was pushed, including the remote branch;
- whether the working tree is clean;
- which checks passed or failed, with exact reasons for failures.
