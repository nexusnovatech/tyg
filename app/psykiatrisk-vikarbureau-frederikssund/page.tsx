import type { Metadata } from "next"
import FrederiksundClientPage from "./FrederiksundClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Frederikssund | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder specialiserede psykiatriske vikarer til botilbud, plejecentre og socialpsykiatri i Frederikssund. Fleksibel vikarbemanding ved akut og planlagt behov.",
}

export default function FrederiksundPage() {
  return <FrederiksundClientPage />
}
