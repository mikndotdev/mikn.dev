# dialog

2026-08-12 — transformation engine (legacy `new-york` style: classify-only, no
base-<style> replay). Verdict: migrated to Base UI Dialog (centered modal, no
Positioner); typecheck + full build clean.

## Changed

- `src/components/ui/dialog.tsx`
  - Import rewired: `Dialog as DialogPrimitive` from `radix-ui` →
    `@base-ui/react/dialog`.
  - Part renames: `Overlay` → `Backdrop` (DialogOverlay wrapper), `Content` →
    `Popup` (DialogContent wrapper). Centered modal keeps its own
    `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` positioning — NO
    Positioner (correct for centered dialogs). Root/Trigger/Portal/Close/Title/
    Description names unchanged.
  - Public wrapper export names all preserved (Dialog, DialogClose,
    DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay,
    DialogPortal, DialogTitle, DialogTrigger) — no consumer import broke.
  - Animation selectors rewritten `data-[state=open]` → `data-[open]`,
    `data-[state=closed]` → `data-[closed]` (dialog.tsx:36, dialog.tsx:60). The
    keyframe utilities themselves (`animate-in/out`, `fade-in-0/out-0`,
    `zoom-in-95/out-95`) are KEPT verbatim rather than rewritten to
    transitions: Base UI holds the popup mounted through the `data-[closed]`
    exit keyframe (its transition-status system awaits `animationend`), the
    tw-animate-css keyframes drive the `transform` property directly, and
    Tailwind v4's centering uses the separate `translate` property — so they
    compose without fighting. This maximally preserves the legacy look.
  - Arbitrary `data-[open]:` / `data-[closed]:` variant form used (not the
    `data-open:` shorthand): this project's Tailwind setup imports
    `tw-animate-css` for keyframe utilities only and registers NO
    `data-open`/`data-closed`/`data-starting-style` custom variants, so the
    shorthand would emit no CSS. The arbitrary form always resolves.
  - `className` Omit-ed + re-declared `string` on the Backdrop/Popup/Title/
    Description wrappers (Base UI types it as `string | fn`, incompatible with
    `cn`'s `ClassValue`). Header/Footer use `ComponentProps<"div">`, unchanged.
  - Close button, header/footer/title/description classes, `showCloseButton`
    prop, `data-slot` attributes: UNCHANGED.
  - Leftover scan clean: `grep -n "radix-ui\|@radix-ui\|data-\[state="
src/components/ui/dialog.tsx` → no matches.

- `src/components/CookieConsentModal.tsx` (consumer)
  - Removed the three Radix-only dismiss handlers from `<DialogContent>`:
    `onEscapeKeyDown` / `onPointerDownOutside` / `onInteractOutside`, each of
    which was `(event) => event.preventDefault()`. Base UI's Dialog.Popup does
    not accept these props. The modal's "cannot be dismissed" guarantee is
    preserved another way: it is fully controlled (`open={hasConsent === false}`)
    with NO `onOpenChange`, so escape / outside-press call into a no-op and the
    `open` prop pins it open. See "Behavior changes".

## Left alone

- `sonner` (toast) — not radix; untouched by policy.
- `src/components/ui/card.tsx`, `src/components/ui/shadcn-io/spinner` — not
  radix; untouched.

## Behavior changes

- Non-dismissal now relies on the controlled `open` prop rather than explicit
  `preventDefault` handlers. Net behavior is the same (no escape-to-close, no
  outside-click-to-close) because there is no `onOpenChange` to flip state. If a
  future edit adds `onOpenChange`, dismissal must be re-blocked there via
  `eventDetails.cancel()` (reasons `'escape-key'` / `'outside-press'`) — the
  Radix `preventDefault` idiom no longer exists.
- The Radix dismiss callbacks (`onEscapeKeyDown`, `onPointerDownOutside`,
  `onInteractOutside`) have no 1:1 Base UI prop anywhere; they are consolidated
  into `onOpenChange(open, eventDetails)`. Flagged, not silently re-implemented.

## Verify by hand

- Load the site with no cookie consent stored → the consent modal should appear,
  centered, with the fade + zoom-in enter animation and the black/80 backdrop.
- Press Escape, click the backdrop, click outside → modal must STAY open (it is
  intentionally non-dismissable).
- Click "accept" → consent is stored and the modal closes with the fade +
  zoom-out exit animation (confirm the exit actually plays, not an instant
  disappear — this is the Base-UI-keeps-mounted path).
- Confirm focus is trapped inside the modal (modal defaults to `true`) and the
  DialogTitle is announced (accessibility label present).
