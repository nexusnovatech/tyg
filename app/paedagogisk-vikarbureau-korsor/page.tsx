import type { Metadata } from "next"
import KorsorClientPage from "./KorsorClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Korsør – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer i Korsør. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Korsør, vikarer bosteder, institutioner, særlige behov, tryghedspersonale, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Korsør – Kvalificerede Vikarer | Tryghedspersonale.dk",
    description:
      "Erfarne pædagogiske vikarer i Korsør. Vi skaber tryghed og udvikling for unge og voksne med særlige behov.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-korsor",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function KorsorPage() {
  return <KorsorClientPage />
}
