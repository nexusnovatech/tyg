import type { Metadata } from "next"
import NivaaClientPage from "./NivaaClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Nivå, Humlebæk, Kokkedal | Tryk for at læs mere – Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i Nivå – Vikarer med hjertet på det rette sted. Vi dækker også Humlebæk, Kokkedal, Fredensborg og Espergærde.",
}

export default function NivaaPage() {
  return <NivaaClientPage />
}
