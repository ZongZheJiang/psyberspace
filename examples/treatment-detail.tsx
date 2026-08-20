import Link from "next/link"

import { Treatment, TreatmentSection } from "@/types/treatment"

function Section({ section }: { section: TreatmentSection }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {section.heading}
        </h2>

        {section.intro && (
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {section.intro}
          </p>
        )}

        {section.items && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground/90"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.cards && (
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
        )}
      </div>
    </section>
  )
}

// Full detail layout for a single treatment. Consumes a Treatment object and
// renders hero, intro, and each content section.
export default function TreatmentDetail({ treatment }: { treatment: Treatment }) {
  return (
    <article>
      <header className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <Link
          href="/treatments"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← All treatments
        </Link>
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {treatment.name}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {treatment.heading}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-foreground/80">
          {treatment.subheading}
        </p>
        {treatment.intro.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </header>

      {treatment.sections.map((section) => (
        <Section key={section.heading} section={section} />
      ))}
    </article>
  )
}
