import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Afledning- og Spejlningsteknikker | Tryghedspersonale.dk",
  description:
    "Lær hvordan Tryghedspersonale.dk bruger afledning- og spejlningsteknikker til at støtte borgere i stressede situationer, mindske konflikter og skabe tryghed gennem anerkendelse og forståelse.",
}

export default function AfledningOgSpejlningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/security-personnel-2.jpeg"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Afledning- og Spejlningsteknikker</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Hos Tryghedspersonale.dk anvender vi afledning- og spejlningsteknikker som en central del af vores tilgang
              til at skabe tryghed og ro for borgere i stressede situationer.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Afledning- og Spejlningsteknikker hos Tryghedspersonale.dk
              </h2>
              <div className="text-lg text-slate-700 space-y-6">
                <p>
                  Hos <strong>Tryghedspersonale.dk</strong> anvender vi afledning- og spejlningsteknikker som en central
                  del af vores tilgang til at skabe tryghed og ro for borgere i stressede situationer. Disse teknikker
                  er effektive til at håndtere konflikter, minimere stress og støtte borgerens behov for opmærksomhed og
                  forståelse.
                </p>
              </div>
            </div>

            {/* Afledningsteknikker Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src="/security-personnel-3.jpeg" alt="Afledningsteknikker" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Afledningsteknikker</h3>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Afledning er en teknik, hvor vi ændrer borgerens fokus fra noget, der skaber frustration eller
                      uro, til noget mere neutralt eller positivt. Dette hjælper med at bryde negative tanker og
                      følelser og giver borgeren et mentalt pusterum. For eksempel kan vi tilbyde en ny aktivitet, som
                      en kort gåtur eller et simpelt spil, for at få borgeren til at fokusere på noget andet og skabe en
                      pause fra det, der forårsager ubehag.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spejlningsteknikker Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                  <Image src="/security-personnel-4.jpeg" alt="Spejlningsteknikker" fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Spejlningsteknikker</h3>
                  <div className="text-slate-600 space-y-4">
                    <p>
                      Spejling handler om at efterligne borgerens handlinger, bevægelser eller følelser som en måde at
                      skabe forbindelse og forståelse. Dette er især nyttigt i situationer, hvor kommunikationen kan
                      være vanskelig, for eksempel hos borgere med kognitive udfordringer. Spejling kan være så simpelt
                      som at kopiere en borger, der folder et tæppe sammen, eller som at reagere på et vink ved at vinke
                      tilbage. Denne teknik skaber en følelse af samhørighed og hjælper borgeren med at finde ro i
                      situationen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Anvendelse Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Anvendelse af afledning og spejling</h3>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Vi bruger afledning og spejling for at forhindre, at en situation udvikler sig til en konflikt. Når
                    vi ser, at en borger bliver ophidset eller frustreret, kan vi hurtigt aflede deres opmærksomhed ved
                    at tilbyde en ny aktivitet, som giver dem mulighed for at finde ro. Samtidig kan spejling hjælpe med
                    at skabe en følelse af tryghed og forståelse ved at vise borgeren, at vi er opmærksomme på deres
                    behov.
                  </p>
                </div>
              </div>
            </div>

            {/* Hvordan arbejder vi Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Hvordan arbejder vi med afledning og spejlning hos Tryghedspersonale.dk?
                </h3>
                <div className="text-slate-600 space-y-4">
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
    </main>
  )
}
