import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import ContactIntro from "@/examples/contact-intro"
import ContactDetails from "@/examples/contact-details"
import ContactForm from "@/examples/contact-form"

export const metadata: Metadata = {
  title: "Contact Us — Psyberspace Center for Psychedelic Therapy",
  description:
    "Have questions or ready to begin? Reach the Psyberspace Center for Psychedelic Therapy by phone, email, or our online booking form. Online therapy in CA, NJ, NY, and GA.",
}

export default function ContactPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <ContactIntro />
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:py-24 lg:grid-cols-2">
            <ContactDetails />
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
