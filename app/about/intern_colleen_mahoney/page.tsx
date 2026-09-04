import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TeamMemberDetail from "@/examples/team-member-detail"
import { COLLEEN_MAHONEY } from "@/data/aboutTeam"

export const metadata: Metadata = {
  title: `${COLLEEN_MAHONEY.name} — Psyberspace Center for Psychedelic Therapy`,
  description: COLLEEN_MAHONEY.summary,
}

export default function ColleenMahoneyPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TeamMemberDetail member={COLLEEN_MAHONEY} />
      </div>
      <Footer />
    </main>
  )
}
