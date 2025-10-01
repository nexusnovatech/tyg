import type { Metadata } from "next"
import NewCityClientPage from "./NewCityClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i [CITY NAME], [NEARBY AREAS] | Tryk for at læs mere - Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i [CITY NAME] – Vikarer med hjertet på det rette sted. Vi dækker også [NEARBY AREAS].",
}

export default function NewCityPage() {
  return <NewCityClientPage />
}
