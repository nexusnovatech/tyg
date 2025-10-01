import type { Metadata } from "next"
import BroendbyClientPage from "./BroendbyClientPage"
import { broendbyPaedagogiskInfo } from "@/lib/allCityInfo"

export const metadata: Metadata = {
  title: broendbyPaedagogiskInfo.pageTitle,
  description: broendbyPaedagogiskInfo.metaDescription,
  openGraph: {
    title: broendbyPaedagogiskInfo.pageTitle,
    description: broendbyPaedagogiskInfo.metaDescription,
    type: "website",
  },
}

export default function BroendbyPaedagogiskVikarbureau() {
  return <BroendbyClientPage />
}
