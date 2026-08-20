import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CONTACT_DETAILS } from "@/data/contactDetails"

// Copy sourced from psyberspacetherapy.com/contact-us.
export default function ContactIntro() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Have questions? Get in touch.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you&rsquo;re ready to begin or just exploring your options,
            we&rsquo;re here to help. Make a booking with our online form, or
            reach out directly — we&rsquo;ll get back to you soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a
                href={CONTACT_DETAILS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Make an Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact-form">Book a Free 20 Minute Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
