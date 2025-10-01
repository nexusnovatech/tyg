import type { Metadata } from "next"
import JyllandClientPage from "./JyllandClientPage"

export const metadata: Metadata = {
  title:
    "Psykiatrisk Vikarbureau i Jylland | Håndtering af udadreagerende adfærd | Specialiseret Vikarservice | Pædagogisk Vikarbureau Jylland | Sundhedsfaglig Vikarbureau i Jylland - Tryghedspersonale.dk 41 44 33 33",
  description:
    "Få professionel vikarservice til institutioner i hele Jylland. Vi tilbyder vikarer til asylcentre, plejehjem, bosteder, psykiatrien og konflikthåndtering. Vore vikarer er erfarne i håndtering af psykiske lidelser og voldsomme adfærdsmønstre. Kontakt os for skræddersyede løsninger.",
}

export default function JyllandPage() {
  return <JyllandClientPage />
}
