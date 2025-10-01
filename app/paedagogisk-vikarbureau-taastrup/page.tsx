import type { Metadata } from "next"
import TaastrupClientPage from "./TaastrupClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk vikarbureau i Taastrup – Kvalificerede vikarer til bosteder og institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Taastrup. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Taastrup, vikarer bosteder, institutioner, særlige behov, tryghedspersonale, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk vikarbureau i Taastrup – Kvalificerede vikarer | Tryghedspersonale.dk",
    description:
      "Erfarne pædagogiske vikarer i Taastrup. Vi skaber tryghed og udvikling for unge og voksne med særlige behov.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-taastrup",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function TaastrupPage() {
  return <TaastrupClientPage />
}
