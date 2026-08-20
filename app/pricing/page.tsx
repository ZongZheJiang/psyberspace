import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import Pricing from "@/examples/pricing"

export const metadata: Metadata = {
  title: "Pricing — Psyberspace Center for Psychedelic Therapy",
  description:
    "Session rates for psychotherapy, EMDR, and ketamine-assisted psychotherapy (KAP) for individuals, couples, groups, and families — plus out-of-network reimbursement through Mentaya.",
}

export default function PricingPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
