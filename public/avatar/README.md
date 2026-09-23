# /public/avatar

Drop your headshot in this folder (e.g. `joshua.jpg`, `joshua.png`, or `joshua.svg`)
and update `SITE.avatar` in [`src/lib/site.ts`](../../src/lib/site.ts) to point to it:

```ts
export const SITE = {
  ...
  avatar: "/avatar/joshua.jpg",
};
```

The sidebar renders the image at 112x112 in a round frame. A square source
(1:1 aspect ratio, at least 224x224 for crisp retina) works best.
