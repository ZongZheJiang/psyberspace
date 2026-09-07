import type { ComponentType } from "react"

import BulletGridBlock from "@/examples/page-sections/bullet-grid"
import CalloutBlock from "@/examples/page-sections/callout"
import CardGridBlock from "@/examples/page-sections/card-grid"
import HeroBlock from "@/examples/page-sections/hero"
import ListsBlock from "@/examples/page-sections/lists"
import StepsBlock from "@/examples/page-sections/steps"
import TimelineBlock from "@/examples/page-sections/timeline"
import WhatIsBlock from "@/examples/page-sections/what-is"
import WhoItsForBlock from "@/examples/page-sections/who-its-for"
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
    "what-is": { Block: WhatIsBlock, role: "section" },
    steps: { Block: StepsBlock, role: "section" },
    timeline: { Block: TimelineBlock, role: "section" },
    lists: { Block: ListsBlock, role: "section" },
    "who-its-for": { Block: WhoItsForBlock, role: "section" },
    callout: { Block: CalloutBlock, role: "plain" },
    "bullet-grid": { Block: BulletGridBlock, role: "section" },
    "card-grid": { Block: CardGridBlock, role: "section" },
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

/** A section carries a heading unless its variant has none (callout). */
export function headingOf(section: PageSection): string | undefined {
    return "heading" in section ? section.heading : undefined
}
