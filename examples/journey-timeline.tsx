import type { TimelineStep } from "@/types/timelineStep"
import { cn } from "@/lib/utils"

// Horizontal milestone timeline: numbered nodes strung along a single green
// connector, with descriptions alternating above and below the line.
const LINE_COLOR = "#2E5A3E"

// Node colors cycle so neighbouring milestones stay visually distinct.
const NODE_PALETTE = [
    { bg: "#4C6B54", fg: "#FFFFFF" },
    { bg: "#B7CE55", fg: "#1F3D28" },
    { bg: "#6FAE53", fg: "#FFFFFF" },
    { bg: "#3F9D61", fg: "#FFFFFF" },
    { bg: "#2F9E8F", fg: "#FFFFFF" },
]

function nodeStyle(index: number) {
    const { bg, fg } = NODE_PALETTE[index % NODE_PALETTE.length]
    return { backgroundColor: bg, color: fg }
}

function Node({ index }: { index: number }) {
    return (
        <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold shadow-md"
            style={nodeStyle(index)}
        >
            {index + 1}
        </span>
    )
}

function Description({ text, className }: { text: string; className?: string }) {
    return (
        <p
            className={cn(
                "mx-auto max-w-[16rem] text-center text-sm leading-relaxed text-muted-foreground",
                className
            )}
        >
            {text}
        </p>
    )
}

export default function JourneyTimeline({
    steps,
    heading,
    subheading,
    className,
}: {
    steps: TimelineStep[]
    heading?: string
    subheading?: string
    className?: string
}) {
    if (steps.length === 0) return null

    return (
        <section className={cn("mx-auto max-w-7xl px-4 py-20", className)}>
            {(heading || subheading) && (
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    {heading && (
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {heading}
                        </h2>
                    )}
                    {subheading && (
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {subheading}
                        </p>
                    )}
                </div>
            )}

            {/* Desktop: horizontal rail with alternating descriptions. */}
            <div
                className="hidden md:grid md:grid-rows-[1fr_2rem_auto_2rem_1fr]"
                style={{
                    gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
                }}
            >
                {steps.map((step, index) => {
                    // Even milestones hang below the rail, odd ones sit above it.
                    const isBelow = index % 2 === 0
                    const isFirst = index === 0
                    const isLast = index === steps.length - 1

                    return (
                        <div key={step.title} className="contents">
                            {/* Description above (odd milestones) */}
                            <div
                                className="row-start-1 flex items-end justify-center px-3 pb-3"
                                style={{ gridColumnStart: index + 1 }}
                            >
                                {!isBelow && <Description text={step.description} />}
                            </div>

                            {/* Stem above */}
                            <div
                                className="row-start-2 flex justify-center"
                                style={{ gridColumnStart: index + 1 }}
                            >
                                {!isBelow && (
                                    <span className="relative w-px bg-foreground">
                                        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground" />
                                    </span>
                                )}
                            </div>

                            {/* Node + title, with the connector rail behind it */}
                            <div
                                className="relative row-start-3 flex flex-col items-center"
                                style={{ gridColumnStart: index + 1 }}
                            >
                                <span
                                    aria-hidden
                                    className="absolute top-8 h-[6px] -translate-y-1/2"
                                    style={{
                                        backgroundColor: LINE_COLOR,
                                        left: isFirst ? "50%" : 0,
                                        right: isLast ? "50%" : 0,
                                    }}
                                />
                                <span className="relative">
                                    <Node index={index} />
                                </span>
                                <span
                                    className="mt-3 text-center text-sm font-bold"
                                    style={{ color: LINE_COLOR }}
                                >
                                    {step.title}
                                </span>
                            </div>

                            {/* Stem below */}
                            <div
                                className="row-start-4 flex justify-center"
                                style={{ gridColumnStart: index + 1 }}
                            >
                                {isBelow && (
                                    <span className="relative w-px bg-foreground">
                                        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-foreground" />
                                    </span>
                                )}
                            </div>

                            {/* Description below (even milestones) */}
                            <div
                                className="row-start-5 flex items-start justify-center px-3 pt-3"
                                style={{ gridColumnStart: index + 1 }}
                            >
                                {isBelow && <Description text={step.description} />}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Mobile: the same rail rotated into a vertical list. */}
            <ol className="flex flex-col md:hidden">
                {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <Node index={index} />
                            {index < steps.length - 1 && (
                                <span
                                    className="w-[6px] flex-1"
                                    style={{ backgroundColor: LINE_COLOR }}
                                />
                            )}
                        </div>
                        <div className={cn("pt-3", index < steps.length - 1 && "pb-8")}>
                            <h3
                                className="text-base font-bold"
                                style={{ color: LINE_COLOR }}
                            >
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}
