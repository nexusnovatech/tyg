import type { Metadata } from "next"
import JaegersprisClientPage from "./JaegersprisClientPage"

export const metadata: Metadata = {
  title: "Psykiatrisk Vikarbureau i Jægerspris | Tryghedspersonale.dk",
  description:
    "Psykiatrisk vikarbureau i Jægerspris – Vikarer med erfaring i psykiatri, demens og pædagogik. Dækker også Skibby, Kulhuse og hele Frederikssund Kommune.",
}

export default function JaegersprisPage() {
  return <JaegersprisClientPage />
}
