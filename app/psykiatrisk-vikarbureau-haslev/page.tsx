import type { Metadata } from "next"
import HaslevClientPage from "./HaslevClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau Haslev | Specialiseret indsats | Udadreagerende adfærd - Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder erfarne psykiatriske vikarer i Haslev til botilbud, plejecentre og socialpsykiatri. Specialiseret i vikarløsninger ved udadreagerende adfærd, demens og komplekse behov.",
}

export default function HaslevPage() {
  return <HaslevClientPage />
}
