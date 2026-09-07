import BulletList from "@/components/bullet-list"
import type { PageListGroup } from "@/types/pageSection"

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-card-foreground">{heading}</h3>
      <BulletList items={items} size="sm" className="mt-4 text-muted-foreground" />
    </div>
  )
}

// Grid of titled bullet lists — conditions treated, benefits, components.
export default function ListsSection({ items }: { items: PageListGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((list) => (
        <ListBlock key={list.heading} heading={list.heading} items={list.items} />
      ))}
    </div>
  )
}
