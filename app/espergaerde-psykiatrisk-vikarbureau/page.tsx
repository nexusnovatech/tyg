import type { Metadata } from "next"
import EspergaerdeClientPage from "./EspergaerdeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Espergærde | Specialiseret i Komplekse Borgerforløb | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Espergærde og omegn. Vi leverer kvalificerede vikarer til plejehjem, botilbud og psykiatriske institutioner. Specialiseret i komplekse borgerforløb og akut indsats. Ring 41 44 33 33.",
  keywords:
    "psykiatrisk vikarbureau Espergærde, vikarer Espergærde, plejehjem vikarer, psykiatri vikarer, Helsingør Kommune, akut indsats, komplekse borgerforløb",
  openGraph: {
    title: "Psykiatrisk Vikarbureau Espergærde | Tryghedspersonale.dk",
    description:
      "Professionelt psykiatrisk vikarbureau i Espergærde. Specialiseret i komplekse borgerforløb og akut indsats.",
    url: "https://tryghedspersonale.dk/espergaerde-psykiatrisk-vikarbureau",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function EspergaerdePage() {
  return <EspergaerdeClientPage />
}
