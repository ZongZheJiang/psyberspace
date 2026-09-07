import BulletList from "@/components/bullet-list"
import type { PageBulletGrid } from "@/types/pageSection"

// Bullets in a two-column grid, optionally introduced by a paragraph.
export default function BulletGridBlock({ section }: { section: PageBulletGrid }) {
  return (
    <>
      {section.intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {section.intro}
        </p>
      )}
      <BulletList
        items={section.items}
        layout="grid"
        className="mt-6 text-foreground/90"
      />
    </>
  )
}
