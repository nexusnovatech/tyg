import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Stenløse – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Stenløse tilbyder erfarne SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible og dygtige vikarer til plejehjem, hospitaler og hjemmepleje i Stenløse.",
}

export default function StenloesePage() {
  return <KoegeClientPage />
}
