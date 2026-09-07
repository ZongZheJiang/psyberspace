import { BookingButton } from "@/components/booking-button"
import TeamMemberCard from "@/examples/team-member-card"

import { ABOUT_FOUNDER, ABOUT_TEAM } from "@/data/aboutTeam"

export default function AboutTeam() {
  return (
    <section
      id="team"
      className="scroll-mt-24 border-t border-border bg-muted/30"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Our Team
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          The Team
        </h2>

        {/* Founder — centred, larger avatar */}
        <div className="mt-16 w-full max-w-2xl">
          <TeamMemberCard member={ABOUT_FOUNDER} featured />
        </div>

        {/* Student clinicians */}
        {ABOUT_TEAM.length > 0 && (
          <>
            <h3 className="mt-20 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Our Clinicians
            </h3>
            <div className="mt-10 grid w-full gap-6 md:grid-cols-2">
              {ABOUT_TEAM.map((member) => (
                <TeamMemberCard key={member.slug} member={member} />
              ))}
            </div>
          </>
        )}

        <BookingButton className="mt-14" />
      </div>
    </section>
  )
}
