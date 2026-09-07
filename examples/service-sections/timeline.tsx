import JourneyTimeline from "@/examples/journey-timeline"
import type { PageStepItem } from "@/types/pageSection"

// Ordered steps as a horizontal rail. Owns the overrides that let the
// timeline sit inside the detail page's narrower column.
export default function TimelineSection({ items }: { items: PageStepItem[] }) {
  return <JourneyTimeline steps={items} className="mt-8 max-w-none px-0 py-0" />
}
