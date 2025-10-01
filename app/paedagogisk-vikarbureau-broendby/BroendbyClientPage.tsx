"use client"

import { CityPageTemplate } from "@/components/CityPageTemplate"
import { broendbyPaedagogiskInfo } from "@/lib/allCityInfo"

export default function BroendbyClientPage() {
  return <CityPageTemplate cityInfo={broendbyPaedagogiskInfo} />
}
