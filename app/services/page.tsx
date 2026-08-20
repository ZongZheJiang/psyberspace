import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import ServicesOverview from "@/examples/services-overview"

export const metadata: Metadata = {
  title: "Our Services — Psyberspace Center for Psychedelic Therapy",
  description:
    "Evidence-based mental health care for individuals, couples, groups, and families — ketamine-assisted psychotherapy, EMDR, Sensorimotor Psychotherapy, medication management, and more.",
}

export default function ServicesPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <ServicesOverview />
      </div>
      <Footer />
    </main>
  )
}
