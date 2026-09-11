import { NavbarItem } from "@/types/navbarItem"
import { SERVICES } from "@/data/services"

// Derived from the service registry so the dropdown cannot drift from the
// pages it links to: adding a service in @/data/services adds its nav entry,
// and the order here follows the registry's order.
export const NAVBAR_SERVICES: NavbarItem[] = SERVICES.map((service) => ({
    title: service.title,
    href: `/services/${service.slug}`,
}))
