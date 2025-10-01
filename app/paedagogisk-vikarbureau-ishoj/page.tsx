import type { Metadata } from "next"
import IshojClientPage from "./IshojClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Ishøj – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer til bosteder og institutioner i Ishøj. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Ishøj, vikarer bosteder, institutioner, særlige behov, tryghedspersonale, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Ishøj – Kvalificerede Vikarer | Tryghedspersonale.dk",
    description:
      "Erfarne pædagogiske vikarer i Ishøj. Vi skaber tryghed og udvikling for unge og voksne med særlige behov.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-ishoj",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function IshojPage() {
  return <IshojClientPage />
}
