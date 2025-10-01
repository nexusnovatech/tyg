import type { Metadata } from "next"
import PaedagogiskClientPage from "./PaedagogiskClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau – Find kvalificerede pædagogiske vikarer til bosteder og daginstitutioner | Tryghedspersonale.dk",
  description:
    "Som et erfarent pædagogisk vikarbureau tilbyder Tryghedspersonale.dk kvalificerede pædagogiske vikarer til bosteder, daginstitutioner og andre pædagogiske institutioner. Vi sikrer dig fleksible og professionelle løsninger til dine pædagogiske behov – hurtigt og effektivt.",
  keywords:
    "pædagogisk vikarbureau, pædagogiske vikarer, daginstitutioner, bosteder, pædagoger, pædagogiske assistenter, specialpædagogik, vikarbureau Danmark",
  openGraph: {
    title: "Pædagogisk Vikarbureau – Kvalificerede pædagogiske vikarer | Tryghedspersonale.dk",
    description:
      "Find kvalificerede pædagogiske vikarer til bosteder, daginstitutioner og andre pædagogiske institutioner. Fleksible og professionelle løsninger.",
    type: "website",
  },
}

export default function PaedagogiskVikarbureau() {
  return <PaedagogiskClientPage />
}
