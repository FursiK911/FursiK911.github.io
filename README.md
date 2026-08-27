# Dmitry Fursov — Unity / VR / XR Developer

Одностраничное портфолио на React, TypeScript и Vite. Контент основан на предоставленном CV; неизвестные метрики, URL и проектные материалы не добавляются.

## Локальная разработка

```bash
npm ci
npm run dev
```

Перед публикацией запускайте `npm run validate` (format, lint, typecheck, coverage и production build).

## Языки

Сайт поддерживает `ru` и `en`, автоматически определяет язык браузера, сохраняет ручной выбор и использует английский fallback.

## Project assets

Сейчас карточки используют честные CSS/HUD placeholders. Когда появятся реальные материалы, добавляйте их по папкам:

```text
public/projects/<slug>/cover.webp
public/projects/<slug>/01.webp
public/projects/<slug>/02.webp
public/projects/<slug>/preview.webm
```

Используемые slug: `mychessvr`, `industrial-vr`, `drilling-vr`, `rosatom`, `mobile-rts`, `earth-dragons`, `vulkan-verse`, `mychess-web`. Отсутствующие файлы не должны добавляться в data-массив до проверки.

CV ожидается по адресу `public/cv/Dmitry-Fursov-Unity-Developer-CV.pdf`.

## GitHub Pages

Vite настроен с `base: '/'` для user-site `FursiK911/fursik.github.io`. Workflow находится в `.github/workflows/deploy.yml` и запускается вручную (`workflow_dispatch`), потому что текущий репозиторий приватный и Pages должен быть включён в настройках GitHub перед публикацией.

После включения Pages: Actions → Deploy to GitHub Pages → Run workflow.
