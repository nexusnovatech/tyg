import type { Metadata } from "next"
import NordsjaellandClientPage from "./NordsjaellandClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Nordsjælland – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nordsjælland. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Nordsjælland, vikarer bosteder Nordsjælland, institutioner Nordsjælland, særlige behov, pædagoger, SSA, tryghedspersonale",
  openGraph: {
    title: "Pædagogisk vikarbureau Nordsjælland – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Nordsjælland. Vi skaber tryghed, stabilitet og udvikling for voksne og unge med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function NordsjaellandPage() {
  return <NordsjaellandClientPage />
}
