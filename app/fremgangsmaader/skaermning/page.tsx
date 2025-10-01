import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Skærmning i Psykiatrien, Demenscentre & Bosteder | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk benytter vi skærmning som en effektiv metode til at beskytte borgeren mod overstimulering. Læs hvordan vi skaber tryghed og ro gennem målrettet skærmning i psykiatrien, demenscentre og bosteder.",
}

export default function SkaermningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-faellesrum.jpeg"
            alt="Skærmning hos Tryghedspersonale.dk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Professionel metode til beskyttelse
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Når borgeren har brug for en pause: Skærmning i praksis
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Hos Tryghedspersonale.dk ved vi, at nogle situationer kræver, at vi aktivt beskytter borgeren mod
              overstimulering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#hvad-er-skaermning"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Lær mere om metoden
              </Link>
              <Link
                href="/kontakt"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Kontakt os
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="hvad-er-skaermning" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Hvad er skærmning?</h2>
              <div className="text-lg text-slate-700 space-y-6">
                <p>
                  Hos <strong>Tryghedspersonale.dk</strong> ved vi, at nogle situationer kræver, at vi aktivt beskytter
                  borgeren mod overstimulering. <strong>Skærmning</strong> er en vigtig del af vores metode for at skabe
                  en tryg og balanceret hverdag, hvor borgeren har mulighed for at få ro og genvinde kontrol.
                </p>
                <p>
                  Skærmning handler om at fjerne eller minimere stimuli fra omverdenen, når en borger er i en tilstand
                  af høj arousal (overstimuleret). Når vi taler om skærmning, betyder det ikke nødvendigvis at isolere
                  borgeren, men snarere at skabe et miljø, hvor de får mulighed for at trække sig tilbage og finde ro
                  uden forstyrrelser.
                </p>
                <p>
                  Skærmning kan være en fysisk, følelsesmæssig eller kognitiv tilpasning. For nogle kan det være at
                  fjerne stressende stimuli, som f.eks. høje lyde, stærkt lys eller mange mennesker. For andre kan det
                  handle om at give dem en stille og rolig stund i et beskyttet rum eller en tid til refleksion og
                  hvile.
                </p>
                <p>
                  Skærmning anvendes særligt i miljøer som <strong>psykiatrien</strong>, <strong>demenscentre</strong>{" "}
                  og <strong>bosteder</strong>, hvor borgerne kan være særligt udsatte for overstimulering, der kan føre
                  til ubehagelige eller udfordrende reaktioner. Her er skærmning et nødvendigt redskab til at sikre, at
                  borgerne får den nødvendige ro til at bearbejde deres følelser og genvinde kontrol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src="/tryghedspersonale-aeldre-stoette.jpeg"
                    alt="Hvornår bruger vi skærmning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Brain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Hvornår bruger vi skærmning?</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Skærmning bruges i situationer, hvor vi ser tegn på, at borgeren er blevet overstimuleret og har
                      brug for en pause for at undgå, at situationen udvikler sig til stress, angst eller konflikt. Det
                      kan være, når en borger er blevet fysisk urolig, irriteret, eller reagerer på en impulsiv måde.
                      Her hjælper skærmning med at reducere ydre stimuli, som kan forstærke den negative reaktion.
                    </p>
                    <p>
                      Skærmning er især vigtig i <strong>psykiatrien</strong>, hvor patienter kan have meget intense
                      reaktioner på overstimulering, eller i <strong>demenscentre</strong>, hvor personer med demens
                      often er mere sårbare overfor ubehagelig stimulus, der kan forårsage agitation. På{" "}
                      <strong>bosteder</strong> kan skærmning også være en vigtig metode for at give borgerne den
                      nødvendige pause, så de ikke bliver overvældet af deres omverden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Levels of Screening Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                  <Image
                    src="/tryghedspersonale-park-samtale.jpeg"
                    alt="De forskellige skærmningsniveauer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">De forskellige skærmningsniveauer</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Vi deler skærmning op i tre niveauer, som vi anvender afhængigt af situationen og borgerens behov:
                    </p>
                    <div className="pl-4 border-l-4 border-red-100 my-4">
                      <h4 className="font-bold mb-2">Niveau 1: Minimal Skærmning</h4>
                      <p>
                        På dette niveau handler det om at skabe et roligt og støttende miljø uden at det bliver
                        nødvendigt at fjerne borgeren fra en situation. Det kan være at dæmpe lyset, tale med en blødere
                        tone eller fjerne unødvendige distraktioner. Formålet er at reducere den ydre stimuli, så
                        borgeren nemmere kan finde ro i det miljø, de er i.
                      </p>
                    </div>
                    <div className="pl-4 border-l-4 border-red-100 my-4">
                      <h4 className="font-bold mb-2">Niveau 2: Moderat Skærmning</h4>
                      <p>
                        Her skaber vi et mere afskærmet rum for borgeren, hvor stimuli minimeres yderligere. Det kan
                        være at flytte borgeren til et stille rum eller et mere afsondret område, hvor de kan være alene
                        med vores støtte. På dette niveau er der stadig mulighed for at være i et socialt miljø, men vi
                        gør det lettere for borgeren at finde ro og refleksion.
                      </p>
                    </div>
                    <div className="pl-4 border-l-4 border-red-100 my-4">
                      <h4 className="font-bold mb-2">Niveau 3: Høj Skærmning</h4>
                      <p>
                        På dette niveau skaber vi et miljø, hvor borgeren er helt beskyttet mod overstimulering, især
                        når borgeren er stærkt overstimuleret, destruktiv eller selvskadende. Skærmningen kan inkludere
                        at fjerne borgeren fra en konfliktsituation eller sørge for, at de er i et sikkert og roligt
                        rum, som deres egen bolig, hvor de kan få ro og genvinde kontrol. Dette niveau anvendes, når
                        borgerens adfærd er i fare for at eskalere, og vi har behov for at sikre både deres og andres
                        sikkerhed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Hvordan arbejder vi med skærmning?</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Vores tilgang til skærmning er både proaktiv og fleksibel, tilpasset den enkelte borgers unikke behov.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <div className="text-slate-600 space-y-6">
                  <p>
                    Skærmning er en proaktiv og fleksibel tilgang, hvor vi hele tiden observerer borgerens adfærd og
                    tilpasser vores støtte i realtid. Vi handler hurtigt, så borgeren får mulighed for at trække sig
                    tilbage, før situationen bliver overvældende. I stedet for at vente på, at problemet opstår, er vi
                    opmærksomme på små tegn på overstimulering og griber ind på et tidligt tidspunkt.
                  </p>
                  <p>
                    Når vi bruger skærmning, gør vi det på en måde, der respekterer borgerens værdighed og behov. Det
                    betyder, at vi altid sikrer, at skærmningen ikke opleves som en straf, men som en nødvendig pause,
                    der giver borgeren mulighed for at finde tilbage til en mere balanceret tilstand.
                  </p>
                  <p>
                    Skærmning handler om at give borgeren tryghed og kontrol over deres egen situation. Vi støtter dem i
                    at finde ro og genvinde kontrollen over deres følelser og adfærd – uden at skabe yderligere stress
                    eller følelsesmæssige belastninger.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal of Screening Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Hvad er målet med skærmning?</h3>
                </div>
                <div className="text-slate-600 space-y-6">
                  <p>
                    Målet med skærmning er at give borgeren mulighed for at finde indre ro og genopbygge deres energi og
                    overskud. Når borgeren er blevet skærmet fra overstimulering, kan de lettere genvinde kontrollen
                    over deres adfærd og føle sig mere trygge. Skærmning giver dem tid og plads til at reflektere, tage
                    en pause eller finde den balance, der gør, at de kan fortsætte deres dag på en mere positiv måde.
                  </p>
                </div>
              </div>
            </div>

            {/* Holistic Approach Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Skærmning som del af vores helhedsorienterede tilgang
                  </h3>
                </div>
                <div className="text-slate-600 space-y-6">
                  <p>
                    Hos <strong>Tryghedspersonale.dk</strong> ser vi skærmning som én af mange værktøjer i vores
                    helhedsorienterede tilgang til borgerens trivsel. Vi kombinerer skærmning med andre metoder som
                    aktivitetstilpasning, kommunikation og sensory modulation, så vi kan støtte borgeren på den mest
                    effektive og respektfulde måde.
                  </p>
                  <p>
                    Skærmning er ikke et statisk værktøj – det er en del af et dynamisk forløb, hvor vi tilpasser os
                    borgerens behov i takt med, at deres situation ændrer sig.
                  </p>
                  <p>
                    Når vi arbejder med skærmning, er det en del af vores holistiske tilgang, der også omfatter metoder
                    som <strong>Low Arousal</strong>, hvor vi sikrer, at borgeren ikke bliver overstimuleret eller
                    understimuleret. Denne metode, sammen med afskærmning og andre tilpassede teknikker, giver os
                    mulighed for at skræddersy støtten efter den enkelte borger og sikre, at de får den nødvendige ro og
                    stimulans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/security-personnel-6.jpeg" alt="Professionelt team" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få professionel støtte til skærmning</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Kontakt os i dag for at høre mere om, hvordan vores ekspertise inden for skærmning kan hjælpe jeres
              institution og borgere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Kontakt os
              </Link>
              <Link
                href="/fremgangsmaader"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Se andre metoder <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Relaterede fremgangsmåder</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Udforsk vores andre specialiserede metoder, der komplementerer arbejdet med skærmning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Method 1 */}
              <Link href="/fremgangsmaader/arousal-regulering" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-aktivitet.jpeg"
                      alt="Arousal Regulering"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Arousal Regulering
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Lær om hvordan vi skaber balance mellem stimuli og ro for at sikre borgerens trivsel.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 2 */}
              <Link href="/fremgangsmaader/afledningsteknikker-og-spejlning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-samtale-udendoers.jpeg"
                      alt="Afledningsteknikker og Spejlning"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Afledningsteknikker og Spejlning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Udforsk hvordan vi bruger afledning og spejling til at skabe kontakt og forebygge konflikter.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Method 3 */}
              <Link href="/fremgangsmaader/dokumentation" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-forside-medarbejder.jpeg"
                      alt="Dokumentation"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Dokumentation
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Se hvordan vi dokumenterer og evaluerer vores indsats for at sikre kontinuerlig forbedring.
                    </p>
                    <div className="flex items-center text-red-600 font-medium">
                      Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
