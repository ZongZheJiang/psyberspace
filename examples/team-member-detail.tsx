import Link from "next/link"

import { BookingButton } from "@/components/booking-button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { initials } from "@/lib/initials"
import { TeamMember } from "@/types/teamMember"

function CredentialCard({
  title,
  items,
  /** Render each item as a Badge pill instead of a bulleted line. */
  asBadges = false,
}: {
  title: string
  items: string[]
  asBadges?: boolean
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {asBadges ? (
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item}>
              <Badge variant="secondary" className="h-7 px-3 text-sm">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2 text-sm leading-relaxed text-card-foreground/90">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Full bio page body for one team member. */
export default function TeamMemberDetail({ member }: { member: TeamMember }) {
  const hasCredentials =
    member.specialties || member.education || member.certificates || member.licenses

  return (
    <section id="bio" className="scroll-mt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 sm:py-24">
        <Avatar className="size-40">
          {member.photo && (
            <AvatarImage
              src={member.photo}
              alt={member.name}
              className="object-top"
            />
          )}
          <AvatarFallback className="text-3xl">
            {initials(member.name)}
          </AvatarFallback>
        </Avatar>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {member.name}
        </h1>
        <p className="mt-3 max-w-xl text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {member.role}
        </p>
        {member.credentials && (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {member.credentials}
          </p>
        )}

        <div className="mt-10 max-w-3xl space-y-4">
          {member.bio.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {hasCredentials && (
          <div className="mt-12 grid w-full gap-6 sm:grid-cols-2">
            {member.specialties && (
              <CredentialCard
                title="Specialties"
                items={member.specialties}
                asBadges
              />
            )}
            {member.education && (
              <CredentialCard title="Education" items={member.education} />
            )}
            {member.certificates && (
              <CredentialCard
                title="Certificates and training"
                items={member.certificates}
              />
            )}
            {member.licenses && (
              <CredentialCard title="Licenses" items={member.licenses} />
            )}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <BookingButton />
          <Button asChild variant="ghost" size="lg">
            <Link href="/about#team">&larr; Back to the team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
