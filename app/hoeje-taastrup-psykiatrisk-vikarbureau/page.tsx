import type { Metadata } from "next"
import HoejeTaastrupClientPage from "./HoejeTaastrupClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Høje-Taastrup | Specialiseret i komplekse borgerforløb | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Høje-Taastrup. Vi leverer kvalificerede vikarer til plejehjem, botilbud og psykiatriske institutioner. Specialiseret i komplekse borgerforløb og akut indsats. Ring 41 44 33 33.",
  keywords:
    "psykiatrisk vikarbureau Høje-Taastrup, vikarer psykiatri, plejehjem vikarer, botilbud personale, akut indsats, komplekse borgerforløb, Høje-Taastrup Kommune, Albertslund, Brøndby, Vallensbæk",
  openGraph: {
    title: "Psykiatrisk Vikarbureau Høje-Taastrup | Tryghedspersonale.dk",
    description:
      "Professionelt psykiatrisk vikarbureau i Høje-Taastrup. Specialiseret i komplekse borgerforløb og akut indsats.",
    type: "website",
  },
}

export default function HoejeTaastrupPsykiatriskVikarbureau() {
  return <HoejeTaastrupClientPage />
}
