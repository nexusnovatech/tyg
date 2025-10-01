import type { Metadata } from "next"
import Link from "next/link"
import { Brain, Check, Heart, Phone, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "Fastvagt til Asylcenter | Tryghedsmedarbejder & Omsorgsmedarbejder | Målrettet konflikthåndtering | Kontakt os i dag | Landsdækkende",
  description:
    "Få professionelt fastvagt-personale til dit asylcenter hos Tryghedspersonale.dk. Vi tilbyder konfliktforebyggelse, psykologisk støtte og kulturel forståelse, så vi kan skabe et trygt og stabilt miljø for både beboere og personale.",
}

export default function FastvagtAsylcentrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/asylum-center-hero.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fastvagt til Asylcenter | Tryghedspersonale.dk
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Professionelt tryghedspersonale til håndtering af udadreagerende og voldsomme borgere
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border border-white">
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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Tryghedspersonale til asylcentre</h2>
                <p className="text-slate-700 mb-4">
                  Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi tryghedsmedarbejdere{" "}
                  <strong>til asylcentre</strong>, som en vigtig ressource til at skabe stabilitet og tryghed i et ofte
                  udfordrende og komplekst miljø.
                </p>
                <p className="text-slate-700">
                  Vores <strong>tryghedspersonale</strong> er nøje udvalgt og trænet til at håndtere de særlige
                  udfordringer, der kan opstå på asylcentre, og de har de nødvendige færdigheder til at skabe ro i
                  akutte situationer, samtidig med at de viser forståelse for beboernes forskellige baggrunde og behov.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/tryghedspersonale-samtale-udendoers.jpeg"
                  alt="Tryghedspersonale i samtale med beboer på et asylcenter"
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Udfordringerne på asylcentre: En kompleks virkelighed
            </h2>
            <p className="text-lg text-slate-600">
              Asylcentre er hjem for mennesker, der har gennemlevet dybt traumatiske oplevelser
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-slate-700 mb-6">
              Asylcentre er hjem for mennesker, der har gennemlevet dybt traumatiske oplevelser. Mange har flygtet fra
              krig, forfølgelse eller vold, og de bærer ofte på psykiske ar, der kan gøre dem særligt sårbare i deres
              nye liv. De er kommet til et nyt land, måske uden et netværk af familiemedlemmer, og står overfor de
              udfordringer, der følger med at starte et nyt liv i et ukendt og ofte svært forståeligt samfund.
            </p>
            <p className="text-slate-700 mb-6">
              Beboerne i asylcentrene har meget forskellige historier – nogle har været igennem utallige år på flugt fra
              krig, mens andre har mistet alt, hvad de har haft. Disse traumatiske oplevelser kan føre til en række
              forskellige reaktioner, som vi er forberedte på at håndtere. Vores opgave er ikke blot at skabe fysisk
              sikkerhed, men også at forstå og reagere på de psykiske og følelsesmæssige behov, som beboerne måtte have.
            </p>
            <p className="text-slate-700 mb-6">
              Samtidig er det vigtigt at tage hensyn til de kulturelle forskelle, som ofte er til stede blandt beboerne.
              Vores <strong>tryghedspersonale</strong> har en grundlæggende forståelse for kulturelle forskelle og har
              den nødvendige viden til at møde beboerne med respekt og empati, hvilket er essentielt for at skabe et
              tillidsfuldt forhold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Konfliktforebyggelse</h3>
              <p className="text-slate-600">
                Proaktiv indsats for at identificere og håndtere potentielle konfliktsituationer før de eskalerer
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kulturel forståelse</h3>
              <p className="text-slate-600">
                Indsigt i forskellige kulturelle baggrunde og traditioner for at skabe bedre kommunikation og tillid
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Psykologisk støtte</h3>
              <p className="text-slate-600">
                Specialiseret hjælp til beboere med traumer, PTSD og andre psykiske udfordringer
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Krisehåndtering</h3>
              <p className="text-slate-600">
                Hurtig og effektiv indsats ved akutte situationer for at genoprette ro og sikkerhed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section with Accordion */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Forskellige typer asylcentre og deres udfordringer
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Vores tryghedspersonale er specialiseret i at håndtere de unikke udfordringer i hver type center
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
                    <span className="font-bold text-lg text-slate-800">Modtagecentre</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      I <strong>modtagecentrene</strong> møder asylansøgere ofte usikkerhed og angst, da de befinder sig
                      i en uvist situation. Dette kan føre til øget stress og frustration, som nogle gange resulterer i
                      udadreagerende adfærd. Vores <strong>tryghedspersonale</strong> skaber et roligt og trygt miljø,
                      hvor beboerne får den nødvendige støtte og information for at håndtere deres situation.
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
                    <span className="font-bold text-lg text-slate-800">Opholdscentre</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      I <strong>opholdscentrene</strong> venter asylansøgerne på afgørelse af deres asylsag, og
                      ventetiden kan føre til følelsesmæssig belastning og øget frustration. Dette kan resultere i
                      konflikter og udadreagerende adfærd. Vores <strong>tryghedspersonale</strong> er trænede i at
                      aflede opmærksomheden og bruge konflikthåndteringsteknikker til at skabe ro og mindske risikoen
                      for eskalering.
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
                    <span className="font-bold text-lg text-slate-800">Udrejsecentre</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white border-t border-slate-100">
                  <div className="pl-14">
                    <p className="text-slate-600">
                      I <strong>udrejsecentrene</strong> står asylansøgerne overfor udsigten til tvangsudsendelse,
                      hvilket kan skabe ekstrem stress og modstand. I denne følelsesmæssigt belastende situation er der
                      risiko for voldelig adfærd og konflikter. Vore <strong>fastvagter</strong> er eksperter i at
                      håndtere denne type situationer ved hurtigt at afbøde konflikter og sikre en tryg atmosfære,
                      samtidig med at de tilbyder støtte til asylansøgerne i en svær tid.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-700 mb-0">
                <strong>Tryghedspersonale.dk</strong> arbejder tæt sammen med personalet på asylcentrene for at sikre,
                at konflikter håndteres effektivt og trygt. Vores mål er at skabe et miljø, hvor alle beboere føler sig
                forstået og trygge, og hvor personalet kan arbejde uden frygt for vold eller trusler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Hvorfor vælge en fastvagt til asylcenter fra Tryghedspersonale.dk?
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mb-8">
              <p className="text-slate-700 mb-4">
                At have en <strong>fastvagt til asylcenter</strong> kan gøre en markant forskel for både beboerne og
                personalet. En fastvagt er ikke blot en fysisk tilstedeværelse – det er en aktiv medspiller i at skabe
                et trygt, stabilt og respektfuldt miljø. Når borgerne føler sig trygge, vil det smitte af på hele
                centeret, og både beboere og personale vil kunne arbejde sammen om at skabe et positivt og harmonisk
                miljø.
              </p>
              <p className="text-slate-700">
                Vores <strong>fastvagter</strong> er trænet i at forstå de komplekse udfordringer, der kan opstå på et
                asylcenter. Vi er hurtigt til at fange de tidlige tegn på uro og stress og gribe ind på en rolig og
                respektfuld måde, før en situation eskalerer. Denne forebyggende tilgang skaber ikke kun tryghed for de
                beboere, der direkte er involveret, men for hele miljøet.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Skaber tryghed for alle</h3>
            <p className="text-slate-700 mb-6">
              Udover at sikre tryghed for de beboere, der oplever stress eller uro, spiller{" "}
              <strong>tryghedspersonalet</strong> en central rolle i at beskytte resten af beboerne og personalet mod
              potentielt optrappede situationer. Vore <strong>fastvagter</strong> er oplært i at anvende
              deeskaleringsteknikker og kulturel forståelse for at håndtere situationer, hvor uoverensstemmelser kan
              opstå.
            </p>
            <p className="text-slate-700 mb-6">
              Det er afgørende, at alle beboere føler sig trygge og set i deres individuelle behov. For personalet
              betyder det, at de kan koncentrere sig om deres kerneopgaver – at støtte beboerne i deres daglige liv –
              uden at skulle bekymre sig om konflikter eller optrappede situationer, der kan påvirke arbejdsmiljøet.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Hvordan arbejder vi med fastvagter på asylcentre?
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Professionelle metoder baseret på erfaring og faglighed
            </p>

            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 mb-8">
              <p className="text-slate-700 mb-4">
                Hos <strong>Tryghedspersonale.dk</strong> er vores tilgang til{" "}
                <strong>fastvagter til asylcentre</strong> både proaktiv og fleksibel. Vi arbejder tæt sammen med
                asylcentrets ledelse og øvrige personale for at sikre, at vi altid er opmærksomme på de tidlige tegn på
                stress, konflikt eller psykisk belastning blandt beboerne. Vores <strong>fastvagter</strong> er til
                stede på hele centeret og holder øje med, hvordan beboerne reagerer på omgivelserne og de udfordringer,
                de står overfor.
              </p>
              <p className="text-slate-700">
                Vores <strong>tryghedspersonale</strong> er desuden oplært i psykologisk støtte og
                kommunikationsteknikker, der hjælper dem med at støtte beboerne i deres følelsesmæssige og psykiske
                processer. Vi arbejder også med de nødvendige afspændingsteknikker og værktøjer, som giver beboerne
                mulighed for at finde ro og refleksion, når de er i en stresset eller oprevet tilstand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/tryghedspersonale-park-samtale.jpeg"
                  alt="Tryghedspersonale i samtale - professionel støtte og kommunikation"
                  className="rounded-xl shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Hav tillid til vores medarbejdere
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">
                      Når du vælger <strong>Tryghedspersonale.dk</strong> som leverandør af{" "}
                      <strong>fastvagt til asylcenter</strong>, kan du være sikker på, at du får et team af
                      professionelt uddannede og erfarne <strong>tryghedspersonale</strong>, der er dedikeret til at
                      skabe tryghed for både beboerne og personalet.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">
                      Vi arbejder med empati, forståelse og faglighed, hvilket giver en solid base for at håndtere de
                      unikke udfordringer, der findes på asylcentre.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-slate-700">
                      <strong>Tryghedspersonale.dk</strong> er din partner i at skabe et sikkert, stabilt og
                      respektfuldt miljø, hvor både beboere og personale kan føle sig trygge og beskyttede mod
                      konflikter og stressede situationer. Vi er klar til at tilpasse vores tilgang til netop dit
                      asylcenters behov og sikre, at vi arbejder sammen om at skabe en positiv og tryg hverdag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">Søgeord</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "fastvagt asylcenter Jylland",
                "fastvagt asylcenter Fyn",
                "fastvagt asylcenter Sjælland",
                "fastvagt asylcenter København",
                "fastvagt asylcenter Aarhus",
                "fastvagt asylcenter Odense",
                "fastvagt asylcenter Aalborg",
                "fastvagt asylcenter Esbjerg",
                "fastvagt asylcenter Randers",
                "fastvagt asylcenter Vejle",
                "fastvagt asylcenter Kolding",
                "fastvagt asylcenter Horsens",
                "fastvagt asylcenter Herning",
                "fastvagt asylcenter Silkeborg",
                "fastvagt asylcenter Fredericia",
                "fastvagt asylcenter Næstved",
                "fastvagt asylcenter Roskilde",
                "fastvagt asylcenter Holbæk",
                "fastvagt asylcenter Slagelse",
                "fastvagt asylcenter Hillerød",
                "fastvagt asylcenter Helsingør",
                "fastvagt asylcenter Viborg",
                "fastvagt asylcenter Middelfart",
                "fastvagt asylcenter Køge",
                "fastvagt asylcenter Svendborg",
                "fastvagt asylcenter Lolland",
                "fastvagt asylcenter Rebild",
                "fastvagt asylcenter Norddjurs",
                "fastvagt asylcenter Hjørring",
                "fastvagt asylcenter Faxe",
                "fastvagt asylcenter Herlev",
                "fastvagt asylcenter",
                "sikkerhedsvagt til asylcenter",
                "vagtfirma asylcenter",
                "tryghedspersonale asylcenter",
                "fastvagt til modtagecenter",
                "fastvagt til opholdscenter",
                "fastvagt til udrejsecenter",
                "sikkerhedspersonale til asylcenter",
                "professionel vagt til asylcenter",
                "vagtfirma til asylcenter",
                "tryghedspersonale.dk asylcenter",
                "asylcenter sikkerhed",
                "konfliktforebyggelse asylcenter",
                "kulturel forståelse asylcenter",
                "psykologisk støtte asylcenter",
                "krisehåndtering asylcenter",
                "deeskaleringsteknikker asylcenter",
                "traumehåndtering asylcenter",
                "fastvagt til flygtningecentre",
                "sikkerhed på asylcentre",
                "professionel håndtering asylcenter",
                "udadreagerende adfærd asylcenter",
                "voldsomme borgere asylcenter",
                "konfliktløsning asylcenter",
                "tryg atmosfære asylcenter",
                "personalesikkerhed asylcenter",
                "beboersikkerhed asylcenter",
                "specialiseret vagt asylcenter",
                "erfaren sikkerhedspersonale asylcenter",
                "landsdækkende asylcenter sikkerhed",
                "døgnbemanding asylcenter",
                "akut sikkerhed asylcenter",
                "forebyggende sikkerhed asylcenter",
              ].map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-red-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Kontakt os i dag</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Er du interesseret i at høre mere om, hvordan vi kan hjælpe dit asylcenter med <strong>fastvagt</strong> og{" "}
            <strong>tryghedspersonale</strong>? Vi er klar til at tilbyde en skræddersyet løsning, der passer til jeres
            specifikke behov og udfordringer.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/kontakt">Få et uforpligtende tilbud</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
