import type { Metadata } from "next"
import FredensborgClientPage from "./FredensborgClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Fredensborg, Humlebæk, Nivå | Tryk for at læs mere - Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i Fredensborg – Vikarer med hjertet på det rette sted. Vi dækker også Humlebæk, Nivå, Kokkedal og Espergærde.",
}

export default function FredensborgPage() {
  return <FredensborgClientPage />
}
