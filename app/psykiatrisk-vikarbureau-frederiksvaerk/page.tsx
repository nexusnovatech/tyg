import type { Metadata } from "next"
import FrederiksvaerkClientPage from "./FrederiksvaerkClientPage"

export const metadata: Metadata = {
  title:
    "Kompetent Psykiatrisk Vikarbureau i Frederiksværk | Specialiserede Vikarer til Psykiatri & Socialpædagogik | Tryghedspersonale.dk",
  description:
    "Frederiksværks pålidelige vikarbureau til psykiatri og socialpædagogik. Vi leverer erfarne vikarer til bosteder, plejehjem og akut støtte i Halsnæs Kommune.",
}

export default function FrederiksvaerkPage() {
  return <FrederiksvaerkClientPage />
}
