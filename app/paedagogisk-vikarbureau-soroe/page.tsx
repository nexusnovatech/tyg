import type { Metadata } from "next"
import SoroeClientPage from "./SoroeClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Sorø – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Sorø. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Sorø, vikarer bosteder Sorø, pædagogiske vikarer institutioner, specialiserede vikarer Sorø",
  openGraph: {
    title: "Pædagogisk vikarbureau Sorø – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Sorø. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-soroe",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function SoroePage() {
  return <SoroeClientPage />
}
