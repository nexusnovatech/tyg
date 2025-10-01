import type { Metadata } from "next"
import UngeBoerneClientPage from "./UngeBoerneClientPage"

export const metadata: Metadata = {
  title: "Unge- og Børneområdet Vikarbureau | Specialiseret i udadreagerende adfærd | Tryghedspersonale.dk",
  description:
    "Professionel vikarbureau for unge- og børneområdet. Specialiseret i udadreagerende adfærd, adfærdsproblemer og komplekse børne- og ungdomsforløb. Ring 41 44 33 33.",
  keywords:
    "unge vikarbureau, børne vikarbureau, udadreagerende adfærd, adfærdsproblemer, ungdomspsykiatri, børnepsykiatri, socialpædagogik, specialpædagogik",
}

export default function UngeBoernePage() {
  return <UngeBoerneClientPage />
}
