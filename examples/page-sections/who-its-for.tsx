import BulletList from "@/components/bullet-list"
import type { PageWhoItsFor } from "@/types/pageSection"

// Plain bulleted list at body-copy size ("Who it's for").
export default function WhoItsForBlock({ section }: { section: PageWhoItsFor }) {
  return (
    <BulletList
      items={section.items}
      size="lg"
      className="mt-6 text-muted-foreground"
    />
  )
}
