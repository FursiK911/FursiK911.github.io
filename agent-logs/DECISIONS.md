# Global Decision Index

| DEC-20260915-05 | Store the GitHub Pages deployment contract as a versioned repository-local skill and require agents to read it before release-related tasks. | skills, github-pages, deployment, agents, quality | [2026-09-15](2026/09/2026-09-15.md#decision-dec-20260915-05) |

No new global decision; mobile contact alignment follows DEC-20260915-04.

Mobile burger menu alignment follows the existing responsive layout target in DEC-20260915-04.

Current application behavior is the source of truth for stale project tests; gallery tests use minimal typed fixtures to avoid coupling to portfolio catalog order.

Mobile burger icon centering remains scoped to the existing responsive header breakpoint and preserves Mantine Burger geometry.

| DEC-20260915-04 | At mobile widths, use the 414×896 iPhone XR layout as the visual target: Hero actions use a 1+2 grid; the loader query may occupy two lines; Experience begins with the future CTA on the left and then alternates current-to-earliest cards around a centered rail; Education begins on the left; desktop timeline behavior is unchanged. | mobile, iphone-xr, responsive, header, hero, experience, education, contact, loading | [2026-09-15](2026/09/2026-09-15.md#decision-dec-20260915-04) |

| DEC-20260915-03 | Keep LiveCam's global class rules in a colocated ordinary CSS file and require its container, video, and telemetry selectors in the production stylesheet verification. | github-pages, live-cam, css, vite, production, testing | [2026-09-15](2026/09/2026-09-15.md#decision-dec-20260915-03) |

| DEC-20260915-02 | Keep global slice styles as ordinary colocated CSS files and reserve CSS Modules for selectors consumed through module exports; validate the production stylesheet and asset-path casing before deployment. | github-pages, css, vite, production, assets, testing | [2026-09-15](2026/09/2026-09-15.md#decision-dec-20260915-02) |

| DEC-20260915-01 | Use `FursiK911/FursiK911.github.io` as the GitHub Pages user-site repository, with GitHub Actions as its source; automatically deploy pushes to `main` and retain `workflow_dispatch` for intentional manual redeployments. | github, github-pages, ci, deployment, automation | [2026-09-15](2026/09/2026-09-15.md#decision-dec-20260915-01) |

| DEC-20260914-19 | Keep `Mirror` in Game Development; remove `WebAssembly`, `Blender`, `Pixel Streaming`, `Android`, `iOS`, `Image Tracking`, and `Cylindrical Marker` from the public Stack inventory. | tech-stack, skills, game-development, mobile, xr | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-19) |

| DEC-20260914-18 | Replace the Stack inventory with the recruiter-facing `Web`, `Game Development`, `Mobile`, and `XR` groups; show all 49 curated, nonduplicated technologies at once, and retain English group labels in both locales. | tech-stack, skills, recruiter, web, game-development, mobile, xr, i18n, responsive | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-18) |

| DEC-20260914-17 | Keep separate product narratives for AR Coloring, AR Раскраски, Chudobooks, and AR Chudoboxes; use concise marketing teasers on cards, expanded product stories on pages, and professional feature-based contribution points in both locales. | projects, ar-coloring, ar-coloring-zebra, chudobooks, ar-chudaboxes, marketing-copy, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-17) |

| DEC-20260914-16 | Use the ordered homepage Stats tags `React`, `Vue`, `TypeScript`, `Next.js`, `Nuxt.js`, and `Mantine` for Web; `Unity`, `Unreal Engine`, and `Godot` for Game Engines; `React Native` and `Flutter` for Mobile; and `OpenXR`, `SteamVR`, `XR Interaction Toolkit`, `Meta XR SDK`, and `Vuforia` for XR. | homepage, stats, directions, technology-tags, web, game-engines, mobile, xr | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-16) |

| DEC-20260914-15 | Use `AR` and `Vuforia` in the Chudo Projector technology stack and include `AR` in its card tags; do not use the incorrect `Euphoria` label. | projects, chudo-projector, ar, vuforia, technology-stack, card-tags | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-15) |

| DEC-20260914-14 | Use `IconDownload`, `IconBriefcase`, and `IconMessageCircle` for Hero CTAs, plus contextual `IconMail` and `IconBrandTelegram` icons for Contact links; keep existing labels, destinations, and localization unchanged. | ui, hero, contact, cta, icons, accessibility, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-14) |

| DEC-20260914-13 | Keep `bIig8_xRzUM` third in Chudo Projector media, after `0bvWX_7WkKU` and `ZmHUsOxiHXA`, with the three image items following the video group and remaining as card previews. | projects, chudo-projector, youtube, media, card-preview | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-13) |

| DEC-20260914-12 | Omit the unconfirmed `Euphoria` reference from Chudo Projector and describe the room-building flow as using more than 20 drawings in both RU and EN copy. | projects, chudo-projector, marketing-copy, projection, photon, open-cv, android, windows, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-12) |

| DEC-20260914-11 | Show Chudo Projector as a 2020–2021 product, keep a concise product teaser on the card, use an expanded three-mode product narrative on the project page, and expose Unity, C#, Euphoria, Photon, OpenCV, Android, Windows, and Projection in the page technology stack. | projects, chudo-projector, marketing-copy, projection, open-cv, photon, euphoria, android, windows, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-11) |

| DEC-20260914-10 | Keep the PNG logo family as the only active site icon source and remove the superseded SVG favicon once no references remain. | favicon, cleanup, assets | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-10) |

| DEC-20260914-09 | Regenerate every browser/PWA/iOS icon derivative whenever the canonical `public/logo-site.png` asset is updated, without changing the metadata routing or adding maskable icons. | favicon, pwa, ios, icons, assets | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-09) |

| DEC-20260914-08 | Use `public/logo-site.png` as the canonical site mark, derive standard transparent PNG sizes for browser/PWA/iOS surfaces, and declare only `purpose: "any"` because the source mark is not padded for maskable cropping. | favicon, pwa, ios, icons, assets | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-08) |

| DEC-20260914-07 | Keep the Projects section header limited to its title, with the project circuit as the only optional secondary content when explicitly enabled. | projects, ui, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-07) |

| DEC-20260914-06 | Keep work-experience overview cards limited to the period, company, position, and identity mark; retain project descriptions and technology tags only inside the selected-entry details modal. | experience, timeline, cards, responsive, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-06) |

| DEC-20260914-05 | Represent the cylindrical AR tracking technology as the English stack label `Cylindrical Marker` for both Villa Krim applications, alongside Android and iOS. | projects, villa-krim, authors-wine-villa-krim, ios, ar, vuforia | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-05) |

| DEC-20260914-04 | Keep `screen_1.png` through `screen_3.png` after the two Chudo Projector videos in gallery order and use all three image items as card previews. | projects, chudo-projector, screenshots, media | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-04) |

| DEC-20260914-03 | Keep `0bvWX_7WkKU` first and `ZmHUsOxiHXA` second in Chudo Projector media; do not attach these videos to related Chudoboxes projects. | projects, chudo-projector, youtube, media | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-03) |

| DEC-20260914-02 | Keep `Villa Krim` as the brand name, use `Авторское вино Villa Krim` in Russian, show `2019 — 2020` for both projects, remove their metrics sections, and distinguish the Virtual Sommelier quiz from the Author’s Wine AR video and text experience. | projects, villa-krim, authors-wine-villa-krim, ar, marketing-copy, i18n | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-02) |

| DEC-20260914-01 | Keep `dDpAbPiHIEw` in AR Coloring media and `L1wo7UmOsr4` in Chudobooks media; do not cross-link the videos between projects. | projects, ar-coloring, chudobooks, youtube, media | [2026-09-14](2026/09/2026-09-14.md#decision-dec-20260914-01) |

| DEC-20260913-16 | Present Vulcan Verse as a 2025 PC/Windows MMORPG product case with product-led RU/EN copy, a 100K+ unique players metric, a retained gameplay video, and a disabled client-download action for the closed project; remove Habr Career and the third contribution point. | projects, vulcan-verse, mmorpg, nft, pc, marketing-copy, availability | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-16) |

| DEC-20260913-15 | Represent Frieze Viewing Room as `React Native` in card tags and expose `React Native` in the shared project technology filter; retain `React` for projects that use React on the web. | projects, frieze, react-native, cards, filters | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-15) |

| DEC-20260913-14 | Keep `CIBXdduloJw` and `ep4Af8g-NEw` in AR Coloring media; remove `FElU9mRhxNg`. | projects, ar-coloring, youtube, media | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-14) |

| DEC-20260913-13 | Keep the three supplied YouTube videos as AR Coloring media items, ordered before the existing screenshots; do not attach them to related projects. | projects, ar-coloring, youtube, media | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-13) |

| DEC-20260913-12 | Open one selected work-experience record in an accessible modal from its timeline card; retain the future-project contact link and do not add cross-record navigation or URL state. | experience, timeline, modal, accessibility | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-12) |

| DEC-20260913-11 | Keep `aptive-education`, `korobka`, and `chudo-floor` in the project data and add them to the same public-showcase hidden-ID set; derive direction counts and technology filters from the remaining visible cards. | projects, cards, filters, temporary | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-11) |

| DEC-20260913-10 | Use concise product-focused MyChessVR card copy without the three locations; use expanded RU/EN project-page copy covering immersive hand interaction, Classic/Rapid/Blitz formats, three difficulty levels, chess clocks, dozens of puzzle types, local Stockfish coaching analysis, three locations and SteamVR availability. | projects, mychessvr, cards, marketing-copy, steamvr, stockfish, i18n | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-10) |

| DEC-20260913-09 | Loop the desktop experience runner continuously from 3% to 97% of its path with a zero repeat delay; retain the 12-second forward movement, geometry, responsive behavior, and reduced-motion handling. | ui, experience, timeline, gsap, animation | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-09) |

| DEC-20260913-01 | Describe the drilling project as a VR drilling training simulator for PC / Windows, label its period as 2024, include SteamVR in the technology stack, and use product-oriented card/full-page copy with professional contribution statements. | projects, drilling, vr, copy, marketing, steamvr, netcode, final-ik | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-01) |

| DEC-20260913-08 | Describe the Neo4 integration contribution as synchronization between browser input, the Unreal Engine application and interface state; avoid infrastructure-specific wording such as “remote 3D instance”. | projects, neo4, unreal-engine, browser-input, synchronization, contributions | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-08) |

| DEC-20260913-07 | Show only the `10K+` Google Play downloads metric in Frieze achievements; keep FGP in project metadata and contribution context instead of a separate achievement card. | projects, frieze, achievements, downloads, metrics | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-07) |
| DEC-20260913-05 | Keep only `10K+` Google Play downloads and `2021 / FGP` in Frieze achievements; omit platform, stack, AR-platform and gallery-count cards, and remove the medium filter from the feature description. | projects, frieze, mobile, achievements, marketing-copy, metrics | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-05) |

| DEC-20260913-04 | Position Neo4 Web / Interior Sightline as a browser-accessible Unreal Engine 3D property platform, keep the live demo as the primary project action, use five ordered local WebP screens, and omit obsolete client-context metrics from the case page. | projects, neo4, sightline, unreal-engine, pixel-streaming, webp, marketing-copy, contributions | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-04) |

| DEC-20260913-03 | Use marketing-oriented Frieze RU/EN project copy, professional feature-based contributions, visible `10K+` Google Play downloads, no App Store install estimate, and a single-year rendering for equal project period endpoints. | projects, frieze, mobile, marketing-copy, metrics, i18n | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-03) |

| DEC-20260913-02 | Keep only the first and third MyChess Mobile contribution points, and describe the first point with Flutter without naming Dart. | projects, mychess, mobile, contributions, i18n | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-02) |

| DEC-20260913-01 | Present MyChess Mobile as the Flutter Android/iOS edition of the same first Russian chess ecosystem, retaining the shared product capabilities, rounded adoption metrics, Stockfish analysis, social and fair-play features, and registry status. | projects, mychess, mobile, cards, copy, i18n | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-01) |

| DEC-20260912-22 | Reverse MyChess Mobile media by renaming the five existing image files only; keep code references and gallery/card configuration unchanged. | projects, mychess, mobile, media, renaming | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-22) |

| DEC-20260912-21 | Keep the existing Earth of Dragons YouTube video first, append the three supplied videos, and keep image media after the video group. | projects, earth-dragons, youtube, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-21) |

| DEC-20260912-20 | Use the five current RuStore screenshots for MyChess Mobile as local 1242×2208 quality-85 WebP assets while preserving existing paths and order. | projects, mychess, mobile, rustore, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-20) |

| DEC-20260912-19 | Keep AR Coloring and AR Раскраски as separate cases, use the five RuStore screenshots for the reskin, and use the supplied RuStore URL as the active external action. | projects, ar-coloring, rustore, zebra, reskin, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-19) |

| DEC-20260912-18 | Use existing Chudobooks `screen_1.webp` and `screen_2.webp` assets for gallery and card previews in order; no source PNG/JPG files were available for a new conversion. | projects, chudobooks, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-18) |

| DEC-20260912-17 | Rename only the AR Chudoboxes media directory and asset paths to `ar-chudoboxes`; retain project id, route, and filenames. | projects, ar-chudoboxes, media, paths | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-17) |

| DEC-20260912-16 | Use preview indexes 0–4 for both Villa Krim cards so cards cycle through logo 1–2 and screens 1–3 in gallery order. | projects, villa-krim, authors-wine-villa-krim, cards, logos, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-16) |

| DEC-20260912-15 | Store both Villa Krim galleries as logo 1–2 followed by screens 1–3 in WebP, removing the supplied PNG originals. | projects, villa-krim, authors-wine-villa-krim, logos, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-15) |

| DEC-20260912-13 | Use the approved social-infrastructure wording for MyChess web point six; preserve all other content and VR data. | projects, mychess, frontend, social, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-13) |

| DEC-20260912-12 | Use competition-scenario wording for the MyChess tournament contribution and preserve all other points and VR data. | projects, mychess, frontend, tournaments, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-12) |

| DEC-20260912-11 | Keep YouTube before images in the full gallery, but order card/image media as logo, gameplay 1–3, then App Store screenshots 01–08; convert PNGs to quality-85 WebP at original dimensions and retain source PNGs. | projects, earth-dragons, app-store, gameplay, logo, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-11) |

| DEC-20260912-07 | Describe the MyChess AI feature as a game mode with AI champions modeled after famous chess players; preserve Mobile and VR data. | projects, mychess, frontend, ai, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-07) |

| DEC-20260912-06 | Use “Обеспечил” / “Ensured” for the MyChess real-time gameplay contribution point; preserve Mobile and VR data. | projects, mychess, frontend, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-06) |

| DEC-20260912-05 | Combine chess modes, the in-game rating system, matchmaking and rating leaderboards into one contribution point; preserve Mobile and VR data. | projects, mychess, frontend, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-05) |

| DEC-20260912-04 | Emphasize stable and convenient real-time gameplay, with the responsive interface as supporting detail; preserve Mobile and VR data. | projects, mychess, frontend, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-04) |

| DEC-20260912-03 | Use the approved Russian wording for the MyChess web contribution and its English translation; preserve Mobile and VR data. | projects, mychess, frontend, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-03) |

| DEC-20260912-02 | Describe the MyChess web contribution as complete frontend and layout implementation across desktop and mobile pages; preserve Mobile and VR data. | projects, mychess, frontend, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-02) |

| DEC-20260912-10 | Use exactly the eight NL App Store screenshots for app ID `1563999015` as ordered local WebP media, remove the seven previously connected project photos, and retain the existing YouTube video. | projects, earth-dragons, app-store, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-10) |

| DEC-20260912-09 | Store drilling training photos as `screen_1.webp` through `screen_9.webp`, encoded at quality 85 while preserving the PNG originals; display them after the existing YouTube media in numeric screen order. | projects, drilling, vr, screenshots, webp, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-09) |

| DEC-20260912-08 | Render project-card and primary-gallery photos over a darkened `cover` copy of the same image while keeping the foreground uncropped with `contain`; exclude thumbnails, video, fullscreen, and the legacy gallery. | projects, cards, gallery, images, mobile, responsive | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-08) |

| DEC-20260912-07 | Store Neo4 source screens as `screen_1.webp` through `screen_5.webp` at 1920×1080, using direct resizing with quality 90 and deleting the explicitly selected PNG originals; preserve the source array order for gallery display. | projects, neo4, screenshots, webp, full-hd, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-07) |

| DEC-20260912-06 | Store six unique Google Play screenshots as `screen-1.webp` through `screen-6.webp` at 1080×1920, centering the 887×1920 source content on the target canvas to avoid distortion. | projects, frieze, mobile, screenshots, webp, full-hd, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-06) |

| DEC-20260912-05 | Use the supplied current Frieze App Store and Google Play listings (`id1582362408` / `com.frieze.friezeapp`) as active mobile-app links. | projects, frieze, mobile, app-store, google-play, links | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-05) |

| DEC-20260912-04 | Use `https://apm.locka.com/demo/apm-nacka/building` as Neo4's primary `live` action while retaining historical product and launch references as external links. | projects, neo4, demo, external-link | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-04) |

| DEC-20260912-03 | Position MyChess as the first Russian chess ecosystem; use approved RU/EN card and project-page copy with 100,000+ users, 600,000+ games, Stockfish, social and fair-play capabilities, and Russian software registry status while leaving exact metric cards and personal contributions unchanged. | projects, mychess, cards, copy, i18n | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-03) |

| DEC-20260912-02 | Keep the historical Frieze Viewing Room App Store action active, keep the removed Google Play listing unavailable, and use all six supplied mobile images in the gallery with the first three as card previews. | projects, frieze, mobile, app-store, media | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-02) |

| DEC-20260910-21 | Keep the six requested project definitions intact and exclude their IDs only from the public Projects widget; derive direction counts, technology options, and visible cards from the remaining showcase projects so hidden entries do not appear through filters. | projects, cards, filters, temporary | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-21) |

| DEC-20260910-20 | Group Training, Exam and Observer into one SARiDU achievements metric while keeping Single + Co-op as the separate interaction-mode metric. | projects, saridu, metrics, achievements, i18n | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-20) |

| DEC-20260910-19 | Use a web-edition MyChess teaser focused on real-player rated matches, AI champions, chess puzzles, tournaments with more than 2,000 simultaneous players, communities, multiple chess modes and Stockfish; describe the project page as a product overview and keep the contribution list feature-focused without stack names. | projects, mychess, cards, copy, contributions, i18n | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-19) |

| DEC-20260910-17 | Use Unigine → VR card tags, PC / Astra Linux platform metadata, product metrics for scenarios/equipment/modes, supplied VK links instead of Rosatom annual reports, and active resume-style bilingual SARiDU contribution copy. | projects, saridu, unigine, astra-linux, steamvr, vk, metrics, i18n | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-17) |

| DEC-20260910-16 | Use logo → profile → remaining images for MyChess Web previews, video → logo → profile → remaining images for its galleries, five shared Web/Mobile platform metrics including 50+ tournaments and 2,000+ participants, owner-confirmed AI names including Magnus Carlsen, and a Russian provenance brief; preserve links and historical contribution technology mentions while removing the three technologies from the public stack. | projects, mychess, media, metrics, i18n, documentation |

| DEC-20260910-15 | Enrich the SARiDU project card and IT Tab experience phase from the read-only source repository with Unigine/.NET/C# stack, custom UDP networking, VOIP, HTC VIVE, training modes, defect scenarios, result recording, and Type A/Type M/pneumatic-system coverage; omit Oculus/OpenXR/Meta Quest and internal network details. | projects, saridu, unigine, dotnet, networking, voip, htc-vive, research | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-15) |

| DEC-20260910-14 | Use all available project images in the homepage card previews; normalize horizontal MyChess web images to 1920×1080 and preserve MyChess Mobile portrait composition at 1080×1920, using WebP quality 85. | projects, mychess, media, webp, homepage | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-14) |

| DEC-20260910-13 | Hide scrollbar rendering only on the two project thumbnail containers with `scrollbar-width`, `-ms-overflow-style`, and WebKit scrollbar rules; preserve `overflow-x: auto` and leave section navigation scrollbars unchanged. | projects, gallery, responsive, accessibility, css | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-13) |

| DEC-20260910-11 | Use the same three platform metrics for MyChess and MyChess Mobile, display all three in each project results block, and mention the figures in both localized product descriptions. | projects, mychess, mobile, metrics, i18n | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-11) |

| DEC-20260910-09 | Keep project-card metadata limited to preview, title, teaser, and tags. Use equal grid padding and gaps: 24 px on desktop and 18 px on mobile. | projects, cards, layout, responsive | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-09) |

| DEC-20260910-08 | Normalize existing SARiDU photos by centered 16:9 cropping and Lanczos resizing to 1920×1080, retaining filenames and JPEG format. | images, photos, saridu, resize, crop, full-hd | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-08) |

| DEC-20260910-07 | Keep fullscreen synchronized with the main project gallery: show arrows and a counter without thumbnails, use a centered 16:9 video poster/player with click-to-load playback, and stop the shared video state on navigation or close. | projects, gallery, fullscreen, video, keyboard, touch, accessibility | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-07) |

| DEC-20260910-06 | Keep project media ordering as a derived video-first view array without mutating source data; use a shared 16:9 stage with `cover` for gallery and thumbnails, and reserve `contain` fullscreen viewing for the full project page. | projects, gallery, media, responsive, fullscreen, accessibility | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-06) |

| DEC-20260910-05 | Represent Frieze Viewing Room only as a mobile application with the user's React Native Developer contribution at FGP; exclude the broader web platform and mixed media. | projects, frieze, fgp, react-native, mobile, content | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-05) |

| DEC-20260910-04 | Present every project as a data-driven card with one of three directions, curated tags, approved preview images only, a localized missing-image icon, direct case links, and reduced-motion-safe preview rotation. | projects, cards, filters, media, motion, accessibility | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-04) |

| DEC-20260910-03 | Use `Unity Developer` for the two projects currently using `soloUnity` and add bilingual end-to-end release ownership achievements to both project cases. | projects, unity, mychessvr, drilling, i18n | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-03) |

| DEC-20260910-02 | Use the official Auchan Earth of Dragons campaign identity, connect the mobile AR app with its physical cards/comic, and expose only the dossier-supported media and facts while excluding unverified scale, backend, and platform claims. | projects, earth-dragons, auchan, ar, mobile, media, research | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-02) |

| DEC-20260910-01 | Rename the Rosatom project card to the official SARiDU actuator VR trainer identity, use only source-supported product facts, and keep unverified engine, headset, multiplayer, VOIP, and video claims out of the case. | projects, vr, saridu, rosatom, media, research | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-01) |

| DEC-20260909-12 | Treat the external repository as a shared Chudoboxes/AR Coloring-family Unity codebase; expose only capabilities confirmed in the relevant AR book, content delivery, QR, audio/video, and localization paths in the Chudobooks case. | projects, chudobooks, unity, source-analysis | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-12) |

| DEC-20260909-11 | Bound desktop project quick views to `min(75vw, 1280px)`, keep the existing 900px/600px breakpoints, and use balanced display typography with `word-break: keep-all` for project titles so words never split across lines. | projects, modal, typography, responsive, css | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-11) |

| DEC-20260909-10 | Use the Mobile icon brightness/drop-shadow and scan-line effect for all Directions cards, remove direction-specific Web/Game Engines/XR icon animation layers, and apply the existing Game Engines pointer X/Y and rotation springs to every icon while preserving timing and reduced-motion behavior. | ui, directions, animation, pointer, accessibility, responsive | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-10) |

| DEC-20260909-09 | Use confirmed frontend technologies and implementation areas for MyChess achievements; keep backend architecture out of the personal stack, preserve MyChess Mobile as a separate Flutter/Dart case, and apply the closed-site tooltip to its Website action. | projects, mychess, mobile, flutter, frontend, i18n, unavailable | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-09) |

| DEC-20260909-08 | Keep `projectCircuitGameEnabled` set to `false` in the Projects config; render the existing localized intro copy while the feature remains available in source for a later enablement. | projects, mini-game, feature-flag, i18n | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-08) |

| DEC-20260909-07 | Keep the Project Circuit game as a local React feature with three deterministic 5×2 puzzles, English HUD labels in both locales, localized accessibility copy, CSS-only mobile disclosure, and a locked solved state until RESET or NEW ROUTE. | projects, mini-game, interaction, accessibility, responsive, i18n | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-07) |

| DEC-20260909-06 | Keep the quick-view focused on media, title, description, and role; use a 55/45 media-to-content grid on desktop, stack below 900px, and switch to a full-screen dialog below 600px. Keep extended project facts on the dedicated case page. | projects, modal, media, responsive, accessibility | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-06) |

| DEC-20260909-05 | Constrain only `.site-header-inner` with `min(calc(100% - gutter), calc(1440px - gutter))`; keep the fixed `.site-header` viewport-wide and preserve its height, background, navigation, and mobile behavior. | ui, header, layout, responsive, css | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-05) |

| DEC-20260909-04 | Keep unavailable-action overlays translucent via an RGBA background while setting the overlay and info icon opacity to 1, including a solid background fill for the icon glyph so its signal stays legible. | ui, projects, unavailable, accessibility, overlay | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-04) |

| DEC-20260909-03 | Use the existing 1440px app shell with 32px desktop gutters (40px tablet, 14px mobile), make all home page/header/footer rails use the available width, keep the Hero at 0.4fr / 0.6fr, and compact the desktop Experience SVG scene to `clamp(440px, 30vw, 500px)` while preserving its GSAP and mobile behavior. | ui, layout, spacing, hero, live-cam, experience, timeline, responsive | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-03) |

| DEC-20260909-02 | Render the LiveCam tracker at `opacity: 0.45` for three seconds after a randomized 5–10 second hidden interval measured from fade completion; use 300 ms opacity transitions and preserve reduced-motion suppression. | ui, hero, live-cam, hud, animation, accessibility | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-02) |

| DEC-20260909-01 | Allocate the desktop Hero grid as 0.75fr / 1.25fr so LiveCam is the dominant right-hand panel; preserve its 16:9 ratio and leave the 900px responsive breakpoint unchanged. | ui, hero, live-cam, desktop, responsive, css | [2026-09-09](2026/09/2026-09-09.md#decision-dec-20260909-01) |

| DEC-20260908-10 | Give the desktop LiveCam the larger 1.15fr Hero column with a 24–48px gap, and use Mantine Blockquote with compact typography for the photo overlay. | ui, hero, live-cam, contact, mantine, desktop | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-10) |

| DEC-20260908-09 | Keep the desktop LiveCam at 100% of the right Hero column, render `contact.title` as a full-width opaque bottom overlay inside the photo frame, and leave mobile layout unchanged until a dedicated iteration. | ui, hero, live-cam, contact, portrait, desktop, responsive | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-09) |

| DEC-20260908-08 | Keep section-heading eyebrow labels English-only while giving intro title rows their own localized i18n keys. | i18n, section-heading, intro, localization | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-08) |

| DEC-20260908-07 | Model unavailable project actions with localized reason keys in project and experience data; render them as disabled buttons under a translucent info overlay with a hover/focus tooltip, while leaving still-working actions available. | projects, actions, unavailable, tooltip, accessibility | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-07) |

| DEC-20260908-06 | Keep MyChess and MyChess Mobile as separate portfolio records, assign research-backed product metrics to the relevant record, and defer MyChessVR content until its dedicated research pass. | projects, mychess, mobile, flutter, metrics | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-06) |

| DEC-20260908-05 | Keep hover light as a separate opacity-controlled layer that fades at its last pointer position; give every direction icon a one-time entrance pulse and repeat it only with the existing 6.5-second per-card HUD scan. | ui, directions, animation, accessibility | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-05) |

| DEC-20260908-04 | Keep the LiveCam terminal in the vertically centered right-side zone at 28% width; generate every character delay independently in the 48–84 ms range and wait 3–4 seconds between entries. | ui, hero, live-cam, terminal, animation, responsive | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-04) |

| DEC-20260908-03 | Model the live-camera HUD as an intentionally degraded but functional stream: independent metrics use stable-width cells, the terminal keeps severity-coded diagnostics, and reduced motion stays static. | ui, hero, live-cam, hud, telemetry, animation, accessibility | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-03) |

| DEC-20260908-02 | Use a viewport-activated, muted loop video with a two-second minimum connect state, signal-loss reconnect backoff, viewport pause/resume, and a static no-download reduced-motion fallback for the Hero live-cam HUD. | ui, hero, live-cam, video, hud, animation, accessibility | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-02) |

| DEC-20260907-16 | Use a 4px vertical gap between footer social, navigation, and action links while preserving their 28px minimum hit areas. | ui, footer, css | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-16) |

| DEC-20260907-15 | Use vertical center alignment for the desktop contact-grid columns and start alignment for its mobile one-column layout. | ui, contact, responsive, css | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-15) |

| DEC-20260907-14 | Keep the contact grid focused on its heading and direct contact actions; omit the localized descriptive paragraph and its dedicated styling. | ui, contact, i18n, css | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-14) |

| DEC-20260907-13 | Keep the portfolio footer limited to primary brand, contact, navigation, resume, and legal actions; remove the redundant bottom strip and its dedicated localization keys. | ui, footer, css, i18n | [2026-09-07](2026/09/2026-09-07.md#decision-dec-20260907-13) |

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

| ID              | Decision                                                                                                                                                                                                                                | Tags                                       | Source                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| DEC-20260913-06 | Use the shared MyChessVR image sequence `Location Library → gameplay 1–5 → Stockfish Analysis → Chess Puzzles → Park → Cafe` for both the project gallery and card previews, while keeping the YouTube video first in the full gallery. | projects, mychessvr, gallery, cards, media | [2026-09-13](2026/09/2026-09-13.md#decision-dec-20260913-06)               |
| DEC-20260910-12 | Use the requested YouTube video as the first MyChessVR gallery item and replace all ten supplied 16:9 PNGs with 1920×1080 lossy WebP assets encoded at quality 85.                                                                      | projects, mychessvr, youtube, images, webp | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-12)               |
| DEC-20260910-10 | Store project images as WebP assets with quality 85 and unchanged source dimensions; keep YouTube thumbnails and video embeds external.                                                                                                 | projects, images, webp, local-assets       | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-10)               |
| DEC-20260910-01 | Present the portfolio case under `Vulkan Verse`; retain Tartarus as a location/experience and describe only the contributor-specific mechanics and client-server work.                                                                  | projects, vulkan-verse, tartarus, content  | [2026-09-10](2026/09/2026-09-10.md#vulkan-verse-project-case-enrichment)   |
| DEC-20260830-11 | Reuse the existing CV PDF for a localized, mobile-visible resume link in the header: `резюме` in Russian and `CV` in English.                                                                                                           | ui, navigation, responsive, i18n           | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-11)               |
| DEC-20260830-12 | Use Tabler `IconDownload` and the shared `button button-primary` style for all localized resume download buttons.                                                                                                                       | ui, navigation, i18n, icons                | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-12)               |
| DEC-20260830-10 | Use Glitch.js in continuous always-active mode for direct comparison with the official demo.                                                                                                                                            | ui, animation, dependency                  | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-10)               |
| DEC-20260830-01 | Use a shared speed store (0 = paused) and configuration object for all loading-screen timings.                                                                                                                                          | ui, animation, configuration               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-01)               |
| DEC-20260830-02 | Use preallocated DOM glitch layers and randomized recursive timeouts for the Hero portrait; disable bursts for reduced motion.                                                                                                          | ui, animation, accessibility               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-02)               |
| DEC-20260830-03 | Guarantee a normal-strength multi-frame first portrait glitch within 700–1200 ms before randomized later bursts.                                                                                                                        | ui, animation, accessibility               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-03)               |
| DEC-20260830-04 | Keep the portrait base immutable during glitches; render localized slice/block overlays and remove RGB separation.                                                                                                                      | ui, animation, accessibility               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-04)               |
| DEC-20260830-05 | Use block-only portrait corruption with a conservative total frame-area budget of 5–9%, 10–17%, or 18–25% by level.                                                                                                                     | ui, animation, accessibility               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-05)               |
| DEC-20260830-06 | Treat total corrupted-block area as the primary glitch intensity control, with conservative 5–9%, 10–17%, and 18–25% budgets.                                                                                                           | ui, animation, accessibility               | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-06)               |
| DEC-20260830-07 | Use independent photo-cell flicker on responsive 10×10/5×5 grids for portrait corruption, with 5–25% active cells and 1200–1800ms bursts.                                                                                               | ui, animation, accessibility, responsive   | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-07)               |
| DEC-20260830-08 | Limit simultaneous cellular portrait corruption to 2–10% for a subtler effect.                                                                                                                                                          | ui, animation                              | [2026-08-30](2026/08/2026-08-30.md#reduced-active-cellular-glitch-density) |
| DEC-20260830-09 | Use Glitch.js with manually scheduled RGB split, slice, and low-frequency shake bursts on the Hero profile image.                                                                                                                       | ui, animation, accessibility, dependency   | [2026-08-30](2026/08/2026-08-30.md#decision-dec-20260830-09)               |
| DEC-20260829-03 | Temporarily replay the loader every refresh with a 2× timeline scale for visual review.                                                                                                                                                 | ui, animation, testing                     | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-03)               |
| DEC-20260829-02 | Drive the loader from one timeline with gated media readiness and completion persistence.                                                                                                                                               | ui, animation, testing                     | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-02)               |
| DEC-20260829-01 | Always use the `grilling` skill in Plan Mode before acting on a plan.                                                                                                                                                                   | skills, grilling                           | [2026-08-29](2026/08/2026-08-29.md#decision-dec-20260829-01)               |
| DEC-20260827-05 | Require one React component per file with a colocated test; App is composition only.                                                                                                                                                    | architecture, tests                        | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-05)               |
| DEC-20260827-06 | Pin Mantine MCP to `@mantine/mcp-server@9.5.2` to match the project.                                                                                                                                                                    | mantine, tooling                           | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-06)               |
| DEC-20260827-07 | Use Mantine selectively for behavior-rich controls and theme configuration.                                                                                                                                                             | mantine, accessibility                     | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-07)               |
| DEC-20260827-04 | Use the `grilling` skill for explicit review and stress-testing requests.                                                                                                                                                               | skills, grilling                           | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-04)               |
| DEC-20260827-03 | Use automatic RU/EN detection with English fallback and a persisted manual toggle.                                                                                                                                                      | portfolio, i18n                            | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-03)               |
| DEC-20260827-02 | Keep Pages deployment manual while the repository remains private and Pages is unavailable.                                                                                                                                             | github, pages, privacy                     | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-02)               |
| DEC-20260827-01 | Use the existing FursiK911 private repository and keep it private.                                                                                                                                                                      | github, privacy                            | [2026-08-27](2026/08/2026-08-27.md#decision-dec-20260827-01)               |
| DEC-20260825-01 | Initialize a Vite React portfolio scaffold with npm and Node 24.                                                                                                                                                                        | scaffold, tooling                          | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-01)               |
| DEC-20260825-02 | Keep the Vite demo; defer portfolio UI and content.                                                                                                                                                                                     | scope, ui                                  | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-02)               |
| DEC-20260825-03 | Use i18next for `ru`/`en`, browser detection, persisted manual choice, and `ru` fallback.                                                                                                                                               | i18n, accessibility                        | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-03)               |
| DEC-20260825-04 | Commit queryable Graphify data and report only.                                                                                                                                                                                         | graphify, governance                       | [2026-08-25](2026/08/2026-08-25.md#decision-dec-20260825-04)               |
| DEC-20260831-06 | Use shared ActionLink and ActionButton components with explicit CTA variants to keep primary hover colors stable and prevent context-specific CSS conflicts.                                                                            | ui, components, navigation, accessibility  | [2026-08-31](2026/08/2026-08-31.md#decision-dec-20260831-06)               |
| DEC-20260907-04 | Populate AR Coloring with source-grounded Apple screenshots, store/archive links, and iOS/Android product metrics; exclude related-product metrics and technologies marked unverified for this app.                                     | projects, ar, media, i18n, research        | [2026-09-07](2026/09/2026-09-07.md#ar-coloring-project-content)            |
| DEC-20260908-01 | Keep Chudobooks as a separate AR book case and use only its own package, App Store record, features, and Android metrics; do not merge related AR Chudoboxes, AR Coloring, or Chudoboxes EKO data.                                      | projects, ar, mobile, i18n, research       | [2026-09-08](2026/09/2026-09-08.md#chudobooks-project-content)             |

Directions reference redesign (2026-09-08) keeps existing architecture and motion policy; no new global decision. See [daily log](2026/09/2026-09-08.md#directions-reference-redesign).

Directions HUD motion system (2026-09-08) keeps motion local to the profile Directions slice and respects the existing reduced-motion contract. See [daily log](2026/09/2026-09-08.md#directions-hud-motion-system).

| DEC-20260908-09 | Use the React Bits Grid Scan as a fixed desktop-only background for every route; disable webcam/model loading in the site adapter and use a static cyan grid when reduced motion is preferred. | ui, background, three, webgl, responsive, accessibility | [2026-09-08](2026/09/2026-09-08.md#decision-dec-20260908-09) |
| DEC-20260910-01 | Use «Ключевой вклад» / «Key contributions» as the contribution list note while preserving the existing section heading. | projects, contribution, i18n, testing | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-01) |
| DEC-20260910-22 | At desktop widths only, size the Hero grid row from the broadcast, stretch the copy column to that row, and anchor its actions with `margin-top: auto`; retain the existing layout below 1200 px. | ui, hero, live-cam, desktop, responsive | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-22) |
| DEC-20260910-23 | Use a uniform `120px` top padding for `.profile-section` at all viewport widths; remove the previous mobile-specific reduction. | ui, profile, spacing, responsive | [2026-09-10](2026/09/2026-09-10.md#decision-dec-20260910-23) |
| DEC-20260912-01 | Use three explicit Hero copy zones and `justify-content: space-between` at desktop widths; keep the pre-existing document flow below 1200px. | ui, hero, live-cam, desktop, responsive | [2026-09-12](2026/09/2026-09-12.md#decision-dec-20260912-01) |
