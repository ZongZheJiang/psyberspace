import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PRICING_GROUPS, REIMBURSEMENT_NOTE, PRICING_FAQS } from "@/data/pricing"

// Copy sourced from psyberspacetherapy.com/pricing.
export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Transparent rates for every kind of care
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Below are our session rates for individuals, couples, groups, and
            families. As an out-of-network provider, we keep pricing clear and
            up front — and help you get reimbursed through your benefits.
          </p>
        </div>

        {/* Price tables */}
        <div className="mt-14 space-y-12">
          {PRICING_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {group.heading}
              </h2>
              {group.description && (
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              )}

              <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {group.rows.map((row, index) => (
                  <li
                    key={`${row.service}-${row.duration ?? index}`}
                    className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-card-foreground">
                        {row.service}
                      </p>
                      {(row.duration || row.note) && (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {[row.duration, row.note].filter(Boolean).join(" · ")}
                        </p>
                      )}
                    </div>
                    <p className="shrink-0 text-lg font-semibold text-foreground sm:text-right">
                      {row.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Insurance / reimbursement */}
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6">
          <h3 className="text-lg font-semibold text-foreground">
            Out-of-network reimbursement
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {REIMBURSEMENT_NOTE}
          </p>
        </div>

        {/* Billing FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Billing questions
          </h2>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {PRICING_FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Where do I get started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Book a consultation and we&rsquo;ll help you choose the right care
            and walk through payment, financing, and reimbursement options.
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
      </div>
    </section>
  )
}
