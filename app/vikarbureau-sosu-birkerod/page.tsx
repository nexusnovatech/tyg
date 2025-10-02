import type { Metadata } from "next"
import BirkerodClientPage from "./BirkerodClientPage"

export const metadata: Metadata = {
  title: "Vikarbureau SOSU Birkerød – Tryghedspersonale.dk | Ring 41 44 33 33",
  description:
    "Vikarbureau SOSU Birkerød med kvalificerede SOSU-assistenter og SOSU-hjælpere. Tryghedspersonale.dk sikrer fleksible og erfarne vikarer til plejehjem, hjemmepleje og hospitaler i Birkerød.",
}

export default function BirkerodPage() {
  return <BirkerodClientPage />
}