import type { Metadata } from "next"
import EspergaerdeClientPage from "./EspergaerdeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau Espergærde | Vikarer med hjertet på det rette sted - Tryghedspersonale.dk",
  description:
    "Specialiseret vikarbureau i Espergærde med fokus på psykiatri, demens og socialpsykiatri. Fleksibel og akut vikardækning til botilbud, plejecentre og §85/§108-forløb.",
}

export default function EspergaerdePage() {
  return <EspergaerdeClientPage />
}
