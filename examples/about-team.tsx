import Image from "next/image"

import { ABOUT_FOUNDER } from "@/data/aboutTeam"

function CredentialColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function AboutTeam() {
  const founder = ABOUT_FOUNDER

  return (
    <section id="team" className="scroll-mt-24 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the founder
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Identity */}
          <div className="lg:col-span-1">
            {founder.photo && (
              <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-border">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="mt-5 text-2xl font-semibold text-foreground">
              {founder.name}
            </h3>
            <p className="mt-1 text-muted-foreground">{founder.role}</p>
          </div>

          {/* Bio */}
          <div className="space-y-4 lg:col-span-2">
            {founder.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <CredentialColumn title="Specialties" items={founder.specialties} />
          <CredentialColumn title="Education" items={founder.education} />
          <CredentialColumn title="Licenses" items={founder.licenses} />
        </div>
      </div>
    </section>
  )
}
