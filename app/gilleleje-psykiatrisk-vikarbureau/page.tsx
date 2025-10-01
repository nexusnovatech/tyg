import type { Metadata } from "next"
import GillelejeClientPage from "./GillelejeClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Gilleleje - Specialiseret i komplekse borgerforløb | Tryghedspersonale.dk",
  description:
    "Psykiatrisk vikarbureau i Gilleleje med erfarne vikarer til socialpsykiatri, demenspleje og specialpædagogiske tilbud. Ring 41 44 33 33 for akut hjælp.",
  keywords:
    "psykiatrisk vikarbureau Gilleleje, psykiatriske vikarer Gilleleje, vikar demens Gilleleje, socialpsykiatrisk vikarbureau, tryghedspersonale Gilleleje",
  openGraph: {
    title: "Psykiatrisk Vikarbureau Gilleleje - Specialiseret i komplekse borgerforløb",
    description:
      "Erfarne psykiatriske vikarer i Gilleleje til socialpsykiatri, demenspleje og specialpædagogiske tilbud. Kontakt os på 41 44 33 33.",
    type: "website",
  },
}

export default function GillelejePage() {
  return <GillelejeClientPage />
}
