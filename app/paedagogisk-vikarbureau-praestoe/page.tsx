import type { Metadata } from "next"
import PraestoeClientPage from "./PraestoeClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Præstø – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Præstø. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Præstø, vikarer bosteder, institutioner, særlige behov, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk vikarbureau Præstø – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Præstø. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function PraestoePage() {
  return <PraestoeClientPage />
}
