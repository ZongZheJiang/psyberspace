import Link from "next/link"

import { Button } from "@/components/ui/button"

// Shared call-to-action used by the treatment and service pages.
//
// Split in two: `CtaContent` is the headline/buttons/note stack with no
// framing, and the default export wraps it in the full-width closing band.
// The `cta` page section reuses the content inside its own card, so a
// mid-page CTA does not nest a band inside the text column.
const BOOKING_URL = "https://psyberspacetherapy.janeapp.com/"

const pill = "h-auto rounded-full px-6 py-3 text-sm font-semibold"

export interface CtaContentProps {
  heading?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  note?: string
}

export function CtaContent({
  heading = "Ready to take the next step?",
  body,
  primaryLabel = "Book a consultation",
  primaryHref = BOOKING_URL,
  secondaryLabel,
  secondaryHref,
  note,
}: CtaContentProps) {
  return (
    <>
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
    </>
  )
}

/** The closing band: full-width, ruled off, used at the foot of a page. */
export default function CtaSection(props: CtaContentProps) {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <CtaContent {...props} />
      </div>
    </section>
  )
}
