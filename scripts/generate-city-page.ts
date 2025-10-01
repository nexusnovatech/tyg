import fs from "fs"
import path from "path"

interface CityPageConfig {
  cityKey: string
  cityName: string
  title: string
  description: string
  coverageAreas: string[]
}

export function generateCityPage(config: CityPageConfig) {
  const { cityKey, cityName, title, description } = config

  // Create page directory
  const pageDir = path.join("app", cityKey)
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true })
  }

  // Generate page.tsx content
  const pageContent = `import { Metadata } from 'next'
import { CityPageTemplate } from '@/components/CityPageTemplate'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
}

export default function CityPage() {
  return <CityPageTemplate city="${cityKey}" />
}
`

  // Write page.tsx file
  fs.writeFileSync(path.join(pageDir, "page.tsx"), pageContent)

  console.log(`✅ Generated page: ${cityKey}`)
}

// Example usage:
// generateCityPage({
//   cityKey: 'frederiksberg-psykiatrisk-vikarbureau',
//   cityName: 'Frederiksberg',
//   title: 'Psykiatrisk Vikarbureau i Frederiksberg | Tryghedspersonale.dk',
//   description: 'Psykiatrisk Vikarbureau i Frederiksberg – Vikarer med hjertet på det rette sted.',
//   coverageAreas: ['Frederiksberg Kommune', 'København', 'Region Hovedstaden']
// })
