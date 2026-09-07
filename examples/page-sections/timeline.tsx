import JourneyTimeline from "@/examples/journey-timeline"
import type { PageTimeline } from "@/types/pageSection"

// The same ordered stages on a horizontal rail. Owns the overrides that let
// the timeline sit inside a detail page's narrower column.
export default function TimelineBlock({ section }: { section: PageTimeline }) {
  return (
    <JourneyTimeline
      steps={section.steps}
      className="mt-8 max-w-none px-0 py-0"
    />
  )
}
