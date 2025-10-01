import type { Metadata } from "next"
import HumlebaekClientPage from "./HumlebaekClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Humlebæk, Nivå & Fredensborg | Tryghedspersonale.dk | 41 44 33 33",
  description:
    "Psykiatrisk vikarbureau i Humlebæk – Vi leverer erfarne og nærværende vikarer til psykiatri og socialpædagogik i Nivå, Fredensborg og hele Fredensborg Kommune. → Læs mere her",
}

export default function HumlebaekPage() {
  return <HumlebaekClientPage />
}
