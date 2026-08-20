export interface ServiceStep {
    title: string
    description: string
}

export interface ServiceList {
    heading: string
    items: string[]
}

export interface Service {
    /** URL slug — matches the tail of the matching NAVBAR_SERVICES href. */
    slug: string
    /** Short label used on cards and in the nav. */
    title: string
    /** One-line blurb shown on the overview grid card. */
    tagline: string
    /** Long headline shown at the top of the detail page. */
    heroHeading: string
    /** Optional eyebrow/category label. */
    category?: string
    /** Overview paragraphs. */
    intro: string[]
    /** "What is …" explainer. */
    whatIs?: { heading: string; body: string[] }
    /** Ordered "how it works" steps. */
    steps?: { heading: string; items: ServiceStep[] }
    /** Bulleted lists — conditions treated, benefits, components, etc. */
    lists?: ServiceList[]
    /** "Who it's for" list. */
    whoFor?: { heading: string; items: string[] }
    /** Legal / availability disclaimer rendered as a callout. */
    note?: string
}
