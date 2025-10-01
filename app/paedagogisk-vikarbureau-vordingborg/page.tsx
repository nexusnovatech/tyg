import type { Metadata } from "next"
import VordingborgClientPage from "./VordingborgClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk vikarbureau Vordingborg – Erfarne vikarer til bosteder & institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Vordingborg. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Vordingborg, vikarer bosteder Vordingborg, pædagogiske vikarer institutioner, specialiserede vikarer Vordingborg",
  openGraph: {
    title: "Pædagogisk vikarbureau Vordingborg – Erfarne vikarer til bosteder & institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne pædagogiske vikarer i Vordingborg. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-vordingborg",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function VordingborgPage() {
  return <VordingborgClientPage />
}
