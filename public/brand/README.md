# /public/brand

The navbar's top-left mark reads from `SITE.wordmark` in
[`src/lib/site.ts`](../../src/lib/site.ts). Ship-in-place is a hand-drawn
"JS" monogram placeholder (`wordmark.svg`). To swap:

1. Drop your logo file here (any name/format — SVG scales best, but PNG/JPG
   work too). Keep it roughly square unless your mark is a wide wordmark.
2. Update `SITE.wordmark`:

   ```ts
   wordmark: {
     src: "/brand/my-logo.svg",  // path under /public
     width: 40,                   // rendered width in px
     height: 40,                  // rendered height in px
     alt: "Joshua Song",          // screen-reader text
   },
   ```

Suggested default size ~40x40 for parity with the placeholder. If your
mark is much wider than tall (e.g. a handwritten name), bump `width` and
lower `height` to match — the navbar will accommodate.

The full name still appears in the sidebar profile card, so the wordmark
here can be purely symbolic.
