import type { Metadata } from "next"
import NaestvedClientPage from "./NaestvedClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Næstved | Tryghedspersonale.dk",
  description:
    "Specialiseret psykiatrisk vikarbureau i Næstved Kommune med erfaring i psykiatri, demens og socialpsykiatri. Tryg og faglig vikardækning til botilbud og plejecentre.",
}

export default function NaestvedPage() {
  return <NaestvedClientPage />
}
