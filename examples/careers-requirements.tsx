import { Check } from "lucide-react"

import { CAREER_DESIRED, CAREER_REQUIRED } from "@/data/careerRequirements"

function QualificationList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden />
          <span className="text-base leading-relaxed text-muted-foreground">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function CareersRequirements() {
  return (
    <section id="requirements" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Qualifications
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What we&rsquo;re looking for
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Required</h3>
            <QualificationList items={CAREER_REQUIRED} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Desired</h3>
            <QualificationList items={CAREER_DESIRED} />
          </div>
        </div>
      </div>
    </section>
  )
}
