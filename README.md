# owenfalculan.com

Personal site for Owen Patrick Falculan. Nuxt 4, statically generated to GitHub Pages.

## Setup

```bash
pnpm install
pnpm dev
```

## Production (GitHub Pages)

```bash
pnpm generate
```

Output is `.output/public`. CI copies `CNAME` into that folder and deploys.

## Scripts

| Command          | What it does                  |
| ---------------- | ----------------------------- |
| `pnpm dev`       | Dev server                    |
| `pnpm generate`  | Static HTML for Pages         |
| `pnpm preview`   | Preview the generated output  |
| `pnpm lint`      | ESLint + Stylelint + Prettier |
| `pnpm typecheck` | `nuxt typecheck`              |
