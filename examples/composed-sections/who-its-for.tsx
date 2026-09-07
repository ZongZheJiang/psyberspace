import BulletsSection from "@/examples/service-sections/bullets"
import type { PageWhoItsFor } from "@/types/pageSection"

export default function WhoItsForBlock({ section }: { section: PageWhoItsFor }) {
  return <BulletsSection items={section.items} />
}
