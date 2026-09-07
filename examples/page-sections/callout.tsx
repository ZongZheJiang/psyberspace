import type { PageCallout } from "@/types/pageSection"

// Legal / availability disclaimer rendered as a muted box.
export default function CalloutBlock({ section }: { section: PageCallout }) {
  return (
    <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
      {section.body}
    </p>
  )
}
