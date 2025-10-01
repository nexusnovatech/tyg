import type { Metadata } from "next"
import HorsholmClientPage from "./HorsholmClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Hørsholm | Med hjertet på dette rette sted - Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk leverer erfarne og specialiserede vikarer til botilbud, §85/§108-forløb og plejecentre i Hørsholm. Vi dækker ved udadreagerende adfærd, psykiatriske kriser, sygdom og manglende bemanding – både akut og planlagt. Fokus på tryghed, ro og faglighed i alle indsatser. Læs mere her.",
}

export default function HorsholmPage() {
  return <HorsholmClientPage />
}
