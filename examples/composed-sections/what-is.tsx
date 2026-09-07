import ProseSection from "@/examples/service-sections/prose"
import type { PageWhatIs } from "@/types/pageSection"

export default function WhatIsBlock({ section }: { section: PageWhatIs }) {
  return <ProseSection body={section.body} />
}
