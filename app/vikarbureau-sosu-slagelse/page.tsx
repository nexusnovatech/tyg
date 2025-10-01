import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Slagelse – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Slagelse leverer dygtige SOSU-assistenter og SOSU-hjælpere. Hos Tryghedspersonale.dk får du erfarne og fleksible vikarer til hjemmepleje, plejehjem og hospitaler i Slagelse.",
}

export default function SlagelsePage() {
  return <KoegeClientPage />
}
