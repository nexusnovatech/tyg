import Link from "next/link"
import { Shield, Building, Brain, Users, HandHeart, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title:
    "Fastvagt, sikkerhedsassistenter, pædagogiske vikarer | Konflikthåndtering og støtte ved udadreagerende adfærd | Tryghedspersonale.dk",
  description:
    "Professionelle fastvagter, sikkerhedsassistenter, pædagogiske vikarer og konflikthåndteringsmedarbejdere til bosteder, plejehjem, psykiatri og sikrede institutioner. Tryghed, stabilitet og respekt – Tryghedspersonale.dk.",
}

export default function YdelserPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vores Ydelser</h1>
          <div className="prose prose-invert max-w-3xl">
            <p className="text-xl">
              Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi skræddersyede vikarordninger, der understøtter din
              institution, afdeling eller organisation. Vores mål er at skabe tryghed, sikkerhed og stabilitet gennem
              kompetente og erfarne medarbejdere, der har erfaring med de særlige udfordringer, der opstår i arbejdet
              med mennesker i særligt udsatte og komplekse situationer. Vi leverer vikarer til en bred vifte af
              institutioner og har ekspertise indenfor flere feltområder.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {/* Asylcentre */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4 bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Asylcentre</h2>
                <p className="text-slate-600 mb-4">
                  Asylcentre kræver en særlig opmærksomhed på tryghed og sikkerhed for både borgere og personale. Vi
                  tilbyder <strong>vikarer</strong>, der er trænet i at håndtere konfliktsituationer, skabe ro og støtte
                  det eksisterende personale. Vore vikarer er eksperter i at håndtere udadreagerende adfærd, deeskalere
                  konflikter og skabe et trygt miljø, hvor både borgere og medarbejdere kan trives.
                </p>
                <Button asChild>
                  <Link href="/ydelser/fastvagt-asylcentre">Læs mere her</Link>
                </Button>
              </div>
              <div className="bg-slate-100 rounded-lg p-8 h-full">
                <h3 className="font-bold text-lg mb-4">Vores ydelser inkluderer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Konflikthåndtering og deeskalering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Skabe tryghed for både borgere og personale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Assistere i udfordrende situationer og ved udgange</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Understøttelse af det socialfaglige personale</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Plejehjem */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-slate-100 rounded-lg p-8 h-full">
                <h3 className="font-bold text-lg mb-4">Vores ydelser inkluderer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Skabe tryghed og sikkerhed for personale og borgere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Assistere i konflikthåndtering og deeskalering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Ledsage ved aktiviteter og udgange</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Praktisk hjælp som madforberedelse, rengøring m.m.</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Plejehjem</h2>
                <p className="text-slate-600 mb-4">
                  På plejehjem er det vigtigt at sikre ro og kontinuitet i arbejdet for både de ældre borgere og
                  personalet. Vi tilbyder <strong>vikarer</strong>, som understøtter plejehjem i at skabe et trygt
                  miljø, hvor både personale og borgere føler sig sikre. Vore vikarer er erfarne i konflikthåndtering,
                  deeskalering og understøttelse af hverdagen, så plejehjemmet kan fortsætte sit arbejde uden
                  forstyrrelser.
                </p>
                <Button asChild>
                  <Link href="/ydelser/fastvagt-plejehjem">Læs mere her</Link>
                </Button>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Bosteder og Institutioner */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4 bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Bosteder og Institutioner</h2>
                <p className="text-slate-600 mb-4">
                  Bosteder og institutioner for mennesker med særlige behov kræver stabilitet og tryghed i hverdagen. Vi
                  tilbyder <strong>vikarer</strong>, der understøtter det eksisterende personale ved at skabe et sikkert
                  miljø. Vore vikarer er specialiserede i at håndtere udfordrende adfærd, deeskalere konflikter og
                  sikre, at hverdagen på institutionen forløber uden problemer.
                </p>
                <Button asChild>
                  <Link href="/ydelser/fastvagt-bosted">Læs mere her</Link>
                </Button>
              </div>
              <div className="bg-slate-100 rounded-lg p-8 h-full">
                <h3 className="font-bold text-lg mb-4">Vores ydelser inkluderer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Skabe ro og tryghed for både borgere og personale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Deltage ved pacificering og fastholdelse af udadreagerende borgere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Assistere ved udgange og aktiviteter</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Praktisk hjælp som rengøring og madforberedelse</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Psykiatrien */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-slate-100 rounded-lg p-8 h-full">
                <h3 className="font-bold text-lg mb-4">Vores ydelser inkluderer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Deltage i deeskalering og konflikthåndtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Skabe tryghed i psykiatriske afdelinger</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Assistere i håndtering af psykiske kriser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Understøtte personalet i deres daglige arbejde uden at overtage socialfaglige opgaver</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Psykiatrien</h2>
                <p className="text-slate-600 mb-4">
                  Psykiatrien kræver en særlig tilgang, hvor sikkerhed og tryghed er afgørende for, at behandlingen kan
                  forløbe effektivt. Vi tilbyder <strong>vikarer</strong>, der er erfarne i konflikthåndtering og
                  deeskalering. Vore vikarer arbejder tæt sammen med det øvrige personale for at sikre et trygt og
                  stabilt miljø, hvor både borgere og medarbejdere kan arbejde i ro.
                </p>
                <Button asChild>
                  <Link href="/ydelser/psykiatrien">Læs mere her</Link>
                </Button>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Additional Services */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enkeltmandsprojekt</h3>
                  <p className="text-slate-600 mb-4">
                    Enkeltmandsprojekter kræver ofte intensiv opmærksomhed og støtte til én enkelt borger. Vi tilbyder
                    <strong> vikarer</strong>, der kan påtage sig personlig støtte i én-til-én-situationer, skabe
                    tryghed og håndtere konfliktsituationer, hvis de opstår. Vore vikarer er fleksible og tilpasser sig
                    de særlige behov i et enkeltmandsprojekt, hvilket gør dem ideelle til at skabe stabilitet og
                    sikkerhed.
                  </p>
                  <h4 className="font-bold text-sm mb-2">Vores ydelser inkluderer:</h4>
                  <ul className="text-slate-600 text-sm mb-4 space-y-1">
                    <li>• Personlig støtte til én borger ad gangen</li>
                    <li>• Deeskalering og konflikthåndtering</li>
                    <li>• Tryghedsskabende funktion i perioder med høj risiko</li>
                    <li>• Assistere med praktiske opgaver som forflytning og aktiviteter</li>
                  </ul>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/enkeltmandstilbud-udadreagerende-voldsomme-psykotiske-borgere">Læs mere her</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tryghedsmedarbejder</h3>
                  <p className="text-slate-600 mb-4">
                    En <strong>tryghedsmedarbejder</strong> er en vikar, der har til opgave at skabe et trygt og sikkert
                    miljø for både personale og borgere. Tryghedsmedarbejderen spiller en vigtig rolle i at sikre, at
                    arbejdet kan udføres uden forstyrrelser og i en rolig atmosfære. Vore vikarer har erfaring med at
                    håndtere konflikter og skaber tryghed i situationer med udadreagerende adfærd.
                  </p>
                  <h4 className="font-bold text-sm mb-2">Vores ydelser inkluderer:</h4>
                  <ul className="text-slate-600 text-sm mb-4 space-y-1">
                    <li>• Konflikthåndtering og deeskalering</li>
                    <li>• Skabe tryghed og stabilitet på arbejdspladsen</li>
                    <li>• Understøttelse af socialfagligt personale uden at overtage socialfaglige opgaver</li>
                    <li>• Sikkerhed under udgange og aktiviteter</li>
                  </ul>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/ydelser/tryghedsmedarbejder">Læs mere her</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Konflikthåndteringsmedarbejder</h3>
                  <p className="text-slate-600 mb-4">
                    Vore <strong>konflikthåndteringsmedarbejdere</strong> er eksperter i at håndtere konfliktsituationer
                    og deeskalere højspændte miljøer. Vore vikarer kan anvendes i alle de områder, vi arbejder med, fra
                    asylcentre til psykiatriske afdelinger, og deres primære opgave er at skabe ro og stabilitet. Vore
                    konflikthåndteringsmedarbejdere trænes i at arbejde med borgerne for at undgå, at situationer
                    udvikler sig til konflikter.
                  </p>
                  <h4 className="font-bold text-sm mb-2">Vores ydelser inkluderer:</h4>
                  <ul className="text-slate-600 text-sm mb-4 space-y-1">
                    <li>• Aktivt arbejde med deeskalering af konflikter</li>
                    <li>• Skabe ro i konfliktfyldte situationer</li>
                    <li>• Træning af personale i konflikthåndteringsteknikker</li>
                    <li>• Støtte i håndtering af udadreagerende adfærd</li>
                  </ul>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/ydelser/konflikthaandtering">Læs mere her</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Har du brug for vores hjælp?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontakt os i dag for at høre mere om, hvordan vi kan hjælpe med at skabe tryghed og sikkerhed i din
            institution eller organisation.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/kontakt">
              <Phone className="mr-2 h-5 w-5" /> Kontakt os nu
            </Link>
          </Button>
        </div>
      </section>

      {/* Hidden SEO Keywords */}
      <div className="sr-only">
        fastvagt bosted | fastvagt plejehjem | fastvagt psykiatri | sikkerhedsassistent psykiatri | pædagogisk vikar
        bosted | vikar plejehjem | konflikthåndtering pårørende | håndtering af truende borgere | håndtering af
        psykotiske borgere | vikar ved sygdom | akut vikar til bosted | sikkerhedsassistenter sikrede institutioner |
        konflikthåndteringsmedarbejder | vikar psykiatrisk afdeling | fastvagt socialpsykiatri | vikar til
        udadreagerende adfærd | tryghedsmedarbejder til institutioner | vikar til plejehjem med særlige behov | vikar
        til asylcenter | vikar til psykiatrisk afdeling | tryghedsmedarbejder | vikar til socialpædagogisk arbejde |
        vikar til borger med psykiske lidelser | vikar til psykiatrisk behandling | tryghedspersonale til bosted | vikar
        til sikkerhed i institutioner | vikar til udadreagerende borgere | vikar til støtte i konflikthåndtering | vikar
        til akut bemanding | vikar til psykiatrisk udredning | sikkerhedspersonale til plejehjem | deeskalering af
        konflikter | vikar til borgerarbejde | vikar til udredning af psykiske lidelser | vikar til konflikthåndtering i
        institutioner | fastvagt til specialiserede bosteder | vikar til ferieafløsning | vikar til midlertidig
        bemanding | akut vikar til plejehjem | vikar til plejehjem med høj risiko | vikar til konfliktforebyggelse |
        vikar til krisesituationer | vikar til borger med adfærdsproblemer | tryghedsmedarbejder ved overflytning |
        vikar til udadreagerende borgere | vikar til psykisk syge | vikar til fysisk syge borgere | vikar til plejehjem
        med psykisk syge | vikar til deeskalering af borgere | vikar til psykiatriske patienter | tryghedsmedarbejder
        til psykiatrisk afdeling
      </div>
    </div>
  )
}
