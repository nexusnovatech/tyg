import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Stevns – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Stevns med kompetente SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible vikarer til hjemmepleje, plejehjem og hospitaler i Stevns Kommune.",
}

export default function StevnsPage() {
  return <KoegeClientPage />
}
