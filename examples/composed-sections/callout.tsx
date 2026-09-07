import CalloutSection from "@/examples/service-sections/callout"
import type { PageCallout } from "@/types/pageSection"

export default function CalloutBlock({ section }: { section: PageCallout }) {
  return <CalloutSection body={section.body} />
}
