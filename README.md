# abhishekredy18.github.io

Personal portfolio of **Abhishek Reddy Malreddy** — AI/ML engineer.
Live at **[abhishekredy18.github.io](https://abhishekredy18.github.io)**.

Built with Next.js 16 (App Router, static export), TypeScript, and
Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions on every push
to `master`.

## Updating content

Site facts live in typed data files — edit these, not components:

- `src/data/experience.ts` — jobs and bullets
- `src/data/education.ts`, `src/data/skills.ts`, `src/data/publications.ts`
- `src/data/site.ts` — name, email, links, résumé path

## Adding a project

Drop one file into `content/projects/`:

```mdx
---
title: "My New Project"
summary: "One line, ≤160 chars — shown on cards and in meta tags."
role: "Junior AI/ML Engineer"
dates: "Aug 2026"
tech: ["Python", "PyTorch"]
tags: ["ML"]            # Professional | Research | LLM | CV | ML | Edge
featured: true          # sorts before non-featured
order: 1                # sort position
---

## Problem
...

## Approach
...

## Architecture & Tech
...

## Results
...
```

Frontmatter is validated with Zod at build time (`src/lib/content.ts`) —
bad data fails the build, not the visitor. Optionally add a cover image at
`public/images/projects/<slug>.jpg` (compressed) and reference it with
`image: "/images/projects/<slug>.jpg"`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → out/
```

The résumé PDF is served from `public/resume/Abhishek Malreddy.pdf` — keep
that path stable, it's linked from printed résumés.

## Previous versions

- `v2-static` branch / `v2-static-2026-07-26` tag — the hand-coded static
  site this replaced
- `v1` branch — the original site
