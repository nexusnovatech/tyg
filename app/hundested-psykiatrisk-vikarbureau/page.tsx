import type { Metadata } from "next"
import HundestadClientPage from "./HundestadClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Hundested | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Hundested og omegn. Specialiseret i komplekse borgerforløb, demens og akut stabilisering. Ring 41 44 33 33",
  keywords:
    "psykiatrisk vikarbureau, Hundested, Halsnæs Kommune, vikar, psykiatri, demens, socialpædagogik, akut stabilisering",
}

export default function HundestadPage() {
  return <HundestadClientPage />
}
