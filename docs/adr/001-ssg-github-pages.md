# ADR 001: Static generation on GitHub Pages

## Status

Accepted

## Context

Stack conventions default to a Dockerized Nitro `node-server` and Nuxt UI product chrome. This repo is the personal site at `www.owenfalculan.com`, already hosted as a static GitHub Pages site with a CNAME.

## Decision

Keep `pnpm generate` / Nitro prerender. Do not switch to `node-server`, Docker, or runtime env. Bake SEO and public config at generate time.

## Consequences

- No server routes, no runtime secrets, no `/api/health`.
- Config changes require a rebuild and Pages deploy.
- Visual stack stays custom Tailwind (see ADR 002).
