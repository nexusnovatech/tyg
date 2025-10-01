import type { Metadata } from "next"
import KoegeClientPage from "./KoegeClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Køge | Specialiserede Vikarer – Tryghedspersonale.dk",
  description:
    "Pålideligt og erfarent pædagogisk vikarbureau i Køge. Vi leverer specialiserede vikarer til botilbud, §108-tilbud og psykosociale miljøer i hele Køge Kommune – hurtigt og professionelt.",
}

export default function KoegePage() {
  return <KoegeClientPage />
}
