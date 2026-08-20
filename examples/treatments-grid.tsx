import Link from "next/link"

import { TREATMENTS } from "@/data/treatments"

// Landing grid for /treatments — one card per condition, linking to its
// detail page. Copy sourced from psyberspacetherapy.com/treatments.
export default function TreatmentsGrid() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Treatments
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Care for the conditions that hold you back
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From anxiety and depression to trauma, eating disorders, and
            end-of-life care, we offer evidence-based, compassionate treatment
            tailored to you — including ketamine-assisted psychotherapy, EMDR,
            and Sensorimotor Psychotherapy. Explore the conditions we treat.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-muted/40"
            >
              <h2 className="text-xl font-semibold text-card-foreground">
                {treatment.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {treatment.tagline}
              </p>
              <span className="mt-4 text-sm font-medium text-foreground group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
