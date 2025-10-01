import type { Metadata } from "next"
import FrederiksbергClientPage from "./FrederiksbергClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau på Frederiksberg | Nærværende, lyttende og forstående - Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau på Frederiksberg – Vikarer med hjertet på det rette sted. Vi dækker Frederiksberg Kommune og tilbyder kvalificerede pædagogiske vikarer til bosteder og institutioner.",
}

export default function FrederiksbергPage() {
  return <FrederiksbергClientPage />
}
