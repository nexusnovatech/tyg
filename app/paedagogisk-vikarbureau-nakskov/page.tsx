import type { Metadata } from "next"
import NakskovClientPage from "./NakskovClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Nakskov – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nakskov. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Nakskov, vikarer bosteder Nakskov, institutioner Nakskov, særlige behov, pædagoger, SSA, tryghedspersonale",
  openGraph: {
    title: "Pædagogisk vikarbureau Nakskov – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nakskov. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function NakskovPage() {
  return <NakskovClientPage />
}
