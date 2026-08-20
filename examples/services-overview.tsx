import Link from "next/link"

import { SERVICES } from "@/data/services"

// Copy sourced from psyberspacetherapy.com/our-services.
export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Cutting-edge, evidence-based care for lasting transformation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            From ketamine-assisted psychotherapy and EMDR to Sensorimotor
            Psychotherapy, psychedelic integration, and Family-Based Therapy, we
            offer an array of care options for individuals, couples, groups, and
            families — meeting you where other approaches have fallen short.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60 hover:bg-accent/40"
            >
              {service.category && (
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {service.category}
                </p>
              )}
              <h3 className="mt-2 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.tagline}
              </p>
              <span className="mt-4 text-sm font-medium text-primary">
                Read more
                <span
                  aria-hidden
                  className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
