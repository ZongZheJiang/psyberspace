import { ABOUT_VALUES } from "@/data/aboutValues"

// Copy sourced from psyberspacetherapy.com/about-us.
export default function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A BIPOC- and LGBTQ+-affirming space for transformative healing
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The Psyberspace Center for Psychedelic Therapy helps individuals
            break through treatment-resistant mental health conditions using
            cutting-edge, evidence-based care — from ketamine-assisted
            psychotherapy and EMDR to Sensorimotor Psychotherapy, psychedelic
            integration, and Family-Based Therapy for eating disorders. We offer
            hope to the hopeless: a pathway to healing when other approaches have
            fallen short.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our mission is to destigmatize mental illness and psychedelic
            therapy, particularly within BIPOC communities and other underserved
            populations. The name Psyberspace represents the convergence of
            information technology and the expansion of consciousness — an
            invitation to engage with the world&rsquo;s most powerful
            supercomputer: the human mind.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_VALUES.map((value) => (
            <div
              key={value.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {value.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
