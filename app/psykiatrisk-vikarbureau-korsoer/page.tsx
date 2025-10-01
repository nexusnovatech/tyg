import type { Metadata } from "next"
import KorsoerClientPage from "./KorsoerClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Korsør | Tryghedspersonale.dk",
  description:
    "Midlertidig og specialiseret vikarbemanding i Korsør. Vikarer med erfaring i psykiatri, demens og udadreagerende adfærd. Kontakt Tryghedspersonale.dk i dag.",
}

export default function KorsoerPage() {
  return <KorsoerClientPage />
}
