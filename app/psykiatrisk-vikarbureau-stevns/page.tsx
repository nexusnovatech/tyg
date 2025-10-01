import type { Metadata } from "next"
import StevnsClientPage from "./StevnsClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Stevns | Vikar med hjertet på det rette sted | Læs mere her - Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk leverer fagligt kompetente psykiatriske vikarer til botilbud og plejecentre i Stevns Kommune. Fleksible og trygge vikarløsninger ved akut og planlagt behov.",
}

export default function StevnsPage() {
  return <StevnsClientPage />
}
