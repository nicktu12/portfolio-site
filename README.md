# nickteets.io

Personal site for Nick Teets, Senior Software Engineer. React, TypeScript,
Vite. No UI framework, no webfonts, no animation library.

## Stack

- **React + TypeScript + Vite**, deliberately: unlike this author's other
  static sites (plain HTML/CSS/JS on GitHub Pages), this repo is itself a
  work sample for React/TypeScript roles.
- **CSS Modules** for component styles, plus a hand-rolled `:root` token
  system in `src/styles/tokens.css`. No Tailwind, no CSS-in-JS.
- **No animation library.** Scroll reveals run on a ~35-line
  `IntersectionObserver` hook (`src/hooks/useReveal.ts`); everything else
  is CSS transitions.
- **No router.** Single page, `id` anchors for the four nav destinations
  (`#work`, `#case-study`, `#talks`, `#contact`).

## Development

```
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run lint
npm run build       # outputs to dist/
npm run preview     # serve the production build locally
```

## Content model

All copy lives in typed data modules under `src/content/`, never
hardcoded in JSX — `types.ts` is the source of truth for every shape.
Adding content (a new role, talk, or volunteer entry) is a data change,
not a component change. `src/content/projects.ts` ships an empty array on
purpose: the `Projects` section renders `null` until it has entries, so
adding a personal project later is one object literal plus an image run.

## Images

Source images live in `raw-assets/` (not deployed). Processed output
lives in `public/media/` (deployed, committed). Regenerate with:

```
scripts/build-images.sh
```

Requires `sips` (macOS built-in) plus `brew install webp libavif
exiftool`. This is a hand-run script, not a build-time plugin — there are
about a dozen images that change a few times a year, which doesn't
justify a native image dependency in CI.

## Design system notes

- **Accent discipline.** `--accent` (Swiss red) appears only on: focus
  rings, the inline-link underline sweep on hover, the hero's top rule,
  the showcase strip's active indicator, and the nav's hover underline.
  Headings are always `--ink`. Don't reach for the accent as decoration.
- **`--radius: 2px`.** Near-square corners are a deliberate Swiss choice.
  Don't round things up "to match the web."
- **Zero webfonts is a decision, not an oversight.** The `Helvetica
  Neue` stack only resolves on macOS/iOS; Windows falls back to Arial
  Nova/Arial, which reads wider at display sizes. If that becomes a real
  problem (check a Windows Chrome screenshot of the hero), the documented
  fallback is one self-hosted variable font with `font-display: optional`
  — not multiple webfonts, not a font-loading library.

## Accessibility

Reduced motion is honored **twice**, on purpose: a CSS
`@media (prefers-reduced-motion: reduce)` blanket rule in
`src/styles/base.css` for CSS-only transitions, and
`src/hooks/usePrefersReducedMotion.ts` (with a live `matchMedia` change
listener) for the JS-driven effects the CSS rule can't reach —
`ShowcaseScroller`'s `scrollTo` behavior and `useReveal`'s animation.
Both are required; removing either one leaves a gap.

`ShowcaseScroller` follows the WAI-ARIA carousel pattern: no autoplay,
every slide always in the DOM and focusable (never `aria-hidden` /
`display: none`), arrow-key and Home/End navigation, real disabled
prev/next buttons, and an `aria-live` position announcement. Slides use
`role="group"` + `aria-roledescription="slide"` rather than relying on
the `<li>`'s implicit `listitem` role, since the scroller container's
`role="group"` (required by the pattern) breaks that implicit
relationship — axe-core will flag this if either role is removed.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to
GitHub Pages on push to `master`. Pages must be configured with source
"GitHub Actions" (not the legacy branch-deploy mode) for this to work.

```
curl -s -o /dev/null -w "%{http_code}\n" https://nickteets.io
curl -s -o /dev/null -w "%{http_code}\n" https://www.nickteets.io
curl -s https://nickteets.io | grep -c "Nick Teets"
```
