import type { Metadata } from "next"
import BallerupClientPage from "./BallerupClientPage"
import { allCityInfo } from "@/lib/allCityInfo"

const cityKey = "paedagogisk-vikarbureau-ballerup"
const cityInfo = allCityInfo[cityKey]

export const metadata: Metadata = {
  title: cityInfo.meta.title,
  description: cityInfo.meta.description,
}

export default function BallerupPage() {
  return <BallerupClientPage />
}
