import type { Metadata } from "next"
import GentofteClientPage from "./GentofteClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Gentofte | Tryghedspersonale.dk",
  description:
    "Vikarer til psykiatri, socialpsykiatri og demens i Gentofte. Tryghedspersonale.dk tilbyder midlertidig og akut bemanding til botilbud og plejeenheder.",
}

export default function GentoeftePage() {
  return <GentofteClientPage />
}
