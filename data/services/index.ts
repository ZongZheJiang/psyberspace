import type { Service } from "@/types/service"

import { emdr } from "./emdr"
import { fbt } from "./fbt"
import { kap } from "./kap"
import { groupKap } from "./group-kap"
import { medicationManagement } from "./medication-management"
import { mdma } from "./mdma"
import { psilocybin } from "./psilocybin"
import { psychotherapy } from "./psychotherapy"
import { relationshipFamilyKap } from "./relationship-family-kap"
import { sensorimotor } from "./sensorimotor"
import { trip } from "./trip"
import { grip } from "./grip"

// The service registry. One file per service in this directory; each exports a
// single `Service` whose `sections` array is its page, top to bottom. Adding a
// service means adding a file here and listing it below — array order is the
// order of the overview grid and the navbar dropdown, so it is data worth
// keeping explicit rather than deriving from the filesystem.
//
// Copy is transcribed from the live subpages under
// psyberspacetherapy.com/services (TRIP™ and GRIP™ have their own top-level
// pages). The repeated mid-page "Book an Appointment" blocks are deliberately
// not carried over: the page template closes with a single CtaSection.
// @/data/navbarServices derives the dropdown from this list, so a slug here is
// the single source of the /services/[slug] route.

export const SERVICES: Service[] = [
    emdr,
    fbt,
    kap,
    groupKap,
    medicationManagement,
    mdma,
    psilocybin,
    psychotherapy,
    relationshipFamilyKap,
    sensorimotor,
    trip,
    grip,
]

export function getService(slug: string): Service | undefined {
    return SERVICES.find((service) => service.slug === slug)
}
