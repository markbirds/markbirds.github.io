# AGENTS.md

## Purpose

Personal portfolio site for Owen Patrick Falculan (`www.owenfalculan.com`), deployed as a static Nuxt app to GitHub Pages. A single homepage (`app/pages/index.vue`) renders two layouts — **Portfolio** (freelance/work-focused) and **Personal** (casual) — toggled client-side via `useSiteMode()` and persisted in `localStorage`. SEO defaults and contact/social constants live in `shared/seo/index.ts`.

## Stack

- Language: TypeScript (strict)
- Framework: Nuxt 4 (Vue 3 Composition API, SSR enabled, `nuxt generate` for GitHub Pages)
- Layout: Nuxt 4 `app/` directory; shared constants in `shared/`
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`; design tokens in `app/assets/css/tailwind.css`
- Package manager: pnpm (`packageManager` field pins pnpm 9.15.4); Node `^24`
- Key modules: `@nuxt/icon`, `nuxt-swiper`, `typed.js`
- Formatter: Prettier + `prettier-plugin-tailwindcss` (team-mandated on this repo; see `docs/adr/002-custom-visual-not-nuxt-ui.md`)
- Test runner: none configured

Deviations from the Nuxt stack conventions (Nuxt UI, `@nuxt/image`, `@nuxt/fonts`, Docker `node-server`) are recorded in `docs/adr/`.

## Dev commands

- Install: `pnpm install`
- Run: `pnpm dev`
- Build (local SSR): `pnpm build`
- Generate (static, used in CI): `pnpm generate`
- Preview: `pnpm preview`
- Test: not configured
- Lint: `pnpm lint` (runs `lint:js`, `lint:style`, `lint:prettier`)
- Typecheck: `pnpm typecheck`
- Format: `pnpm lintfix` (Prettier write + ESLint/Stylelint fix)

## Conventions

- Vue SFCs use `<script setup lang="ts">`. Add a brief HTML comment at the top of new components describing their purpose.
- Site-mode components live under `app/components/personal/` and `app/components/portfolio/`. Shared UI goes in `app/components/commons/`.
- Nuxt auto-imports composables and framework APIs (`useHead`, `useSeoMeta`, etc.). Import shared modules explicitly: `~~/shared/seo`, `~/components/...`.
- Nuxt derives component names from path prefix — e.g. `app/components/portfolio/Profile.vue` → `<PortfolioProfile />`.
- SEO constants (`SITE_URL`, `SITE_NAME`, social links, default meta) belong in `shared/seo/index.ts`. Keep JSON-LD `sameAs` in sync with visible social links. Use `useHomePageSeo()` on the homepage and `usePageSeo()` for future pages.
- Tailwind utility classes in templates; shared tokens and breakpoints in `@theme` inside `app/assets/css/tailwind.css`. Prettier sorts classes via `prettier-plugin-tailwindcss`.
- Use standard `<img>` tags with WebP assets in `public/images/` — not `NuxtImg`.
- External links use `target="_blank"` with `rel="noopener noreferrer"`. Include accessibility attributes (`aria-label`, `sr-only` headings, `role` where appropriate).
- **Project entries** (`app/components/portfolio/Projects.vue`): each project has a plain-language `overview` (2–3 sentences, no jargon — what it does and who it's for), a `tech` tag list, a `screenshots` array (hero shot first), an `architecture` diagram, and a `sourceUrl` (empty string ⇒ renders "Coming soon"). Screenshots and diagrams live in `public/projects/`; architecture diagrams are SVGs exported from Excalidraw — keep the editable `.excalidraw` source in that project's own repo, not here.
- **`tech` tags** list what an employer or developer scans for, roughly ordered backend → frontend → infra (~8–12 tags): language, web + API frameworks, ORM/data layer, realtime, datastores, job queue / background processing, object storage, and containerization. Use product names (e.g. `Supabase`, `PostgreSQL`, `Docker`). Omit incidental tooling (linters, test runners, error tracking) unless it's central to the project.
- Commit messages follow conventional prefixes: `feat:`, `fix:`, `refactor:`, `chore:`.
- Pre-commit hook runs `lint-staged` (ESLint, Stylelint, Prettier check). CI runs `lint`, `typecheck`, then `generate` before deploy.

## Forbidden patterns

- Do not reintroduce `NuxtImg` or `@nuxt/image` — the project deliberately uses plain `<img>` tags.
- Do not add a backend, API routes, or server-side data fetching beyond what Nuxt prerender needs — this is a static portfolio site.
- Do not change `SITE_URL`, `CNAME`, or domain-related config without explicit confirmation.
- Do not commit secrets (`.env`, credentials). `.env` files are gitignored.
- Do not overwrite or duplicate SEO constants outside `shared/seo/index.ts` — keep a single source of truth.
- Do not create commits or push unless explicitly asked.
- Do not restyle the site with Nuxt UI or change copy, screenshots, or project content unless asked.

## Commit and PR rules

- Default branch: `master`.
- Use conventional commit prefixes (`feat:`, `fix:`, `refactor:`, `chore:`).
- CI (`.github/workflows/ci.yml`) runs on push to `main`/`master`: install → `lint` → `typecheck` → `generate` → copy `CNAME` → deploy to GitHub Pages via `peaceiris/actions-gh-pages`.
- Production deploy uses `pnpm generate` (static output in `.output/public`), not `pnpm build`.

## Repo notes

- Case-duplicated paths under `personal/` (`Profile/` vs `profile/`, `Favorites/` vs `favorites/`) exist; follow the import path already used by the file you are editing.
