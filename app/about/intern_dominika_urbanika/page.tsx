import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TeamMemberDetail from "@/examples/team-member-detail"
import { DOMINIKA_URBANIAK } from "@/data/aboutTeam"

export const metadata: Metadata = {
  title: `${DOMINIKA_URBANIAK.name} — Psyberspace Center for Psychedelic Therapy`,
  description: DOMINIKA_URBANIAK.summary,
}

export default function DominikaUrbaniakPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TeamMemberDetail member={DOMINIKA_URBANIAK} />
      </div>
      <Footer />
    </main>
  )
}
