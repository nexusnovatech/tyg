import type { Metadata } from "next"
import RoskildeClientPage from "./RoskildeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Roskilde | Tryghedspersonale.dk",
  description:
    "Specialiseret vikarbureau i Roskilde med erfaring inden for psykiatri og demens. Vikarer til botilbud og pleje med fokus på faglighed og tryghed.",
}

export default function RoskildePage() {
  return <RoskildeClientPage />
}
