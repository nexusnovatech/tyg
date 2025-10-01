"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, ChevronDown, ChevronUp, Shield, Users, Clock, Heart, Award, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  )
}

export default function ClientPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const causes = [
    {
      title: "Kognitive udfordringer og demens",
      content:
        "Demens og andre kognitive lidelser kan føre til forvirring og frustration, som kan manifestere sig som udadreagerende adfærd. Borgere kan have svært ved at forstå deres omgivelser eller kommunikere deres behov.",
    },
    {
      title: "Psykiske lidelser og vrangforestillinger",
      content:
        "Psykiske lidelser som skizofreni, bipolar lidelse eller andre psykotiske tilstande kan medføre vrangforestillinger eller hallucinationer, der kan udløse aggressiv adfærd.",
    },
    {
      title: "Fysiske smerter",
      content:
        "Ubehandlede eller dårligt behandlede smerter kan føre til irritabilitet og udadreagerende adfærd. Borgere kan have svært ved at udtrykke deres ubehag på andre måder.",
    },
    {
      title: "Over- eller understimulering",
      content:
        "Et miljø der er for støjende eller kaotisk kan overstimulere nogle borgere, mens mangel på aktiviteter eller social kontakt kan føre til frustration og udadreagerende adfærd.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Specialiseret bemanding</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Specialiserede vikarer til plejehjem – håndtering af udadreagerende adfærd
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Professionel støtte til voldsomme og psykotiske borgere gennem fastvagt og enkeltmandsprojekter (en til
                en)
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Få et uforpligtende tilbud
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-with-elderly-resident.jpeg"
                alt="Professionel plejer hjælper ældre beboer på plejehjem"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Udfordringer med udadreagerende adfærd på plejehjem
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                At håndtere udadreagerende adfærd på et plejehjem kan være en betydelig udfordring for både personale og
                medbeboere. Når en borger reagerer voldsomt eller aggressivt, kan det ikke blot skabe utryghed for den
                enkelte, men også for hele det omgivende miljø.
              </p>
              <p className="mb-6">
                Den optrappede adfærd kan føre til en følelse af frygt og stress, hvilket kan være svært at håndtere for
                både de andre beboere og personalet, der står overfor denne situation. I visse tilfælde kan dette ikke
                kun påvirke den sociale dynamik, men også medføre praktiske udfordringer i forhold til sikkerheden og
                arbejdsforholdene på plejehjemmet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/caregiver-consultation.jpeg"
                  alt="Professionel konsultation mellem plejepersonale"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Konsekvenser af uhåndteret udadreagerende adfærd
                </h3>
                <div className="prose text-gray-700">
                  <p className="mb-4">
                    Når adfærden ikke bliver håndteret korrekt, kan den også føre til en stigning i den fysiske og
                    mentale belastning for personalet, som kan føle sig magtesløse eller overvældede. Det kan skabe en
                    følelse af usikkerhed, både blandt personalet, der skal håndtere situationen, og blandt de øvrige
                    beboere, som kan blive påvirket af konflikterne.
                  </p>
                  <p>
                    I sådanne situationer kan der opstå en ond cirkel, hvor spændinger og frustrationer eskalerer,
                    hvilket gør det endnu sværere at få genskabt ro og tryghed i miljøet. Den udadreagerende adfærd kan
                    derfor have langt større konsekvenser end blot den enkelte borgers reaktion. Den kan påvirke hele
                    plejehjemmets hverdag og skabe udfordringer, der går ud over det daglige arbejde, hvilket kan have
                    en negativ indvirkning på plejehjemmets generelle trivsel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Hyppige årsager til udadreagerende adfærd på plejehjem
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Udadreagerende adfærd på plejehjem kan skyldes flere forskellige faktorer:
            </p>
            <div className="space-y-4">
              {causes.map((cause, index) => (
                <AccordionItem
                  key={index}
                  title={cause.title}
                  content={cause.content}
                  isOpen={openAccordion === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Vores tilgang til håndtering af udadreagerende adfærd
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professionel træning</h3>
                  <p className="text-gray-600 text-sm">
                    Vores vikarer er specialtrænet i de-eskalering og håndtering af udadreagerende adfærd
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Respektfuld tilgang</h3>
                  <p className="text-gray-600 text-sm">
                    Vi behandler alle borgere med værdighed og respekt, uanset deres adfærd
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Enkeltmandsprojekter</h3>
                  <p className="text-gray-600 text-sm">En-til-en støtte for borgere med særligt komplekse behov</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Døgnbemanding</h3>
                  <p className="text-gray-600 text-sm">Vi er tilgængelige 24/7 for akutte situationer og fastvagt</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Vores specialiserede ydelser</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Fastvagt til plejehjem</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Kontinuerlig bemanding med specialiserede vikarer til håndtering af udadreagerende adfærd på
                    plejehjem.
                  </p>
                  <Link href="/ydelser/fastvagt-bosted">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Læs mere
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Enkeltmandsprojekter</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    En-til-en støtte for borgere med særligt komplekse behov og udadreagerende adfærd.
                  </p>
                  <Link href="/enkeltmandsprojekt-enkeltmandsprojekter-jylland-fyn-sjaelland">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Læs mere
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Konflikthåndtering</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Professionel håndtering af konflikter og de-eskalering af spændte situationer.
                  </p>
                  <Link href="/ydelser/konflikthaandtering">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Læs mere
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hvorfor vælge Tryghedspersonale.dk?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Erfaring</h3>
                <p className="text-gray-600">
                  Mange års erfaring med håndtering af udadreagerende adfærd i plejesektoren
                </p>
              </div>
              <div className="flex flex-col items-center">
                <UserCheck className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kvalificeret personale</h3>
                <p className="text-gray-600">Alle vores vikarer er grundigt screenet og specialtrænet</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Døgnservice</h3>
                <p className="text-gray-600">Vi er tilgængelige 24/7 for akutte situationer og konsultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Our Staff Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hav tillid til vores medarbejdere</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Hos Tryghedspersonale.dk er vores vikarer eksperter i at håndtere udadreagerende adfærd og skabe et
                trygt miljø, både for borgerne og for personalet. Vore vikarer har erfaring med at afkode komplekse
                adfærdsmønstre og tilpasse deres tilgang til den enkelte borgers behov.
              </p>
              <p className="mb-6">
                Vi fokuserer på at forebygge og håndtere udadreagerende adfærd med respekt for borgerens værdighed. Vore
                vikarer er trænet i afledningsteknikker og metoder, der kan berolige i pressede situationer og mindske
                risikoen for eskalering af konflikter.
              </p>
              <p className="mb-6">
                Når du vælger Tryghedspersonale.dk, får du ikke bare vikarer - du får en partner, der hjælper med at
                skabe et trygt og stabilt miljø, hvor både beboere og personale kan føle sig sikre og i stand til at
                arbejde effektivt sammen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Specialiseret i håndtering af udadreagerende adfærd
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Psykiatri faglig vikarbureau
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vagtfirma plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Sikkerhedsvagt plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Fast vagt til plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vikarer til psykisk syge
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Håndtering af psykisk sygdom
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vikarer til udadreagerende borgere
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Specialister i psykotisk adfærd
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vikarservice til truende adfærd
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Psykisk syge vikarer til plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Specialiseret personale til plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vagtfirma til psykiske lidelser
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Psykosehåndtering på plejehjem
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vikarer til psykose og vrangforestillinger
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Håndtering af udadreagerende adfærd
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Vikarservice til plejehjem
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Kontakt os i dag</h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakt os for at høre mere om, hvordan Tryghedspersonale.dk kan assistere med vikarer, der er
              specialiseret i at håndtere udadreagerende adfærd med respekt for borgerens værdighed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Ring til os: 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send en e-mail
              </Button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold mb-2">Har du brug for akut hjælp?</p>
              <p className="opacity-90">Vi er klar til at hjælpe dig døgnet rundt</p>
              <Button size="lg" className="mt-4 bg-white text-red-600 hover:bg-gray-100">
                Få et uforpligtende tilbud →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
