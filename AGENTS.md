<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Nilo landing page

Shared context for every AI agent working here (Claude Code, Codex and other workers). `CLAUDE.md` only imports this file, so edit this one. `next dev` rewrites only the block between the `nextjs-agent-rules` markers above; keep project notes outside it.

Static marketing page for [Nilo](https://github.com/Nearx-Labs/nilo), an investment bot on Stellar: a questionnaire on crypto knowledge, suggestions that fit the investor profile, the user picks one and the bot invests. The Nilo app itself lives in the sibling folder `../nilo/` (separate repo); facts about the product come from `../nilo/README.md`.

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm lint       # eslint (next core-web-vitals + typescript)
pnpm build      # also type-checks
```

There are no tests. A change is done when `pnpm lint` and `pnpm build` pass and the page works at 375px and 1440px.

## Stack

Next.js 16.4 (App Router) + React 19.3 + Tailwind 4 + TypeScript strict. Path alias `@/*` points to the repo root.

- `next.config.ts` turns on `cacheComponents` and `partialPrefetching`, and wires Tailwind through the `@tailwindcss/turbopack` loader for `*.css` (there is no PostCSS config).
- Tailwind theme tokens and the type classes live in `app/globals.css`, not in a `tailwind.config`.

## Architecture

- `app/page.tsx` is a single page that stacks the sections from `components/sections/` (Header, Hero, Problem, HowItWorks, Trust, Limits, Footer). `app/layout.tsx` sets `lang="pt-BR"`, the Inter font and the metadata.
- Everything is a server component except `components/InvestmentWalkthrough.tsx` (`"use client"`), the interactive 4-step walkthrough (questionnaire → suggestions → choose and check → invested) used by HowItWorks. It has keyboard navigation and a desktop/mobile layout switch (`useIsDesktop`).
- `components/hero/HeroChat.tsx` is the hero's chat mock, animated with CSS only (staggered via a `--i` custom property), so it stays a server component.
- `lib/demo.ts` holds all demo content (`PROFILES`, `SUGGESTIONS`, `GITHUB_URL`) shared by the hero and the walkthrough. Suggestions are illustrative and must stay marked as such.
- `components/Stroopy.tsx` renders the bot mascots from `public/stroopies/` (copied from the Nilo app).

## Rules

Read `DESIGN.md` before any visual or copy change. The short version:

- Fixed system, do not change: color tokens and type classes in `app/globals.css`; primitives in `components/ui.tsx` (new primitives go in their own file); `components/icons.tsx` is append-only (lucide-style, 24px grid, `currentColor`, no emoji); `lib/demo.ts` is read-only.
- Color roles are strict: violet `accent` only for the primary button and the bot/AI; green `ok` only for what is decoded or verified; red `bad` only for "Do not sign"; everything else neutral.
- Copy is in Brazilian Portuguese, short, and must not invent numbers, partners or quotes. External links use `target="_blank" rel="noopener noreferrer"`.
- From 360px up with no horizontal scroll; respect `prefers-reduced-motion`; motion 120–320ms ease-out; visible focus and real buttons/links.

## Working as a worker

When dispatched by a coordinator (e.g. Orca orchestration), stay inside the files your task names, do not commit unless the task says so, and report the `pnpm lint` / `pnpm build` result in your completion message.
