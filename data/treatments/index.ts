import type { Treatment } from "@/types/treatment"

import { anxiety } from "./anxiety"
import { depression } from "./depression"
import { eatingDisorders } from "./eating-disorders"
import { ocdOcpd } from "./ocd-ocpd"
import { palliativeCare } from "./palliative-care"
import { ptsdTrauma } from "./ptsd-trauma"

// The treatment registry. One file per treatment in this directory; each
// exports a single `Treatment` whose `sections` array is its page, top to
// bottom, using the same section vocabulary as @/data/services. Adding a
// treatment means adding a file here and listing it below — array order is the
// order of the landing grid and the navbar dropdown, so it is data worth
// keeping explicit rather than deriving from the filesystem.
//
// Copy is transcribed from the live condition pages, which WordPress files
// under /services/ but which this site groups under /treatments/. Mid-page
// booking CTAs are omitted; the page template closes with a single CtaSection.
// @/data/navbarTreatments derives the dropdown from this list, so a slug here
// is the single source of the /treatments/[slug] route.

export const TREATMENTS: Treatment[] = [
    anxiety,
    depression,
    eatingDisorders,
    ocdOcpd,
    palliativeCare,
    ptsdTrauma,
]

export function getTreatment(slug: string): Treatment | undefined {
    return TREATMENTS.find((treatment) => treatment.slug === slug)
}
