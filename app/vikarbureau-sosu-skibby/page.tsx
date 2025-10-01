import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Skibby – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Skibby med erfarne SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk tilbyder fleksible og pålidelige vikarer til plejehjem, hjemmepleje og hospitaler i Skibby.",
}

export default function SkibbyPage() {
  return <KoegeClientPage />
}
