import type { Metadata } from "next"
import GillelejeClientPage from "./GillelejeClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk vikarbureau Gilleleje | Vikarer til Psykiatrien, Plejehjem og Bosteder | Læs mere her -Tryghedspersonale.dk",
  description:
    "Specialiseret vikarbureau i Gilleleje med faglig støtte ved udadreagerende adfærd, demens og sociale udfordringer. Fleksibel vikardækning til botilbud, pleje og §85/§108-forløb.",
}

export default function GillelejePage() {
  return <GillelejeClientPage />
}
