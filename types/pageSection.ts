import type { FaqItem } from "@/types/faqItem"

// Section vocabulary shared by the service and treatment detail pages.
//
// Each variant is discriminated by `kind`, so a page is described as an
// ordered array of sections rather than a fixed set of named slots. Adding a
// new kind means adding a member here and a renderer in
// @/examples/page-sections — the page components that map over sections never
// change.

/**
 * Optional prose framing a section's body. Rendered by the page template, not
 * by the block — the template already owns the heading, and every kind that
 * opts in gets the same rhythm rather than its own copy of the markup.
 */
export interface PageSectionProse {
    /** Paragraphs between the heading and the body. */
    intro?: string[]
    /** Closing paragraphs after the body. */
    outro?: string[]
}

/** One entry in an ordered sequence. */
export interface PageStepItem {
    title: string
    description: string
}

/** A titled group of bullet points, e.g. "Conditions it treats". */
export interface PageListGroup {
    heading: string
    items: string[]
}

/** A titled paragraph rendered as a card. */
export interface PageCard {
    title: string
    description: string
}

/** Page opener: eyebrow, headline, optional standfirst, intro paragraphs. */
export interface PageHero {
    kind: "hero"
    /** Small category label above the headline. */
    eyebrow?: string
    heading: string
    /** Larger lead paragraph directly under the headline. */
    subheading?: string
    intro: string[]
    /**
     * Banner image above the headline — root-relative path in `public/`.
     * Distinct from `Service.image`, which is the overview grid's card art.
     */
    image?: string
    /** Alt text for `image`. Empty string marks it as decorative. */
    imageAlt?: string
}

/** Titled body copy — the most common section on a page. */
export interface PageProse {
    kind: "prose"
    /** Optional: prose continuing the section above carries no heading. */
    heading?: string
    body: string[]
}

/**
 * Ordered stages. `display` picks the presentation: the horizontal rail by
 * default, or a numbered list when a sequence has too many stages to stay
 * legible across grid columns.
 */
export interface PageSequence extends PageSectionProse {
    kind: "sequence"
    heading: string
    display?: "rail" | "list"
    steps: PageStepItem[]
}

/** Grid of titled bullet lists — conditions, benefits, components. */
export interface PageLists {
    kind: "lists"
    /** Optional; the groups carry their own headings. */
    heading?: string
    groups: PageListGroup[]
}

/** Bullet points, in a two-column grid by default or a single stack. */
export interface PageBullets extends PageSectionProse {
    kind: "bullets"
    /** Optional: a list continuing the section above carries no heading. */
    heading?: string
    layout?: "stack" | "grid"
    items: string[]
}

/** Titled cards in a three-column grid. */
export interface PageCardGrid extends PageSectionProse {
    kind: "card-grid"
    heading: string
    cards: PageCard[]
}

/**
 * An embedded video. `url` accepts any shape @/lib/youtube understands —
 * watch, youtu.be, /shorts/, /embed/ — or a directly embeddable URL.
 */
export interface PageVideo {
    kind: "video"
    /** Optional own title; without it the video sits under the section above. */
    heading?: string
    url: string
    /** Accessible name for the iframe. */
    title: string
    /** Optional line of context under the player. */
    caption?: string
}

/** Mid-page call to action. Defaults come from @/examples/cta-section. */
export interface PageCta {
    kind: "cta"
    heading?: string
    body?: string
    primaryLabel?: string
    primaryHref?: string
    note?: string
}

/** Accordion of question-and-answer pairs. */
export interface PageFaq {
    kind: "faq"
    heading: string
    items: FaqItem[]
}

/** Every section a detail page can contain. */
export type PageSection =
    | PageHero
    | PageProse
    | PageSequence
    | PageLists
    | PageBullets
    | PageCardGrid
    | PageVideo
    | PageCta
    | PageFaq

/** Narrows the union to the variant carrying a given `kind`. */
export type SectionOf<K extends PageSection["kind"]> = Extract<
    PageSection,
    { kind: K }
>
