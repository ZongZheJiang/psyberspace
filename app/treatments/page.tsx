import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TreatmentsGrid from "@/examples/treatments-grid"
import TreatmentCta from "@/examples/treatment-cta"

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
        <TreatmentCta />
      </div>
      <Footer />
    </main>
  )
}
