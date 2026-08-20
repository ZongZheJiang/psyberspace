"use client"

import { useEffect, useState } from "react"

/**
 * Returns the currently active section hash (e.g. "#team").
 *
 * Stays in sync with both native hash changes (anchor clicks, back/forward) and
 * the `psy:section` events emitted by {@link useScrollSpy} as the user scrolls.
 * Lets components far from the scrollspy (like the navbar) highlight the active
 * section without any shared context.
 */
export function useActiveHash(): string {
  const [hash, setHash] = useState("")

  useEffect(() => {
    const syncFromLocation = () => setHash(window.location.hash)
    syncFromLocation()

    const onSection = (event: Event) => {
      const id = (event as CustomEvent<string>).detail
      setHash(id ? `#${id}` : "")
    }

    window.addEventListener("hashchange", syncFromLocation)
    window.addEventListener("psy:section", onSection as EventListener)
    return () => {
      window.removeEventListener("hashchange", syncFromLocation)
      window.removeEventListener("psy:section", onSection as EventListener)
    }
  }, [])

  return hash
}
