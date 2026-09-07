import type { PageSection } from "@/types/pageSection"

// A treatment page described as an ordered list of sections, using the same
// shared vocabulary as `Service` in @/types/service.

export interface Treatment {
    /** URL slug — matches the hrefs in @/data/navbarTreatments. */
    slug: string
    /** Short label used on the landing grid and in navigation. */
    name: string
    /** One-line blurb shown on the landing card. */
    tagline: string
    /** Root-relative path to the landing-card image. */
    image: string
    /** Alt text describing the landing-card image. */
    imageAlt: string
    /** Page content, rendered top to bottom in array order. */
    sections: PageSection[]
}
