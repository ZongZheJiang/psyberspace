<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Psyberspace

Psyberspace is a marketing and content site built on Next.js with the App Router. It is styled with Tailwind CSS and composed from Shadcn UI primitives.

## Setup

Requires Node.js 18 or higher and npm. Run `npm install` to download dependencies.

## Running

- **Development:** `npm run dev`, then open http://localhost:3000. The page auto-updates as you edit.
- **Production:** `npm run build` followed by `npm start`.
- **Lint:** `npm run lint`.

## Project Structure

The codebase follows a layered structure. Each layer has one job — respect the boundaries.

- **app/** — Next.js App Router routes (pages, layouts, `api/` route handlers, blog posts, global CSS). Keep pages thin: they wire routes to sections, they do not hold complex logic or markup.
- **components/** — Shared UI building blocks.
  - **components/ui/** — Unmodified Shadcn components. Treat as vendored: do not hand-edit.
- **examples/** — Composed sections that combine base components into page-ready layouts (heroes, carousels, card grids, forms).
- **data/** — Static TypeScript/TSX content objects that supply copy and configuration. Keep data separate from JSX-heavy presentation.
- **types/** — TypeScript interfaces describing the shape of the data objects.
- **lib/** — Utilities and integrations (`cn` helper, Supabase clients, GSAP setup, schemas).
- **public/** — Static assets (logos, icons, images, video). Reference with root-relative paths (e.g. `/psyberspace_logo.png`).

## Development Principles

- **Pull components from Shadcn first.** Before writing any UI primitive by hand, add it from Shadcn (`npx shadcn@latest add <component>`). Only build a bespoke component when Shadcn has no equivalent. Prefer composing Shadcn primitives over reinventing them.
- **Never modify Shadcn components in `components/ui/`.** They are vendored and unmodified. To customize, wrap or compose them in `components/` or `examples/` — do not edit the source in `ui/`.
- **Compose freely in `examples/`.** Build page-ready sections here by combining base components. This is where layout and composition live.
- **Keep data out of JSX.** Copy, lists, and configuration belong in `data/`, typed against interfaces in `types/`. Components consume data; they do not embed it.
- **Keep `app/` pages minimal.** Pages assemble sections and pass data. Push complexity down into `examples/`, `components/`, and `lib/`.
- **Store assets in `public/`** and reference them with root-relative paths.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · Shadcn UI (Radix) · Supabase · GSAP / Framer Motion.
