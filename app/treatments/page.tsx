import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TreatmentsGrid from "@/examples/treatments-grid"
import CtaSection from "@/examples/cta-section"

export const metadata: Metadata = {
  title: "Treatments — Psyberspace Center for Psychedelic Therapy",
  description:
    "Evidence-based, compassionate treatment for anxiety, depression, trauma, eating disorders, OCD/OCPD, and palliative care — including ketamine-assisted psychotherapy and EMDR.",
}

export default function TreatmentsPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TreatmentsGrid />
        <CtaSection
          heading="Take the first step toward healing"
          body="Schedule a free 20-minute consultation today and start your journey."
          primaryLabel="Make an Appointment"
          note="Book a Free 20 min Consultation"
        />
      </div>
      <Footer />
    </main>
  )
}
