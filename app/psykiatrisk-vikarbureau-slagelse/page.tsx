import type { Metadata } from "next"
import SlagelseClientPage from "./SlagelseClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Slagelse | Tryghedspersonale.dk",
  description:
    "Vikarbureau i Slagelse med specialisering i psykiatri, socialpsykiatri og demens. Midlertidig vikardækning til botilbud, pleje og §85/§108-forløb.",
}

export default function SlagelsePage() {
  return <SlagelseClientPage />
}
