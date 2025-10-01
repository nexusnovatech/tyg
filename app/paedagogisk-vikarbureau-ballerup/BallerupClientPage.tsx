"use client"

import { CityPageTemplate } from "@/components/CityPageTemplate"
import { allCityInfo } from "@/lib/allCityInfo"

export default function BallerupClientPage() {
  const cityKey = "paedagogisk-vikarbureau-ballerup"
  const cityInfo = allCityInfo[cityKey]

  return <CityPageTemplate cityInfo={cityInfo} />
}
