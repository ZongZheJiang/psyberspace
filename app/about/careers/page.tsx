import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { SectionSpy } from "@/components/section-spy"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import CareersIntro from "@/examples/careers-intro"
import CareersBenefits from "@/examples/careers-benefits"
import CareersRequirements from "@/examples/careers-requirements"
import TreatmentCta from "@/examples/treatment-cta"

export const metadata: Metadata = {
  title: "Careers — Psyberspace Center for Psychedelic Therapy",
  description:
    "Join our BIPOC- and LGBTQ+-affirming team. Explore benefits, requirements, and desired qualifications for trauma-informed clinicians at Psyberspace.",
}

export default function CareersPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <CareersIntro />
        <CareersBenefits />
        <CareersRequirements />
        <TreatmentCta
          heading="Ready to grow with us?"
          body="Send your resume and a short note about why you'd like to join the Psyberspace team."
          ctaText="We review every application and reach out to candidates who are a strong fit."
        />
      </div>
      <Footer />
      {/* headless scrollspy: drives the URL hash + navbar highlight on scroll */}
      <SectionSpy ids={["careers", "benefits", "requirements"]} />
    </main>
  )
}
