import Link from "next/link"

import { cn } from "@/lib/utils"
import { headingOf, resolveSection } from "@/examples/composed-sections/registry"
import type { ComposedTreatment } from "@/types/composedTreatment"

const COLUMN = "mx-auto max-w-4xl px-4"
const HEADING = "text-2xl font-bold tracking-tight text-foreground sm:text-3xl"

// Renders a treatment page from the same section vocabulary and registry as
// ComposedServiceDetail. Only the framing differs: the opener carries no rule,
// and content sections are full-width bands separated by a top rule.
export default function ComposedTreatmentDetail({
  treatment,
}: {
  treatment: ComposedTreatment
}) {
  return (
    <article>
      {treatment.sections.map((section, index) => {
        const { Block, role } = resolveSection(section)
        const heading = role === "section" ? headingOf(section) : undefined

        if (role === "opener") {
          return (
            <header key={index} className={cn(COLUMN, "py-20 sm:py-24")}>
              <Link
                href="/treatments"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                ← All treatments
              </Link>
              <Block section={section} />
            </header>
          )
        }

        return (
          <section
            key={index}
            className={cn(role === "section" && "border-t border-border")}
          >
            <div className={cn(COLUMN, "py-16 sm:py-20")}>
              {heading && <h2 className={HEADING}>{heading}</h2>}
              <Block section={section} />
            </div>
          </section>
        )
      })}
    </article>
  )
}
