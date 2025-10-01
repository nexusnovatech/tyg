import type { Metadata } from "next"
import NykoebingSjaellandClientPage from "./NykoebingSjaellandClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Nykøbing Sjælland | Specialister i Komplekse Borgerforløb | Tryghedspersonale.dk",
  description:
    "Professionelle psykiatriske vikarer i Nykøbing Sjælland med fokus på komplekse borgerforløb, demens og socialpædagogik. Hurtig og stabil vikarhjælp til Odsherred Kommune.",
}

export default function NykoebingSjaellandPage() {
  return <NykoebingSjaellandClientPage />
}
