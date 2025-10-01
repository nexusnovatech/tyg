import type { Metadata } from "next"
import NakskovClientPage from "./NakskovClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau i Nakskov | Specialister i komplekse borgerforløb | 41 44 33 33 - Tryghedspersonale.dk",
  description:
    "Professionelle psykiatriske vikarer i Nakskov med ekspertise i komplekse borgerforløb, demens og socialpædagogiske tilbud. Hurtig og pålidelig vikarhjælp til pleje, bosteder og akutte opgaver i Lolland Kommune.",
}

export default function NakskovPage() {
  return <NakskovClientPage />
}
