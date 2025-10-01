import type { Metadata } from "next"
import SjaellandClientPage from "./SjaellandClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau Sjælland – Erfarne vikarer til hele Sjælland | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer til hele Sjælland. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Sjælland, vikarer bosteder Sjælland, pædagogiske vikarer institutioner, specialiserede vikarer Sjælland",
  openGraph: {
    title: "Pædagogisk Vikarbureau Sjælland – Erfarne vikarer til hele Sjælland",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer til hele Sjælland. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-sjaelland",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function SjaellandPage() {
  return <SjaellandClientPage />
}
