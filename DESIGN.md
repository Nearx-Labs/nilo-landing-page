# Design rules for this page

Landing page for Nilo (Stellar payments that can't get lost). Next.js 16 + Tailwind 4, static.
Before changing Next.js code, read `AGENTS.md` (this Next.js version differs from older ones).

## Direction

Visual direction after the Linear marketing site (reference: `/Users/romulo/Downloads/hack/refero.design 99b285fd-ddf0-42a4-8e11-caa7cba87c9c (1).jpg`, a 2732×20000 full-page capture):

- Near-black neutral canvas. Very little color.
- Large display headings: medium weight, tight tracking.
- Each section starts with a small label: a colored pill, the text, and a chevron.
- Product UI shown as real screenshots or code-native panels laid back in 3D perspective, fading into the canvas.
- Features in rows of 2 to 4 columns split by hairlines, not boxed cards.
- Generous vertical rhythm.

Nilo's own identity stays: the logo, the violet accent and the green "decoded" card.

## Fixed system (do not change)

- `app/globals.css`: color tokens and the type classes `display-1`, `display-2`, `title-3`, `lead`, plus `band` and `tilt`. Do not add colors, fonts, radii or shadows outside these. Use the Tailwind names: `bg-bg`, `bg-surface*`, `text-text`, `text-muted`, `text-faint`, `border-line`, `border-line-strong`, `accent`, `accent-2`, `ok*`, `bad*`.
- `components/ui.tsx`: `Container`, `Band`, `SectionHead`/`SectionLabel`, `PrimaryButton`, `SecondaryLink`, `TiltFrame`, `FeatureRow`/`Feature`. Use them. If you need a new primitive, put it in your own file, not in `ui.tsx`.
- `components/icons.tsx`: add icons here only by appending (lucide-style, 24px grid, stroke `currentColor`). No emoji.
- `lib/demo.ts`: demo data. Read-only.

## Color roles (strict)

- `accent` / `accent-2` (violet): the primary button and the AI (the bot mascot, its highlighted suggestion). Nothing else.
- `ok` (green): only what is decoded from the transaction or verified by code.
- `bad` (red): only "Do not sign".
- Everything else is neutral: text, muted, faint, surfaces, lines.

## Content rules

- Brazilian Portuguese for now (English comes later). The product is an investment bot: an initial questionnaire on crypto knowledge, suggestions that fit the profile, the user picks one and the bot invests. Facts about safety (explanation before signing, keys in the wallet, Reflector prices) come from `../nilo/README.md`. Do not invent numbers, partners or quotes; mark illustrative examples as such.
- Keep copy short. Do not swap one headline word into another color, serif or italic.
- External links open in a new tab (`target="_blank" rel="noopener noreferrer"`).

## Quality bar

- Works from 360px up, with no horizontal page scroll. Check 375px and 1440px.
- Respects `prefers-reduced-motion`. Motion is short: 120–320ms, ease-out.
- Keyboard and screen reader friendly: visible focus, real buttons and links, alt text.
- `npm run lint` and `npm run build` pass.
