import Link from "next/link"

import { Button } from "@/components/ui/button"
import TeamMemberHeader from "@/examples/team-member-header"
import { cn } from "@/lib/utils"
import { TeamMember } from "@/types/teamMember"

/**
 * Grid card for one team member: avatar, name, role, a two-sentence teaser,
 * and a link through to their full bio at /about/<slug>.
 */
export default function TeamMemberCard({
  member,
  featured = false,
}: {
  member: TeamMember
  featured?: boolean
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-5 rounded-xl border border-border bg-card p-8 text-center",
        featured && "sm:p-10"
      )}
    >
      <TeamMemberHeader member={member} variant="card" featured={featured} />

      <p className="max-w-prose leading-relaxed text-muted-foreground">
        {member.summary}
      </p>

      <Button asChild variant="outline" size="lg" className="mt-auto">
        <Link href={`/about/${member.slug}`}>
          Read {member.name.split(" ")[0]}&rsquo;s full bio
        </Link>
      </Button>
    </div>
  )
}
