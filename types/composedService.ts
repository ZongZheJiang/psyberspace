import type { PageSection } from "@/types/pageSection"

// A service page described as an ordered list of sections.
//
// Parallel to the `Service` interface in @/types/service, which instead uses
// fixed named slots rendered in an order hardcoded by the page component.
// Here the array order IS the render order.

export interface ComposedService {
    /** URL slug — matches the tail of the matching NAVBAR_SERVICES href. */
    slug: string
    /** Short label used on cards and in the nav. */
    title: string
    /** One-line blurb shown on the overview grid card. */
    tagline: string
    /** Category label shown on the overview grid card. */
    category?: string
    /** Card image shown on the overview grid — root-relative path in `public/`. */
    image?: string
    /** Alt text for `image`. */
    imageAlt?: string
    /** Page content, rendered top to bottom in array order. */
    sections: PageSection[]
}
