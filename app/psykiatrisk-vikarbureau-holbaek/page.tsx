import type { Metadata } from "next"
import HolbaekClientPage from "./HolbaekClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau i Holbæk - Håndtering af kompleks borgerforløb | Misbrugere | Dobbeltdiagnoser | Specialiseret i demens m. udadreagerende adfærd | Frontallapdemens - Tryghedspersonale.dk | 41 44 33 33",
  description:
    "Psykiatrisk vikarbureau med stærk faglighed – nu også i Holbæk og omegn. Søger du stabile og erfarne vikarer til botilbud eller plejecentre? Vi leverer specialiseret vikardækning inden for psykiatri, demens og socialpsykiatri – hurtigt, professionelt og med fokus på tryghed for både borgere og personale. Vores vikarer er håndplukkede for deres faglighed og menneskelige indsigt – og klar til at træde til, når du har brug for det.",
}

export default function HolbaekPage() {
  return <HolbaekClientPage />
}
