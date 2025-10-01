import type { Metadata } from "next"
import HolteClientPage from "./HolteClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Holte, Vedbæk & Rudersdal | Tryghedspersonale.dk | 41 44 33 33",
  description:
    "Psykiatrisk vikarbureau i Holte – Vi leverer erfarne og empatiske vikarer til psykiatri, demens og socialpædagogiske tilbud. Også i Vedbæk og Rudersdal. → Læs mere her",
}

export default function HoltePage() {
  return <HolteClientPage />
}
