import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Rødovre – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Rødovre med erfarne SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible og kompetente vikarer til plejehjem, hjemmepleje og hospitaler i Rødovre.",
}

export default function RoedovrePage() {
  return <KoegeClientPage />
}
