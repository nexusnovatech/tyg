"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      // Set initial value
      setMatches(media.matches)

      // Update matches when media query changes
      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      return () => {
        media.removeEventListener("change", listener)
      }
    }
  }, [query])

  return matches
}
