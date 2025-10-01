import type { Metadata } from "next"
import VallensbaekClientPage from "./VallensbaekClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Vallensbæk – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer til bosteder og institutioner i Vallensbæk. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Vallensbæk, vikarer bosteder Vallensbæk, pædagogiske vikarer institutioner, specialiserede vikarer Vallensbæk",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Vallensbæk – Kvalificerede Vikarer til Bosteder og Institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer til bosteder og institutioner i Vallensbæk. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
    url: "https://www.tryghedspersonale.dk/paedagogisk-vikarbureau-vallensbaek",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function VallensbaekPage() {
  return <VallensbaekClientPage />
}
