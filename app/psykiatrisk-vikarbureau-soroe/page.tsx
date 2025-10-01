import type { Metadata } from "next"
import SoroeClientPage from "./SoroeClientPage"

export const metadata: Metadata = {
  title:
    "Professionelt Psykiatrisk Vikarbureau i Sorø | Kompetente Vikarer til Psykiatri og Socialpædagogik | Tryghedspersonale.dk",
  description:
    "Pålideligt vikarbureau i Sorø, der leverer erfarne psykiatriske og socialpædagogiske vikarer til bosteder, plejehjem og akut støtte i Sorø Kommune. Få hjælp med det samme.",
}

export default function SoroePage() {
  return <SoroeClientPage />
}
