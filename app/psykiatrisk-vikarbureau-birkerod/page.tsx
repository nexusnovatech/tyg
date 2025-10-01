import type { Metadata } from "next"
import BirkerodClientPage from "./BirkerodClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Birkerød & i hele Rudersdal Kommune | Omsorgsfulde vikarer -Tryghedspersonale.dk",
  description:
    "Specialiserede vikarer til §85-/§108-forløb, psykiatri og plejecentre i Birkerød. Vi dækker ved udadreagerende og selvskadende adfærd samt dobbeltdiagnoser – akut og planlagt.",
}

export default function BirkerodPage() {
  return <BirkerodClientPage />
}
