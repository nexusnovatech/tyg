import type { Metadata } from "next"
import RodovreClientPage from "./RodovreClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Rødovre – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer til bosteder og institutioner i Rødovre. Få fleksible og erfarne vikarer til unge og voksne med særlige behov – hurtigt og effektivt.",
  keywords:
    "pædagogisk vikarbureau Rødovre, vikarer bosteder, institutioner, særlige behov, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Rødovre – Kvalificerede Vikarer til Bosteder og Institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer til bosteder og institutioner i Rødovre. Få fleksible og erfarne vikarer til unge og voksne med særlige behov – hurtigt og effektivt.",
    type: "website",
    locale: "da_DK",
  },
}

export default function RodovrePage() {
  return <RodovreClientPage />
}
