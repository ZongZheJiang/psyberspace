import Link from "next/link"

import { Button } from "@/components/ui/button"

// Booking + consultation prompts that repeat across the treatment pages.
const BOOKING_URL = "https://psyberspacetherapy.janeapp.com/"

export default function TreatmentCta({
  heading = "Take the first step toward healing",
  body = "Schedule a free 20-minute consultation today and start your journey.",
  ctaText = "Book a Free 20 min Consultation",
}: {
  heading?: string
  body?: string
  ctaText?: string
}) {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {body}
        </p>
        <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="https://psyberspacetherapy.janeapp.com/">Make an Appointment</Link>
          </Button>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {ctaText}
        </p>
      </div>
    </section>
  )
}
