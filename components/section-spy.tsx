"use client"

import { useScrollSpy } from "@/lib/useScrollSpy"

/**
 * Headless scrollspy. Drop it on a page alongside sections carrying the given
 * ids; it renders nothing and drives the URL hash + navbar highlight as the
 * user scrolls. Keeps the page itself a server component.
 */
export function SectionSpy({ ids }: { ids: string[] }) {
  useScrollSpy(ids)
  return null
}
