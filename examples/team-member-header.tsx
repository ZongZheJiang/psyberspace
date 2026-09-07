import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { initials } from "@/lib/initials"
import { cn } from "@/lib/utils"
import { TeamMember } from "@/types/teamMember"

/** Per-context sizing and emphasis for the avatar and the identity lines. */
const VARIANTS = {
  page: {
    avatar: "size-40",
    fallback: "text-3xl",
    name: "mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
    role: "mt-3 max-w-xl",
  },
  card: {
    avatar: "size-32",
    fallback: "text-2xl",
    name: "text-xl font-semibold text-card-foreground",
    role: "mt-2",
  },
  cardFeatured: {
    avatar: "size-40",
    fallback: "text-3xl",
    name: "text-2xl font-semibold text-card-foreground",
    role: "mt-2",
  },
}

/**
 * Photo, name, role and credential line for one team member. `variant` picks
 * between the bio-page hero and the grid card; `featured` enlarges the card
 * variant for the founder and is ignored on the page variant.
 */
export default function TeamMemberHeader({
  member,
  variant = "page",
  featured = false,
}: {
  member: TeamMember
  variant?: "page" | "card"
  featured?: boolean
}) {
  const styles =
    variant === "card" && featured ? VARIANTS.cardFeatured : VARIANTS[variant]
  const Heading = variant === "page" ? "h1" : "h3"

  const identity = (
    <>
      <Heading className={cn("text-center", styles.name)}>
        {member.name}
      </Heading>
      <p
        className={cn(
          "text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground",
          styles.role
        )}
      >
        {member.role}
      </p>
      {member.credentials && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {member.credentials}
        </p>
      )}
    </>
  )

  return (
    <>
      <Avatar className={styles.avatar}>
        {member.photo && (
          <AvatarImage
            src={member.photo}
            alt={member.name}
            className="object-top"
          />
        )}
        <AvatarFallback className={styles.fallback}>
          {initials(member.name)}
        </AvatarFallback>
      </Avatar>

      {/* The card groups the identity lines so the column gap stays uniform. */}
      {variant === "page" ? identity : <div>{identity}</div>}
    </>
  )
}
