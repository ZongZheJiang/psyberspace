import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { initials } from "@/lib/initials"
import { cn } from "@/lib/utils"
import { TeamMember } from "@/types/teamMember"

/**
 * Grid card for one team member: avatar, name, role, a two-sentence teaser,
 * and a link through to their full bio at `member.href`.
 */
export function TeamMemberCard({
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
      <Avatar className={featured ? "size-40" : "size-32"}>
        {member.photo && (
          <AvatarImage
            src={member.photo}
            alt={member.name}
            className="object-top"
          />
        )}
        <AvatarFallback className={featured ? "text-3xl" : "text-2xl"}>
          {initials(member.name)}
        </AvatarFallback>
      </Avatar>

      <div>
        <h3
          className={cn(
            "font-semibold text-card-foreground",
            featured ? "text-2xl" : "text-xl"
          )}
        >
          {member.name}
        </h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {member.role}
        </p>
        {member.credentials && (
          <p className="mt-2 text-sm text-muted-foreground">
            {member.credentials}
          </p>
        )}
      </div>

      <p className="max-w-prose leading-relaxed text-muted-foreground">
        {member.summary}
      </p>

      <Button asChild variant="outline" size="lg" className="mt-auto">
        <Link href={member.href}>Read {member.name.split(" ")[0]}&rsquo;s full bio</Link>
      </Button>
    </div>
  )
}
