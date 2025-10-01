import type { Metadata } from "next"
import BallerupClientPage from "./BallerupClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Ballerup | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk leverer erfarne vikarer til botilbud og psykiatriske enheder i Ballerup. Faglig støtte ved §85, §108, demens og udadreagerende adfærd.",
}

export default function BallerupPage() {
  return <BallerupClientPage />
}
