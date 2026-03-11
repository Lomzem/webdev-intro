# Web Dev Fundamentals

An interactive guide that explains modern web development concepts for CS students with no prior web experience.

**[View the live site](https://lomzem.github.io/webdev-intro/)**

## What's Covered

1. **The Old Days** — Raw HTML, CSS & JS before modern tooling
2. **Package Managers** — npm, pnpm & bun
3. **Bundlers** — Vite & Webpack
4. **JS Runtimes** — Node.js, Bun & Deno
5. **Frontend Frameworks** — React, Vue & Svelte
6. **TypeScript** — Types for JavaScript (.js, .jsx, .ts, .tsx explained)
7. **CSS Frameworks** — Tailwind CSS
8. **Data Fetching** — TanStack Query (useQuery & useMutation)
9. **Fullstack Frameworks** — Next.js & Remix (CSR, SSR & SSG)
10. **Databases & ORMs** — Drizzle, Convex & SQL
11. **Putting It Together** — The full architecture picture

Each section emphasizes **where** each tool runs (your machine, the browser, or the server) and includes sequence diagrams showing how data flows between the client and server.

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions. To enable, go to your repo **Settings → Pages → Source** and select **GitHub Actions**.

## Built With

- [Vite](https://vite.dev) — Bundler
- [React](https://react.dev) — UI framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
