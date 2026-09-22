# ADR 002: Custom visual language, not Nuxt UI

## Status

Accepted

## Context

Nuxt stack conventions pick Nuxt UI v4, `@nuxt/image`, and `@nuxt/fonts` for product apps. This site is a two-mode marketing/portfolio page with an existing Quicksand + custom `@theme` look, self-hosted woff2, and WebP in `public/`. Installing Nuxt UI or swapping `<img>` for `<NuxtImg>` would restyle or reprocess assets.

## Decision

- Keep the existing Tailwind v4 `@theme` and plain `<img>` tags.
- Do not add `@nuxt/ui` or `@nuxt/image`.
- Keep local `@font-face` for Quicksand instead of `@nuxt/fonts`.
- Keep Prettier + `prettier-plugin-tailwindcss` (already the formatter on this repo) instead of ESLint stylistic.

## Consequences

- Stack checklist items for Nuxt UI / image / fonts / Prettier-absent do not apply here.
- Content, screenshots, and visual design stay unchanged across the Nuxt 4 migration.
