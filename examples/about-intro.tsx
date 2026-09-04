import { ABOUT_VALUES } from "@/data/aboutValues"

// Copy sourced from psyberspacetherapy.com/about-us.
export default function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-24">
      {/* Hero */}
      <div className="flex flex-col items-center px-4 pt-20 pb-16 text-center sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About Us
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          A BIPOC- and LGBTQ+-affirming space for transformative healing
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The Psyberspace Center for Psychedelic Therapy helps individuals break
          through treatment-resistant mental health conditions using
          cutting-edge, evidence-based care — from ketamine-assisted
          psychotherapy and EMDR to Sensorimotor Psychotherapy, psychedelic
          integration, and Family-Based Therapy for eating disorders. We offer
          hope to the hopeless: a pathway to healing when other approaches have
          fallen short.
        </p>
      </div>

      {/* Mission & name */}
      <div className="mb-24 flex justify-center px-4">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
            <h2 className="text-xl font-bold uppercase tracking-tight text-card-foreground">
              Mission
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              To destigmatize mental illness and psychedelic therapy,
              particularly within BIPOC communities and other underserved
              populations, and to make transformative care accessible to the
              people who have been left out of it.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
            <h2 className="text-xl font-bold uppercase tracking-tight text-card-foreground">
              Our Name
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Psyberspace represents the convergence of information technology
              and the expansion of consciousness — an invitation to engage with
              the world&rsquo;s most powerful supercomputer: the human mind.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-24 flex flex-col items-center px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Our Values
        </h2>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {ABOUT_VALUES.map((value) => (
            <div
              key={value.id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {value.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
