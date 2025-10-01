import type { Metadata } from "next"
import HolteClientPage from "./HolteClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Holte | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Holte og Rudersdal Kommune. Specialiseret i komplekse borgerforløb med erfarne vikarer til plejehjem, botilbud og psykiatriske institutioner.",
  keywords:
    "psykiatrisk vikarbureau Holte, vikarer Rudersdal, psykiatri personale, Holte plejehjem vikarer, botilbud personale",
}

export default function HoltePage() {
  return <HolteClientPage />
}
