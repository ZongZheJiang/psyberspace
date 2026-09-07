import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TreatmentDetail from "@/examples/treatment-detail"
import CtaSection from "@/examples/cta-section"
import {
  TREATMENTS,
  getTreatment,
} from "@/data/treatments"
import { headingOf } from "@/examples/page-sections/registry"

// Prerender one static page per treatment slug at build time.
export function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({ slug: treatment.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatment(slug)

  if (!treatment) {
    return { title: "Treatment not found — Psyberspace" }
  }

  const hero = treatment.sections.find((section) => section.kind === "hero")

  return {
    title: `${hero ? headingOf(hero) : treatment.name} — Psyberspace`,
    description: hero?.kind === "hero" ? hero.subheading : treatment.tagline,
  }
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const treatment = getTreatment(slug)

  if (!treatment) {
    notFound()
  }

  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TreatmentDetail treatment={treatment} />
        <CtaSection
          heading="Take the first step toward healing"
          body="Schedule a free 20-minute consultation today and start your journey."
          primaryLabel="Make an Appointment"
          note="Book a Free 20 min Consultation"
          secondaryLabel="Explore all treatments"
          secondaryHref="/treatments"
        />
      </div>
      <Footer />
    </main>
  )
}
