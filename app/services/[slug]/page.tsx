import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import ServiceDetail from "@/examples/service-detail"
import CtaSection from "@/examples/cta-section"
import { SERVICES, getService } from "@/data/services"

// Prerender one static page per service slug at build time.
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: "Service not found — Psyberspace" }
  }

  return {
    title: `${service.title} — Psyberspace`,
    description: service.tagline,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <ServiceDetail service={service} />
        <CtaSection
          body={`Reach out to learn whether ${service.title} is right for you. Our team will help you find a path forward.`}
          secondaryLabel="Explore all services"
          secondaryHref="/services"
        />
      </div>
      <Footer />
    </main>
  )
}
