import { Badge } from "@/components/ui/badge"
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

/**
 * Grid of a member's optional credentials. Renders nothing when the member has
 * none of them.
 */
export default function TeamMemberCredentials({
  member,
}: {
  member: TeamMember
}) {
  const hasCredentials =
    member.specialties || member.education || member.certificates || member.licenses

  if (!hasCredentials) return null

  return (
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
  )
}
