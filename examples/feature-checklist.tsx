import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "../components/ui/button"

const HEADING_FONT = "font-[family-name:var(--font-playfair-display)]"

const POINTS = [
    "Proven techniques to reduce distress in day to day life.",
    "Develop lasting recovery and improve health and wellbeing.",
    "Personalized strategies for managing emotional dysregulation effectively.",
]

function FeatureChecklist() {
    return (
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                    src="/assets/About-me-photo-new.jpg"
                    alt="Dr Coley Woodward"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                />
            </div>

            {/* Copy */}
            <div>
                <h2 className={`text-3xl font-medium md:text-5xl ${HEADING_FONT}`}>
                    Heal From Mental Health Challenges
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    We provide warmth, empathy, and a safe container to gently help you
                    process and resolve trauma by tapping into your brain&rsquo;s natural
                    ability to heal.
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                    {POINTS.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d8c43] text-white">
                                <Check className="h-4 w-4" strokeWidth={2.5} />
                            </span>
                            <span className="text-base">{point}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    asChild
                    className="mt-10 h-auto rounded-full bg-[#16311f] px-6 py-3 text-base text-white hover:bg-[#16311f]/90"
                >
                    <Link href="/about">Meet our team</Link>
                </Button>
            </div>
        </section>
    )
}

export default FeatureChecklist
