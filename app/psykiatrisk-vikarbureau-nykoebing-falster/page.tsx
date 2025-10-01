import type { Metadata } from "next"
import NykoebingFalsterClientPage from "./NykoebingFalsterClientPage"

export const metadata: Metadata = {
  title:
    "Professionelt Psykiatrisk Vikarbureau i Nykøbing Falster | Eksperter i Komplekse Borgerforløb | Tryghedspersonale.dk",
  description:
    "Pålidelige psykiatriske vikarer i Nykøbing Falster med stor erfaring i komplekse borgerforløb, demens og socialpædagogik. Hurtig og faglig vikarhjælp til Lolland Kommune.",
}

export default function NykoebingFalsterPage() {
  return <NykoebingFalsterClientPage />
}
