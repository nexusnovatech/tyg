import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Vallensbæk – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Vallensbæk med kvalificerede SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk sikrer fleksible og erfarne vikarer til plejehjem, hjemmepleje og hospitaler i Vallensbæk.",
}

export default function VallensbaekPage() {
  return <KoegeClientPage />
}
