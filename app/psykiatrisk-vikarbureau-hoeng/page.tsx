import type { Metadata } from "next"
import HoengClientPage from "./HoengClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Høng | Specialister i Komplekse Borgerforløb | Tryghedspersonale.dk",
  description:
    "Professionelt vikarbureau i Høng med erfarne psykiatriske og socialpædagogiske vikarer. Fokus på komplekse borgerforløb, demens og akut støtte i Høng og omegn.",
}

export default function HoengPage() {
  return <HoengClientPage />
}
