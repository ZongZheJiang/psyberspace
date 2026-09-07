import Link from "next/link"

import { BookingButton } from "@/components/booking-button"
import { Button } from "@/components/ui/button"
import TeamMemberCredentials from "@/examples/team-member-credentials"
import TeamMemberHeader from "@/examples/team-member-header"
import VideoDemo from "@/examples/video-demo"
import { TeamMember } from "@/types/teamMember"

/** Full bio page body for one team member. */
export default function TeamMemberDetail({ member }: { member: TeamMember }) {
  return (
    <section id="bio" className="scroll-mt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 sm:py-24">
        <TeamMemberHeader member={member} />

        {member.video_url && (
          <div className="my-40 w-full">
            <VideoDemo video_url={member.video_url} />
          </div>
        )}

        <div className="mt-10 max-w-3xl space-y-4">
          {member.bio.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <TeamMemberCredentials member={member} />

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
