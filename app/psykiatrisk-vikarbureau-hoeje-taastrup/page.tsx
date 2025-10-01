import type { Metadata } from "next"
import HoejeTaastrupClientPage from "./HoejeTaastrupClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk vikarbureau i Høje-Taastrup | Vi er der når det er allersværest | Vikarer med hjertet på det rette sted - Tryghedspersonale.dk",
  description:
    "Fagligt stærke psykiatriske vikarer til botilbud, plejecentre og socialpsykiatri i Høje-Taastrup. Fleksibel og tryg vikarbemanding ved akut og planlagt behov.",
}

export default function HoejeTaastrupPage() {
  return <HoejeTaastrupClientPage />
}
