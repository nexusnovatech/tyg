import type { Metadata } from "next"
import HumlebaekClientPage from "./HumlebaekClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Humlebæk | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Humlebæk og omegn. Specialiseret i komplekse borgerforløb, demens og akut stabilisering. Ring 41 44 33 33.",
  keywords:
    "psykiatrisk vikarbureau Humlebæk, vikarer psykiatri, demenspleje, akut stabilisering, Fredensborg Kommune, Helsingør, Hørsholm",
}

export default function HumlebaekPsykiatriskVikarbureau() {
  return <HumlebaekClientPage />
}
