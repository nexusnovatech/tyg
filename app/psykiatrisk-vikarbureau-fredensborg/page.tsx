import type { Metadata } from "next"
import FredensbergClientPage from "./FredensbergClientPage"

export const metadata: Metadata = {
  title: "Professionelt Psykiatrisk Vikarbureau i Fredensborg | Kompetente Vikarer med Hjertet på rette sted",
  description:
    "Fredensborgs pålidelige vikarbureau til psykiatri og socialpædagogik. Vi leverer kvalificerede vikarer til pleje, bosteder og akutte opgaver i Fredensborg Kommune.",
}

export default function FredensbergPage() {
  return <FredensbergClientPage />
}
