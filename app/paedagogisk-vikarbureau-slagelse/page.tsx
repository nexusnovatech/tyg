import type { Metadata } from "next"
import SlagelseClientPage from "./SlagelseClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Slagelse | Specialiserede Vikarer – Tryghedspersonale.dk",
  description:
    "Professionelt pædagogisk vikarbureau i Slagelse. Vi leverer specialiserede og relationsstærke vikarer til §108-tilbud, botilbud og komplekse pædagogiske opgaver i hele Slagelse Kommune.",
  keywords:
    "pædagogisk vikarbureau Slagelse, vikarbureau socialpsykiatri Slagelse, vikar til botilbud Slagelse, §108-tilbud vikar Slagelse",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Slagelse | Specialiserede Vikarer",
    description:
      "Professionelt pædagogisk vikarbureau i Slagelse. Vi leverer specialiserede og relationsstærke vikarer til §108-tilbud, botilbud og komplekse pædagogiske opgaver i hele Slagelse Kommune.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-slagelse",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function SlagelsePage() {
  return <SlagelseClientPage />
}
