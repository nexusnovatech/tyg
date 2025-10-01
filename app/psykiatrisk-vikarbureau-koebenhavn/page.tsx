import type { Metadata } from "next"
import KoebenhavnClientPage from "./KoebenhavnClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau i København | Omsorgsfulde psykiatrisk vikarer | Tryghedspersonale.dk | Frederiksberg | Hellerup | Amager | Albertslund | Glostrup | Brøndby | 41 44 33 33",
  description:
    "Tryghedspersonale.dk tilbyder engagerede og fagligt kompetente vikarer i København, der skaber tryghed og nærvær for borgere og personale – når behovet opstår.",
}

export default function KoebenhavnPage() {
  return <KoebenhavnClientPage />
}
