import type { Metadata } from "next"
import KalundborgClientPage from "./KalundborgClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Kalundborg – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer i Kalundborg. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Kalundborg, vikarer bosteder, institutioner, særlige behov, tryghedspersonale, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Kalundborg – Kvalificerede Vikarer | Tryghedspersonale.dk",
    description:
      "Erfarne pædagogiske vikarer i Kalundborg. Vi skaber tryghed og udvikling for unge og voksne med særlige behov.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-kalundborg",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function KalundborgPage() {
  return <KalundborgClientPage />
}
