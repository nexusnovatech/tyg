import type { Metadata } from "next"
import KoegeClientPage from "../koege-psykiatrisk-vikarbureau/KoegeClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Vordingborg – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Vordingborg tilbyder dygtige SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible og kompetente vikarer til hjemmepleje, plejehjem og hospitaler i Vordingborg.",
}

export default function VordingborgPage() {
  return <KoegeClientPage />
}
