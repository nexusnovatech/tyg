import type { Metadata } from "next"
import HillerodClientPage from "./HillerodClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Hillerød & omegn | Omsorgsfulde psykiatriske medarbejdere | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder engagerede og fagligt kompetente vikarer i Hillerød, der skaber tryghed og nærvær for borgere og personale – når behovet opstår. Læs mere her",
}

export default function HillerodPage() {
  return <HillerodClientPage />
}
