import { CtaContent } from "@/examples/cta-section"
import type { PageCta } from "@/types/pageSection"

// A mid-page call to action, rendered as a card rather than the full-width
// band the closing CtaSection uses — a band inside the text column would read
// as a page break. Registered as `plain` so the template draws no <h2>;
// CtaContent supplies its own, along with the default booking link.
export default function CtaBlock({ section }: { section: PageCta }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
      <CtaContent
        heading={section.heading}
        body={section.body}
        primaryLabel={section.primaryLabel}
        primaryHref={section.primaryHref}
        note={section.note}
      />
    </div>
  )
}
