import JourneyTimeline from "@/examples/journey-timeline"
import type { PageSequence } from "@/types/pageSection"

// Ordered stages in either presentation. The rail is the default; a numbered
// list reads better once a sequence has more stages than fit legibly across
// the rail's grid columns. Both render the same payload, so switching is a
// one-word data edit.
export default function SequenceBlock({ section }: { section: PageSequence }) {
  if (section.display === "list") {
    return (
      <ol className="mt-8 space-y-6">
        {section.steps.map((step, index) => (
          <li key={step.title} className="flex gap-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-sm font-semibold text-foreground">
              {index + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  // Owns the overrides that let the rail sit inside a detail page's column.
  return (
    <JourneyTimeline
      steps={section.steps}
      className="mt-8 max-w-none px-0 py-0"
    />
  )
}
