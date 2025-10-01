import type { Metadata } from "next"
import HerlevClientPage from "./HerlevClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Herlev | Specialiseret i Komplekse Borgerforløb | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Herlev. Vi leverer kvalificerede vikarer til plejehjem, botilbud og psykiatriske afdelinger. Specialiseret i komplekse borgerforløb og akut indsats.",
  keywords:
    "psykiatrisk vikarbureau Herlev, vikarer Herlev, plejehjem vikarer, psykiatri vikarer, botilbud vikarer, Herlev Kommune, Ballerup, Rødovre, Glostrup",
  openGraph: {
    title: "Psykiatrisk Vikarbureau Herlev | Tryghedspersonale.dk",
    description: "Professionelt psykiatrisk vikarbureau i Herlev. Specialiseret i komplekse borgerforløb.",
    url: "https://tryghedspersonale.dk/herlev-psykiatrisk-vikarbureau",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function HerlevPsykiatriskVikarbureau() {
  return <HerlevClientPage />
}
