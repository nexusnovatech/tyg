import type { Metadata } from "next"
import KrisecentreClientPage from "./KrisecentreClientPage"

export const metadata: Metadata = {
  title: "Specialiseret bemanding til krisecentre | Tryghedspersonale.dk",
  description:
    "Professionel bemanding til krisecentre med erfaring i traumehåndtering, konflikthåndtering og støtte til kvinder og børn i krise. Døgnbemanding og akut udrykning.",
  keywords:
    "krisecentre bemanding, vikar krisecenter, traumehåndtering, kvindekrisecenter, børn i krise, konflikthåndtering, sikkerhedsvagt krisecenter, døgnbemanding krisecenter",
  openGraph: {
    title: "Specialiseret bemanding til krisecentre | Tryghedspersonale.dk",
    description:
      "Professionel bemanding til krisecentre med erfaring i traumehåndtering, konflikthåndtering og støtte til kvinder og børn i krise.",
    url: "https://tryghedspersonale.dk/ydelser/krisecentre",
    siteName: "Tryghedspersonale.dk",
    images: [
      {
        url: "/tryghedspersonale-share.png",
        width: 1200,
        height: 630,
        alt: "Tryghedspersonale.dk - Specialiseret bemanding til krisecentre",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialiseret bemanding til krisecentre | Tryghedspersonale.dk",
    description:
      "Professionel bemanding til krisecentre med erfaring i traumehåndtering og støtte til kvinder og børn i krise.",
    images: ["/tryghedspersonale-share.png"],
  },
  alternates: {
    canonical: "https://tryghedspersonale.dk/ydelser/krisecentre",
  },
}

export default function KrisecentrePage() {
  return <KrisecentreClientPage />
}
