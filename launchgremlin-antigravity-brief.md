# LaunchGremlin Rebrand — Build Brief for Antigravity

## Context

You're picking up a scaffolded Next.js project for **LaunchGremlin**, a
South African business that builds booking-first landing pages for local
service businesses (spas, restaurants, fitness studios, etc.). This is a
**complete rebrand**: new repo, new brand voice and visual system, old logo
retained. The scaffold already reflects the finished brand decisions below
— your job is to build it out into a real, launch-ready site, not to
re-decide the brand.

## Brand summary (do not deviate without asking)

- **Voice: "Sharp Mischief."** Playful but tight — wit through precision
  and short, exact sentences, not jokes or whimsy. Confident, never
  corporate, never self-deprecating. One good line beats three good-enough
  ones.
- **Positioning:** businesses are leaving money on the table in their sales
  funnel because their website doesn't ask for the booking. LaunchGremlin
  fixes that with one link, built to close.
- **Tagline (locked):** "One link that turns lookers into bookers."
- **Subhead (locked):** "You don't need a prettier website. You need one
  that closes."
- **Localization:** proof-driven, not slang-driven. Real SA case studies,
  ZAR pricing, recognizable local business categories. Local color comes
  from specificity (real businesses, real Rand pricing), not idiom stuffed
  into copy.
- **The gremlin mascot** is a signature mark now, not the hero. Small,
  present, not loud. The wit lives in the copy.

## What's already built

The repo scaffold (Next.js 15, App Router, React 19, TypeScript, Tailwind
CSS v4) already has:

- `lib/copy.ts` — single source of truth for all site copy. Read this
  first; it's the brand voice in shipped form.
- `app/globals.css` — design tokens (`@theme` block): cream/ink base
  palette, one signature accent green (`#1F6F4C`), Fraunces (italic
  display) + Inter Tight (body) + IBM Plex Mono (utility/data) type
  system. Don't introduce new colors or typefaces outside this system
  without a good reason tied to the brief.
- `components/` — one component per homepage section: `Hero`, `Leak`,
  `Fix`, `Proof`, `Pricing`, `Close`, plus `Nav` and `Footer`.
- A signature visual detail: the `.leak-mark` underline animation on the
  word "lookers" in the hero headline — a literal visual pun on the brand
  concept. Preserve this pattern of thinking (small, meaningful visual
  puns tied to the "leak/fix" metaphor) if you add new signature moments
  elsewhere in the site.

Read `README.md` in the repo root for the full token table and setup
instructions before making changes.

## What's NOT done yet — your actual task list

1. **Real gremlin signature mark.** `public/gremlin-mark.svg` is a rough
   placeholder. Replace it with a properly simplified, small-scale crop of
   the real LaunchGremlin logo, optimized to read cleanly at 24–32px in
   the nav.
2. **Real demo imagery.** `public/demos/` has empty placeholder slots for
   spa, restaurant, and fitness-studio demo landing pages. These need
   either real screenshots of built demo pages or real business
   photography — not stock-looking generic images. If you build the demo
   pages first, screenshot those.
3. **Founding-client discount amount.** `lib/copy.ts` →
   `proofSection.foundingCallout` has a `TODO` where the discount amount
   needs to be filled in once decided. Flag this back rather than
   inventing a number.
4. **Proof section is intentionally pre-launch.** It currently avoids
   fabricated testimonials/case studies on purpose — do not add fake
   client names, logos, or metrics. Leave it as-is (demo carousel +
   founding-client callout) until real case studies exist to swap in.
5. **Build out the actual per-industry demo pages** referenced by the Fix
   section — these should be real, bookable-feeling landing page examples
   (spa, restaurant, fitness studio) that prove the product, since the
   Proof section leans on "look at the thing" rather than metrics.
6. **Mobile pass.** Confirm every section holds up at small viewport
   widths — this audience is mobile-heavy, and "the desktop trap" is
   literally one of the brand's own named funnel leaks, so the site
   itself can't fall into it.
7. **Accessibility/quality floor.** Keyboard focus states are already
   defined in `globals.css` (`:focus-visible`); keep them. Respect
   `prefers-reduced-motion` (the leak-mark animation already does this —
   follow the same pattern for any new motion).

## Working style

- Treat `lib/copy.ts` as the brand voice reference — when you need new
  copy (page titles, form labels, error states, empty states), match its
  register: short sentences, active voice, plain nouns, no filler, dry
  wit rather than exclamation points.
- If a design or copy decision isn't covered by the token system or the
  brand summary above, make the smallest reasonable choice consistent
  with "Sharp Mischief," implement it, and flag the assumption rather than
  blocking on it.
- Don't introduce a second accent color, a second display typeface, or
  large decorative gremlin illustrations — those were deliberately
  designed out of this rebrand.
