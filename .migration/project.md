# project

2026-08-12 — Radix UI → Base UI migration of the shadcn wrappers used on this
site. Package manager: bun. Style: `new-york` (legacy, unprefixed → classify-only,
no base-<style> replay). React 19 + Next.js 16 + Tailwind v4.

## Scope

Two shadcn wrappers actually consumed on the site were on Radix and are now on
Base UI:

- `button.tsx` → `@base-ui/react/button` (see `.migration/button.md`)
- `dialog.tsx` → `@base-ui/react/dialog` (see `.migration/dialog.md`)

`card.tsx` and `shadcn-io/spinner` are not Radix and were left untouched.

## Dependency swap

- Added `@base-ui/react@^1.7.0` via `bun add` (the current package — same
  homepage base-ui.com; note `@base-ui-components/react` is the older name).
- Radix packages were NOT removed. Both `radix-ui` and `@radix-ui/react-slot`
  are still imported by non-migrated files (below), so removing them would break
  the build. Left installed intentionally.

## Flagged — remaining Radix, not migrated in this run

`grep -rln "radix-ui\|@radix-ui" src/` → 2 files remain:

1. `src/components/animate-ui/primitives/radix/radio-group.tsx` — a primitive
   from the third-party **@animate-ui** registry (not a `components/ui` shadcn
   wrapper). Imported by NOBODY in the app. Out of scope for a shadcn→Base UI
   pass; animate-ui ships its own Base UI variants, so migrating it means
   pulling the base variant from the animate-ui registry, not applying these
   tables. Left for a separate, explicit decision.
2. `src/components/ui/src/components/ui/button.tsx` — an accidental nested
   duplicate of an old button, imported by NOBODY. Dead code still on
   `@radix-ui/react-slot`. Recommend deleting it (would also let
   `@radix-ui/react-slot` be dropped once #1 is resolved), but deletion was not
   requested, so it was left in place.

## Style-name flag (legacy `new-york`)

`components.json` still reads `"style": "new-york"`, which the shadcn CLI treats
as a Radix style — so a future `shadcn add <component>` will fetch Radix
variants, not Base UI ones. There is no `base-new-york` counterpart to switch to.
Decide later whether to move to a base-* style or add components manually. NOT
changed here (changing it would restyle nothing today but affects future adds).

## App-code sweep

Consumers checked against `consumer-props.md`:

- `CookieConsentModal.tsx` — dialog dismiss handlers removed (see dialog.md).
- `OSSProductCard.tsx` — uses `Button` + `Card` only, no `asChild`, no changed
  props. No edits needed.
- `contact/page.tsx` — uses `Card` only. No edits needed.
- No `asChild` usages anywhere in app code against the migrated wrappers.

## Verify

- Baseline (before deps): `bunx tsc --noEmit` clean.
- After migration: `bunx tsc --noEmit` clean; `bun run build` (next build) exit 0,
  TypeScript passed, all 8 static pages generated. No regressions vs baseline.

## Status (derived from disk)

2 wrappers/files remain on Radix (both unused / dead, listed above). 0 Radix
imports remain among the shadcn wrappers actually used on the site.
