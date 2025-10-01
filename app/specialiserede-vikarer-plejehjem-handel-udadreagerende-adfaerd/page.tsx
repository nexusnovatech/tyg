import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Shield, Heart, Users, Brain } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title:
    "Fast vagt | Specialiserede vikarer til plejehjem – Håndtering af udadreagerende adfærd | En til en støtte | Landsdækkende | Kontakt os i dag",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi specialiserede vikarer til plejehjem, der er trænede i at håndtere udadreagerende adfærd. Få hjælp til at skabe et trygt miljø for både beboere og personale.",
}

export default function SpecialVikarer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/nursing-home-environment.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Specialiserede vikarer til plejehjem – håndtering af udadreagerende adfærd
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professionel støtte til voldsomme og psykotiske borgere gennem fastvagt og enkeltmandsprojekter (en til
              en)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-red-600/30 backdrop-blur-sm"
              >
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Udfordringer med udadreagerende adfærd på plejehjem
                </h2>
                <p className="text-slate-700 mb-4">
                  At håndtere udadreagerende adfærd på et plejehjem kan være en betydelig udfordring for både personale
                  og medbeboere. Når en borger reagerer voldsomt eller aggressivt, kan det ikke blot skabe utryghed for
                  den enkelte, men også for hele det omgivende miljø.
                </p>
                <p className="text-slate-700">
                  Den optrappede adfærd kan føre til en følelse af frygt og stress, hvilket kan være svært at håndtere
                  for både de andre beboere og personalet, der står overfor denne situation. I visse tilfælde kan dette
                  ikke kun påvirke den sociale dynamik, men også medføre praktiske udfordringer i forhold til
                  sikkerheden og arbejdsforholdene på plejehjemmet.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-4SnHOWefV9oW3jB4w5TBgMGarzN4Qk.jpeg"
                  alt="Tryghedsmedarbejder i dialog med ældre beboer - professionel håndtering af udfordrende situationer på plejehjem"
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-700 mb-6">
              Når adfærden ikke bliver håndteret korrekt, kan den også føre til en stigning i den fysiske og mentale
              belastning for personalet, som kan føle sig magtesløse eller overvældede. Det kan skabe en følelse af
              usikkerhed, både blandt personalet, der skal håndtere situationen, og blandt de øvrige beboere, som kan
              blive påvirket af konflikterne.
            </p>
            <p className="text-slate-700 mb-6">
              I sådanne situationer kan der opstå en ond cirkel, hvor spændinger og frustrationer eskalerer, hvilket gør
              det endnu sværere at få genskabt ro og tryghed i miljøet. Den udadreagerende adfærd kan derfor have langt
              større konsekvenser end blot den enkelte borgers reaktion. Den kan påvirke hele plejehjemmets hverdag og
              skabe udfordringer, der går ud over det daglige arbejde, hvilket kan have en negativ indvirkning på
              plejehjemmets generelle trivsel.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section with Accordion */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Hyppige årsager til udadreagerende adfærd på plejehjem
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Udadreagerende adfærd på plejehjem kan skyldes flere forskellige faktorer
            </p>

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
                    <p className="text-slate-600 mb-4">
                      Sygdomme som Alzheimer og frontallapdemens kan forårsage alvorlige forstyrrelser i en borgers
                      kognitive funktioner, hvilket kan medføre både fysiske og psykiske problemer. For personer med
                      disse sygdomme kan det blive vanskeligt at forstå og navigere i de sociale normer, der gælder på
                      et plejehjem.
                    </p>
                    <p className="text-slate-600">
                      Ved <strong>frontallapdemens</strong>, som påvirker den del af hjernen, der styrer impulskontrol,
                      følelsesmæssig regulering og beslutningstagning, kan borgeren miste evnen til at udvise passende
                      adfærd i sociale situationer. Dette kan føre til, at de udfører handlinger, de tidligere ikke
                      ville have gjort, eller ikke har hæmninger i forhold til, hvad der er socialt acceptabelt.
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
                      fysiske behov ikke bliver mødt, kan det udløse udadreagerende adfærd. Mange ældre med demens eller
                      andre kognitive udfordringer har svært ved at kommunikere deres smerter, hvilket kan føre til
                      frustration og aggressiv adfærd som en måde at udtrykke ubehag på.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
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
                      søger noget at beskæftige sig med. At finde den rette balance mellem stimulering og ro er
                      afgørende for at forebygge udadreagerende adfærd.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Vores tilgang til håndtering af udadreagerende adfærd
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Hos Tryghedspersonale.dk er vi eksperter i at håndtere udadreagerende adfærd på en respektfuld og
              professionel måde
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Afledningsteknikker og tilpasset pleje</h3>
                <p className="text-slate-700 mb-4">
                  Afledning er en effektiv metode til at håndtere en borger, der udviser udadreagerende adfærd. Det
                  handler om at skifte fokus og lede opmærksomheden væk fra det, der udløser den aggressive reaktion.
                </p>
                <p className="text-slate-700">
                  Dette kan omfatte at tilbyde en roligere aktivitet, stille spørgsmål for at skabe et nyt fokus, eller
                  blot at skabe et stille og trygt rum, hvor borgeren kan finde ro.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/caregiver-with-elderly-resident.jpeg"
                  alt="Tryghedsmedarbejder i dialog med ældre beboer på plejehjem - professionel omsorg og støtte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/tryghedspersonale-faellesrum.jpeg"
                  alt="Trygt og roligt plejehjem fællesrum - professionel håndtering af udfordrende situationer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Arousal-teorien: Hvordan vi arbejder med spændingsniveauer
                </h3>
                <p className="text-slate-700 mb-4">
                  Vi benytter os af <strong>Arousal-teorien</strong>, som hjælper os med at forstå, hvordan forskellige
                  niveauer af følelsesmæssig og fysisk ophidselse påvirker en borger.
                </p>
                <p className="text-slate-700">
                  Når borgeren er for ophidset (i en høj arousal-tilstand), vil vi bruge beroligende teknikker og
                  afledning for at hjælpe med at sænke spændingen. Hvis borgeren er i en lav arousal-tilstand (for
                  deprimeret eller apatisk), vil vi arbejde med at øge deres engagement og opmærksomhed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Vores specialiserede ydelser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-10 w-10 text-red-600" />,
                title: "Fastvagt",
                description:
                  "Kontinuerlig overvågning og støtte til borgere med særlige behov, der kræver konstant opsyn.",
              },
              {
                icon: <Users className="h-10 w-10 text-red-600" />,
                title: "Enkeltmandsprojekter",
                description: "Skræddersyede en-til-en løsninger for borgere med komplekse adfærdsmæssige udfordringer.",
              },
              {
                icon: <Heart className="h-10 w-10 text-red-600" />,
                title: "Aflastning af personale",
                description: "Midlertidig støtte til at aflaste fast personale i perioder med høj belastning.",
              },
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Hav tillid til vores medarbejdere
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-slate-700 mb-4">
                Hos{" "}
                <a href="http://tryghedspersonale.dk/" className="text-red-600 hover:text-red-700">
                  Tryghedspersonale.dk
                </a>{" "}
                er vores vikarer eksperter i at håndtere udadreagerende adfærd og skabe et trygt miljø, både for
                borgerne og for personalet. Vore vikarer har erfaring med at afkode komplekse adfærdsmønstre og tilpasse
                deres tilgang til den enkelte borgers behov.
              </p>
              <p className="text-slate-700 mb-4">
                Vi fokuserer på at forebygge og håndtere udadreagerende adfærd med respekt for borgerens værdighed. Vore
                vikarer er trænet i afledningsteknikker og metoder, der kan berolige i pressede situationer og mindske
                risikoen for eskalering af konflikter.
              </p>
              <p className="text-slate-700">
                Når du vælger{" "}
                <a href="http://tryghedspersonale.dk/" className="text-red-600 hover:text-red-700">
                  Tryghedspersonale.dk
                </a>
                , får du ikke bare vikarer – du får en partner, der hjælper med at skabe et trygt og stabilt miljø, hvor
                både beboere og personale kan føle sig sikre og i stand til at arbejde effektivt sammen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Søgeord og tjenester</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Psykiatri faglig vikarbureau",
                "Vagtfirma plejehjem",
                "Sikkerhedsvagt plejehjem",
                "Fast vagt til plejehjem",
                "Vikarer til psykisk syge i Aarhus",
                "Håndtering af psykisk sygdom på plejehjem i København",
                "Sikkerhedsvagt til plejehjem i Odense",
                "Vikarer til udadreagerende borgere i Aalborg",
                "Vikarer til plejehjem med demens i Randers",
                "Specialister i psykotisk adfærd på plejehjem i Esbjerg",
                "Vikarservice til truende adfærd i Odense",
                "Psykisk syge vikarer til plejehjem i Viborg",
                "Specialiseret personale til plejehjem i Aarhus",
                "Vikarer til udadreagerende patienter i Aalborg",
                "Vagtfirma til psykiske lidelser på plejehjem i Hørsholm",
                "Vikar til psykosehåndtering på plejehjem i Fredericia",
                "Fast vagt til plejehjem med psykiske lidelser i København",
                "Vikarer til psykose og vrangforestillinger i Holbæk",
                "Håndtering af udadreagerende adfærd på plejehjem i Kolding",
                "Vikarservice til plejehjem i Glamsbjerg",
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="inline-block bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-300 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Kontakt os i dag</h2>

            <p className="text-xl mb-8">
              Kontakt os for at høre mere om, hvordan{" "}
              <a href="http://tryghedspersonale.dk/" className="text-white underline">
                Tryghedspersonale.dk
              </a>{" "}
              kan assistere med vikarer, der er specialiseret i at håndtere udadreagerende adfærd med respekt for
              borgerens værdighed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Phone className="h-10 w-10 mx-auto mb-4" />
                <p className="text-xl font-bold">Ring til os</p>
                <a href="tel:41443333" className="text-xl text-white hover:underline">
                  41 44 33 33
                </a>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Mail className="h-10 w-10 mx-auto mb-4" />
                <p className="text-xl font-bold">Send en e-mail</p>
                <a href="mailto:kontakt@tryghedspersonale.dk" className="text-white hover:underline">
                  kontakt@tryghedspersonale.dk
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                <Link href="/kontakt" className="flex items-center">
                  Få et uforpligtende tilbud <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
    </div>
  )
}
