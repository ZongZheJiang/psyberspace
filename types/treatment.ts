// Shape of a treatment page. Landing-card fields (name, tagline) plus the
// full detail content rendered on /treatments/[slug].

export interface TreatmentCard {
    title: string
    description: string
}

export interface TreatmentSection {
    heading: string
    intro?: string
    // A plain bullet list (symptoms, conditions, struggles).
    items?: string[]
    // Titled items (approaches, benefits) rendered as a card grid.
    cards?: TreatmentCard[]
}

export interface Treatment {
    // URL slug — matches the hrefs in data/navbarTreatments.
    slug: string
    // Short label used on the landing grid and in navigation.
    name: string
    // One-line blurb shown on the landing card.
    tagline: string
    // Hero copy on the detail page.
    heading: string
    subheading: string
    // Opening paragraphs beneath the hero.
    intro: string[]
    // Ordered content sections.
    sections: TreatmentSection[]
}
