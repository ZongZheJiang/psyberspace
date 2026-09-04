import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TeamMemberDetail from "@/examples/team-member-detail"
import { ABOUT_FOUNDER } from "@/data/aboutTeam"

export const metadata: Metadata = {
  title: `${ABOUT_FOUNDER.name} — Psyberspace Center for Psychedelic Therapy`,
  description: ABOUT_FOUNDER.summary,
}

export default function FounderPage() {
  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TeamMemberDetail member={ABOUT_FOUNDER} />
      </div>
      <Footer />
    </main>
  )
}
