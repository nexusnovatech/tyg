import type { Metadata } from "next"
import FarumClientPage from "./FarumClientPage"

export const metadata: Metadata = {
  title:
    "Professionelt Psykiatrisk Vikarbureau i Farum | Specialiserede Vikarer til Psykiatri & Socialpædagogik | Tryghedspersonale.dk",
  description:
    "Pålideligt vikarbureau i Farum, der leverer kvalificerede psykiatriske og socialpædagogiske vikarer til plejehjem, bosteder og akutte opgaver i Furesø Kommune. Hurtig og fleksibel bemanding.",
}

export default function FarumPage() {
  return <FarumClientPage />
}
