import Link from "next/link"

import { cn } from "@/lib/utils"
import { headingOf, resolveSection } from "@/examples/composed-sections/registry"
import type { ComposedService } from "@/types/composedService"

const COLUMN = "mx-auto max-w-4xl px-4"
const HEADING = "text-2xl font-bold tracking-tight text-foreground sm:text-3xl"

// Renders a service page by mapping over its sections. This component knows
// nothing about which kinds exist — the registry supplies both the renderer
// and the role — so a new section kind never brings it back for edits. It owns
// only this template's visual language: how an opener, a section and a plain
// block are framed here.
export default function ComposedServiceDetail({
  service,
}: {
  service: ComposedService
}) {
  return (
    <article>
      {service.sections.map((section, index) => {
        const { Block, role } = resolveSection(section)
        // Only `section` roles are titled by the page: an opener renders its
        // own <h1>, and a plain block has no title.
        const heading = role === "section" ? headingOf(section) : undefined

        if (role === "opener") {
          return (
            <section key={index} className="border-b border-border">
              <div className={cn(COLUMN, "py-20 sm:py-24")}>
                <Link
                  href="/services"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  ← All services
                </Link>
                <Block section={section} />
              </div>
            </section>
          )
        }

        // The rule sits on the inner box so it spans the text column, not the
        // column's horizontal padding.
        return (
          <section key={index} className={COLUMN}>
            <div
              className={cn("py-16", role === "section" && "border-b border-border")}
            >
              {heading && <h2 className={HEADING}>{heading}</h2>}
              <Block section={section} />
            </div>
          </section>
        )
      })}
    </article>
  )
}
