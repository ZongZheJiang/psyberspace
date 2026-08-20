import Link from "next/link"

import { Service } from "@/types/service"

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-card-foreground">{heading}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Renders a single service's detail page from a Service data object.
export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <article>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ← All services
          </Link>
          {service.category && (
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {service.category}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {service.heroHeading}
          </h1>
          {service.intro.map((paragraph, index) => (
            <p
              key={index}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4">
        {/* What is … */}
        {service.whatIs && (
          <section className="border-b border-border py-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.whatIs.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {service.whatIs.body.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* How it works — steps */}
        {service.steps && (
          <section className="border-b border-border py-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.steps.heading}
            </h2>
            <ol className="mt-8 space-y-6">
              {service.steps.items.map((step, index) => (
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
          </section>
        )}

        {/* Lists — conditions / benefits / etc. */}
        {service.lists && service.lists.length > 0 && (
          <section className="border-b border-border py-16">
            <div className="grid gap-6 sm:grid-cols-2">
              {service.lists.map((list) => (
                <ListBlock key={list.heading} heading={list.heading} items={list.items} />
              ))}
            </div>
          </section>
        )}

        {/* Who it's for */}
        {service.whoFor && (
          <section className="border-b border-border py-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.whoFor.heading}
            </h2>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {service.whoFor.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Legal / availability note */}
        {service.note && (
          <section className="py-16">
            <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
              {service.note}
            </p>
          </section>
        )}
      </div>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to take the next step?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Reach out to learn whether {service.title} is right for you. Our team
            will help you find a path forward.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="https://psyberspacetherapy.janeapp.com/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
