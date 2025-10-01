import type { Metadata } from "next"
import AlbertslundClientPage from "./AlbertslundClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Albertslund – Kvalificerede Vikarer til Bosteder og Institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi kvalificerede og erfarne pædagogiske vikarer til bosteder og institutioner i Albertslund. Vi hjælper med unge og voksne med særlige behov – skabe tryghed og udvikling i din institution.",
}

export default function AlbertslundPage() {
  return <AlbertslundClientPage />
}
