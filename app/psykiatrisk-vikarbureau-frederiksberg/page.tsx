import type { Metadata } from "next"
import FrederiksbergClientPage from "./FrederiksbergClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau på Frederiksberg | Omsorgsfulde psykiatriske vikarer | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder engagerede og fagligt kompetente vikarer i Frederiksberg, der skaber tryghed og nærvær for borgere og personale – når behovet opstår.",
}

export default function FrederiksbergPage() {
  return <FrederiksbergClientPage />
}
