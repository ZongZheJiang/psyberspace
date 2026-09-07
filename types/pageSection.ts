// Section vocabulary shared by composed service and treatment pages.
//
// Each variant is discriminated by `kind`, so a page is described as an
// ordered array of sections rather than a fixed set of named slots. Adding a
// new kind means adding a member here and a renderer for it — the page
// components that map over sections never change.
//
// Parallel to @/types/service and @/types/treatment, neither of which this
// replaces yet.

/** One entry in an ordered sequence, shared by `steps` and `timeline`. */
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
}

/** Explainer prose, e.g. "What is EMDR therapy?". */
export interface PageWhatIs {
    kind: "what-is"
    heading: string
    body: string[]
}

/** Ordered stages rendered as a numbered list. */
export interface PageSteps {
    kind: "steps"
    heading: string
    steps: PageStepItem[]
}

/** The same ordered stages, rendered on a horizontal rail. */
export interface PageTimeline {
    kind: "timeline"
    heading: string
    steps: PageStepItem[]
}

/** Grid of titled bullet lists — conditions, benefits, components. */
export interface PageLists {
    kind: "lists"
    /** Optional; the groups carry their own headings. */
    heading?: string
    groups: PageListGroup[]
}

/** Audience list, e.g. "Who it's for". */
export interface PageWhoItsFor {
    kind: "who-its-for"
    heading: string
    items: string[]
}

/** Legal or availability disclaimer, rendered as a muted box. */
export interface PageCallout {
    kind: "callout"
    body: string
}

/** Bullet points in a two-column grid, optionally introduced by a paragraph. */
export interface PageBulletGrid {
    kind: "bullet-grid"
    heading: string
    intro?: string
    items: string[]
}

/** Titled cards in a three-column grid. */
export interface PageCardGrid {
    kind: "card-grid"
    heading: string
    cards: PageCard[]
}

/** Every section a composed page can contain. */
export type PageSection =
    | PageHero
    | PageWhatIs
    | PageSteps
    | PageTimeline
    | PageLists
    | PageWhoItsFor
    | PageCallout
    | PageBulletGrid
    | PageCardGrid

/** Narrows the union to the variant carrying a given `kind`. */
export type SectionOf<K extends PageSection["kind"]> = Extract<
    PageSection,
    { kind: K }
>
