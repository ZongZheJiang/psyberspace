"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Tracks which section is currently in view and reflects it in the URL hash.
 *
 * Given an ordered list of element ids, it observes them with an
 * IntersectionObserver and marks the topmost one inside the activation band as
 * active. On change it:
 *   - updates the URL hash via `replaceState` (no scroll jump, no history spam)
 *   - dispatches a `psy:section` event so decoupled UI (e.g. the navbar
 *     dropdown) can highlight the matching link without prop drilling.
 *
 * This is the whole "scroll + scrollspy" mechanism — no on-page sub-nav bar.
 */
export function useScrollSpy(
  ids: string[],
  options?: { rootMargin?: string }
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeRef = useRef<string | null>(null)
  const rootMargin = options?.rootMargin ?? "-80px 0px -70% 0px"
  const key = ids.join("|")

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }

        // Active = first section (in document order) inside the activation band.
        const next = ids.find((id) => visible.has(id))
        if (next && next !== activeRef.current) {
          activeRef.current = next
          setActiveId(next)
          window.history.replaceState(null, "", `#${next}`)
          window.dispatchEvent(new CustomEvent("psy:section", { detail: next }))
        }
      },
      { rootMargin, threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin])

  return activeId
}
