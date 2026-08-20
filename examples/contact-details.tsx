import { CONTACT_DETAILS } from "@/data/contactDetails"

function DetailBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h3>
      <div className="mt-2 space-y-1 text-base leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  )
}

// Contact information column — phone, email, address, hours, service areas —
// plus an embedded map. Copy sourced from psyberspacetherapy.com/contact-us.
export default function ContactDetails() {
  const { phones, emails, address, hours, serviceAreas } = CONTACT_DETAILS
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address.mapQuery
  )}&output=embed`

  return (
    <div className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <DetailBlock title="Call">
          {phones.map((phone) => (
            <p key={phone}>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="hover:text-foreground hover:underline"
              >
                {phone}
              </a>
            </p>
          ))}
        </DetailBlock>

        <DetailBlock title="Email">
          {emails.map((email) => (
            <p key={email}>
              <a
                href={`mailto:${email}`}
                className="break-words hover:text-foreground hover:underline"
              >
                {email}
              </a>
            </p>
          ))}
        </DetailBlock>

        <DetailBlock title="Visit">
          <p>{address.line1}</p>
          <p>{address.line2}</p>
        </DetailBlock>

        <DetailBlock title="Hours">
          {hours.map((entry) => (
            <p key={entry.days}>
              <span className="font-medium text-foreground">{entry.days}</span>{" "}
              {entry.time}
            </p>
          ))}
        </DetailBlock>
      </div>

      <DetailBlock title="Online Therapy Available In">
        <p>{serviceAreas.join(" · ")}</p>
      </DetailBlock>

      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          title={`Map to ${address.line1}, ${address.line2}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full"
        />
      </div>
    </div>
  )
}
