import type { Metadata } from "next"
import KalundborgClientPage from "./KalundborgClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Kalundborg | Tryghedspersonale.dk",
  description:
    "Specialiseret vikarbureau i Kalundborg til psykiatri og demens. Erfarne vikarer til børn, unge, voksne og ældre – botilbud, §85/§108 og akutte opgaver. Tryghed, faglighed og fleksibilitet.",
}

export default function KalundborgPage() {
  return <KalundborgClientPage />
}
