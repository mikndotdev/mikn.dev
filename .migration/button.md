# button

2026-08-12 — transformation engine (legacy `new-york` style: classify-only, no
base-<style> replay). Verdict: migrated to the real `@base-ui/react/button`
primitive; typecheck + full build clean.

## Changed

- `src/components/ui/button.tsx`
  - Import rewired: `@radix-ui/react-slot` (`Slot`) → `Button as ButtonPrimitive`
    from `@base-ui/react/button` (the REAL Base UI Button primitive, per the hard
    rule — not a hand-rolled `useRender` wrapper).
  - Dropped the Slot/`asChild` idiom: `const Comp = asChild ? Slot : "button"`.
    Base UI's Button primitive supports polymorphism natively via `render`, so
    the wrapper no longer needs `asChild`. No consumer used `asChild`, so nothing
    broke at call sites.
  - Dropped `React.forwardRef` + `displayName` in favor of a plain function
    component (React 19 / react-compiler idiom). `ref` still forwards: Base UI's
    `ButtonProps` derives from `React.ComponentPropsWithRef<'button'>`, so `ref`
    flows through `...props` onto the primitive.
  - `ButtonProps` now `extends Omit<ButtonPrimitive.Props, "className">` +
    `VariantProps`. The `className` is Omit-ed and re-declared as `string` because
    Base UI types `className` as `string | ((state) => string | undefined)`, and
    that union is not assignable to `cn(...)`'s `ClassValue` (button.tsx:34).
  - cva class string and all variant/size classes: UNCHANGED (legacy-style
    fidelity — the look stays theirs).
  - Leftover scan clean: `grep -n "radix-ui\|@radix-ui" src/components/ui/button.tsx`
    → no matches.

## Left alone

- `src/components/ui/src/components/ui/button.tsx` — an accidental nested
  duplicate copy of an OLDER (new-york-v4-ish) button, imported by NOBODY
  (verified: `grep -rn "ui/src/components" src/` → none). Still on
  `@radix-ui/react-slot`. Dead code; flagged in `project.md`, not touched (out of
  the "components used on this site" scope, and deleting files was not requested).

## Behavior changes

None. The visual classes are identical; ref-forwarding and all native button
props (`onClick`, `disabled`, `type`, …) are preserved. The only API surface
change is `asChild` → `render`, which had zero call sites.

## Verify by hand

- OSSProductCard buttons (ghost variant, inside `next/link`): confirm hover
  fill/text-primary and the GitHub / Globe icon sizing still render correctly.
- CookieConsentModal "accept" / "policy" buttons: confirm `onClick={accept}`
  fires and full-width layout is intact.
- Keyboard: Tab to a button, confirm `focus-visible` ring shows and Enter/Space
  activate it.
