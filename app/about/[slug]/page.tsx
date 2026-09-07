import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { NavigationMenuDemo } from "@/examples/navigation-menu"
import TeamMemberDetail from "@/examples/team-member-detail"
import { ALL_TEAM, getTeamMember } from "@/data/aboutTeam"

// Prerender one static page per team member slug at build time.
export function generateStaticParams() {
  return ALL_TEAM.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMember(slug)

  if (!member) {
    return { title: "Team member not found — Psyberspace" }
  }

  return {
    title: `${member.name} — Psyberspace Center for Psychedelic Therapy`,
    description: member.summary,
  }
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = getTeamMember(slug)

  if (!member) {
    notFound()
  }

  return (
    <main className="w-full">
      <NavigationMenuDemo />
      {/* offset for the fixed 64px header */}
      <div className="pt-16">
        <TeamMemberDetail member={member} />
      </div>
      <Footer />
    </main>
  )
}
