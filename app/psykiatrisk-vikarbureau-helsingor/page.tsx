import type { Metadata } from "next"
import HelsingorClientPage from "./HelsingorClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Helsingør | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk leverer specialiserede psykiatriske vikarer til botilbud, plejecentre og socialpsykiatri i Helsingør. Fleksibel vikarbemanding ved akut og planlagt behov.",
}

export default function HelsingorPage() {
  return <HelsingorClientPage />
}
