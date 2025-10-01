import type { Metadata } from "next"
import BrondbyClientPage from "./BrondbyClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Brøndby | Tryghedspersonale.dk",
  description:
    "Fagligt kompetente psykiatriske vikarer til botilbud og plejecentre i Brøndby. Midlertidig og akut vikarbemanding med fokus på tryghed og stabilitet.",
}

export default function BrondbyPage() {
  return <BrondbyClientPage />
}
