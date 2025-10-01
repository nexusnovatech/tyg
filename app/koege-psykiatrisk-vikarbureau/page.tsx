import type { Metadata } from "next"
import KoegeClientPage from "./KoegeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Køge, Herfølge, Solrød Strand | Tryk for at læs mere - Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i Køge – Vikarer med hjertet på det rette sted. Vi dækker også Herfølge, Solrød Strand, Borup og Ejby.",
}

export default function KoegePage() {
  return <KoegeClientPage />
}
