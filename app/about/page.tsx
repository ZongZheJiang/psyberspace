import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { SectionSpy } from "@/components/section-spy"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import AboutIntro from "@/examples/about-intro"
import AboutTeam from "@/examples/about-team"
import AboutFaqs from "@/examples/about-faqs"

export const metadata: Metadata = {
  title: "About Us — Psyberspace Center for Psychedelic Therapy",
  description:
    "A BIPOC- and LGBTQ+-affirming healing space. Meet our team and find answers to common questions about ketamine-assisted psychotherapy and evidence-based care.",
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <AboutIntro />
        <AboutTeam />
        <AboutFaqs />
      </div>
      <Footer />
      {/* headless scrollspy: drives the URL hash + navbar highlight on scroll */}
      <SectionSpy ids={["about", "team", "faqs"]} />
    </main>
  )
}
