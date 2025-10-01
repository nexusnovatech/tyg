import type { Metadata } from "next"
import FremgangsmaaderClientPage from "./FremgangsmaaderClientPage"

export const metadata: Metadata = {
  title: "Fremgangsmåder hos Tryghedspersonale.dk - Arousal Regulering, Afskærmning og mere",
  description:
    "Læs om de metoder Tryghedspersonale.dk benytter til at sikre borgerens trivsel, herunder Arousal Regulering, Afskærmning, Afspejling- og Afledningsteknikker og Dokumentation.",
}

export default function FremgangsmaaderPage() {
  return <FremgangsmaaderClientPage />
}
