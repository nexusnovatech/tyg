import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  Phone,
  Shield,
  Users,
  Heart,
  Home,
  Building,
  UserCheck,
  Clock,
  Target,
  Lightbulb,
  AlertTriangle,
  Activity,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title:
    "Fastvagt til Bosteder og Institutioner – Professionel håndtering af udadreagerende adfærd | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi fastvagter og psykiatrifaglige vikarer til bosteder og institutioner. Professionel håndtering af udadreagerende adfærd og tryghed for både beboere og personale. Kontakt os for skræddersyede løsninger til jeres behov.",
}

export default function FastvagtBosted() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/tryghedspersonale-faellesrum.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Fastvagt til bosteder og institutioner
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Professionel håndtering af udadreagerende adfærd med respekt og professionalisme
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <div className="bg-gradient-to-r from-red-50 to-blue-50 p-4 rounded-2xl">
                  <Image
                    src="/tryghedspersonale-aeldre-stoette.jpeg"
                    alt="Tryghedspersonale støtter borgere på bosted med professionel omsorg"
                    width={800}
                    height={500}
                    className="rounded-xl shadow-2xl border-4 border-white w-full h-auto object-cover h-[400px] md:h-[500px]"
                  />
                </div>
              </div>
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Specialiserede vikarer til institutioner
                </h2>
                <p className="text-slate-700 mb-6">
                  Hos <strong>tryghedspersonale.dk</strong> tilbyder vi specialiserede vikarer til en bred vifte af
                  institutioner og bosteder, herunder:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Building className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Offentlige og private bo- og opholdssteder</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Skærmede afdelinger og institutioner for borgere med særlige behov</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Home className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Døgninstitutioner og krisecentre</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Heart className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Bosteder for borgere med misbrugsproblematikker</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-50 rounded-full p-1 mr-3 mt-1">
                      <Brain className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Institutioner for borgere med autismespektrumforstyrrelser</span>
                  </li>
                </ul>
                <p className="text-slate-700 mt-6">
                  Vore vikarer er trænet i at håndtere udadreagerende adfærd med respekt og professionalisme, hvilket
                  skaber trygge rammer for både borgere og personale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Udadreagerende adfærd Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Udadreagerende adfærd – en kompleks udfordring
              </h2>
              <p className="text-lg text-slate-600">
                At arbejde med borgere, der udviser udadreagerende adfærd, er en kompleks og udfordrende opgave. Denne
                adfærd kan manifestere sig som verbale eller fysiske udbrud og kan have dybe rødder i forskellige
                faktorer. Forståelse af disse årsager er afgørende for effektiv håndtering.
              </p>
            </div>

            {/* 97% Statistic */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600 mb-12">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600">97%</div>
                  <div className="text-sm text-slate-600">af udadreagerende adfærd</div>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                Det vurderes, at <strong>97 procent</strong> af al udadreagerende adfærd kan relateres til reaktioner på
                forhold i omgivelserne. Når en borger udviser udadreagerende adfærd, er det ofte et signal om, at
                personen ikke trives i sine omgivelser.
              </p>
              <p className="text-slate-700">
                Hos <strong>tryghedspersonale.dk</strong> ser vi på adfærden som et tegn på, at borgeren har brug for
                støtte og hjælp til at navigere i et presset miljø.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Årsager til udadreagerende adfærd */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Årsager til udadreagerende adfærd
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              De mest almindelige årsager til udadreagerende adfærd inkluderer:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Brain className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Kognitive og kommunikative udfordringer</h3>
                </div>
                <p className="text-slate-700">
                  Borgere med udviklingshæmning kan have svært ved at kommunikere deres behov eller forstå de krav, der
                  stilles til dem. Dette kan føre til frustration og udadreagerende reaktioner.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Psykiske og følelsesmæssige problematikker</h3>
                </div>
                <p className="text-slate-700">
                  Angst, vrede eller nedsat trivsel kan føre til udadreagerende adfærd, især i overbelastende
                  situationer med mange stimuli.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Activity className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Somatiske forhold</h3>
                </div>
                <p className="text-slate-700">
                  Fysiske problemer som smerte, bivirkninger fra medicin eller manglende søvn kan også udløse aggression
                  og frustration hos borgeren.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Stress og livsomstændigheder</h3>
                </div>
                <p className="text-slate-700">
                  Eksterne faktorer som økonomiske problemer eller misbrug kan øge stressniveauet og bidrage til
                  udadreagerende adfærd.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Fysiologiske behov</h3>
                </div>
                <p className="text-slate-700">
                  Manglende opfyldelse af grundlæggende behov som mad, søvn eller kontakt kan også forårsage frustration
                  og aggression.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Personalets tilgang</h3>
                </div>
                <p className="text-slate-700">
                  Hvordan personalet interagerer med borgerne – herunder stemmeføring, kropssprog og øjenkontakt – kan
                  have stor indflydelse på borgerens adfærd. En rolig og respektfuld tilgang er ofte med til at aflede
                  konflikten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionel håndtering Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Professionel håndtering af udadreagerende adfærd
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Hos <strong>tryghedspersonale.dk</strong> er vi eksperter i at håndtere udadreagerende adfærd på en
              respektfuld og professionel måde. Vores vikarer er trænede i afledningsteknikker og metoder til at
              reducere spændinger i pressede situationer. Vi fokuserer på at forstå den enkelte borgers behov og reagere
              passende.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/2">
                <Image
                  src="/tryghedspersonale-park-samtale.jpeg"
                  alt="Professionel samtale og støtte i rolige omgivelser"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-6 w-6 text-red-600 mr-3" />
                      <h3 className="font-bold text-slate-900">Afledningsteknikker og tilpasset pleje</h3>
                    </div>
                    <p className="text-slate-700">
                      Afledning er en effektiv metode til at håndtere en borger, der udviser udadreagerende adfærd. Det
                      handler om at skifte fokus og lede opmærksomheden væk fra det, der udløser den aggressive
                      reaktion. Dette kan omfatte at tilbyde en roligere aktivitet, stille spørgsmål for at skabe et nyt
                      fokus, eller blot at skabe et stille og trygt rum, hvor borgeren kan finde ro.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                    <div className="flex items-center mb-3">
                      <Activity className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="font-bold text-slate-900">Over- og understimulering: Balancen er afgørende</h3>
                    </div>
                    <p className="text-slate-700">
                      En af de vigtigste faktorer i håndteringen af udadreagerende adfærd er at finde den rette balance
                      mellem stimulering og ro. Hvis en borger er udsat for for meget stimuli (f.eks. støj, aktivitet
                      eller konflikter), kan det føre til frustration og udadreagerende reaktioner. Omvendt, hvis en
                      borger ikke får nok stimulering, kan det resultere i kedsomhed og dermed aggression. Vore vikarer
                      er trænet i at forstå og justere niveauerne af stimuli, så de passer til den enkelte borgers
                      behov.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arousal Theory Section */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Brain className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Arousal-teorien: Hvordan vi arbejder med spændingsniveauer
                </h3>
              </div>
              <p className="text-slate-700 mb-6 text-center">
                Vi benytter os af Arousal-teorien, som hjælper os med at forstå, hvordan forskellige niveauer af
                følelsesmæssig og fysisk ophidselse påvirker en borger. Når borgeren er for ophidset (i en høj
                arousal-tilstand), vil vi bruge beroligende teknikker og afledning for at hjælpe med at sænke
                spændingen. Hvis borgeren er i en lav arousal-tilstand (for deprimeret eller apatisk), vil vi arbejde
                med at øge deres engagement og opmærksomhed for at skabe mere interaktivitet og forhindre passiv adfærd,
                der kan føre til frustration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ChevronDown className="h-4 w-4 text-red-600" />
                    </div>
                    Høj arousal-tilstand
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Beroligende samtale og rolig stemmeføring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Reducering af stimuli i omgivelserne</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Guidning til et roligere miljø</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <div className="bg-blue-100 rounded-full p-1 mr-2">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                    </div>
                    Lav arousal-tilstand
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Engagerende aktiviteter tilpasset interesser</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Motiverende samtale og positiv feedback</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Strukturerede aktiviteter med klare mål</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Impact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Når udadreagerende adfærd påvirker hele miljøet
                </h2>
              </div>
              <p className="text-slate-700 mb-6">
                I nogle tilfælde kan en borgers udadreagerende adfærd være så voldsom, at det påvirker hele miljøet.
                Dette kan føre til beslutninger om forflytning af borgeren. Men en sådan forflytning kan tage tid at
                implementere.
              </p>
              <p className="text-slate-700">
                I denne periode kan vores professionelle vikarer fra <strong>tryghedspersonale.dk</strong> tilbyde
                støtte og sikre et trygt og stabilt miljø for både borgeren og de øvrige beboere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samarbejde Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Samarbejde med fokus på stabilitet og relationer
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Når vi træder ind i en institution eller et bosted, gør vi det med respekt for den eksisterende kultur,
              pædagogiske tilgang og faglige rammer. Vi ved, at stabilitet og relationer er altafgørende i arbejdet med
              borgere, der har udfordrende adfærd.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Relationelt arbejde</h3>
                <p className="text-slate-600">
                  Vores vikarer er bevidste om betydningen af tillid og genkendelighed i mødet med borgeren. De arbejder
                  tålmodigt og konsekvent for at opbygge trygge relationer – også når det tager tid.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fagligt funderet indsats</h3>
                <p className="text-slate-600">
                  Vi arbejder med metoder som Low Arousal, tydelig struktur og kommunikation, samt en anerkendende og
                  konfliktnedtrappende tilgang.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tæt opfølgning</h3>
                <p className="text-slate-600">
                  Vi følger op løbende og står til rådighed under hele forløbet. Der kan være behov for tilpasninger
                  undervejs, og her er vi fleksible og løsningsorienterede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Hvorfor vælge tryghedspersonale.dk?
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              Vi tilbyder professionel støtte med fokus på respekt og værdighed
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Erfaring og ekspertise</h3>
                  <p className="text-slate-600">
                    Vi har mange års erfaring med at håndtere udadreagerende adfærd i forskellige institutionelle
                    sammenhænge.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <UserCheck className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tilpassede løsninger</h3>
                  <p className="text-slate-600">
                    Vi tilbyder skræddersyede løsninger, der matcher jeres behov – uanset om det er kortvarige opgaver,
                    fastvagter eller længerevarende enkeltmandsprojekter. Vores personale arbejder tæt sammen med det
                    faste team for at sikre kontinuitet og tryghed.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Specialiserede vikarer</h3>
                  <p className="text-slate-600">
                    Vore vikarer er uddannede og trænet i at håndtere komplekse adfærdsmønstre med respekt og
                    professionalisme.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visible Keywords Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Jylland
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Fyn</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Sjælland
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted København
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Aarhus</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Odense</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Aalborg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Esbjerg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Randers
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Vejle</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Kolding
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Horsens
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Herning
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Silkeborg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Fredericia
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Næstved
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Roskilde
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Holbæk</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Slagelse
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Hillerød
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Helsingør
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Viborg</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Middelfart
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Køge</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Svendborg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Lolland
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Rebild</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Norddjurs
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt bosted Hjørring
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Faxe</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted Herlev</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">fastvagt bosted</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                psykiatrifaglig vikarbureau
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                sikkerhedsvagt til bosted
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">vagtfirma bosted</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt til institution
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">psykiatrisk vikar</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar psykiatrisk institution
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">vikar til bosted</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til institutioner med udadreagerende adfærd
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt vikar til bosted
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til døgninstitutioner
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til skærmede afdelinger
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">vagtfirma til bosted</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt til psykiatrisk afdeling
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                sikkerhedspersonale til bosted
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                professionel vagt til bosteder
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til bo- og opholdssteder
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                tryghedspersonale.dk vikarer
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">bosted vikarer</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til institutioner med særlige behov
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til borgere med udviklingshæmning
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til borgere med autisme
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">vikar til krisecentre</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til misbrugsbosteder
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt til misbrugsinstitutioner
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til bosted med udadreagerende adfærd
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                sikkerhedspersonale til krisecentre
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til skærmede afdelinger
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vagtfirma til psykiatri
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt til døgninstitutioner
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til bosted i København
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                fastvagt til institutioner i Aarhus
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til bosteder i Odense
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                sikkerhedsvagt til bosted i Aalborg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til specialinstitutioner i Esbjerg
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikar til bosted i Randers
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vikarer til bosteder i Odense
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                vagtfirma bosteder i København
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section (hidden visually but available for search engines) */}
      <section className="sr-only">
        <h2>Søgeord</h2>
        <ul>
          <li>fastvagt bosted Jylland</li>
          <li>fastvagt bosted Fyn</li>
          <li>fastvagt bosted Sjælland</li>
          <li>fastvagt bosted København</li>
          <li>fastvagt bosted Aarhus</li>
          <li>fastvagt bosted Odense</li>
          <li>fastvagt bosted Aalborg</li>
          <li>fastvagt bosted Esbjerg</li>
          <li>fastvagt bosted Randers</li>
          <li>fastvagt bosted Vejle</li>
          <li>fastvagt bosted Kolding</li>
          <li>fastvagt bosted Horsens</li>
          <li>fastvagt bosted Herning</li>
          <li>fastvagt bosted Silkeborg</li>
          <li>fastvagt bosted Fredericia</li>
          <li>fastvagt bosted Næstved</li>
          <li>fastvagt bosted Roskilde</li>
          <li>fastvagt bosted Holbæk</li>
          <li>fastvagt bosted Slagelse</li>
          <li>fastvagt bosted Hillerød</li>
          <li>fastvagt bosted Helsingør</li>
          <li>fastvagt bosted Viborg</li>
          <li>fastvagt bosted Middelfart</li>
          <li>fastvagt bosted Køge</li>
          <li>fastvagt bosted Svendborg</li>
          <li>fastvagt bosted Lolland</li>
          <li>fastvagt bosted Rebild</li>
          <li>fastvagt bosted Norddjurs</li>
          <li>fastvagt bosted Hjørring</li>
          <li>fastvagt bosted Faxe</li>
          <li>fastvagt bosted Herlev</li>
          <li>fastvagt bosted</li>
          <li>psykiatrifaglig vikarbureau</li>
          <li>sikkerhedsvagt til bosted</li>
          <li>vagtfirma bosted</li>
          <li>fastvagt til institution</li>
          <li>psykiatrisk vikar</li>
          <li>vikar psykiatrisk institution</li>
          <li>vikar til bosted</li>
          <li>vikar til institutioner med udadreagerende adfærd</li>
          <li>fastvagt vikar til bosted</li>
          <li>vikar til døgninstitutioner</li>
          <li>vikar til skærmede afdelinger</li>
          <li>vagtfirma til bosted</li>
          <li>fastvagt til psykiatrisk afdeling</li>
          <li>sikkerhedspersonale til bosted</li>
          <li>professionel vagt til bosteder</li>
          <li>vikar til bo- og opholdssteder</li>
          <li>tryghedspersonale.dk vikarer</li>
          <li>bosted vikarer</li>
          <li>vikar til institutioner med særlige behov</li>
          <li>vikar til borgere med udviklingshæmning</li>
          <li>vikar til borgere med autisme</li>
          <li>vikar til krisecentre</li>
          <li>vikar til misbrugsbosteder</li>
          <li>fastvagt til misbrugsinstitutioner</li>
          <li>vikar til bosted med udadreagerende adfærd</li>
          <li>sikkerhedspersonale til krisecentre</li>
          <li>vikar til skærmede afdelinger</li>
          <li>vagtfirma til psykiatri</li>
          <li>fastvagt til døgninstitutioner</li>
          <li>vikar til bosted i København</li>
          <li>fastvagt til institutioner i Aarhus</li>
          <li>vikar til bosteder i Odense</li>
          <li>sikkerhedsvagt til bosted i Aalborg</li>
          <li>vikar til specialinstitutioner i Esbjerg</li>
          <li>vikar til bosted i Randers</li>
          <li>vikarer til bosteder i Odense</li>
          <li>vagtfirma bosteder i København</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Kontakt os i dag</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Hvis du ønsker at høre mere om, hvordan tryghedspersonale.dk kan hjælpe med at håndtere udadreagerende
              adfærd på din institution eller bosted, så kontakt os gerne.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:41443333" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-slate-800/50 hover:bg-white hover:text-slate-900"
              >
                <a href="mailto:kontakt@tryghedspersonale.dk" className="flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" /> Send en e-mail
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
