import type { Metadata } from "next"
import LyngbyClientPage from "./LyngbyClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Lyngby – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer til bosteder og institutioner i Lyngby. Få fleksible og erfarne vikarer til unge og voksne med særlige behov – hurtigt og effektivt.",
  keywords:
    "pædagogisk vikarbureau Lyngby, vikarer bosteder Lyngby, institutioner Lyngby, særlige behov, pædagoger, SSA, tryghedspersonale",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Lyngby – Kvalificerede Vikarer til Bosteder og Institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer til bosteder og institutioner i Lyngby. Få fleksible og erfarne vikarer til unge og voksne med særlige behov – hurtigt og effektivt.",
    type: "website",
    locale: "da_DK",
  },
}

export default function LyngbyPage() {
  return <LyngbyClientPage />
}
