# Global Decision Index

| DEC-20260907-11 | Use locally bundled Unbounded Variable as the shared display font for large headings, with neutral letter spacing; keep body copy and mono UI labels unchanged. | ui, typography, fonts, responsive | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-11) |

| DEC-20260907-10 | Use the page background behind the Hero portrait instead of a separate panel fill. | ui, hero, portrait, css | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-10) |

| DEC-20260907-09 | Keep the project detail `section.hero` free of a border and separate panel background. | ui, project-page, hero, css | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-09) |

| DEC-20260907-08 | Project media images use centered `contain` sizing with a maximum height of `80dvh` in previews and detail pages. | ui, projects, modal, media, responsive | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-08) |

| DEC-20260907-06 | Keep `villa-krim` as the Virtual Sommelier slug, use `authors-wine-villa-krim` for the separate Author’s Wine case, and expose only source-confirmed APKPure links/icons and labeled release metrics. | projects, villa-krim, ar, mobile, media, metrics, i18n | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-06) |

| DEC-20260907-05 | Use `neo4-sightline` as the stable project slug and present the public-facing title as `Neo4 Web / Interior Sightline`; keep Brf Celsius figures explicitly labeled as client-context metrics rather than Neo4 product metrics. | projects, neo4, sightline, realtime-3d, content | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-05) |

| DEC-20260907-01 | Use the paint-ready Hero image as the clone handoff boundary, crossfade the clone for 100ms, then enable portrait decoration and Glitch.js. | ui, loading, animation, hero, glitch, accessibility | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-01) |

| DEC-20260906-01 | Keep one persistent branded mock shell around all project media; render actual media and fallback copy only inside its inset screen in previews and detail pages. | ui, projects, media, gallery, responsive | [2026-09-06](2026/09/2026-09-06.md#decision-dec-20260906-01) |

| DEC-20260906-02 | Use an explicit fade → measured portrait transfer → page-reveal state machine; keep the document locked through reveal, and use a direct fade for skip. | ui, loading, animation, hero, hud, accessibility, responsive | [2026-09-06](2026/09/2026-09-06.md#decision-dec-20260906-02) |

| DEC-20260904-02 | Drive the HUD wave from the fractional document position with transform scale and one cancellable rAF loop; keep accessibility state and localized text in React. | ui, hud, animation, performance, accessibility | [2026-09-04](2026/09/2026-09-04.md#decision-dec-20260904-02) |

| DEC-20260904-03 | Use typed project actions and explicit YouTube media so previews show only decisive actions while full project pages retain all public links. | projects, modal, routing, media, i18n | [2026-09-04](2026/09/2026-09-04.md#decision-dec-20260904-03) |

| DEC-20260904-01 | Use a desktop-only, 30-segment cyan HUD scrollbar with click, drag, and keyboard scrolling; preserve native scrolling and mobile system scrollbars. | ui, scroll, hud, accessibility, responsive | [2026-09-04](2026/09/2026-09-04.md#decision-dec-20260904-01) |

| DEC-20260907-03 | Treat AR Chudoboxes and Chudoboxes EKO as one case; separate installs from media views and use historical app assets plus the official EKO promo. | portfolio, content, i18n, media, metrics | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-03) |

| DEC-20260903-02 | Group source declarations into owner-adjacent lowercase `types`, `config`, `data`, `utils`, and `styles` folders while preserving CSS mechanics and slice public APIs. | architecture, fsd, role-folders, types, config, data, utils, styles | [2026-09-03](2026/09/2026-09-03.md#decision-dec-20260903-02) |

| DEC-20260903-01 | Use role-based source separation with single-purpose components/hooks, grouped related types/config/data, one file per named helper, preserved **tests**, and no structural validator. | architecture, fsd, separation, hooks, types, data, config, testing | [2026-09-03](2026/09/2026-09-03.md#decision-dec-20260903-01) |

| DEC-20260902-20 | Use strict FSD layers, public slice APIs, one test declaration per file, and colocated CSS Modules with document-only `index.css`. | architecture, fsd, tests, css | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-20) |

| DEC-20260902-19 | Render the final Education Timeline axis segment only through the center of the centered final bullet, never below it. | ui, education, timeline, mantine, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-19) |

| DEC-20260902-18 | Center Education Timeline bullets within their card rows rather than shifting card bodies, preserving the 12px axis gap and stable expanded-card layout. | ui, education, timeline, responsive, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-18) |

| DEC-20260902-17 | Center Education cards vertically against their Timeline bullets, use a 12px axis gap on desktop, and keep the same 12px gap with all cards on the mobile right side. | ui, education, timeline, responsive, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-17) |

| DEC-20260902-16 | Use `align-items: center` for each Education metadata row; align desktop card content toward the central axis and restore shared start alignment for all cards on mobile. | ui, education, timeline, accessibility, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-16) |

| DEC-20260902-15 | Keep the Experience runner desktop-only, preserve its route progress while desktop geometry changes, and restart it from the beginning after returning from the mobile layout. | ui, experience, timeline, gsap, animation, responsive, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-15) |

| DEC-20260902-14 | Center Education Timeline detail labels and values horizontally within their metadata columns while preserving the existing grid and mobile fallback. | ui, education, timeline, accessibility, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-14) |

| DEC-20260902-13 | Present SOS COMPUTER coursework as grouped professional competencies: algorithmic and procedural programming, data structures and file handling; raster/vector fundamentals, Photoshop image production, CorelDRAW illustration and print-ready asset preparation. | education, courses, i18n, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-13) |

| DEC-20260902-12 | Use var(--cyan) for project titles rendered in expanded experience entries. | ui, experience, css | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-12) |

| DEC-20260902-11 | Keep project translation keys shared between the portfolio and experience sections, and provide Russian-localized values in the ru project resource so both views stay consistent. | i18n, experience, projects | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-11) |

| DEC-20260902-10 | Render direct `Timeline.Item` children with invisible `opposite` spacers so Mantine emits `data-opposite` and positions the cyan Education axis at the horizontal center of the centered Timeline area. | ui, education, timeline, mantine, responsive, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-10) |

| DEC-20260902-09 | Use 560px desktop Hero height, Projects/Проекты section naming, multiplayer/МУЛЬТИПЛЕЕР taxonomy, separate Chudobooks and AR Chudoboxes records, and remove two invalid projects from all public project and experience data. | ui, hero, portfolio, projects, multiplayer, i18n, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-09) |

| DEC-20260902-08 | Use Mantine's centered three-column Timeline grid with an invisible opposite spacer, place year badges inside cards, start the newest card on the left, alternate desktop cards, and force all mobile cards to the right of the axis. | ui, education, timeline, mantine, responsive, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-08) |

| DEC-20260902-07 | Present only the year visually while retaining normalized full dates for semantic `dateTime`; center the cyan Mantine axis, alternate desktop cards, stack mobile cards on the right, and preserve Cisco account codes only as non-rendered localized metadata. | ui, education, timeline, mantine, cyan, responsive, accessibility, i18n | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-07) |

| DEC-20260902-06 | Use a Mantine vertical Education Timeline ordered from 2023 to 2015, with eight localized events, independent expandable details, degree/course icon distinction, and the Education section before Contact. | ui, education, timeline, mantine, i18n, accessibility | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-06) |

| DEC-20260902-05 | Make Profile/#top the first Header navigation item, localized as Profile/Профиль, and include it in active-section tracking. | ui, header, navigation, profile, i18n | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-05) |

| DEC-20260902-04 | Remove About entirely, place only its four facts under Hero CTAs, and render them in a two-column HUD grid on desktop and mobile. | ui, hero, profile, about, i18n, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-04) |

| DEC-20260902-03 | Place the embedded Directions grid between Hero and About, and keep About top padding at zero. | ui, profile, directions, about, responsive | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-03) |

| DEC-20260902-02 | Use a new Profile component with About content below Hero, a two-phase entrance, no separate About heading or navigation item, and `#top` as the only profile anchor. | ui, profile, about, navigation, animation | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-02) |

| DEC-20260902-01 | Keep the loading animation speed debug component and its supporting configuration in the project, but remove it from the production application composition. | ui, loading, debugging | [2026-09-02](2026/09/2026-09-02.md#decision-dec-20260902-01) |

| DEC-20260901-07 | Stretch the Directions content column and use `margin-top: auto` to anchor each tools row to the bottom of its grid cell. | ui, directions, responsive | [2026-09-01](2026/09/2026-09-01.md#anchored-direction-tools-to-card-bottoms) |

| DEC-20260901-06 | Gate metric animation on the Directions entrance lifecycle: inactive counters render zero, Motion completion activates them, and reduced-motion mode activates them without waiting for a visual transition. | ui, directions, metric, animation, accessibility | [2026-09-01](2026/09/2026-09-01.md#decision-dec-20260901-06) |

| DEC-20260901-05 | Gate Directions entrance with the same `entered` and `reducedMotion` state as Hero, using a short fade-and-rise transition after the Hero stagger. | ui, directions, hero, animation, accessibility | [2026-09-01](2026/09/2026-09-01.md#synchronized-directions-entrance-with-hero) |

| DEC-20260901-04 | Use `MetricCounter` with `value`, optional `suffix`, and `label`; animate from zero on mount with NumberFlow while respecting reduced-motion preferences, and keep layout positioning in consuming components. | ui, component, animation, accessibility | [2026-09-01](2026/09/2026-09-01.md#decision-dec-20260901-04) |

| DEC-20260901-03 | Use four static Directions cards in a 2×2 grid with manually maintained minimum metrics, overlapping project attribution, and four key tools per category; keep project and skill taxonomies unchanged. | ui, directions, portfolio, i18n, responsive | [2026-09-01](2026/09/2026-09-01.md#decision-dec-20260901-03) |

| DEC-20260901-02 | Use `/privacy/` and `/terms/` as localized SPA routes with a shared legal layout and GitHub Pages 404 fallback. | legal, routing, github-pages, i18n | [2026-09-01](2026/09/2026-09-01.md#decision-dec-20260901-02) |

| DEC-20260901-01 | Use cyan (`var(--cyan)`) for Experience Log accents and omit residential location data from public profile content. | ui, experience, privacy | [2026-09-01](2026/09/2026-09-01.md#decision-dec-20260901-01) |

| DEC-20260831-10 | Use `over 6 years` in English and «более чем 6-летний опыт» in Russian for the public experience statement. | content, i18n, copy | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-10) |

| DEC-20260831-09 | Use `Software Developer` as the primary public positioning, expose six capability directions as a post-Hero block, keep all 22 projects visible with single-category filters, and preserve the existing PDF CV path. | portfolio, content, i18n, directions, projects, experience, seo | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-09) |

| DEC-20260831-08 | Use a vertical two-line header brand, viewport-centered navigation, and a compact primary resume CTA while removing social links from the header; keep the fifth navigation item as Stack/Стек. | ui, header, navigation, responsive, accessibility | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-08) |

| DEC-20260831-07 | Use separate Glitch.js targets for the persistent hologram and manual burst stack; bursts last 180–320 ms after a randomized 1–4 second pause. | ui, animation, glitch, hologram, timing | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-07) |

| DEC-20260831-05 | Use equal screen-space milestone positions with a 50 px edge inset, then measure their Y coordinates from the SVG path. | ui, timeline, svg, geometry, responsive | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-05) |

| DEC-20260831-04 | Use manual Glitch.js bursts with randomized 1–4 second pauses and 140–280 ms active windows, cleaning all timers on teardown. | ui, animation, glitch, timing, testing | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-04) |

| DEC-20260831-03 | Use one measured SVG scene for desktop milestones/cards and a fixed-size HTML overlay for the circular runner. | ui, timeline, svg, gsap, animation, responsive | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-03) |

| DEC-20260831-02 | Use the portrait wrapper as the Glitch.js target with the exact continuously active BROKEN HOLO stack, demo-like overflow, and decorative generated clones. | ui, animation, glitch, accessibility, testing | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-02) |

| DEC-20260831-01 | Use GSAP MotionPathPlugin for the continuous timeline runner and guard it when SVG geometry APIs are unavailable in jsdom. | ui, timeline, svg, gsap, animation, testing | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-01) |

| DEC-20260830-14 | Use a responsive dotted SVG wave with a looping terminal-green runner and no hover thickness overlay for the career timeline axis. | ui, timeline, svg, animation, accessibility | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-14) |

| DEC-20260830-13 | Use a data-driven career timeline from earliest to current/Future, reverse-order expanded details, and local-logo/initials fallback behavior. | ui, timeline, responsive, accessibility | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-13) |

This is an index, not a second copy of the change log. Follow the source link for context and verification.

| DEC-20260907-12 | Keep left-side education card headings and controls right-aligned, but render expanded details as normal left-aligned content with the standard left border and padding. | ui, education, timeline, css, responsive | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-12) |

| DEC-20260907-02 | Keep the portrait transfer clone fixed at the Hero destination through handoff and start the underlying scan/glitch at crossfade start, removing the clone only after 100ms. | ui, loading, portrait-handoff, glitch, animation | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-02) |

| DEC-20260907-01 | Use the actual Hero image paint-ready signal as the portrait handoff boundary, then crossfade the clone before enabling final portrait decoration. | ui, loading, portrait-handoff, animation | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-01) |

| ID              | Decision                                                                                                                                                                                            | Tags                                      | Source                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| DEC-20260830-11 | Reuse the existing CV PDF for a localized, mobile-visible resume link in the header: `резюме` in Russian and `CV` in English.                                                                       | ui, navigation, responsive, i18n          | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-11)               |
| DEC-20260830-12 | Use Tabler `IconDownload` and the shared `button button-primary` style for all localized resume download buttons.                                                                                   | ui, navigation, i18n, icons               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-12)               |
| DEC-20260830-10 | Use Glitch.js in continuous always-active mode for direct comparison with the official demo.                                                                                                        | ui, animation, dependency                 | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-10)               |
| DEC-20260830-01 | Use a shared speed store (0 = paused) and configuration object for all loading-screen timings.                                                                                                      | ui, animation, configuration              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-01)               |
| DEC-20260830-02 | Use preallocated DOM glitch layers and randomized recursive timeouts for the Hero portrait; disable bursts for reduced motion.                                                                      | ui, animation, accessibility              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-02)               |
| DEC-20260830-03 | Guarantee a normal-strength multi-frame first portrait glitch within 700–1200 ms before randomized later bursts.                                                                                    | ui, animation, accessibility              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-03)               |
| DEC-20260830-04 | Keep the portrait base immutable during glitches; render localized slice/block overlays and remove RGB separation.                                                                                  | ui, animation, accessibility              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-04)               |
| DEC-20260830-05 | Use block-only portrait corruption with a conservative total frame-area budget of 5–9%, 10–17%, or 18–25% by level.                                                                                 | ui, animation, accessibility              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-05)               |
| DEC-20260830-06 | Treat total corrupted-block area as the primary glitch intensity control, with conservative 5–9%, 10–17%, and 18–25% budgets.                                                                       | ui, animation, accessibility              | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-06)               |
| DEC-20260830-07 | Use independent photo-cell flicker on responsive 10×10/5×5 grids for portrait corruption, with 5–25% active cells and 1200–1800ms bursts.                                                           | ui, animation, accessibility, responsive  | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-07)               |
| DEC-20260830-08 | Limit simultaneous cellular portrait corruption to 2–10% for a subtler effect.                                                                                                                      | ui, animation                             | [2026-08-30](2026/08/2026-08-30.md#reduced-active-cellular-glitch-density) |
| DEC-20260830-09 | Use Glitch.js with manually scheduled RGB split, slice, and low-frequency shake bursts on the Hero profile image.                                                                                   | ui, animation, accessibility, dependency  | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-09)               |
| DEC-20260829-03 | Temporarily replay the loader every refresh with a 2× timeline scale for visual review.                                                                                                             | ui, animation, testing                    | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-03)               |
| DEC-20260829-02 | Drive the loader from one timeline with gated media readiness and completion persistence.                                                                                                           | ui, animation, testing                    | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-02)               |
| DEC-20260829-01 | Always use the `grilling` skill in Plan Mode before acting on a plan.                                                                                                                               | skills, grilling                          | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-01)               |
| DEC-20260827-05 | Require one React component per file with a colocated test; App is composition only.                                                                                                                | architecture, tests                       | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-05)               |
| DEC-20260827-06 | Pin Mantine MCP to `@mantine/mcp-server@9.5.2` to match the project.                                                                                                                                | mantine, tooling                          | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-06)               |
| DEC-20260827-07 | Use Mantine selectively for behavior-rich controls and theme configuration.                                                                                                                         | mantine, accessibility                    | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-07)               |
| DEC-20260827-04 | Use the `grilling` skill for explicit review and stress-testing requests.                                                                                                                           | skills, grilling                          | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-04)               |
| DEC-20260827-03 | Use automatic RU/EN detection with English fallback and a persisted manual toggle.                                                                                                                  | portfolio, i18n                           | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-03)               |
| DEC-20260827-02 | Keep Pages deployment manual while the repository remains private and Pages is unavailable.                                                                                                         | github, pages, privacy                    | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-02)               |
| DEC-20260827-01 | Use the existing FursiK911 private repository and keep it private.                                                                                                                                  | github, privacy                           | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-01)               |
| DEC-20260825-01 | Initialize a Vite React portfolio scaffold with npm and Node 24.                                                                                                                                    | scaffold, tooling                         | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-01)               |
| DEC-20260825-02 | Keep the Vite demo; defer portfolio UI and content.                                                                                                                                                 | scope, ui                                 | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-02)               |
| DEC-20260825-03 | Use i18next for `ru`/`en`, browser detection, persisted manual choice, and `ru` fallback.                                                                                                           | i18n, accessibility                       | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-03)               |
| DEC-20260825-04 | Commit queryable Graphify data and report only.                                                                                                                                                     | graphify, governance                      | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-04)               |
| DEC-20260831-06 | Use shared ActionLink and ActionButton components with explicit CTA variants to keep primary hover colors stable and prevent context-specific CSS conflicts.                                        | ui, components, navigation, accessibility | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-06)               |
| DEC-20260907-04 | Populate AR Coloring with source-grounded Apple screenshots, store/archive links, and iOS/Android product metrics; exclude related-product metrics and technologies marked unverified for this app. | projects, ar, media, i18n, research       | [2026-09-07](2026/09/2026-09-07.md#ar-coloring-project-content)            |
