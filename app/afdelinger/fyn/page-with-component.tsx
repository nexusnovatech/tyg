import { RegionServiceCard } from "@/components/region-service-card"
import { User, Shield } from "lucide-react"

// Example of how to use the RegionServiceCard component
// This is just a snippet showing the Additional Services section

{
  /* Additional Services - Using the Reusable Component */
}
;<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
  <RegionServiceCard
    title="Enkeltmandsprojekter på Fyn"
    icon={User}
    cities={[{ name: "Odense" }, { name: "Nyborg" }, { name: "Faaborg" }]}
    description="Vore vikarer til enkeltmandsprojekter tilbyder intensiv støtte til enkeltpersoner med særlige behov, som kræver individuel overvågning og støtte. Vore vikarer er erfarne i at håndtere borgeres psykotiske episoder og udadreagerende adfærd."
    linkUrl="/ydelser/enkeltmandsprojekt"
  />

  <RegionServiceCard
    title="Tryghedsmedarbejder på Fyn"
    icon={Shield}
    cities={[{ name: "Svendborg" }, { name: "Middelfart" }, { name: "Assens" }]}
    description="Som tryghedsmedarbejdere arbejder vores vikarer tæt sammen med det socialfaglige personale for at skabe et trygt og sikkert miljø. De sikrer, at medarbejderne kan arbejde uden risiko for vold eller fysiske konflikter."
    linkUrl="/ydelser/tryghedsmedarbejder"
  />

  <RegionServiceCard
    title="Konflikthåndteringsmedarbejder på Fyn"
    icon={Shield}
    cities={[{ name: "Middelfart" }, { name: "Odense" }, { name: "Bogense" }]}
    description="Konflikthåndteringsmedarbejdere fra Tryghedspersonale.dk er eksperter i at håndtere både psykisk og fysisk voldsomme situationer. De er trænet i deeskaleringsteknikker og kan håndtere udadreagerende personer."
    linkUrl="/ydelser/konflikthaandtering"
  />
</div>
