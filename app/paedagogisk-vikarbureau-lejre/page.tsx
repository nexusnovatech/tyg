import type { Metadata } from "next"
import LejreClientPage from "./LejreClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Lejre – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Lejre. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Lejre, vikarer bosteder Lejre, institutioner Lejre, særlige behov, pædagoger, SSA, tryghedspersonale",
  openGraph: {
    title: "Pædagogisk vikarbureau Lejre – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Lejre. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function LejrePage() {
  return <LejreClientPage />
}
