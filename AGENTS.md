# AGENTS.md

## Purpose

Personal portfolio site for Owen Patrick Falculan (`www.owenfalculan.com`), deployed as a static Nuxt app to GitHub Pages. A single homepage (`pages/index.vue`) renders two layouts — **Portfolio** (freelance/work-focused) and **Personal** (casual) — toggled client-side via `useSiteMode()` and persisted in `localStorage`. SEO defaults and contact/social constants live in `seo/index.ts`.

## Stack

- Language: TypeScript
- Framework: Nuxt 3 (Vue 3, SSR enabled, static generation for deploy)
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`; design tokens in `assets/css/tailwind.css`
- Package manager: pnpm (`packageManager` field pins pnpm 9.15.4)
- Key modules: `@nuxt/icon`, `nuxt-swiper`, `typed.js`, `dayjs` / `dayjs-nuxt`
- Test runner: none configured

## Dev commands

- Install: `pnpm install`
- Run: `pnpm dev`
- Build (local SSR): `pnpm build`
- Generate (static, used in CI): `pnpm generate`
- Preview: `pnpm preview`
- Test: not configured
- Lint: `pnpm lint` (runs `lint:js`, `lint:style`, `lint:prettier`)
- Typecheck: not configured (TypeScript via Nuxt; run `pnpm exec nuxi typecheck` if needed)
- Format: `pnpm lintfix` (Prettier write + ESLint/Stylelint fix)

## Conventions

- Vue SFCs use `<script setup lang="ts">`. Add a brief HTML comment at the top of new components describing their purpose.
- Site-mode components live under `components/personal/` and `components/portfolio/`. Shared UI goes in `components/commons/`.
- Nuxt auto-imports composables and framework APIs (`useHead`, `useSeoMeta`, etc.). Import shared modules explicitly: `@/seo`, `@/components/...`.
- Nuxt derives component names from path prefix — e.g. `components/portfolio/Profile.vue` → `<PortfolioProfile />`.
- SEO constants (`SITE_URL`, `SITE_NAME`, social links, default meta) belong in `seo/index.ts`. Keep JSON-LD `sameAs` in sync with visible social links. Use `useHomePageSeo()` on the homepage and `usePageSeo()` for future pages.
- Tailwind utility classes in templates; shared tokens and breakpoints in `@theme` inside `assets/css/tailwind.css`. Prettier sorts classes via `prettier-plugin-tailwindcss`.
- Use standard `<img>` tags with WebP assets in `public/images/` — not `NuxtImg`.
- External links use `target="_blank"` with `rel="noopener noreferrer"`. Include accessibility attributes (`aria-label`, `sr-only` headings, `role` where appropriate).
- **Project entries** (`components/portfolio/Projects.vue`): each project has a plain-language `overview` (2–3 sentences, no jargon — what it does and who it's for), a `tech` tag list, a `screenshots` array (hero shot first), an `architecture` diagram, and a `githubUrl` (empty string ⇒ renders "Coming soon"). Screenshots and diagrams live in `public/projects/`; architecture diagrams are SVGs exported from Excalidraw — keep the editable `.excalidraw` source in that project's own repo, not here.
- **`tech` tags** list what an employer or developer scans for, roughly ordered backend → frontend → infra (~8–12 tags): language, web + API frameworks, ORM/data layer, realtime, datastores, job queue / background processing, object storage, and containerization. Use product names (e.g. `Supabase`, `PostgreSQL`, `Docker`). Omit incidental tooling (linters, test runners, error tracking) unless it's central to the project.
- Commit messages follow conventional prefixes: `feat:`, `fix:`, `refactor:`, `chore:`.
- Pre-commit hook runs `lint-staged` (ESLint, Stylelint, Prettier check). CI also runs `lintfix` then `lint` before deploy.

## Forbidden patterns

- Do not reintroduce `NuxtImg` or `@nuxt/image` — the project deliberately uses plain `<img>` tags.
- Do not add a backend, API routes, or server-side data fetching beyond what Nuxt prerender needs — this is a static portfolio site.
- Do not change `SITE_URL`, `CNAME`, or domain-related config without explicit confirmation.
- Do not commit secrets (`.env`, credentials). `.env` files are gitignored.
- Do not overwrite or duplicate SEO constants outside `seo/index.ts` — keep a single source of truth.
- Do not create commits or push unless explicitly asked.

## Commit and PR rules

- Default branch: `master`.
- Use conventional commit prefixes (`feat:`, `fix:`, `refactor:`, `chore:`).
- CI (`.github/workflows/ci.yml`) runs on push to `main`/`master`: install → `lintfix` → `lint` → `generate` → copy `CNAME` → deploy to GitHub Pages via `peaceiris/actions-gh-pages`.
- Production deploy uses `pnpm generate` (static output in `.output/public`), not `pnpm build`.

## Repo notes

- `README.md` is still the Nuxt starter template — treat this file and the source as authoritative.
- `components/professional/` and root-level `components/Profile/`, `Favorites/`, `Gallery/` appear to be unused legacy/WIP — prefer `personal/` and `portfolio/` dirs. Case-duplicated paths under `personal/` (`Profile/` vs `profile/`, `Favorites/` vs `favorites/`) exist; follow the import path already used by the file you are editing.
