"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  Phone,
  Mail,
  Heart,
  Shield,
  Clock,
  Users,
  Star,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function SpecialVikarer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/caregiver-supporting-person.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-slate-800/0 to-blue-600/10 animate-gradient-slow"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
              Specialiseret støtte til plejehjem
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Specialiserede vikarer til plejehjem – håndtering af udadreagerende adfærd og voldsomme og psykotiske
              borgere - Fastvagt og enkeltmandsprojekt (en til en)
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Professionel støtte til håndtering af komplekse situationer med respekt for borgerens værdighed og
              personalets tryghed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-slate-200 group transition-all duration-300"
              >
                <Link href="/kontakt" className="flex items-center">
                  Få et uforpligtende tilbud
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white group transition-all duration-300"
              >
                <a href="tel:41443333" className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Ring 41 44 33 33
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-slate-900">1000+</div>
              <div className="text-slate-600">Gennemførte vagter</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-slate-900">98%</div>
              <div className="text-slate-600">Kundetilfredshed</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-slate-900">24/7</div>
              <div className="text-slate-600">Tilgængelighed</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-slate-900">100%</div>
              <div className="text-slate-600">Fokus på tryghed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-full p-6 w-28 h-28 flex items-center justify-center mx-auto shadow-md">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Udfordringer ved udadreagerende adfærd
                </h2>
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                At håndtere udadreagerende adfærd på et plejehjem kan være en betydelig udfordring for både personale og
                medbeboere. Når en borger reagerer voldsomt eller aggressivt, kan det ikke blot skabe utryghed for den
                enkelte, men også for hele det omgivende miljø. Den optrappede adfærd kan føre til en følelse af frygt
                og stress, hvilket kan være svært at håndtere for både de andre beboere og personalet, der står overfor
                denne situation. I visse tilfælde kan dette ikke kun påvirke den sociale dynamik, men også medføre
                praktiske udfordringer i forhold til sikkerheden og arbejdsforholdene på plejehjemmet.
              </p>

              <div className="my-8 p-6 bg-slate-50 rounded-xl border-l-4 border-red-500 shadow-sm">
                <p className="text-slate-700 italic">
                  "Når adfærden ikke bliver håndteret korrekt, kan den også føre til en stigning i den fysiske og
                  mentale belastning for personalet, som kan føle sig magtesløse eller overvældede."
                </p>
              </div>

              <p className="text-lg leading-relaxed text-slate-700">
                Når adfærden ikke bliver håndteret korrekt, kan den også føre til en stigning i den fysiske og mentale
                belastning for personalet, som kan føle sig magtesløse eller overvældede. Det kan skabe en følelse af
                usikkerhed, både blandt personalet, der skal håndtere situationen, og blandt de øvrige beboere, som kan
                blive påvirket af konflikterne. I sådanne situationer kan der opstå en ond cirkel, hvor spændinger og
                frustrationer eskalerer, hvilket gør det endnu sværere at få genskabt ro og tryghed i miljøet.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Den udadreagerende adfærd kan derfor have langt større konsekvenser end blot den enkelte borgers
                reaktion. Den kan påvirke hele plejehjemmets hverdag og skabe udfordringer, der går ud over det daglige
                arbejde, hvilket kan have en negativ indvirkning på plejehjemmets generelle trivsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section with Interactive Elements */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-full p-6 w-28 h-28 flex items-center justify-center mx-auto shadow-md">
                  <Brain className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Hyppige årsager til udadreagerende adfærd på plejehjem
                </h2>
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="prose max-w-none mb-10">
              <p className="text-lg leading-relaxed text-slate-700">
                Udadreagerende adfærd på plejehjem kan skyldes flere forskellige faktorer. For at kunne håndtere den
                bedst muligt, er det vigtigt at forstå, hvad der ligger bag. Her er nogle af de mest almindelige
                årsager:
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border border-slate-200 rounded-xl mb-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-slate-50 hover:to-red-50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-3 mr-4 shadow-sm">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg text-slate-800">Kognitive udfordringer og demens</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600 mb-3">
                      Sygdomme som Alzheimer og frontallapdemens kan forårsage alvorlige forstyrrelser i en borgers
                      kognitive funktioner, hvilket kan medføre både fysiske og psykiske problemer. For personer med
                      disse sygdomme kan det blive vanskeligt at forstå og navigere i de sociale normer, der gælder på
                      et plejehjem. Den forringede kognitive funktion gør det svært at forstå situationer og relationer,
                      hvilket kan føre til forvirring, angst og i nogle tilfælde aggressiv adfærd som et forsøg på at
                      reagere på de uforståelige eller utrygge forhold.
                    </p>
                    <p className="text-slate-600 mb-3">
                      Ved <strong>frontallapdemens</strong>, som påvirker den del af hjernen, der styrer impulskontrol,
                      følelsesmæssig regulering og beslutningstagning, kan borgeren miste evnen til at udvise passende
                      adfærd i sociale situationer. Dette kan føre til, at de udfører handlinger, de tidligere ikke
                      ville have gjort, eller ikke har hæmninger i forhold til, hvad der er socialt acceptabelt. For
                      eksempel kan borgeren uden videre gå ind i en anden beboers bolig eller tage personlige ejendele,
                      som mad eller tøj. Manglende hæmning på adfærden kan skabe konflikter og forårsage frustration hos
                      både de øvrige beboere og personalet.
                    </p>
                    <p className="text-slate-600 mb-3">
                      For borgere, der tidligere har udvist en dominerende eller kontrollerende adfærd, kan denne adfærd
                      forværres af frontallapdemens. Den nedsatte evne til at forstå konsekvenserne af egne handlinger
                      kan føre til, at borgeren opfører sig mere påtrængende, aggressivt eller på anden måde
                      uacceptabelt i sociale situationer. Det kan blandt andet udmønte sig i uønsket fysisk kontakt
                      eller forsøg på at dominere andre beboere eller personalet, hvilket kan skabe stor utryghed i
                      plejehjemmet.
                    </p>
                    <p className="text-slate-600">
                      Borgeren kan også udvise <strong>upassende fysisk kontakt</strong>, som f.eks. at røre ved en
                      anden beboer eller personalet uden at være opmærksom på, at det er upassende eller
                      grænseoverskridende. Dette kan skabe stor frustration og ubehag blandt de øvrige beboere, samt en
                      stor udfordring for personalet, der skal sikre både borgerens og de øvrige beboeres trivsel og
                      tryghed.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-slate-200 rounded-xl mb-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-slate-50 hover:to-red-50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-3 mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-slate-800">Psykiske lidelser og vrangforestillinger</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      Borgere med psykoser eller vrangforestillinger kan have en anderledes opfattelse af virkeligheden,
                      hvilket kan udløse udadreagerende adfærd. For eksempel kan personer med{" "}
                      <strong>BSDP (Brief Psychotic Disorder)</strong> opleve pludselige og intense episoder af
                      vrangforestillinger, hvilket kan gøre dem mistroiske eller skræmte. Desuden kan{" "}
                      <strong>Capgras syndrom</strong> føre til, at en borger tror, at nære personer er blevet erstattet
                      af bedragere. Denne vrangforestilling kan udløse angst og aggressive reaktioner mod de personer,
                      de føler ikke længere er "de rigtige".
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-slate-200 rounded-xl mb-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-slate-50 hover:to-red-50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-3 mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-slate-800">Fysiske smerter</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      Smerte, som borgeren ikke kan udtrykke eller forstå, kan føre til frustration og aggression. Når
                      fysiske behov ikke bliver mødt, kan det udløse udadreagerende adfærd.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-slate-50 hover:to-red-50 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-3 mr-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-slate-800">Over- eller understimulering</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      Et plejehjem kan være et travlt og overstimulerende miljø, hvilket kan overvælde borgere med
                      nedsat kognition. Omvendt kan mangel på mental eller fysisk aktivitet føre til frustration, da de
                      søger noget at beskæftige sig med.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Approach Section with Enhanced Cards */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-50 rounded-tr-full opacity-70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-full p-6 w-28 h-28 flex items-center justify-center mx-auto shadow-md">
                  <Lightbulb className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Vores tilgang til håndtering af udadreagerende adfærd
                </h2>
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="prose max-w-none mb-12">
              <p className="text-lg leading-relaxed text-slate-700">
                Hos <strong>Tryghedspersonale.dk</strong> er vi eksperter i at håndtere udadreagerende adfærd på en
                respektfuld og professionel måde. Vore vikarer er trænede i afledningsteknikker og metoder til at
                reducere spændinger i pressede situationer. Vi fokuserer på at forstå den enkelte borgers behov og
                reagere passende.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-red-500 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
                    <div className="bg-white rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Afledningsteknikker og tilpasset pleje</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600">
                      Afledning er en effektiv metode til at håndtere en borger, der udviser udadreagerende adfærd. Det
                      handler om at skifte fokus og lede opmærksomheden væk fra det, der udløser den aggressive
                      reaktion. Dette kan omfatte at tilbyde en roligere aktivitet, stille spørgsmål for at skabe et nyt
                      fokus, eller blot at skabe et stille og trygt rum, hvor borgeren kan finde ro.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-red-500 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
                    <div className="bg-white rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Over- og understimuli: Balancen er afgørende
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600">
                      En af de vigtigste faktorer i håndteringen af udadreagerende adfærd er at finde den rette balance
                      mellem stimulering og ro. Hvis en borger er udsat for for meget stimuli (f.eks. støj, aktivitet
                      eller konflikter), kan det føre til frustration og udadreagerende reaktioner. Omvendt, hvis en
                      borger ikke får nok stimulering, kan det resultere i kedsomhed og dermed aggression. Vore vikarer
                      er trænet i at forstå og justere niveauerne af stimuli, så de passer til den enkelte borgers
                      behov.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-red-500 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
                    <div className="bg-white rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Arousal-teorien: Hvordan vi arbejder med spændingsniveauer
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600">
                      Vi benytter os af <strong>Arousal-teorien</strong>, som hjælper os med at forstå, hvordan
                      forskellige niveauer af følelsesmæssig og fysisk ophidselse påvirker en borger. Når borgeren er
                      for ophidset (i en høj arousal-tilstand), vil vi bruge beroligende teknikker og afledning for at
                      hjælpe med at sænke spændingen. Hvis borgeren er i en lav arousal-tilstand (for deprimeret eller
                      apatisk), vil vi arbejde med at øge deres engagement og opmærksomhed for at skabe mere
                      interaktivitet og forhindre passiv adfærd, der kan føre til frustration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Arousal-teorien i praksis</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ChevronDown className="h-4 w-4 text-red-600" />
                    </div>
                    Høj arousal-tilstand
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-slate-700">Beroligende samtale og rolig stemmeføring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-slate-700">Reducering af stimuli i omgivelserne</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-slate-700">Guidning til et roligere miljø</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    Lav arousal-tilstand
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">Engagerende aktiviteter tilpasset interesser</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">Motiverende samtale og positiv feedback</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-2 mt-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700">Strukturerede aktiviteter med klare mål</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Hvad vores kunder siger</h2>
              <div className="h-1 w-20 bg-red-600 rounded-full mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-red-500 to-red-600 text-white p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block bg-white/20 rounded-full p-3 mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <blockquote className="text-xl italic font-medium">
                      "Vores beboere har fået en helt ny tryghed"
                    </blockquote>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    "Vi har oplevet en markant forbedring i vores arbejdsmiljø, siden vi begyndte at samarbejde med
                    Tryghedspersonale.dk. Deres specialiserede vikarer har en unik evne til at håndtere udadreagerende
                    adfærd med respekt og professionalisme. De har ikke kun skabt tryghed for vores beboere, men også
                    for vores faste personale, som nu kan fokusere på deres kerneopgaver uden at bekymre sig om
                    konfliktsituationer."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Plejehjemsleder</p>
                      <p className="text-slate-500 text-sm">Midtjylland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Enhanced Design */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-full p-6 w-28 h-28 flex items-center justify-center mx-auto shadow-md">
                  <Shield className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Hav tillid til vores medarbejdere
                </h2>
                <div className="h-1 w-20 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                <div className="flex items-start mb-4">
                  <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-slate-700">
                    Hos{" "}
                    <a href="http://tryghedspersonale.dk/" className="text-red-600 hover:text-red-700 font-medium">
                      Tryghedspersonale.dk
                    </a>{" "}
                    er vores vikarer eksperter i at håndtere udadreagerende adfærd og skabe et trygt miljø, både for
                    borgerne og for personalet. Vore vikarer har erfaring med at afkode komplekse adfærdsmønstre og
                    tilpasse deres tilgang til den enkelte borgers behov.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                <div className="flex items-start mb-4">
                  <div className="bg-red-50 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-slate-700">
                    Vi fokuserer på at forebygge og håndtere udadreagerende adfærd med respekt for borgerens værdighed.
                    Vore vikarer er trænet i afledningsteknikker og metoder, der kan berolige i pressede situationer og
                    mindske risikoen for eskalering af konflikter.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-md border border-red-100">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-slate-700">
                  Når du vælger{" "}
                  <a href="http://tryghedspersonale.dk/" className="text-red-600 hover:text-red-700 font-medium">
                    Tryghedspersonale.dk
                  </a>
                  , får du ikke bare vikarer – du får en partner, der hjælper med at skabe et trygt og stabilt miljø,
                  hvor både beboere og personale kan føle sig sikre og i stand til at arbejde effektivt sammen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Design */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Vi er her for at hjælpe
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Kontakt os</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl mb-12">
                Kontakt os i dag for at høre mere om, hvordan{" "}
                <a href="http://tryghedspersonale.dk/" className="text-white underline">
                  Tryghedspersonale.dk
                </a>{" "}
                kan assistere med vikarer, der er specialiseret i at håndtere udadreagerende adfærd med respekt for
                borgerens værdighed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/30 transition-all">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xl font-bold mb-2">Ring til os</p>
                  <a href="tel:41443333" className="text-2xl font-bold text-white hover:text-red-200 transition-colors">
                    41 44 33 33
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/30 transition-all">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xl font-bold mb-2">Send en e-mail</p>
                  <a
                    href="mailto:kontakt@tryghedspersonale.dk"
                    className="text-xl font-bold text-white hover:text-red-200 transition-colors break-all"
                  >
                    kontakt@tryghedspersonale.dk
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-600 hover:bg-slate-100 hover:text-red-700 group transition-all duration-300 text-lg px-8 py-6"
                >
                  <Link href="/kontakt" className="flex items-center">
                    Få et uforpligtende tilbud her
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords - Hidden visually but available for search engines */}
      <div className="sr-only">
        <h2>Søgeord</h2>
        <p>
          Psykiatri faglig vikarbureau, Vagtfirma plejehjem, Sikkerhedsvagt plejehjem, Fast vagt til plejehjem, Vikarer
          til psykisk syge i Aarhus, Håndtering af psykisk sygdom på plejehjem i København, Sikkerhedsvagt til plejehjem
          i Odense, Vikarer til udadreagerende borgere i Aalborg, Vikarer til plejehjem med demens i Randers,
          Specialister i psykotisk adfærd på plejehjem i Esbjerg, Vikarservice til truende adfærd i Odense, Psykisk syge
          vikarer til plejehjem i Viborg, Specialiseret personale til plejehjem i Aarhus, Vikarer til udadreagerende
          patienter i Aalborg, Vagtfirma til psykiske lidelser på plejehjem i Hørsholm, Vikar til psykosehåndtering på
          plejehjem i Fredericia, Fast vagt til plejehjem med psykiske lidelser i København, Vikarer til psykose og
          vrangforestillinger i Holbæk, Håndtering af udadreagerende adfærd på plejehjem i Kolding, Vikarservice til
          plejehjem i Glamsbjerg
        </p>
      </div>

      {/* Add custom animation */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
        
        .animate-gradient-slow {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
