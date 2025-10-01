import type { Metadata } from "next"
import NykobingSjaellandClientPage from "./NykobingSjaellandClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk vikarbureau Nykøbing Sjælland – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nykøbing Sjælland. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Nykøbing Sjælland, vikarer bosteder, institutioner, særlige behov, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk vikarbureau Nykøbing Sjælland – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nykøbing Sjælland. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function NykobingSjaellandPage() {
  return <NykobingSjaellandClientPage />
}
