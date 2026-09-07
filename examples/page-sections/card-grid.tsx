import type { PageCardGrid } from "@/types/pageSection"

// Titled cards in a three-column grid.
export default function CardGridBlock({ section }: { section: PageCardGrid }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-3">
      {section.cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <h3 className="text-lg font-semibold text-card-foreground">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}
