import type { Metadata } from "next"
import RingstedClientPage from "./RingstedClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Ringsted – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer i Ringsted. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
  keywords:
    "pædagogisk vikarbureau Ringsted, vikarer bosteder, institutioner, særlige behov, pædagoger, SSA, ambulancebehandlere, politibetjente",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Ringsted – Kvalificerede Vikarer til Bosteder og Institutioner",
    description:
      "Hos Tryghedspersonale.dk tilbyder vi erfarne og kvalificerede pædagogiske vikarer i Ringsted. Vi skaber tryghed og udvikling for unge og voksne med særlige behov – hver dag.",
    type: "website",
    locale: "da_DK",
  },
}

export default function RingstedPage() {
  return <RingstedClientPage />
}
