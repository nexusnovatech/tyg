import type { Metadata } from "next"
import AlbertslundClientPage from "./AlbertslundClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Albertslund | Tryghedspersonale.dk",
  description:
    "Specialiseret psykiatrisk vikarbistand til botilbud, plejecentre og socialpsykiatri i Albertslund. Fagligt stærk og fleksibel vikardækning ved akut og planlagt behov.",
}

export default function AlbertslundPage() {
  return <AlbertslundClientPage />
}
