import type { Metadata } from "next"
import JaegersprisClientPage from "./JaegersprisClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Jægerspris | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Jægerspris og Frederikssund Kommune. Specialiseret i komplekse borgerforløb med erfarne vikarer til plejehjem, botilbud og psykiatriske institutioner.",
  keywords:
    "psykiatrisk vikarbureau Jægerspris, vikarer Frederikssund, psykiatri personale, Jægerspris plejehjem vikarer, botilbud personale",
}

export default function JaegersprisPage() {
  return <JaegersprisClientPage />
}
