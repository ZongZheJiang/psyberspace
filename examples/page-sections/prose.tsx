import type { PageProse } from "@/types/pageSection"

// The workhorse block: titled body copy. Pages stack several of these, and a
// run of prose continuing the section above simply omits its heading.
export default function ProseBlock({ section }: { section: PageProse }) {
  return (
    <div className="mt-6 space-y-4">
      {section.body.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
