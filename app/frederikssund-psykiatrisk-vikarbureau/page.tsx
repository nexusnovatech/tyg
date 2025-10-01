import type { Metadata } from "next"
import FrederikssundClientPage from "./FrederikssundClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau i Frederikssund - Erfarne Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i Frederikssund – Vikarer med hjertet på det rette sted. Vi tilbyder erfarne og kvalificerede pædagogiske vikarer til bosteder og institutioner. Kontakt os i dag.",
}

export default function FrederikssundPage() {
  return <FrederikssundClientPage />
}
