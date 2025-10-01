import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Brain, Shield, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Afledning- og Spejlningsteknikker | Tryghedspersonale.dk",
  description:
    "Lær hvordan Tryghedspersonale.dk bruger afledning- og spejlningsteknikker til at støtte borgere i stressede situationer, mindske konflikter og skabe tryghed gennem anerkendelse og forståelse.",
}

export default function AfledningsteknikkePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-faellesrum.jpeg"
            alt="Afledning og spejlning hos Tryghedspersonale.dk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Professionel metode til konfliktforebyggelse
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Afledningsteknikker og Spejlning</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Hos Tryghedspersonale.dk anvender vi afledning og spejling for at skabe tryghed og ro for borgere i
              stressede situationer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#hvad-er-afledning"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Lær mere om metoderne
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
      <section id="hvad-er-afledning" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Hvad er afledning og spejlning?</h2>
              <div className="text-lg text-slate-700 space-y-6">
                <p>
                  Hos <strong>Tryghedspersonale.dk</strong> anvender vi afledning- og spejlningsteknikker som en central
                  del af vores tilgang til at skabe tryghed og ro for borgere i stressede situationer. Disse teknikker
                  er effektive til at håndtere konflikter, minimere stress og støtte borgerens behov for opmærksomhed og
                  forståelse.
                </p>
                <p>
                  Afledning og spejling er to forskellige, men komplementære teknikker, der hver især har deres styrker
                  og anvendelsesområder. Når de bruges sammen, skaber de en kraftfuld tilgang til at støtte borgere med
                  komplekse behov og udfordringer.
                </p>
                <p>
                  Afledning handler om at ændre borgerens fokus fra noget, der skaber frustration, angst eller uro, til
                  noget mere positivt eller neutralt. Dette giver borgeren mulighed for at bryde ud af negative tanke-
                  eller følelsesmønstre og finde ro i en ny aktivitet eller samtale.
                </p>
                <p>
                  Spejling, på den anden side, handler om at skabe forbindelse og forståelse ved at efterligne borgerens
                  handlinger, bevægelser eller følelser. Dette skaber en følelse af at blive set og forstået, hvilket
                  kan være særligt værdifuldt for borgere, der har svært ved at kommunikere verbalt eller har kognitive
                  udfordringer.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-12 mb-16">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Afledning og spejling: Effektive værktøjer i praksis
                </h3>
                <p className="text-slate-700 mb-4">
                  Afledning og spejling er to komplementære teknikker, der har vist sig særdeles effektive i arbejdet
                  med borgere med komplekse behov. Vores erfaringer viser, at systematisk anvendelse af
                  afledningsteknikker kan reducere konfliktsituationer betydeligt. Dette skyldes, at afledning hjælper
                  borgeren med at skifte fokus fra det, der skaber frustration eller uro, til noget mere neutralt eller
                  positivt, hvilket giver dem et mentalt pusterum og mulighed for at genfinde balancen.
                </p>
                <p className="text-slate-700 mb-4">
                  Spejlningsteknikker har ligeledes vist sig at være et kraftfuldt værktøj i vores arbejde. Langt
                  størstedelen af borgerne reagerer positivt på spejling, da det skaber en følelse af forståelse og
                  anerkendelse. Når vi spejler borgerens handlinger, bevægelser eller følelser, etablerer vi en
                  nonverbal kommunikation, der bygger bro over eventuelle sproglige eller kognitive barrierer og skaber
                  en dybere forbindelse.
                </p>
                <p className="text-slate-700 mb-4">
                  Vores systematiske arbejde med disse teknikker har vist særligt gode resultater for borgere med
                  autismespektrumforstyrrelser, demens, psykiske lidelser og udviklingshæmning. For disse borgere kan
                  traditionel verbal kommunikation og konflikthåndtering være udfordrende, og de alternative tilgange
                  gennem afledning og spejling giver os mulighed for at nå dem på deres egne præmisser.
                </p>
                <p className="text-slate-700">
                  Særligt bemærkelsesværdigt er det, at når vi kombinerer afledning og spejling i vores tilgang, opnår
                  vi en endnu mere effektiv deeskalering af konfliktsituationer. Den kombinerede tilgang giver os
                  mulighed for både at anerkende borgerens følelser gennem spejling og samtidig guide dem væk fra det
                  udløsende stimuli gennem afledning. Dette resulterer i en hurtigere og mere effektiv nedtrapning af
                  potentielle konflikter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afledningsteknikker Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src="/tryghedspersonale-aktivitet.jpeg"
                    alt="Afledningsteknikker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Brain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Afledningsteknikker</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Afledning er en teknik, hvor vi ændrer borgerens fokus fra noget, der skaber frustration eller
                      uro, til noget mere neutralt eller positivt. Dette hjælper med at bryde negative tanker og
                      følelser og giver borgeren et mentalt pusterum.
                    </p>
                    <p>
                      Afledning kan være særligt effektiv i situationer, hvor en borger er ved at blive overvældet af
                      stærke følelser som angst, frustration eller vrede. Ved at introducere et nyt fokus, kan vi hjælpe
                      borgeren med at bryde den negative spiral og finde ro igen. Dette er ikke det samme som at
                      ignorere eller bagatellisere borgerens følelser, men snarere en måde at give dem en pause fra det,
                      der overvælder dem.
                    </p>
                    <p>
                      Vi bruger forskellige former for afledning afhængigt af den enkelte borgers interesser,
                      præferencer og behov. For nogle borgere kan fysisk aktivitet være en effektiv form for afledning,
                      mens andre responderer bedre på kreative aktiviteter, samtaler om emner, der interesserer dem,
                      eller sansestimulerende oplevelser.
                    </p>
                    <p>
                      For eksempel kan vi tilbyde en ny aktivitet, som en kort gåtur eller et simpelt spil, for at få
                      borgeren til at fokusere på noget andet og skabe en pause fra det, der forårsager ubehag. Vi kan
                      også introducere et nyt samtaleemne, der fanger borgerens interesse, eller tilbyde en
                      sanseoplevelse, der kan hjælpe med at ændre deres fokus og følelsesmæssige tilstand.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Skift af fokus til positive aktiviteter</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Introduktion af nye samtaleemner</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Tilbud om fysisk aktivitet som gåture</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Kreative aktiviteter som tegning eller musik</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spejlningsteknikker Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                  <Image
                    src="/tryghedspersonale-park-samtale.jpeg"
                    alt="Spejlningsteknikker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Brain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Spejlningsteknikker</h3>
                  </div>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Spejling handler om at efterligne borgerens handlinger, bevægelser eller følelser som en måde at
                      skabe forbindelse og forståelse. Dette er især nyttigt i situationer, hvor kommunikationen kan
                      være vanskelig, for eksempel hos borgere med kognitive udfordringer.
                    </p>
                    <p>
                      Spejling er baseret på den naturlige tendens, mennesker har til at spejle hinanden i sociale
                      interaktioner. Når vi spejler en anden person, signalerer vi, at vi ser dem, forstår dem og
                      anerkender deres følelser og oplevelser. Dette skaber en følelse af tryghed og tillid, som er
                      afgørende for at opbygge en god relation.
                    </p>
                    <p>
                      Vi bruger forskellige former for spejling i vores arbejde. Fysisk spejling involverer at
                      efterligne borgerens kropssprog, bevægelser eller handlinger. Følelsesmæssig spejling handler om
                      at anerkende og reflektere borgerens følelser på en empatisk måde. Verbal spejling kan involvere
                      at gentage eller omformulere borgerens ord for at vise, at vi lytter og forstår.
                    </p>
                    <p>
                      Spejling kan være så simpelt som at kopiere en borger, der folder et tæppe sammen, eller som at
                      reagere på et vink ved at vinke tilbage. Denne teknik skaber en følelse af samhørighed og hjælper
                      borgeren med at finde ro i situationen. For borgere med kommunikationsudfordringer kan spejling
                      være en måde at etablere kontakt og skabe en fælles forståelse, der går ud over ord.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Gentagelse af borgerens kropssprog</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Tilpasning af stemmeføring og toneleje</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Anerkendelse af borgerens følelser</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-700">Skabelse af tryghed gennem genkendelighed</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Hvordan arbejder vi med afledning og spejling hos Tryghedspersonale.dk?
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Vores tilgang er proaktiv, hvilket betyder, at vi altid er opmærksomme på tidlige tegn på stress eller
                uro hos borgeren.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <div className="text-slate-600 space-y-6">
                  <p>
                    Vi bruger afledning og spejling for at forhindre, at en situation udvikler sig til en konflikt. Når
                    vi ser, at en borger bliver ophidset eller frustreret, kan vi hurtigt aflede deres opmærksomhed ved
                    at tilbyde en ny aktivitet, som giver dem mulighed for at finde ro. Samtidig kan spejling hjælpe med
                    at skabe en følelse af tryghed og forståelse ved at vise borgeren, at vi er opmærksomme på deres
                    behov.
                  </p>
                  <p>
                    Vores tilgang til afledning og spejling er altid individuelt tilpasset. Vi tager hensyn til
                    borgerens personlighed, interesser, præferencer og udfordringer. Det, der virker for én borger,
                    virker måske ikke for en anden, og derfor er det vigtigt, at vi kender borgeren godt og kan tilpasse
                    vores teknikker til deres specifikke behov.
                  </p>
                  <p>
                    Vi arbejder også med at lære borgeren selv at bruge afledning som en selvreguleringsstrategi. Ved at
                    hjælpe borgeren med at identificere, hvornår de har brug for at skifte fokus, og give dem værktøjer
                    til at gøre dette, kan vi støtte dem i at tage mere kontrol over deres eget velvære og trivsel.
                  </p>
                  <p>
                    Vores tilgang er proaktiv, hvilket betyder, at vi altid er opmærksomme på tidlige tegn på stress
                    eller uro hos borgeren. Når vi ser, at en borger er ved at blive oprevet, anvender vi afledning for
                    at ændre deres fokus og spejling for at skabe forbindelse og tryghed. Begge teknikker hjælper os med
                    at sikre, at borgeren føler sig forstået og støttet, hvilket mindsker risikoen for konflikter og
                    stress.
                  </p>
                </div>
              </div>
            </div>

            {/* Anvendelse Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Anvendelse af afledning og spejling</h3>
                </div>
                <div className="text-slate-600 space-y-6">
                  <p>
                    Vi bruger afledning og spejling for at forhindre, at en situation udvikler sig til en konflikt. Når
                    vi ser, at en borger bliver ophidset eller frustreret, kan vi hurtigt aflede deres opmærksomhed ved
                    at tilbyde en ny aktivitet, som giver dem mulighed for at finde ro. Samtidig kan spejling hjælpe med
                    at skabe en følelse af tryghed og forståelse ved at vise borgeren, at vi er opmærksomme på deres
                    behov.
                  </p>
                  <p>
                    Afledning og spejling er særligt effektive i situationer, hvor borgeren er i risiko for at blive
                    overvældet af stærke følelser eller stimuli. Dette kan være i overgangssituationer, som kan være
                    udfordrende for mange borgere, eller i situationer med mange mennesker, høj støj eller andre former
                    for sensorisk overbelastning.
                  </p>
                  <p>
                    Vi bruger også disse teknikker i det daglige arbejde med borgeren, ikke kun i potentielle
                    konfliktsituationer. Ved at inkorporere afledning og spejling i vores almindelige interaktioner,
                    skaber vi et miljø, der er præget af tryghed, forståelse og respekt. Dette bidrager til borgerens
                    generelle trivsel og velvære og reducerer risikoen for stress og konflikter.
                  </p>
                  <p>
                    Vores personale er uddannet i at bruge afledning og spejling på en naturlig og respektfuld måde. Det
                    handler ikke om at manipulere borgeren, men om at skabe en positiv og støttende interaktion, der
                    hjælper borgeren med at håndtere udfordrende situationer og følelser.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Forebyggelse af konflikter</h4>
                    </div>
                    <p className="text-slate-600">
                      Tidlig intervention med afledning kan forhindre, at situationer eskalerer til konflikter. Ved at
                      genkende de tidlige tegn på frustration eller uro hos borgeren, kan vi gribe ind med afledning,
                      før situationen udvikler sig. Dette er en central del af vores konfliktforebyggende arbejde og
                      bidrager til at skabe et roligt og trygt miljø for alle.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800">Skabelse af tryghed</h4>
                    </div>
                    <p className="text-slate-600">
                      Spejling skaber en følelse af at blive set og forstået, hvilket øger borgerens tryghed. Når vi
                      spejler borgerens handlinger, bevægelser eller følelser, signalerer vi, at vi er opmærksomme på
                      dem og anerkender deres oplevelse. Dette skaber en dybere forbindelse og tillid, som er afgørende
                      for et godt samarbejde og for borgerens generelle trivsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
            alt="Professionelt team"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Få professionel støtte til afledning og spejlning</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Kontakt os i dag for at høre mere om, hvordan vores ekspertise inden for afledning og spejlning kan hjælpe
              jeres institution og borgere.
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
                Udforsk vores andre specialiserede metoder, der komplementerer arbejdet med afledning og spejling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Method 1 */}
              <Link href="/fremgangsmaader/arousal-regulering" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-aeldre-stoette.jpeg"
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
              <Link href="/fremgangsmaader/skaermning" className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <Image
                      src="/tryghedspersonale-samtale-udendoers.jpeg"
                      alt="Skærmning"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                      Skærmning
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Udforsk hvordan vi bruger skærmning til at beskytte borgeren mod overstimulering.
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
