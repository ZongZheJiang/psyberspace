This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Adding a Service or Treatment

Service and treatment pages are **data, not components**. Each page is one file
describing an ordered list of sections. The route, the overview-grid card, and
the navbar dropdown entry are all generated from that file — you never touch a
component to add a page.

### Add a service

**1. Create `data/services/<slug>.ts`.** The filename slug becomes the URL
(`/services/<slug>`). Export a single `Service`, named in camelCase:

```ts
import type { Service } from "@/types/service"

export const artTherapy: Service = {
    slug: "art-therapy",
    title: "Art Therapy",
    tagline: "One line, shown on the overview card.",
    category: "Trauma & Anxiety",                  // optional
    image: "/productSummaryCards/art-therapy.jpg", // optional
    imageAlt: "A person painting at an easel",     // optional
    sections: [
        { kind: "hero", heading: "...", intro: ["..."] },
        { kind: "prose", heading: "What Is Art Therapy?", body: ["..."] },
    ],
}
```

**2. Register it in `data/services/index.ts`** — add the import, then add it to
the `SERVICES` array. **Array order is render order:** it sets the sequence of
both the overview grid and the navbar dropdown. The list is deliberately
explicit rather than read from the filesystem, because that order is content.

That is the whole job. In particular:

- **Do not edit `data/navbarServices.tsx`.** It derives its entries from
  `SERVICES`, so the dropdown cannot drift from the pages it links to.
- **Do not add a route.** `app/services/[slug]/page.tsx` prerenders every
  registered slug at build time and builds the page title and meta description
  from `title` and `tagline`.

### Add a treatment

The same two steps under `data/treatments/`, registering in
`data/treatments/index.ts`. `data/navbarTreatments.tsx` is likewise derived.

Two differences worth knowing:

- `Treatment` calls its label **`name`**, not `title`, has no `category`, and
  **requires** `image` and `imageAlt` (on `Service` all three are optional).
- The treatment route builds its `<title>` from the **hero's `heading`** and its
  meta description from the **hero's `subheading`**, falling back to `name` and
  `tagline` when the hero omits them. (The service route uses `title` and
  `tagline` directly.) So on a treatment, give the hero a `subheading` — it is
  what search results will show.

```ts
import type { Treatment } from "@/types/treatment"

export const insomnia: Treatment = {
    slug: "insomnia",
    name: "Insomnia",
    tagline: "Rest that actually restores.",
    image: "/assets/treatments/insomnia.jpg",
    imageAlt: "A dimly lit bedroom at night",
    sections: [/* ... */],
}
```

### Page sections

Both page types draw on the same section vocabulary, defined in
`types/pageSection.ts` and rendered by `examples/page-sections/`. Each section
is discriminated by its `kind`, so your editor will autocomplete the fields
once you type one.

| `kind` | Renders | Key fields |
| --- | --- | --- |
| `hero` | Page opener | `heading`, `intro[]`; optional `eyebrow`, `subheading`, `image`, `imageAlt` |
| `prose` | Titled body copy | `body[]`; optional `heading` |
| `bullets` | Bullet points, two-column grid or a single stack | `items[]`; optional `heading`, `layout: "stack" \| "grid"` |
| `lists` | Grid of titled bullet lists | `groups[]` of `{ heading, items[] }`; optional `heading` |
| `sequence` | Ordered stages | `heading`, `steps[]` of `{ title, description }`; optional `display: "rail" \| "list"` |
| `card-grid` | Titled cards in a three-column grid | `heading`, `cards[]` of `{ title, description }` |
| `video` | Embedded video | `url`, `title`; optional `heading`, `caption` |
| `faq` | Question-and-answer accordion | `heading`, `items[]` of `{ id, question, answer }` |
| `cta` | Mid-page call to action | all optional |

Notes:

- **Start with a `hero`.** It is the page's headline block; everything after it
  renders top to bottom in array order.
- **Do not end with a `cta`.** The page template already closes every page with
  one. Use a `cta` section only for a genuine mid-page interruption.
- `bullets`, `sequence`, and `card-grid` also accept `intro[]` and `outro[]`
  paragraphs, rendered by the template above and below the block.
- `video` accepts any YouTube URL shape that `lib/youtube.ts` understands —
  `watch?v=`, `youtu.be/`, `/shorts/`, `/embed/`, `/live/`, `/v/` — or a URL
  that is already directly embeddable, which is passed through untouched. Its
  `title` is the iframe's accessible name, so write it for a screen reader.
- Reordering a page is a data edit: move the section within the array.

**Adding a new section kind** is a three-file change: add the variant to the
union in `types/pageSection.ts`, add its renderer under
`examples/page-sections/`, and register it in
`examples/page-sections/registry.ts`. The registry is a mapped type over the
union, so forgetting the last step is a compile error rather than a runtime
one. The page templates themselves never change.

### Images

Put image files under `public/` and reference them with root-relative paths
(`/productSummaryCards/art-therapy.jpg`). Card art is served through
`next/image`, so the path must resolve at build time. Write real `imageAlt`
text; use an empty string only when the image is purely decorative.

### Check your work

```bash
npx tsc --noEmit    # the Service/Treatment types catch most mistakes
npm run lint
npm run dev         # then visit /services/<slug> and the navbar dropdown
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
