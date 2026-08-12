# nickteets.io

Personal site for Nick Teets. See `README.md` for stack, dev commands,
and design-system detail. This file is for conventions worth knowing
before making changes.

## Content goes in data, not JSX

Every section reads from `src/content/*.ts`, typed against
`src/content/types.ts`. Adding a role, talk, or volunteer entry is a data
change. Don't hardcode copy into a section component — if you're writing
a string literal in a `.tsx` file for anything longer than a UI label
("Copy", "Previous screen"), it probably belongs in `src/content/`
instead.

No em dashes in site copy — Nick's explicit preference. Use a comma,
period, or hyphen.

## Stack boundaries

This repo intentionally uses React + TypeScript + Vite, which departs
from Nick's other personal sites (zero-dependency vanilla HTML/CSS/JS on
GitHub Pages). That's deliberate: the repo is a work sample for
React/TypeScript roles. Don't "simplify" it back toward vanilla JS, and
don't add a UI framework (Tailwind, MUI, etc.), animation library
(Framer Motion, GSAP), or router without checking first — each of those
was a considered rejection during the initial build, not an oversight.
See README.md's "Design system notes" for the reasoning.

## Accessibility is a gate, not a nice-to-have

Nick advertises accessibility expertise professionally (led a11y
initiatives at Frontier, did a chart-tooltip a11y overhaul at Zylo), so
this site is held to a higher bar than a typical portfolio. Before
committing a UI change: run `npm run lint` (jsx-a11y is in the ESLint
config with no rule disables outside `ShowcaseScroller`'s documented
WAI-ARIA carousel exception), and if you touch anything interactive,
sanity-check it with axe-core or by reasoning through keyboard/
screen-reader behavior. The reduced-motion double-guard (CSS blanket
rule + `usePrefersReducedMotion` hook) must stay in sync; see README.

## Images

Never hotlink third-party images (e.g. Zylo's marketing CDN). Download,
run through `scripts/build-images.sh`, commit the output to
`public/media/`. Source files go in `raw-assets/` (not deployed, kept
for reprocessing).

## Workflow

- Commit at phase/checkpoint boundaries, not after every small tweak.
- `npm run typecheck && npm run lint && npm run build` before every
  commit — all three are cheap and catch real issues.
- Screenshots are the review loop: after a UI change, take one (or a few
  at different scroll positions) before calling it done.
