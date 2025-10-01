import type { Metadata } from "next"
import NaestvedClientPage from "./NaestvedClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau i Næstved | Specialiserede Vikarer – Tryghedspersonale.dk",
  description:
    "Pålideligt og erfarent pædagogisk vikarbureau i Næstved. Vi leverer specialiserede vikarer til botilbud, §108-tilbud og psykosociale miljøer i hele Næstved Kommune – hurtigt og professionelt.",
}

export default function NaestvedPage() {
  return <NaestvedClientPage />
}
