import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Enkeltmandsprojekt – Specialiseret støtte til udadreagerende, voldsomme og psykotiske borgere | Tryghedspersonale.dk",
  description:
    "Enkeltmandsprojektet tilbyder skræddersyet støtte til borgere, der har behov for mere end standardtilbud. Vi skaber et individuelt tilpasset miljø, der håndterer udfordrende adfærd og sikrer borgerens tryghed, samtidig med at der gives mulighed for personlig udvikling. Målet er at undgå skade på sig selv eller andre, samtidig med at borgeren modtager den nødvendige opmærksomhed og støtte.",
}

export default function EnkeltmandsprojektPage() {
  return (
    <main className="flex-1">
      {/* Hero Section with Circular Image - More Playful Style */}
      <section className="relative bg-slate-900 py-20 md:py-28 overflow-hidden">
        {/* Background patterns and animations */}
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-red-900/40 to-slate-800/70"></div>

        {/* Animated decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-red-600/20 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-600/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-yellow-400/20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating shapes */}
        <div
          className="absolute top-1/3 left-1/5 w-12 h-12 rotate-45 bg-red-600/10 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-lg bg-blue-500/10 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main circular image with animated border */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-8 rounded-full overflow-hidden border-4 border-red-600 shadow-lg shadow-red-600/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent mix-blend-overlay"></div>
              <Image
                src="/tryghedspersonale-aeldre-stoette.jpeg"
                alt="Tryghedspersonale medarbejder støtter ældre borger i dagligstuen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/80 to-transparent">
                <h1 className="text-3xl md:text-4xl font-bold text-white px-4 drop-shadow-lg">Enkeltmandsprojekt</h1>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <span className="text-white font-bold">24/7</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Professionel støtte til borgere med udadreagerende adfærd, voldsomme og psykotisk
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white transform transition-transform hover:scale-105 shadow-md"
              >
                <Link href="mailto:kontakt@tryghedspersonale.dk">
                  <Mail className="mr-2 h-5 w-5" /> kontakt@tryghedspersonale.dk
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-slate-200 transform transition-transform hover:scale-105 shadow-md"
              >
                <Link href="tel:41443333">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-lg"
              >
                <Link href="/kontakt">
                  <ArrowRight className="mr-2 h-5 w-5" /> Kontaktformular
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <ChevronDown className="h-12 w-12 text-white animate-bounce" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 mb-6">
              Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi <strong>enkeltmandsprojekt</strong> til borgere, der
              har behov for intens støtte og behandling. Når en borger udviser <strong>udadreagerende adfærd</strong>,{" "}
              <strong>voldsomme episoder</strong> eller er i en <strong>psykotisk tilstand</strong>, kan det være
              nødvendigt med en individuel indsats. Vi er klar til at træde til og sikre, at borgeren får den nødvendige
              støtte, uden at det går ud over deres livskvalitet eller udvikling.
            </p>
            <p className="text-lg text-slate-700">
              Vores mål er at skabe et <strong>trygt og stabilt miljø</strong>, hvor borgeren har mulighed for at
              udvikle mestring af eget liv og få bedre livskvalitet. Med <strong>erfarent personale</strong> og en{" "}
              <strong>skræddersyet tilgang</strong>, arbejder vi tæt sammen med det faste personale for at sikre den
              bedste løsning.
            </p>
          </div>
        </div>
      </section>

      {/* What is Section - Red Background */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Hvad er et enkeltmandsprojekt?</h2>
            <div className="prose prose-lg max-w-none text-white/90">
              <p>
                Enkeltmandsprojekt er en intensiv støtteordning, der tilbydes til borgere, som har behov for ekstra
                opmærksomhed og hjælp i deres daglige liv. Denne ordning er særligt relevant for borgere, der står over
                for udfordringer som udadreagerende adfærd, psykotiske episoder eller komplekse sociale problemer, som
                ikke kan håndteres effektivt i et fællesskab eller botilbud.
              </p>
              <p>
                Formålet med et enkeltmandsprojekt er at skabe et trygt og stabilt miljø, hvor borgeren får den
                nødvendige opmærksomhed for at kunne arbejde med deres adfærd og udvikling. Vores mål er at hjælpe
                borgeren med at opnå selvstændighed og mestring af eget liv. Dette betyder, at vi arbejder målrettet på
                at forbedre borgerens evne til at håndtere deres udfordringer på lang sigt, mens vi samtidig
                understøtter deres sociale og følelsesmæssige udvikling.
              </p>
              <p>
                Der kan opstå situationer, hvor de eksisterende rammer i borgerens nuværende botilbud ikke længere er
                tilstrækkelige. Dette kan være på grund af fysiske begrænsninger, der gør det svært at skabe en passende
                afskærmning, eller på grund af et socialt miljø, der ikke fremmer borgerens trivsel og udvikling. Når
                sådanne situationer opstår, kan det være nødvendigt at overveje en ændring af borgerens fysiske
                placering for at give dem den rette støtte og mulighed for at arbejde med deres adfærd i et mere
                kontrolleret miljø.
              </p>
              <p>
                I nogle tilfælde kan det være hensigtsmæssigt at flytte borgeren til en anden fysisk placering, som
                f.eks. en lejlighed eller et sommerhus, for at skabe den nødvendige ro og afstand fra de udfordringer,
                de møder i deres nuværende bolig. Dette giver borgeren mulighed for at få intensiv støtte, samtidig med
                at de er i et miljø, hvor de kan føle sig trygge og have tid til at arbejde på deres personlige
                udvikling uden forstyrrelser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - With Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Vi leverer vikarer til enkeltmandsprojekter for kommuner, institutioner og private virksomheder
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    Hos <strong>Tryghedspersonale.dk</strong> er vi klar til at hjælpe <strong>kommuner</strong>,{" "}
                    <strong>institutioner</strong> og <strong>private virksomheder</strong>, som har behov for
                    kvalificeret personale til <strong>enkeltmandsprojekter</strong>. Vi leverer{" "}
                    <strong>erfarne vikarer</strong>, der er specialiseret i at håndtere de mest udfordrende
                    situationer, hvor borgerens adfærd kan være udadreagerende, voldsom eller psykotisk.
                  </p>
                  <p>
                    Vores vikarer er velkvalificerede og har stor erfaring i at arbejde med borgere, der har behov for
                    intensiv støtte og behandling. De er trænet i at håndtere psykiske udfordringer, udadreagerende
                    adfærd og komplekse sociale problemstillinger, hvilket gør dem i stand til at tilpasse sig den
                    enkelte borgers specifikke behov. Gennem tæt samarbejde med det faste personale sikrer vi, at vores
                    tilgang og støtte altid er i overensstemmelse med institutionens værdier og mål.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/tryghedspersonale-pool-1.jpeg"
                  alt="Tryghedspersonale medarbejder spiller pool med en borger som del af aktivitetstilbud"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section - Slate Background */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <div className="absolute inset-0 bg-white/10 z-10"></div>
                <Image
                  src="/tryghedspersonale-desk-planning.jpeg"
                  alt="Tryghedspersonale medarbejder planlægger og dokumenterer enkeltmandsprojekt ved skrivebord med vagtplaner og strukturerede arbejdsdokumenter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Vi tilbyder fast vagtplan og struktur i det daglige arbejde
                </h2>
                <div className="prose prose-lg prose-invert max-w-none text-white/90">
                  <p>
                    Struktur og kontinuitet er afgørende, når man arbejder med{" "}
                    <strong className="text-white">enkeltmandsprojekter</strong>. Hos{" "}
                    <strong className="text-white">Tryghedspersonale.dk</strong> tilbyder vi en{" "}
                    <strong className="text-white">fast vagtplan</strong> og{" "}
                    <strong className="text-white">struktur</strong> i det daglige arbejde. Det er vigtigt for os at
                    skabe et miljø, hvor borgeren kan føle sig tryg og støttet i deres hverdag.
                  </p>
                  <p>
                    Vi arbejder tæt sammen med det faste personale for at sikre, at vi kan tilbyde den nødvendige støtte
                    og behandling, der stemmer overens med institutionens eller virksomhedens{" "}
                    <strong className="text-white">værdier og principper</strong>. Vi har et klart mål: at sikre, at
                    borgeren ikke blot får den praktiske hjælp, de har brug for, men også at de udvikler de nødvendige
                    færdigheder til at få mere <strong className="text-white">selvstændighed</strong> og{" "}
                    <strong className="text-white">livskvalitet</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Vi hjælper borgeren med at opretholde og understøtte en hverdag baseret på deres unikke behov
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Hos Tryghedspersonale.dk er vi dedikerede til at hjælpe borgeren med at opretholde en struktureret og
                stabil hverdag, hvor de føler sig trygge og selvstændige. Vi forstår vigtigheden af de praktiske opgaver
                i hverdagen, og derfor tilbyder vi støtte til alt fra indkøb og rengøring til tøjvask og andre daglige
                gøremål. Vores mål er at sikre, at borgeren kan navigere i deres dagligdag med den nødvendige støtte, så
                de kan føle sig i kontrol og trygge i deres eget hjem.
              </p>
              <p>
                Vores vikarer er engagerede og oplevede i at hjælpe borgeren med at mestre de praktiske aspekter af
                livet, som kan være udfordrende. Vi arbejder på at skabe en rolig og forudsigelig atmosfære, hvor
                borgeren kan føle sig tryg i de opgaver, de udfører, samtidig med at de udvikler en øget følelse af
                selvstændighed og ansvar.
              </p>
              <p>
                Vores indsats er altid individuelt tilpasset, så vi kan sikre, at vi tilbyder den rette form for
                praktisk støtte, der imødekommer borgerens behov. Vi er her for at hjælpe borgeren med at opbygge en
                hverdag, hvor de kan føle sig både trygge og stolte af de fremskridt, de gør, mens de får de nødvendige
                værktøjer til at håndtere deres daglige liv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach in Practice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Vores tilgang i praksis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/tryghedspersonale-pool-2.jpeg"
                  alt="Tryghedspersonale medarbejder laver aktiviteter med borger - billardspil som del af den sociale indsats"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    I vores enkeltmandsprojekter arbejder vi med at skabe meningsfulde aktiviteter og relationer for
                    borgeren. Vi støtter borgeren i at deltage i aktiviteter, der kan bidrage til deres trivsel og
                    udvikling.
                  </p>
                  <p>
                    Vores medarbejdere er trænet i at skabe en tryg og stabil ramme, hvor borgeren kan udfolde sig og
                    udvikle nye færdigheder. Vi arbejder altid med udgangspunkt i borgerens ressourcer og interesser.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <div className="order-2 md:order-1">
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    Vi lægger stor vægt på at skabe en struktureret hverdag med faste rutiner og forudsigelighed. Dette
                    er særligt vigtigt for borgere med komplekse behov, da det skaber tryghed og stabilitet.
                  </p>
                  <p>
                    Vores medarbejdere er altid opmærksomme på borgerens signaler og behov, og de tilpasser deres
                    tilgang og støtte derefter. Vi arbejder altid med respekt for borgerens integritet og værdighed.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="/tryghedspersonale-samtale-udendoers.jpeg"
                  alt="Tryghedspersonale medarbejder i samtale med borger udendørs - personlig støtte i rolige omgivelser"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arousal Regulation Graph Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Arousal-regulering i enkeltmandsprojekter
            </h2>
            <div className="bg-white/10 p-8 rounded-lg mb-8">
              <div className="relative h-[300px] w-full">
                <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* X-axis */}
                  <line x1="50" y1="250" x2="750" y2="250" stroke="white" strokeWidth="2" />
                  {/* Y-axis */}
                  <line x1="50" y1="50" x2="50" y2="250" stroke="white" strokeWidth="2" />

                  {/* X-axis labels */}
                  <text x="50" y="280" fill="white" fontSize="14">
                    Morgen
                  </text>
                  <text x="200" y="280" fill="white" fontSize="14">
                    Formiddag
                  </text>
                  <text x="350" y="280" fill="white" fontSize="14">
                    Middag
                  </text>
                  <text x="500" y="280" fill="white" fontSize="14">
                    Eftermiddag
                  </text>
                  <text x="650" y="280" fill="white" fontSize="14">
                    Aften
                  </text>

                  {/* Y-axis labels */}
                  <text x="10" y="250" fill="white" fontSize="14">
                    Lav
                  </text>
                  <text x="10" y="150" fill="white" fontSize="14">
                    Middel
                  </text>
                  <text x="10" y="50" fill="white" fontSize="14">
                    Høj
                  </text>

                  {/* Arousal curve */}
                  <path
                    d="M50,200 C150,180 200,100 300,120 C400,140 500,80 600,150 C650,180 700,200 750,190"
                    stroke="#10B981"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Optimal zone */}
                  <rect x="50" y="120" width="700" height="60" fill="#10B981" fillOpacity="0.2" />
                  <text x="400" y="145" fill="white" fontSize="14" textAnchor="middle">
                    Optimal arousal
                  </text>

                  {/* High arousal zone */}
                  <rect x="50" y="50" width="700" height="70" fill="#EF4444" fillOpacity="0.2" />
                  <text x="400" y="85" fill="white" fontSize="14" textAnchor="middle">
                    Høj arousal (stress)
                  </text>

                  {/* Low arousal zone */}
                  <rect x="50" y="180" width="700" height="70" fill="#3B82F6" fillOpacity="0.2" />
                  <text x="400" y="215" fill="white" fontSize="14" textAnchor="middle">
                    Lav arousal (understimulering)
                  </text>
                </svg>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-white/90">
              <p>
                I vores enkeltmandsprojekter arbejder vi målrettet med arousal-regulering for at hjælpe borgeren med at
                opnå en optimal tilstand, hvor de hverken er overstimulerede eller understimulerede. Vores erfarne
                personale er uddannet til at genkende tegn på både høj og lav arousal og kan implementere strategier,
                der hjælper borgeren med at vende tilbage til en mere balanceret tilstand.
              </p>
              <p>
                Ved at fokusere på arousal-regulering kan vi hjælpe borgeren med at reducere udadreagerende adfærd og
                forbedre deres evne til at håndtere dagligdagens udfordringer. Dette er en central del af vores tilgang
                til enkeltmandsprojekter og bidrager til at skabe et trygt og stabilt miljø for borgeren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Kontakt os for at høre mere om vores enkeltmandsprojekt
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Er du klar til at få hjælp til et <strong>enkeltmandsprojekt</strong>? Hos{" "}
                  <strong>Tryghedspersonale.dk</strong> tilbyder vi <strong>professionel støtte</strong> til borgere med
                  komplekse behov, der kræver intensiv behandling og støtte. Vi er eksperter i at tilbyde skræddersyede
                  løsninger, der imødekommer både borgerens og institutionens behov.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Tag kontakt til os i dag for at høre, hvordan vi kan hjælpe med at sikre den bedste løsning for jeres
                  borger.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                    <Link href="mailto:kontakt@tryghedsperrsonale.dk">
                      <Mail className="mr-2 h-5 w-5" /> Send email
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg">
                    <Link href="tel:41443333">
                      <Phone className="mr-2 h-5 w-5" /> Ring direkte
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-white/20 shadow-lg"
                  >
                    <Link href="/kontakt" className="flex items-center justify-between w-full">
                      <span>Kontakt os</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mt-8 md:mt-0">
                <Image
                  src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
                  alt="Professionel tryghedsmedarbejder klar til at hjælpe med enkeltmandsprojekt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section - Elegant Footer Style */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h3 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Relaterede emner</h3>
              <div className="w-16 h-1 bg-red-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-6 text-sm">
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Psykotisk adfærd</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Udadreagerende adfærd</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Intensiv støtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Tryghed for borgeren</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Hillerød</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt København</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Aarhus</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Odense</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Aalborg</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Fyn</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Jylland</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Sjælland</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Esbjerg</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Vejle</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Randers</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Kolding</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Horsens</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Silkeborg</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Enkeltmandsprojekt Viborg</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Støtte til borgere</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Psykisk støtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Praktisk hjælp til borgeren</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Voldsomme episoder</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Borgerens udvikling</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Skærmning af borger</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Individuel støtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Hverdagsstøtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Borgerstøtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Støtte til adfærd</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Akut støtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Fagligt støttepersonale</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Psykisk stabilisering</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Intensiv borgerstøtte</span>
              </div>
              <div className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-0.5 transform">
                <span className="font-medium">Støtte til voldsomme episoder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
