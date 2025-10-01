import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Fast vagt til plejehjem, hospitaler & botilbud | Trygge vikarer ved udadreagerende adfærd",
  description:
    "Specialiserede vikarer til plejehjem med erfaring i håndtering af udadreagerende adfærd. Professionel støtte gennem fastvagt og enkeltmandsprojekter. Ring 41 44 33 33",
  keywords:
    "fast vagt plejehjem, vikarer udadreagerende adfærd, plejehjem sikkerhed, psykiatrisk bemanding, enkeltmandsprojekt, konflikthåndtering plejehjem",
  openGraph: {
    title: "Fast vagt til plejehjem, hospitaler & botilbud | Trygge vikarer ved udadreagerende adfærd",
    description:
      "Specialiserede vikarer til plejehjem med erfaring i håndtering af udadreagerende adfærd. Professionel støtte gennem fastvagt og enkeltmandsprojekter.",
    url: "https://tryghedspersonale.dk/fastvagt-plejehjem",
    siteName: "Tryghedspersonale.dk",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast vagt til plejehjem, hospitaler & botilbud | Trygge vikarer ved udadreagerende adfærd",
    description:
      "Specialiserede vikarer til plejehjem med erfaring i håndtering af udadreagerende adfærd. Professionel støtte gennem fastvagt og enkeltmandsprojekter.",
  },
  alternates: {
    canonical: "https://tryghedspersonale.dk/fastvagt-plejehjem",
  },
}

export default function Page() {
  return <ClientPage />
}
