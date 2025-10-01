import type { Metadata } from "next"
import VaerloseClientPage from "./VaerloseClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk vikarbureau i Værløse – Erfarne pædagogiske vikarer til bosteder og institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer i Værløse. Vi hjælper med at skabe tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Værløse, vikarer bosteder, institutioner, særlige behov, tryghedspersonale, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk vikarbureau i Værløse – Erfarne vikarer | Tryghedspersonale.dk",
    description:
      "Kvalificerede pædagogiske vikarer i Værløse. Vi skaber tryghed og udvikling for voksne og unge med særlige behov.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-vaerlose",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function VaerlosePage() {
  return <VaerloseClientPage />
}
