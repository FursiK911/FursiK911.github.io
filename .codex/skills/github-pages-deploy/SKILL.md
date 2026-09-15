---
name: github-pages-deploy
description: Deploy or verify this portfolio's GitHub Pages user-site when a request concerns publishing, redeploying, or checking production release status. Do not use for ordinary local development.
---

# GitHub Pages deploy

Deploy this repository's portfolio at `https://fursik911.github.io/`.

## Release contract

- Release branch: `main`.
- Repository: `FursiK911/FursiK911.github.io`.
- Vite must retain `base: '/'`; this is a GitHub Pages user-site, not a project-site subpath.
- `.github/workflows/deploy.yml` deploys every push to `main` and supports manual `workflow_dispatch`.
- Never use a force push for a release.

## Before a release

1. Confirm the requested scope and that the user authorized any commit, push, or manual workflow run. Read-only inspection does not require that authorization.
2. Inspect the current branch, `origin`, and working tree. Preserve unrelated or user-owned changes; stage only files belonging to the requested release.
3. Fetch `origin` and ensure `main` can be pushed normally. Resolve divergence by reporting it rather than rewriting remote history.
4. Run `npm run build` and `npm run verify:production-assets`. Run `npm run validate` for a material change and report its exact outcome.

## Publish and verify

1. Commit only the authorized release changes and push `main` to `origin` without `--force`.
2. Wait for the matching `Deploy to GitHub Pages` workflow run to complete successfully. It builds `dist` and deploys with GitHub Actions.
3. Open the root URL and verify that the main document and generated static bundles load. When the release targets a visual or asset defect, also verify the affected UI and browser console.
4. Record material deployment changes in `agent-logs` and its required indexes/decision record under the project rules.

## Quality workflow

`Quality` and `Deploy to GitHub Pages` are independent workflows. `Quality` runs `npm run validate`; Pages deployment runs the production build only. A successful deploy does not make a failed Quality run successful.

If validation fails, identify the exact failing command and tests from the current output. Do not claim that validation passed, and do not alter unrelated tests merely to obtain a green deployment unless the user requested those fixes.
