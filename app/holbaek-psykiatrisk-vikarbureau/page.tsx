import type { Metadata } from "next"
import HolbaekClientPage from "./HolbaekClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau Holbæk | Tryghedspersonale.dk",
  description:
    "Professionelt psykiatrisk vikarbureau i Holbæk. Nærværende, lyttende og forstående personale til komplekse borgerforløb. Ring 41 44 33 33 for akut hjælp.",
  keywords:
    "psykiatrisk vikarbureau Holbæk, vikar Holbæk, psykiatri personale, Holbæk Kommune, Odsherred, Kalundborg, akut psykiatri",
}

export default function HolbaekPsykiatriskVikarbureau() {
  return <HolbaekClientPage />
}
