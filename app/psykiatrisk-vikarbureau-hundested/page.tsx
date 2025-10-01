import type { Metadata } from "next"
import HundestedClientPage from "./HundestedClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Hundested | Tryghedspersonale.dk",
  description:
    "Erfarne vikarer i Hundested til udadreagerende adfærd, selvskadende borgere og dobbeltdiagnoser. Vi dækker botilbud, plejecentre og §85/§108-forløb – akut og planlagt.",
}

export default function HundestedPage() {
  return <HundestedClientPage />
}
