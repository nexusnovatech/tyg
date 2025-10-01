import type { Metadata } from "next"
import HoengClientPage from "./HoengClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Høng | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Høng og omegn. Specialiseret i komplekse borgerforløb, demens og akut stabilisering. Ring 41 44 33 33 for hurtig hjælp.",
  keywords:
    "psykiatrisk vikarbureau Høng, vikarer Høng, psykiatri Høng, demenspleje Høng, socialpædagogik Høng, akut stabilisering Høng, Kalundborg Kommune, Holbæk Kommune",
}

export default function HoengPsykiatriskVikarbureau() {
  return <HoengClientPage />
}
