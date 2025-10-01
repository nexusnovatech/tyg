import type { Metadata } from "next"
import HaslevClientPage from "./HaslevClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Haslev | Specialiseret i komplekse borgerforløb | Tryghedspersonale.dk",
  description:
    "Psykiatrisk vikarbureau i Haslev med erfarne vikarer til demenspleje, socialpsykiatri og udadreagerende adfærd. Akut hjælp til plejehjem, botilbud og krisecentre i Haslev Kommune og Region Sjælland. Ring 41 44 33 33",
  keywords:
    "psykiatrisk vikarbureau Haslev, psykiatriske vikarer Haslev, vikar demens Haslev, ekstern psykiatrisk støtte Haslev, akut vikar psykiatri Sjælland, socialpsykiatrisk vikarbureau Haslev, vikar til bosted Haslev, tryghedspersonale Haslev Kommune, vikarbureau psykiatri Region Sjælland",
  openGraph: {
    title: "Psykiatrisk Vikarbureau Haslev | Specialiseret i komplekse borgerforløb",
    description:
      "Erfarne psykiatriske vikarer til Haslev Kommune. Specialiseret i demenspleje og udadreagerende adfærd. Akut hjælp 24/7. Ring 41 44 33 33",
    type: "website",
    locale: "da_DK",
  },
}

export default function HaslevPsykiatriskVikarbureau() {
  return <HaslevClientPage />
}
