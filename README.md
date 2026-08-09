# Repose Website

Marketing, blog, and support site for **Repose: Sleep Sounds** (Solace Studios).

Separate project from the app repo (`ReposeClean`) — different stack, different deploy pipeline, different domain (`reposesleep.net`).

## Stack

- [Astro](https://astro.build) — static site generation, file-based routing
- [Tailwind CSS v4](https://tailwindcss.com) — utility styling
- [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) — blog post authoring
- [Fontsource](https://fontsource.org) — self-hosted Nunito font
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com), auto-deploys on push to `main`

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the production build locally         |

## Status

v1 in progress — see `website_handoff.md` in the app repo (`C:\Projects\ReposeClean`) for the full spec, outstanding tasks, and design constraints.
