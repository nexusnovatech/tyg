import type { Metadata } from "next"
import FrederiksvarkClientPage from "./FrederiksvarkClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Frederiksværk - Specialiseret i komplekse borgerforløb | Tryghedspersonale.dk",
  description:
    "Psykiatrisk Vikarbureau i Frederiksværk – Specialiseret i komplekse borgerforløb. Vi tilbyder erfarne pædagogiske vikarer til bosteder og institutioner. Kontakt os i dag.",
}

export default function FrederiksvarkPage() {
  return <FrederiksvarkClientPage />
}
