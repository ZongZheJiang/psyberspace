import ListsSection from "@/examples/service-sections/lists"
import type { PageLists } from "@/types/pageSection"

export default function ListsBlock({ section }: { section: PageLists }) {
  return <ListsSection items={section.groups} />
}
