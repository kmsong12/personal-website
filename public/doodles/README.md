# /public/doodles

Drop hand-drawn SVGs into this folder and reference them via the `<Doodle>`
component ([`src/components/Doodle.tsx`](../../src/components/Doodle.tsx)):

```tsx
import Doodle from "@/components/Doodle";

<Doodle src="/doodles/pencil.svg" top={40} right={80} rotate={-8} width={90} />
```

The parent element must be `position: relative` (the `SketchbookPage` card
already is). Any `<Doodle>` positions itself absolutely against that parent.

Shipped defaults:

- `arrow.svg` — a curved dashed arrow (ink).
- `star.svg` — a five-point sketchy star (rust accent).
- `squiggle.svg` — a wavy underline (ink).

Swap these files (keep the names) to replace the default look everywhere they
are referenced, or add new files and reference them by new names.
