# sadabkhan01.github.io

Personal portfolio of **Sadab Khan** — CS @ SFU · SWE @ OSI Maritime Systems · Software Lead @ SFU Satellite Design · Product Head @ Fitsomnia.

**Live:** https://sadabkhan01.github.io

## Stack

React 18 + Vite + Framer Motion, with an Anthropic-inspired design system — warm cream palette, serif display type, terracotta accents, and generous whitespace.

- Typewriter role rotation, scroll-linked starburst mark, and staggered scroll-reveal animations
- All content lives in [`src/data.js`](src/data.js) — edit that file to update the site
- Fully responsive with a mobile nav and `prefers-reduced-motion` support

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

Deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/static.yml` (builds with Node 22 and publishes `dist/`).
