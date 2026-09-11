import type { ComponentType } from "react"

import BulletsBlock from "@/examples/page-sections/bullets"
import CardGridBlock from "@/examples/page-sections/card-grid"
import CtaBlock from "@/examples/page-sections/cta"
import FaqBlock from "@/examples/page-sections/faq"
import HeroBlock from "@/examples/page-sections/hero"
import ListsBlock from "@/examples/page-sections/lists"
import SequenceBlock from "@/examples/page-sections/sequence"
import VideoBlock from "@/examples/page-sections/video"
import ProseBlock from "@/examples/page-sections/prose"
import type { PageSection, SectionOf } from "@/types/pageSection"

type Kind = PageSection["kind"]

/**
 * A section's structural role. Deliberately semantic rather than visual: the
 * service and treatment templates paint the same role differently (a rule on
 * the text column versus a full-width band), so the CSS belongs to the page,
 * not to this table.
 * - `opener`  the page headline block
 * - `section` a titled content section
 * - `plain`   an untitled block with no rule
 */
export type SectionRole = "opener" | "section" | "plain"

interface RegistryEntry<K extends Kind> {
    Block: ComponentType<{ section: SectionOf<K> }>
    role: SectionRole
}

/**
 * The one place that knows which section kinds exist. The mapped type makes an
 * entry mandatory for every member of the union and checks each renderer
 * against its own variant, so adding a `kind` without a renderer is a compile
 * error — and the page components that map over sections never change.
 */
export const SECTION_REGISTRY: { [K in Kind]: RegistryEntry<K> } = {
    hero: { Block: HeroBlock, role: "opener" },
    prose: { Block: ProseBlock, role: "section" },
    sequence: { Block: SequenceBlock, role: "section" },
    lists: { Block: ListsBlock, role: "section" },
    bullets: { Block: BulletsBlock, role: "section" },
    "card-grid": { Block: CardGridBlock, role: "section" },
    // `plain` for all three: a video sits under the section above it unless it
    // carries its own heading, and the CTA card brings its own.
    video: { Block: VideoBlock, role: "plain" },
    cta: { Block: CtaBlock, role: "plain" },
    faq: { Block: FaqBlock, role: "section" },
}

/**
 * Looks up a section's renderer and role. TypeScript cannot correlate the
 * narrowed `section` with the registry lookup across a generic index, so the
 * cast here is unavoidable — but the mapped type above has already verified
 * every entry, so the pairing is sound.
 */
export function resolveSection(section: PageSection): {
    Block: ComponentType<{ section: PageSection }>
    role: SectionRole
} {
    const entry = SECTION_REGISTRY[section.kind] as RegistryEntry<Kind>
    return {
        Block: entry.Block as ComponentType<{ section: PageSection }>,
        role: entry.role,
    }
}

/** A section carries a heading unless its variant has none (cta). */
export function headingOf(section: PageSection): string | undefined {
    return "heading" in section ? section.heading : undefined
}

/**
 * Prose framing a section's body, for variants that extend PageSectionProse.
 *
 * The hero is excluded explicitly: its `intro` is a required lede that
 * HeroBlock composes itself, so letting it through here would render it twice.
 * The opener branch never calls these, but the guard keeps that true even if a
 * template is restructured later.
 */
export function introOf(section: PageSection): string[] | undefined {
    if (section.kind === "hero") return undefined
    return "intro" in section ? section.intro : undefined
}

export function outroOf(section: PageSection): string[] | undefined {
    return "outro" in section ? section.outro : undefined
}
