import type { Metadata } from "next"
import TaastrupClientPage from "./TaastrupClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Taastrup | Tryg og faglig vikardækning - Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder psykiatriske og socialpædagogiske vikarer i Taastrup. Hjælp ved udadreagerende adfærd, forflytninger og komplekse borgersager – §85- og §108-forløb dækkes.",
}

export default function TaastrupPage() {
  return <TaastrupClientPage />
}
