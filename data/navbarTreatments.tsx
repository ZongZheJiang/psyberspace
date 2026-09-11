import { NavbarItem } from "@/types/navbarItem"
import { TREATMENTS } from "@/data/treatments"

// Derived from the treatment registry so the dropdown cannot drift from the
// pages it links to: adding a treatment in @/data/treatments adds its nav
// entry, and the order here follows the registry's order.
export const NAVBAR_TREATMENTS: NavbarItem[] = TREATMENTS.map((treatment) => ({
    title: treatment.name,
    href: `/treatments/${treatment.slug}`,
}))
