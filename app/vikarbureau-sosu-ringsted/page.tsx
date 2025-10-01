import type { Metadata } from "next"
import RingstedClientPage from "./RingstedClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Ringsted – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Ringsted med erfarne SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk leverer fleksible og kompetente vikarer til plejehjem, hjemmepleje og hospitaler i Ringsted.",
}

export default function RingstedPage() {
  return <RingstedClientPage />
}
