import type { Metadata } from "next"
import PsykiatriskVikarClientPage from "./PsykiatriskVikarClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau - Find kvalificerede psykiatriske vikarer til psykiatri, plejehjem og bosteder | Tryghedspersonale.dk",
  description:
    "Find kvalificerede psykiatriske vikarer hurtigt og effektivt til psykiatrien, bosteder og plejehjem med Tryghedspersonale.dk. Vi tilbyder fleksible og professionelle løsninger. Kontakt os nu!",
  keywords:
    "psykiatrisk vikarbureau, psykiatriske vikarer, vikar psykiatri, vikarbemanding botilbud, demensvikar, socialpsykiatrisk vikar, tryghedspersonale",
  openGraph: {
    title: "Psykiatrisk Vikarbureau | Tryghedspersonale.dk",
    description:
      "Kvalificerede psykiatriske vikarer til psykiatri, plejehjem og bosteder. Fleksible og professionelle løsninger.",
    type: "website",
  },
}

export default function PsykiatriskVikarPage() {
  return <PsykiatriskVikarClientPage />
}
