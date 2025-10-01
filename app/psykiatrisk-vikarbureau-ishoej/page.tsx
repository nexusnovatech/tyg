import type { Metadata } from "next"
import IshoejClientPage from "./IshoejClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk vikarbureau i Ishøj | Omsorgsfulde psykiatriske medarbejdere | Kontakt os i dag| Tryghedspersonale.dk",
  description:
    "Fagligt stærke psykiatriske vikarer til botilbud, plejecentre og socialpsykiatri i Ishøj. Fleksibel og tryg vikarbemanding ved akut og planlagt behov.",
}

export default function IshoejPage() {
  return <IshoejClientPage />
}
