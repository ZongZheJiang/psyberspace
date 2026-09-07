import TimelineSection from "@/examples/service-sections/timeline"
import type { PageTimeline } from "@/types/pageSection"

export default function TimelineBlock({ section }: { section: PageTimeline }) {
  return <TimelineSection items={section.steps} />
}
