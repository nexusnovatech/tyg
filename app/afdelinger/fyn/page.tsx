import type { Metadata } from "next"
import FynClientPage from "./FynClientPage"

export const metadata: Metadata = {
  title:
    "Specialiseret Vikarbureau på Fyn | Odense, Middelfart, Svendborg, Kolding | Håndtering af Udadreagerende Adfærd | Psykotiske & Voldsomme Borgere | Kontakt Os i Dag",
  description:
    "Som specialiseret vikarbureau tilbyder vi fast vagt på Fyn, med fokus på håndtering af udadreagerende adfærd, psykotiske og voldsomme borgere. Vi leverer erfarne vikarer til asylcentre, plejehjem, bosteder og psykiatrien i Odense, Middelfart, Svendborg, Kolding og flere steder. Vore vikarer sikrer tryghed og stabil drift i selv de mest udfordrende situationer. Kontakt os i dag for skræddersyede løsninger, der opfylder jeres behov.",
  keywords:
    "vikar til asylcenter Fyn, vikar til plejehjem Fyn, vikar til bosted Fyn, psykiatrisk vikar Fyn, tryghedsmedarbejder Fyn, konflikthåndtering Fyn, tryghedspersonale Fyn, sikkerhedsmedarbejder Fyn, vikar til institutioner Fyn, tryghedsmedarbejder til bosted Fyn, akut vikar Fyn, vikar til psykiatrisk afdeling Fyn, vikar til enkeltmandsprojekt Fyn, deeskalering Fyn, vikar til borger med udadreagerende adfærd Fyn, vikar til psykiatri Fyn, vikar til socialpædagogiske opgaver Fyn, sikkerhedspersonale Fyn, vikar til skærmede enheder Fyn, tryghed i institutioner Fyn, vikar til borgere med psykiske lidelser Fyn, vikar til plejehjem med særlige behov Fyn, vikar til konflikthåndtering Fyn, psykiatrisk vikar, fastvagt til plejehjem, vikar til aflastning Fyn, tryghed i psykiatrien, vikar til støtteopgaver Fyn, vikar til ferieafløsning Fyn, vikar til krisesituationer Fyn, sikkerhed i bosteder Fyn, konflikthåndtering i psykiatrien Fyn, vikar til krisehåndtering Fyn, tryghedsmedarbejder til psykiatrisk afdeling Fyn, vikar til udadreagerende borgere Fyn, akut bemanding Fyn, vikar til borgerarbejde Fyn, vikar til specialiserede bosteder Fyn",
  openGraph: {
    title: "Specialiseret Vikarbureau på Fyn | Odense, Middelfart, Svendborg, Kolding",
    description:
      "Som specialiseret vikarbureau tilbyder vi fast vagt på Fyn, med fokus på håndtering af udadreagerende adfærd, psykotiske og voldsomme borgere.",
    url: "https://tryghedspersonale.dk/afdelinger/fyn",
    siteName: "Tryghedspersonale.dk",
    images: [
      {
        url: "/tryghedspersonale-share.png",
        width: 1200,
        height: 630,
        alt: "Tryghedspersonale.dk - Specialiseret vikarbureau på Fyn",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialiseret Vikarbureau på Fyn | Tryghedspersonale.dk",
    description:
      "Som specialiseret vikarbureau tilbyder vi fast vagt på Fyn, med fokus på håndtering af udadreagerende adfærd, psykotiske og voldsomme borgere.",
    images: ["/tryghedspersonale-share.png"],
  },
  alternates: {
    canonical: "https://tryghedspersonale.dk/afdelinger/fyn",
  },
}

export default function FynPage() {
  return <FynClientPage />
}
