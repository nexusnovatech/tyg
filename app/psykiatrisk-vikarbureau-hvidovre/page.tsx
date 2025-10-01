import type { Metadata } from "next"
import HvidovreClientPage from "./HvidovreClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk vikarbureau i Hvidovre | Tryghedspersonale.dk",
  description:
    "Fagligt stærke psykiatriske vikarer i Hvidovre. Midlertidig eller akut bemanding til botilbud, §85-støtte, demenspleje og socialpsykiatri.",
}

export default function HvidovrePage() {
  return <HvidovreClientPage />
}
