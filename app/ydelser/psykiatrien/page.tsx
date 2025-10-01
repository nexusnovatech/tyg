import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Shield, Users, Heart, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Fastvagt til psykiatrien – Specialiserede vikarer til udadreagerende og psykotiske patienter | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi specialiserede vikarer som fastvagter til psykiatrien, der er eksperter i at håndtere udadreagerende og psykotiske patienter. Vi assisterer blandt andet i akutmodtagelsen, retspsykiatrien, socialpsykiatrien og gerontopsykiatrien. Vore vikarer er trænet i konflikthåndtering, observation og afledning for at skabe tryghed og stabilitet. Få hurtigt hjælp med kort varsel og professionel støtte, uanset om det drejer sig om én-til-én-støtte, dobbeltbemanding eller nattevagter. Kontakt os i dag for at få et uforpligtende tilbud.",
}

export default function PsykiatrienPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[700px] flex items-center">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full min-h-[700px]">
            {/* Content Left Side */}
            <div className="flex flex-col justify-center py-20 md:py-28">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Specialiserede vikarer til psykiatrien – Håndtering af udadreagerende og psykotiske patienter
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                  Fast vagt og én-til-én-støtte til akutte og komplekse psykiatriske forløb
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                    <a href="tel:41443333" className="flex items-center">
                      <Phone className="mr-3 h-6 w-6" /> Ring 41 44 33 33
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent text-lg px-8 py-4"
                  >
                    <Link href="/kontakt">Få et uforpligtende tilbud</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Right Side */}
            <div className="relative lg:block hidden">
              <img
                src="/ydelser-psykiatrien.jpeg"
                alt="Tryghedspersonale medarbejdere eskorterer person i mørkt tøj"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="prose prose-xl max-w-none">
                <p className="text-slate-700 text-xl mb-8 leading-relaxed">
                  Udadreagerende adfærd i psykiatrien er en af de mest krævende udfordringer for både personale,
                  patienter og medindlagte. Når en borger i psykisk krise reagerer aggressivt, truende eller
                  uforudsigeligt, kan det skabe massiv utryghed i miljøet og belaste de faste teams både fysisk og
                  mentalt. I de mest alvorlige tilfælde – f.eks. under akutte psykoser, vrangforestillinger eller
                  abstinenstilstande – kan det være nødvendigt med en erfaren, fast vagt, der kan skabe ro, struktur og
                  sikkerhed omkring borgeren.
                </p>
              </div>
              <div className="lg:order-first">
                <img
                  src="/tryghedspersonale-samtale-udendoers.jpeg"
                  alt="Professionel samtale udendørs mellem tryghedsmedarbejder og borger"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="prose prose-xl max-w-none">
              <p className="text-slate-700 text-xl mb-8 leading-relaxed">
                Hos Tryghedspersonale.dk leverer vi vikarer med specialiseret viden om psykiatri og erfaring i at
                håndtere psykotiske og udadreagerende borgere også kaldet tryghedsmedarbejder. Vi fokuserer på
                sikkerhed, konflikthåndtering og tæt observation, samtidig med at vi respekterer patientens integritet.
                Vore medarbejdere er trænet i at skabe tryghed i psykiatriske miljøer, hvor udfordrende adfærd kræver
                professionel og stabil håndtering.
              </p>
              <p className="text-slate-700 text-xl font-semibold leading-relaxed">
                Vi arbejder med respekt for patientens integritet – og med sikkerhed og stabilitet som omdrejningspunkt
                for hele indsatsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
                  Udfordringer i psykiatrien kræver specialiseret personale
                </h2>
                <p className="text-slate-700 text-xl mb-10 leading-relaxed">
                  Udadreagerende adfærd kan have mange årsager – og i psykiatrien spænder billedet bredt. Nogle
                  patienter er ramt af svære psykoser og mister virkelighedsfornemmelsen helt, mens andre kæmper med
                  affektive lidelser, personlighedsforstyrrelser, misbrugsproblematikker eller følgerne af traumer.
                  Fælles for dem er, at de i pressede situationer ofte reagerer på måder, der kan opleves voldsomme,
                  grænseoverskridende eller direkte farlige – både for dem selv og for omgivelserne.
                </p>
              </div>
              <div>
                <img
                  src="/tryghedspersonale-aeldre-stoette.jpeg"
                  alt="Tryghedsmedarbejder yder støtte til ældre borger"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <p className="text-slate-700 text-xl mb-10 leading-relaxed">
              Derfor er det afgørende, at personalet omkring dem har faglig ballast og ro i maven. Hos os er det et
              krav, at vores vikarer kan arbejde selvstændigt, tænke pædagogisk og handle professionelt – også i
              pressede situationer, hvor der er risiko for eskalation. Vi kalder det for tryghedsmedarbejder.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Hvor kan vi hjælpe?</h2>
            <p className="text-slate-700 text-xl mb-10 leading-relaxed">
              Vi leverer specialiserede vikarer som vi kalder for tryghedsmedarbejdere til en bred vifte af psykiatriske
              afdelinger og tilbud – både i akutte og længerevarende forløb. Uanset om behovet er én-til-én-støtte, fast
              vagt, dobbeltbemanding eller forstærket nattevagt, kan vi træde til med kort varsel.
            </p>
            <p className="text-slate-700 text-xl mb-12 font-semibold leading-relaxed">
              Vi dækker blandt andet følgende områder:
            </p>

            <div className="space-y-10">
              <div className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-red-50 rounded-full p-3 mr-6">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Akutmodtagelsen Psykiatrisk skadestue / PAM
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Her ser vi ofte borgere i svære psykiske kriser, abstinenssymptomer, selvmordsrisiko eller akut
                      psykotisk tilstand. Vi leverer vikarer, der kan agere roligt og sikkert i et kaotisk miljø og
                      bistå med observation, samtaler og afledning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-red-50 rounded-full p-3 mr-6">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Retspsykiatrien</h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Arbejdet i retspsykiatrien stiller helt særlige krav til sikkerhed, grænsesætning og
                      situationsfornemmelse. Vi tilbyder personale med erfaring i konflikthåndtering, relationsarbejde
                      og struktureret pædagogik, som kan arbejde i lukkede og skærmede miljøer med høj kompleksitet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-red-50 rounded-full p-3 mr-6">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Socialpsykiatrien</h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Her er udfordringerne ofte mere relationelle og hverdagsprægede, men ikke mindre krævende. Vi
                      assisterer i bofællesskaber, §108-tilbud og botilbud for borgere med svære psykiske lidelser og
                      sociale udfordringer – ofte med misbrug, isolation eller udadreagerende adfærd som en del af
                      billedet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-start mb-6">
                  <div className="bg-red-50 rounded-full p-3 mr-6">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Gerontopsykiatrien (Ældreområdet)</h3>
                    <h4 className="text-xl font-semibold text-slate-800 mb-4">
                      Psykiatriske udfordringer hos ældre på plejehjem
                    </h4>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Ældre borgere på plejehjem med demens kan ofte udvikle psykotiske symptomer, paranoia eller
                      affektive lidelser, der kræver en særlig indsats. Hos Tryghedspersonale.dk tilbyder vi vikarer med
                      viden om gerontopsykiatri og erfaring i at skabe tryghed hos ældre med psykiske lidelser. Vores
                      personale arbejder målrettet med at forebygge og håndtere udadreagerende eller forstyrrende adfærd
                      – også når sprog, kognition og forståelse er svækket.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
                  Vi hjælper med at skabe ro, tryghed og kontinuitet
                </h2>
                <p className="text-slate-700 text-xl mb-10 leading-relaxed">
                  Vores tilgang er baseret på afledning, tilstedeværelse og konfliktforebyggelse – og vi arbejder altid
                  ud fra en pædagogisk og psykiatrifaglig vinkel. Vikarerne fra Tryghedspersonale.dk får løbende
                  supervision og opdateres i relevante teknikker som low arousal, deeskalering og relationspædagogik. Vi
                  møder borgeren med respekt og forståelse – også når adfærden udfordrer.
                </p>
                <p className="text-slate-700 text-xl font-semibold leading-relaxed">
                  Vores mål er at støtte både det faste personale og den enkelte borger, så hverdagen bliver tryggere og
                  mere håndterbar for alle parter.
                </p>
              </div>
              <div>
                <img
                  src="/tryghedspersonale-park-samtale.jpeg"
                  alt="Rolig samtale i parkområde mellem tryghedsmedarbejder og borger"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Få hjælp – hurtigt og effektivt</h2>
            <p className="text-slate-700 text-xl mb-10 leading-relaxed">
              Vi ved, hvor hurtigt en situation kan eskalere i psykiatrien. Derfor er vi tilgængelige med kort varsel,
              når behovet opstår. Uanset om det drejer sig om få timer, nattevagter, døgnobservationer eller
              længerevarende enkeltmandsprojekter, står vi klar.
            </p>
            <p className="text-slate-700 text-xl font-semibold leading-relaxed">
              Hos Tryghedspersonale.dk får I ikke bare vikarer – I får fagligt kompetente kollegaer, der kan indgå
              sømløst i jeres team og være med til at stabilisere situationen fra første vagt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Kontakt os</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <Phone className="h-12 w-12 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ring til os på:</h3>
                <a href="tel:41443333" className="text-2xl hover:underline">
                  41 44 33 33
                </a>
              </div>

              <div>
                <svg className="h-12 w-12 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold mb-4">Skriv til os på:</h3>
                <a href="mailto:kontakt@tryghedspersonale.dk" className="text-2xl hover:underline">
                  kontakt@tryghedspersonale.dk
                </a>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Læs mere eller få et uforpligtende tilbud på: www.tryghedspersonale.dk
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-100 text-lg px-8 py-4">
                <Link href="/kontakt">Få et uforpligtende tilbud</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10 text-white bg-transparent text-lg px-8 py-4"
              >
                <Link href="/fremgangsmaader">Læs om vores tilgang</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-700 mb-8 text-center">Søgeord og tjenester</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fastvagt psykiatrien Aarhus
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fastvagt psykiatrien København
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fastvagt psykiatrien Odense
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fastvagt psykiatrien Aalborg
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Psykiatrisk fastvagt
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Vikarer til psykiatrien
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Specialiserede vikarer psykiatri
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fast vagt psykiatri
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Tryghedsmedarbejder psykiatrien
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Psykosehåndtering vikar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Vikarer til udadreagerende adfærd
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Fast vagt til psykiatriske afdelinger
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Retspsykiatrisk vagt
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Vikarer til akutmodtagelse psykiatri
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Vikarer til socialpsykiatri
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Gerontopsykiatri fastvagt
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Psykiatrisk sikkerhedsvagt
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Konflikthåndtering i psykiatrien
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                Psykiatriske vikarer til hospital
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm bg-white hover:bg-red-50 border-slate-200 hover:border-red-200 px-4 py-2"
              >
                En-til-en vagt psykiatrien
              </Button>
            </div>
            <div className="text-center mt-8">
              <p className="text-base text-slate-500 leading-relaxed">
                Kontakt os for specialiserede vikarer til psykiatrien med erfaring i håndtering af udadreagerende og
                psykotiske patienter
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
