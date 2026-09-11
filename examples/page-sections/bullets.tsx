import BulletList from "@/components/bullet-list"
import type { PageBullets } from "@/types/pageSection"

// Bullet points, in a two-column grid by default or a single stack. Layout and
// marker alignment come from @/components/bullet-list; any intro/outro prose is
// rendered by the page template, which frames every section the same way.
export default function BulletsBlock({ section }: { section: PageBullets }) {
  return (
    <BulletList
      items={section.items}
      layout={section.layout ?? "grid"}
      className="mt-6 text-foreground/90"
    />
  )
}
