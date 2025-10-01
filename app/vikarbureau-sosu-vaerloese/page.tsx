import type { Metadata } from "next"
import VaerloseClientPage from "./VaerloseClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Værløse – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Værløse med erfarne SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible og kompetente vikarer til plejehjem, hjemmepleje og hospitaler i Værløse.",
}

export default function VaerloesePage() {
  return <VaerloseClientPage />
}
