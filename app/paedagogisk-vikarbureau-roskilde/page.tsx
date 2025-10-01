import type { Metadata } from "next"
import RoskildeClientPage from "./RoskildeClientPage"

export const metadata: Metadata = {
  title:
    "Pædagogisk Vikarbureau i Roskilde – Specialiserede Vikarer til Botilbud og Socialpsykiatri | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk er vi eksperter i at levere kompetente, erfarne og menneskeligt stærke pædagogiske vikarer i Roskilde og omegn. Specialiseret i komplekse og udfordrende pædagogiske miljøer.",
  keywords:
    "pædagogisk vikarbureau Roskilde, vikar til botilbud, specialpædagogik, §108 vikar, socialpsykiatri, akut vikarbistand",
  openGraph: {
    title: "Pædagogisk Vikarbureau i Roskilde – Specialiserede Vikarer til Botilbud og Socialpsykiatri",
    description:
      "Hos Tryghedspersonale.dk er vi eksperter i at levere kompetente, erfarne og menneskeligt stærke pædagogiske vikarer i Roskilde og omegn. Specialiseret i komplekse og udfordrende pædagogiske miljøer.",
    type: "website",
    locale: "da_DK",
  },
}

export default function RoskildePage() {
  return <RoskildeClientPage />
}
