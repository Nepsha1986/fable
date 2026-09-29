# Fable

A scroll-driven story that dives from the night sky to the bottom of the ocean —
and an experiment in building **parallax with CSS 3D perspective** instead of
JavaScript-driven layer offsets.

## The technique

The classic parallax moves every layer along the Y axis on scroll, each with its
own speed. Here every scene is a small 3D box instead:

1. The scene's stage has `perspective: 600px`.
2. Each layer is pushed away from the viewer with `transform: translateZ(<depth>px)`.
3. While the scene scrolls through the viewport, only one property changes —
   the stage's `perspective-origin`, from `50% 0%` to `50% 100%`.

The browser does the rest: distant layers shift less than near ones, exactly
like in real life. One CSS property per scene is animated, and it's driven by a
[framer-motion](https://www.framer.com/motion/) motion value, so React never
re-renders while you scroll.

```tsx
<Scene
  background="linear-gradient(#000922, #00455f)"
  layers={
    <>
      <SceneItem depth={-600} width="1200px" bottom="-100px" left="-30%">
        <Sun />
      </SceneItem>
      <SceneItem
        depth={-300}
        width="500px"
        top="5%"
        right="-20%"
        motion={{ opacity: [1, -1], y: [0, -1000] }} // extra scroll-linked motion
      >
        <Art src={moon} />
      </SceneItem>
    </>
  }
>
  <SceneText position="bottom">
    <h2>Life is a Canvas of Endless Possibilities</h2>
  </SceneText>
</Scene>
```

Pass `debug` to a `<Scene>` to draw the walls of its 3D box.

## Under the hood

- **Server Components first.** Scenes are rendered on the server and the page is
  fully static; only the scroll-aware pieces (`Scene`, `SceneItem`,
  `SceneText`, the dialog) ship JavaScript.
- **Artwork as SVG files.** Illustrations live in `src/assets/art` and are
  rendered through `next/image`: cached, lazy-loaded and rasterized as a single
  image instead of thousands of DOM nodes inside 3D-transformed layers.
- **Deterministic randomness.** Stars, bubbles, birds and fishes are scattered
  with a seeded PRNG (`src/utils/random.ts`), so the layout is stable between
  builds and server/client output always matches.
- **Responsive stage.** On narrow screens the 3D stage keeps a minimal width and
  is centered, so the artwork is cropped rather than shrunk to a thin strip.
- **Accessibility.** Decorative layers are hidden from assistive technologies,
  the About dialog is a native `<dialog>` (Esc, backdrop click, focus
  handling), and `prefers-reduced-motion` freezes the parallax and animations.

## Project structure

```
src/
├── app/
│   ├── _scenes/        # NightSky → Sunrise → Ocean → Reef → Cave → Abyss
│   ├── layout.tsx
│   └── page.tsx
├── assets/art/         # SVG illustrations, grouped by scene
├── components/
│   ├── Scene/          # Scene, SceneItem, SceneText, Reveal
│   └── ...             # UI (header, footer, dialog) and small inline artwork
├── config/site.ts      # Site name, description, links
└── utils/random.ts     # Seeded PRNG + scatter helper
```

## Getting started

Requires Node.js 18.17+ (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script                 | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the dev server                          |
| `npm run build`        | Production build                              |
| `npm start`            | Serve the production build                    |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | TypeScript                                    |
| `npm run format`       | Format with Prettier                          |
| `npm run check`        | Format check + lint + typecheck (same as CI)  |

## Credits

Made by [Alex Nepsha](https://alex.gift-idea.co).
