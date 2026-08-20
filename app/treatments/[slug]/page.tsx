import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TreatmentDetail from "@/examples/treatment-detail"
import TreatmentCta from "@/examples/treatment-cta"
import { TREATMENTS, getTreatment } from "@/data/treatments"

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

  return {
    title: `${treatment.heading} — Psyberspace`,
    description: treatment.subheading,
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
        <TreatmentCta />
      </div>
      <Footer />
    </main>
  )
}
