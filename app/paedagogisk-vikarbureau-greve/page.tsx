import type { Metadata } from "next"
import GreveClientPage from "./GreveClientPage"

export const metadata: Metadata = {
  title: "Pædagogisk Vikarbureau Greve | Specialiseret i udadreagerende adfærd | Tryghedspersonale.dk",
  description:
    "Pædagogisk Vikarbureau i Greve med specialiserede vikarer til voksne- og ældreområdet. Vi håndterer udadreagerende adfærd og komplekse borgerforløb. Ring 41 44 33 33",
  robots: "noindex, nofollow",
}

export default function Page() {
  return <GreveClientPage />
}
