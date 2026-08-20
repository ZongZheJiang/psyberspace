import { CAREER_BENEFITS } from "@/data/careerBenefits"

export default function CareersBenefits() {
  return (
    <section id="benefits" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Benefits
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Benefits to becoming a Psyberspace team member
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAREER_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
