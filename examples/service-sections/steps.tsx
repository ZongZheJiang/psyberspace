import type { PageStepItem } from "@/types/pageSection"

// Ordered steps as a numbered list.
export default function StepsSection({ items }: { items: PageStepItem[] }) {
  return (
    <ol className="mt-8 space-y-6">
      {items.map((step, index) => (
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
