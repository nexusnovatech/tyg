import type { Metadata } from "next"
import HerlevClientPage from "./HerlevClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Herlev | Tryghed i komplekse borgerforløb",
  description:
    "Specialiseret vikarbureau i Herlev. Faglig og relationel støtte ved udadreagerende adfærd, forflytninger og socialpsykiatriske behov. Akut og planlagt vikardækning til §85- og §108-tilbud.",
}

export default function HerlevPage() {
  return <HerlevClientPage />
}
