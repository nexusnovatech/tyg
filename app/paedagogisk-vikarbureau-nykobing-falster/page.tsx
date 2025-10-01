import type { Metadata } from "next"
import NykobingFalsterClientPage from "./NykobingFalsterClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk vikarbureau Nykøbing Falster – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nykøbing Falster. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Nykøbing Falster, vikarer bosteder Nykøbing Falster, institutioner Nykøbing Falster, særlige behov, pædagoger, SSA, tryghedspersonale",
  openGraph: {
    title: "Pædagogisk vikarbureau Nykøbing Falster – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nykøbing Falster. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function NykobingFalsterPage() {
  return <NykobingFalsterClientPage />
}
