import type { Metadata } from "next"
import FaxeClientPage from "./FaxeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Faxe | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Faxe. Nærværende, lyttende og forstående personale til komplekse borgerforløb. Ring 41 44 33 33",
  keywords:
    "psykiatrisk vikarbureau, Faxe, vikar, psykiatri, sundhedspersonale, Faxe Kommune, Køge, Haslev, Stevns, Præstø",
}

export default function FaxePage() {
  return <FaxeClientPage />
}
