import BulletList from "@/components/bullet-list"
import type { PageLists } from "@/types/pageSection"

function ListCard({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-card-foreground">{heading}</h3>
      <BulletList items={items} size="sm" className="mt-4 text-muted-foreground" />
    </div>
  )
}

// Grid of titled bullet lists — conditions treated, benefits, components.
export default function ListsBlock({ section }: { section: PageLists }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {section.groups.map((group) => (
        <ListCard key={group.heading} heading={group.heading} items={group.items} />
      ))}
    </div>
  )
}
