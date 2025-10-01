import type { Metadata } from "next"
import StenloeseclientPage from "./StenloeseclientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Stenløse, Ølstykke & Veksø | Tryk for at læs mere – Tryghedspersonale.dk",
  description:
    "Psykiatrisk vikarbureau i Stenløse – Vikarer med psykiatrisk og socialpædagogisk ekspertise. Dækker også Ølstykke, Veksø og hele Egedal Kommune.",
}

export default function StenloesePage() {
  return <StenloeseclientPage />
}
