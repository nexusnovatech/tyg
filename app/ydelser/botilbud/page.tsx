import type { Metadata } from "next"
import BotilbudClientPage from "./BotilbudClientPage"

export const metadata: Metadata = {
  title: "Vikarer til botilbud, døgninstitutioner og opholdssteder | Tryghedspersonale.dk",
  description:
    "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet. Specialiseret i komplekse borgersituationer og udadreagerende adfærd.",
  keywords:
    "vikarer botilbud, døgninstitutioner vikarer, opholdssteder personale, §108 tilbud vikarer, socialpædagogiske vikarer, botilbud personale",
  openGraph: {
    title: "Vikarer til botilbud, døgninstitutioner og opholdssteder | Tryghedspersonale.dk",
    description:
      "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet. Specialiseret i komplekse borgersituationer og udadreagerende adfærd.",
    type: "website",
    locale: "da_DK",
  },
}

export default function BotilbudPage() {
  return <BotilbudClientPage />
}
