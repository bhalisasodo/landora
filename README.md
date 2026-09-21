# Landora

High-conversion, booking-first landing pages for South African local service businesses. "One link that turns lookers into bookers."

- **Staging Domain:** `https://landora.launchgremlin.com`
- **WhatsApp Booking Line:** `060 602 1978` (`https://wa.me/27606021978`)
- **Brand Identity:** Landora (continuous loop mark with signal green dot + Fraunces serif wordmark)

## Stack

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Chosen as
the current mainstream, actively-maintained combination — static-friendly
enough to deploy anywhere (Vercel, or export to GitHub Pages) while giving
room to add real interactivity (booking flows, forms) later without a
framework migration.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            Routes (App Router). page.tsx composes the homepage from components/.
components/     One component per site section (Hero, Leak, Fix, Proof, Pricing, Close).
lib/copy.ts     Single source of truth for all site copy — edit text here, not in components.
public/         Static assets. Demo images and the gremlin mark placeholder live here.
```

## Design tokens ("Sharp Mischief")

Defined in `app/globals.css` under `@theme`.

| Token | Value | Use |
|---|---|---|
| `--color-cream` | `#F5F1E8` | Base surface |
| `--color-cream-dim` | `#EAE4D4` | Secondary surface (alternating sections) |
| `--color-ink` | `#14120F` | Primary text, dark surfaces |
| `--color-ink-soft` | `#2A2721` | Secondary text |
| `--color-signal` | `#1F6F4C` | The one accent color — CTA underline, leak-drip mark, hover states. Used sparingly, never as a large fill. |
| `--color-signal-soft` | `#DCEBE1` | Light tint for the accent (badges, callouts) |
| `--color-line` | `#E4DFD2` | Hairline borders/dividers |

**Type:**
- Display — **Fraunces** (italic), for headlines. Matches the existing
  italic-serif headline style from the current site.
- Body/UI — **Inter Tight**, for everything else.
- Utility — **IBM Plex Mono**, for data-flavored moments: leak archetype
  labels, pricing figures. Reinforces the "precision, not fluff" register.

**Signature element:** the `.leak-mark` underline (see `globals.css`) — a
small accent-green underline that draws in on load beneath one key word in
the hero headline. It's the visual pun for "the leak": literal because it's
a colored line, thematic because it marks the exact word ("lookers") that's
supposed to convert.

**Brand Mark:** Landora continuous-loop symbol with signal green dot (`public/landora-mark.svg`) and Fraunces serif wordmark. Deliberately clean, productized, and Apple-restrained without cartoon characters or mascot distraction.

## Content & Brand Launch Status

- [x] Landora continuous-loop signature mark asset (`public/landora-mark.svg`, `public/landora-mark-reversed.svg`)
- [x] Landora app icon & favicon suite (`app/icon.png`, `app/apple-icon.png`, `public/favicon.ico`)
- [x] Real demo mockups/pages for each industry (`public/demos/` & `/demos/*`)
- [x] WhatsApp routing configured to official line `060 602 1978` (`lib/copy.ts`)
- [x] Staging domain mapped to `https://landora.launchgremlin.com`
- [x] Diagnostic Leak Audit set to 100% free; fixes start from R1650 with 50% founding discount on first fix (`lib/copy.ts`)
- [ ] Swap the pre-launch Proof section for real case studies once available post-launch

## Brand reference

Full brand-voice rationale, tagline/subhead decisions, and the original
copy draft live in the accompanying `launchgremlin-site-copy-draft.md`
document from the brand session that preceded this scaffold.
