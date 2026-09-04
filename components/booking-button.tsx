import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CONTACT_DETAILS } from "@/data/contactDetails"

export function BookingButton({
  className,
  label = "Book a Free 20 Minute Consultation",
}: {
  className?: string
  label?: string
}) {
  return (
    <Button asChild size="lg" className={className}>
      <Link
        href={CONTACT_DETAILS.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </Button>
  )
}
