import type { Metadata } from "next"
import DragorClientPage from "./DragorClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Dragør | Tryghedspersonale.dk",
  description:
    "Specialiseret vikarbureau i Dragør med faglig støtte ved udadreagerende adfærd, demens og socialpsykiatriske behov. Akut og planlagt vikardækning til botilbud, plejecentre og §85/§108-forløb.",
}

export default function DragorPage() {
  return <DragorClientPage />
}
