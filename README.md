# Dmitry Fursov — Software Developer

Одностраничное портфолио на React, TypeScript и Vite. Профиль объединяет web, mobile, Unity, Unigine, XR/AR и realtime-разработку. Контент основан на предоставленных материалах; неизвестные метрики, URL и проектные материалы не добавляются.

## Локальная разработка

```bash
npm ci
npm run dev
```

Перед публикацией запускайте `npm run validate` (format, lint, typecheck, coverage и production build).

## Языки

Сайт поддерживает `ru` и `en`, автоматически определяет язык браузера, сохраняет ручной выбор и использует английский fallback.

## Project assets

Карточки используют честные CSS/HUD placeholders, а подтверждённые внешние медиа подключаются из публичных источников. Локальные материалы добавляйте по папкам:

```text
public/projects/<slug>/cover.webp
public/projects/<slug>/01.webp
public/projects/<slug>/02.webp
public/projects/<slug>/preview.webm
```

Каталог включает проекты `mychess-web`, `mobile-rts`, `rosatom`, `mychessvr`, `cat-citten`, `industrial-vr`, `aptive-education`, `neo4-sightline`, `fuel-cms`, `drilling-vr`, `vulkan-verse`, `korobka`, `doors-cms`, `earth-dragons`, `villa-krim`, `authors-wine-villa-krim`, `chudo-projector`, `ar-coloring`, `goons-balatroon`, `chudobooks`, `chudo-floor`, `photon-fps` и `quest-room`.

CV ожидается по адресу `public/cv/Dmitry-Fursov-Unity-Developer-CV.pdf`.

## GitHub Pages

Vite настроен с `base: '/'` для user-site `FursiK911/fursik.github.io`. Workflow находится в `.github/workflows/deploy.yml` и запускается вручную (`workflow_dispatch`), потому что текущий репозиторий приватный и Pages должен быть включён в настройках GitHub перед публикацией.

После включения Pages: Actions → Deploy to GitHub Pages → Run workflow.

## Portfolio research

The external project research index is available at
[docs/portfolio-research-sources.md](docs/portfolio-research-sources.md). It
lists the source directory and all currently available project research files
for AI agents and Graphify discovery.
