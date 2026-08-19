import { Heart, HandHelping, Sprout, LucideIcon } from "lucide-react"

const HEADING_FONT = "font-[family-name:var(--font-playfair-display)]"

type Principle = {
    icon: LucideIcon
    title: string
    description: string
}

const PRINCIPLES: Principle[] = [
    {
        icon: Heart,
        title: "Empathy",
        description:
            "We meet you where you are — with warmth, patience, and no judgment — so you never have to navigate healing alone.",
    },
    {
        icon: HandHelping,
        title: "Care",
        description:
            "Every plan is personalized to your story, pairing evidence-based methods with genuine, attentive support.",
    },
    {
        icon: Sprout,
        title: "Recovery",
        description:
            "We focus on lasting change — helping you build the tools and resilience to keep growing well beyond our sessions.",
    },
]

function GuidingPrinciples() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#6d8c43]">
                Empathy, Care, Recovery
            </p>
            <h2 className={`mt-4 text-3xl font-medium md:text-5xl ${HEADING_FONT}`}>
                Our Guiding Principles
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
                {PRINCIPLES.map((principle) => (
                    <div key={principle.title} className="flex flex-col items-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6d8c43]/10 text-[#6d8c43]">
                            <principle.icon className="h-7 w-7" strokeWidth={1.5} />
                        </span>
                        <h3 className={`mt-6 text-2xl ${HEADING_FONT}`}>{principle.title}</h3>
                        <p className="mt-3 text-muted-foreground">{principle.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GuidingPrinciples
