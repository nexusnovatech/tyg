import type { Metadata } from "next"
import GreveClientPage from "./GreveClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk vikarbureau i Greve | Psykiatri Vikarservice | Vi Har Hjertet På det Rette Sted - Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder specialiserede psykiatriske vikarer til botilbud, plejecentre og socialpsykiatri i Greve. Fleksibel og faglig vikarbemanding ved akut og planlagt behov.",
}

export default function GrevePage() {
  return <GreveClientPage />
}
