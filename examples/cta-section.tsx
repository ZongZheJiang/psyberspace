import Link from "next/link"

import { Button } from "@/components/ui/button"

// Shared closing call-to-action used by the treatment and service pages.
const BOOKING_URL = "https://psyberspacetherapy.janeapp.com/"

const pill = "h-auto rounded-full px-6 py-3 text-sm font-semibold"

export default function CtaSection({
  heading = "Ready to take the next step?",
  body,
  primaryLabel = "Book a consultation",
  primaryHref = BOOKING_URL,
  secondaryLabel,
  secondaryHref,
  note,
}: {
  heading?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  note?: string
}) {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {heading}
        </h2>
        {body && (
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {body}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className={pill}>
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button asChild variant="outline" className={pill}>
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
        {note && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
