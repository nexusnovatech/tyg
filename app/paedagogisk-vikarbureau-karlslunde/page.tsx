import Image from "next/image"
import { MapPin, Phone, Shield, Heart, BookOpen, ArrowRight, Check, Clock, Award } from "lucide-react"

export const metadata = {
  title:
    "Pædagogisk Vikarbureau i Karlslunde – Erfarne pædagogiske vikarer til bosteder og institutioner | Tryghedspersonale.dk",
  description:
    "Hos Tryghedspersonale.dk tilbyder vi kvalificerede pædagogiske vikarer i Karlslunde. Vi skaber tryghed og udvikling for voksne og unge med særlige behov – hver dag.",
}

export default function KarlslundePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-20 mix-blend-overlay"></div>
        <div className="grid md:grid-cols-2 items-center">
          <div className="px-8 py-28 md:py-36 md:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] md:pr-12 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/90 text-white backdrop-blur-sm mb-8 shadow-lg">
              <Shield className="h-5 w-5 mr-2" /> Pædagogisk Vikarbureau Karlslunde
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Kvalificerede pædagogiske vikarer i Karlslunde
            </h1>
            <div className="text-lg mb-10 text-white/90 leading-relaxed">
              <p className="mb-4">
                Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi erfarne pædagogiske vikarer, der er klar til at
                sikre både tryghed og udvikling for mennesker med særlige behov i <strong>Karlslunde</strong>.
              </p>
              <p>
                Vi skaber <strong>tryghed og udvikling</strong> for voksne og unge med særlige behov – hver dag.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+4541443333"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2 relative z-20"
              >
                <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
              </a>
              <a
                href="/afdelinger"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white bg-black/30 hover:bg-white/20 transition-all h-10 px-4 py-2 relative z-20"
              >
                <MapPin className="mr-2 h-5 w-5" /> Se vores afdelinger
              </a>
            </div>
          </div>
          <div className="hidden md:block relative h-full min-h-[650px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-HXzfnfRdubiHr8h1ZgCqYZ22iZPUb6.png"
              alt="Håndtering af udadreagerende, voldsomme og psykotiske borgere - Tryghedspersonale.dk"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8 bg-red-600 p-5 rounded-2xl shadow-xl z-20 text-white backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/80 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Pædagogisk støtte</p>
                  <p className="text-red-100 text-sm">Karlslunde og omegn</p>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Hero Image */}
          <div className="md:hidden relative mt-8 px-4">
            <div className="relative h-[200px] w-full">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full blur-3xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-HXzfnfRdubiHr8h1ZgCqYZ22iZPUb6.png"
                alt="Pædagogisk støtte i Karlslunde - Tryghedspersonale.dk"
                fill
                className="rounded-xl shadow-xl relative z-10 object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* Add a mobile-friendly inline version below the hero section for small screens */}
        <div className="md:hidden flex items-center justify-center bg-red-600/90 backdrop-blur-sm p-4 rounded-xl text-white mt-4 mb-2 mx-auto max-w-xs shadow-lg">
          <Clock className="h-5 w-5 text-white mr-2" />
          <p className="text-white font-medium">Pædagogisk støtte - Karlslunde og omegn</p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Erfarne pædagoger</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Specialiseret i særlige behov</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Fleksible løsninger</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Lokal tilstedeværelse</span>
            </div>
          </div>
        </div>
      </section>

      {/* Afdelinger Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Serviceområder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Vores specialiserede områder i Karlslunde
              </h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-center text-slate-600 max-w-3xl mx-auto">
                Vi arbejder på <strong>bosteder</strong>, <strong>plejehjem</strong> og i <strong>institutioner</strong>
                , hvor der er behov for både pædagogisk støtte og pleje. Vi ved, hvor vigtigt det er at skabe et trygt
                og udviklende miljø.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%202-dXQRQk1A7Vxb86iiIKDrRuw2ZFXQYU.png"
                    alt="Unge- og Børneområdet"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Unge- og Børneområdet</h3>
                <p className="text-sm text-slate-600">Specialiseret i udadreagerende adfærd</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%203-WEogw4iZxesGMZtW5VsyPW5ZgKisE5.png"
                    alt="Voksne- og Ældre Området"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Voksne- og Ældre Området</h3>
                <p className="text-sm text-slate-600">Specialiseret i udadreagerende adfærd</p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Vg6zCMY87gFFAyY5ZmplMxpZrGUKN.png"
                    alt="Psykiatrisk Vikarbureau"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Psykiatrisk Vikarbureau</h3>
                <p className="text-sm text-slate-600">Specialiseret i komplekse borgerforløb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
                <Image
                  src="/tryghedspersonale-natur.jpeg"
                  alt="Tryghedspersonale medarbejder i samtale - professionel pædagogisk støtte"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
                <Award className="h-4 w-4 mr-2" /> Om os
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hvorfor vælge Tryghedspersonale.dk i Karlslunde?</h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-slate-600 mb-6">
                Når du vælger <strong>Tryghedspersonale.dk</strong>, vælger du et pædagogisk vikarbureau, der lægger
                stor vægt på både kvalitet og menneskelige relationer. Vore vikarer er ikke kun kvalificerede, de er
                også dedikerede til at gøre en forskel.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Pædagoger med erfaring i særlige behov",
                  "Social- og sundhedsassistenter (SSA'er)",
                  "Specialister i adfærdsforstyrrelser",
                  "Ambulancebehandlere og politibetjente",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/om-os"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
              >
                Læs mere om os
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Shield className="h-4 w-4 mr-2" /> Vores ydelser
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hvordan gør vore vikarer en forskel i Karlslunde?</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              <strong>Vore vikarer gør en konkret forskel i borgernes liv.</strong> De er ikke bare tilstede, men
              engagerer sig aktivt i at skabe et positivt miljø, hvor borgerne kan udvikle sig og trives.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Empati og nærvær</h3>
                <p className="text-slate-600">
                  Vore vikarer møder borgerne med forståelse og respekt, hvilket er centralt i arbejdet med mennesker
                  med særlige behov. Deres nærvær hjælper med at opbygge tillid.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Struktur og tryghed</h3>
                <p className="text-slate-600">
                  Mange af de borgere, vi arbejder med, har brug for en stabil hverdag med forudsigelige rutiner. Vore
                  vikarer arbejder systematisk med at etablere og opretholde en fast struktur.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deeskalering af konflikter</h3>
                <p className="text-slate-600">
                  Konflikter og udfordrende adfærd er en naturlig del af arbejdet. Vore vikarer er eksperter i at
                  håndtere sådanne situationer på en rolig og professionel måde.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Individuel støtte</h3>
                <p className="text-slate-600">
                  Hver borger er unik og har forskellige behov. Vore vikarer tilpasser deres pædagogiske tilgang til den
                  enkeltes situation, så alle borgere får den støtte, de har brug for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enkeltmandsprojekt Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Award className="h-4 w-4 mr-2" /> Specialiseret service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fleksible løsninger til dine behov</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Uanset om du har brug for vikarer til kortere eller længere perioder, kan vi tilbyde en fleksibel løsning,
              der passer til dine specifikke behov. Vore vikarer arbejder tæt sammen med dit faste personale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Clock className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Akut vikarbistand</h3>
                  <p className="text-slate-600">
                    Hurtig udrykning ved akut behov for kvalificeret personale til at håndtere udfordrende situationer.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Shield className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Langvarig støtte</h3>
                  <p className="text-slate-600">
                    Kontinuerlig bemanding til institutioner med behov for specialiseret pædagogisk støtte over længere
                    perioder.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Specialiseret pleje</h3>
                  <p className="text-slate-600">
                    Målrettet støtte til borgere med komplekse behov, herunder demens, psykiatri og socialpædagogiske
                    udfordringer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fremgangsmåder Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <BookOpen className="h-4 w-4 mr-2" /> Vores tilgang
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professionel og menneskecentreret tilgang</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi bygger vores arbejde på stærke værdier og en dyb forståelse for de udfordringer, vores kunder står
              overfor. Vores mission er at skabe tryghed og sikkerhed i selv de mest udfordrende miljøer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Respekt</h3>
                  <p className="text-slate-600">
                    Vi respekterer altid både mennesker og arbejdsforhold, hvilket skaber et miljø med tillid og
                    samarbejde.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <BookOpen className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Faglighed</h3>
                  <p className="text-slate-600">
                    Vi leverer høj faglig standard i alt, hvad vi gør, og vores medarbejdere er uddannede og erfarne.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Shield className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ansvarlighed</h3>
                  <p className="text-slate-600">
                    Vi tager ansvar for at sikre et trygt og stabilt miljø for både beboere og medarbejdere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vikar Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
                <Award className="h-4 w-4 mr-2" /> Vores vikarer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Erfarne og dedikerede medarbejdere</h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-slate-600 mb-6">
                Vores team består af nøje udvalgte pædagogiske vikarer med omfattende erfaring inden for arbejdet med
                mennesker med særlige behov. De er specialuddannede i at håndtere udfordrende situationer med en rolig
                og professionel tilgang.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Specialuddannede i konflikthåndtering og deeskalering",
                  "Erfaring fra pædagogiske og psykiatriske miljøer",
                  "Fokus på individuel støtte og udvikling",
                  "Professionel og respektfuld tilgang til alle borgere",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/job"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
              >
                Bliv en del af teamet
              </a>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
                <Image
                  src="/tryghedspersonale-faellesrum.jpeg"
                  alt="Tryghedspersonale medarbejder i aktivitet med borger - professionel pædagogisk støtte"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psykiatrisk Vikarbureau intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Shield className="h-4 w-4 mr-2" /> Specialiseret service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pædagogisk støtte og tryghed med kvalificerede vikarer
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi erfarne pædagogiske vikarer, der er klar til at
              sikre både tryghed og udvikling for mennesker med særlige behov i Karlslunde. Vore vikarer arbejder på
              bosteder, plejehjem og i institutioner.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Vore specialer omfatter:</h3>
                  <ul className="space-y-3">
                    {[
                      "Pædagoger med erfaring i særlige behov",
                      "Social- og sundhedsassistenter (SSA'er)",
                      "Specialister i adfærdsforstyrrelser",
                      "Ambulancebehandlere med pædagogisk erfaring",
                      "Politibetjente med konflikthåndtering",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Vi tilbyder:</h3>
                  <ul className="space-y-3">
                    {[
                      "Akut vikarbistand ved behov",
                      "Langvarig bemanding til institutioner",
                      "Specialiseret støtte til komplekse borgere",
                      "Fleksible løsninger tilpasset dine behov",
                      "Kontinuitet og kvalitet i arbejdet",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviceområder Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <MapPin className="h-4 w-4 mr-2" /> Serviceområder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vi betjener alle typer institutioner</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vores erfarne vikarer arbejder på tværs af forskellige institutionstyper og tilbyder specialiseret støtte
              tilpasset hver enkelt institutions behov og borgernes specifikke udfordringer.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Plejehjem", desc: "Specialiseret pleje og omsorg" },
                { title: "Bosteder", desc: "Støtte til selvstændigt liv" },
                { title: "Asylcentre", desc: "Kulturel forståelse og støtte" },
                { title: "Botilbud", desc: "Individuel udvikling og tryghed" },
                { title: "Krisecentre", desc: "Akut støtte i svære situationer" },
                { title: "Psykiatri", desc: "Specialiseret psykiatrisk støtte" },
                { title: "Institutioner", desc: "Bred pædagogisk erfaring" },
                { title: "Specialområder", desc: "Tilpassede løsninger" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-slate-200 shadow-md hover:border-red-200 group hover:translate-y-[-5px]"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lokalt afsnit Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <MapPin className="h-4 w-4 mr-2" /> Lokal tilstedeværelse
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Karlslunde og omegn</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Med lokal tilstedeværelse i Karlslunde og omegn er vi klar til at hjælpe dig hurtigt og effektivt. Vores
              teams kender området og kan reagere prompte på dine behov for pædagogisk støtte.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Karlslunde</h3>
                  <p className="text-sm text-slate-600">Lokal ekspertise og hurtig respons</p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Omegn</h3>
                  <p className="text-sm text-slate-600">Bred dækning i lokalområdet</p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Akut service</h3>
                  <p className="text-sm text-slate-600">Hurtig udrykning ved behov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Tilgang Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Heart className="h-4 w-4 mr-2" /> Mission & Tilgang
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vores mission og tilgang</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi bygger vores arbejde på stærke værdier og en dyb forståelse for de udfordringer, vores kunder står
              overfor. Vores mission er at skabe tryghed og sikkerhed gennem professionel pædagogisk støtte.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Vores mission</h3>
                  <p className="text-slate-600 mb-6">
                    At skabe tryghed og udvikling for mennesker med særlige behov gennem kvalificeret pædagogisk støtte.
                    Vi arbejder for at give borgerne de bedste muligheder for at udvikle sig og trives i deres hverdag.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Skabe trygge rammer for udvikling",
                      "Støtte individuelle behov og mål",
                      "Fremme selvstændighed og livskvalitet",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-red-600">Vores tilgang</h3>
                  <p className="text-slate-600 mb-6">
                    Vi arbejder med en menneskecentreret tilgang, hvor respekt, faglighed og ansvarlighed er i centrum.
                    Vores vikarer er uddannede til at møde hver enkelt borger med forståelse og professionalisme.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Respektfuld og empatisk tilgang",
                      "Høj faglig standard og kompetence",
                      "Ansvarlig og pålidelig service",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midlertidig aflastning Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Clock className="h-4 w-4 mr-2" /> Midlertidig aflastning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Midlertidig aflastning og støtte</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Uanset om du har brug for hjælp til at afløse en kollega på grund af ferie, sygdom eller en længerevarende
              opgave, kan vi tilbyde den rette vikar til din institution. Vi sikrer kontinuitet og kvalitet.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Ferie og sygdom</h3>
                <p className="text-slate-600">
                  Hurtig erstatning for medarbejdere på ferie eller sygemeldt, så institutionen kan opretholde normal
                  drift.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Længerevarende opgaver</h3>
                <p className="text-slate-600">
                  Stabil bemanding til projekter eller særlige opgaver, der kræver kontinuerlig pædagogisk støtte over
                  tid.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-100 text-center group transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-3">Specialiserede behov</h3>
                <p className="text-slate-600">
                  Målrettet støtte til borgere med komplekse behov, der kræver særlig pædagogisk ekspertise og erfaring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalt vikarbureau & dækningsområder Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <MapPin className="h-4 w-4 mr-2" /> Dækningsområder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lokalt vikarbureau med bred dækning</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Som lokalt forankret vikarbureau i Karlslunde har vi dyb forståelse for områdets behov og udfordringer.
              Samtidig har vi bred dækning, så vi kan hjælpe institutioner i hele regionen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Primære dækningsområder</h3>
                  <ul className="space-y-3">
                    {[
                      "Karlslunde og nærmeste omegn",
                      "Greve og Køge kommuner",
                      "Ishøj og Vallensbæk",
                      "Brøndby og Hvidovre",
                      "Roskilde og omegn",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <MapPin className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">Udvidet service</h3>
                  <ul className="space-y-3">
                    {[
                      "Akut udrykning i hele Sjælland",
                      "Specialiserede opgaver landsdækkende",
                      "Konsulentbistand og rådgivning",
                      "Uddannelse og kompetenceudvikling",
                      "Kvalitetssikring og opfølgning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menneskelighed i fokus Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
                <Heart className="h-4 w-4 mr-2" /> Menneskelighed i fokus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Menneskelighed og empati i centrum</h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-slate-600 mb-6">
                Vore vikarer er professionelle, empatiske og dedikerede, og de arbejder for at gøre en positiv forskel
                for både borgerne og det øvrige personale. Menneskelighed er kernen i alt, hvad vi gør.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Empati og forståelse for borgernes situation",
                  "Respekt for individuelle behov og ønsker",
                  "Skabelse af trygge og udviklende miljøer",
                  "Støtte til både borgere og medarbejdere",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Heart className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/om-os"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
              >
                Læs mere om vores værdier
              </a>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
                <Image
                  src="/tryghedspersonale-natur.jpeg"
                  alt="Tryghedspersonale medarbejder i samtale - menneskelighed og empati i fokus"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialer Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Award className="h-4 w-4 mr-2" /> Specialer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vores specialområder</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi har specialiseret os inden for flere områder, hvor der kræves særlig ekspertise og erfaring. Vores
              vikarer er uddannede til at håndtere komplekse situationer med professionalisme.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Psykiatri", desc: "Specialiseret psykiatrisk støtte og behandling" },
                { title: "Demens", desc: "Omsorg og aktivering af demente borgere" },
                { title: "Socialpædagogik", desc: "Pædagogisk udvikling og støtte" },
                { title: "Akut stabilisering", desc: "Hurtig intervention i krisesituationer" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-slate-200 shadow-md hover:border-red-200 group hover:translate-y-[-5px]"
                >
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Akut indsats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Clock className="h-4 w-4 mr-2" /> Akut indsats
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Akut indsats når du har mest brug for det</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Når situationen kræver øjeblikkelig handling, er vi klar til at rykke ud med kvalificeret personale. Vores
              akutte indsats sikrer, at institutioner kan opretholde tryghed og stabilitet selv i pressede situationer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">24/7 beredskab</h3>
                  <p className="text-slate-600">
                    Vi er altid klar til at hjælpe, uanset tidspunkt på døgnet eller dag i ugen.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Hurtig respons</h3>
                  <p className="text-slate-600">
                    Vores erfarne vikarer kan være på stedet inden for kort tid efter dit opkald.
                  </p>
                </div>

                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Award className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Kvalificeret personale</h3>
                  <p className="text-slate-600">
                    Alle vores akutvikarer er erfarne og uddannede til at håndtere pressede situationer.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a
                  href="tel:+4541443333"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
                >
                  <Phone className="mr-2 h-5 w-5" /> Ring for akut hjælp: 41 44 33 33
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt / Call-to-actions Section */}
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold mb-6">Kontakt os for pædagogiske vikarer i Karlslunde</h2>
                <p className="text-xl mb-8 text-white/90">
                  Har du brug for kvalificerede pædagogiske vikarer i <strong>Karlslunde</strong>? Vi tilbyder erfarne
                  vikarer, der kan støtte både din institution og dine borgere med{" "}
                  <strong>akut og langvarig vikarbistand</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-100 shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
                  >
                    Kontakt os nu <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="tel:+4541443333"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white bg-black/30 hover:bg-white/20 transition-all h-10 px-4 py-2"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                  </a>
                </div>
              </div>

              <div className="md:col-span-2 hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <Image
                    src="/tryghedspersonale-faellesrum.jpeg"
                    alt="Tryghedspersonale medarbejder i aktivitet med borger - kontakt os for pædagogisk støtte"
                    width={350}
                    height={350}
                    className="rounded-2xl shadow-2xl relative z-10 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section - Hidden visually but available for search engines */}
      <section className="sr-only">
        <h2>Relaterede søgeord</h2>
        <ul>
          <li>Pædagogisk vikarbureau Karlslunde</li>
          <li>Pædagogiske vikarer Karlslunde</li>
          <li>Vikarbureau Karlslunde</li>
          <li>Pædagoger til bosteder Karlslunde</li>
          <li>SSA vikarer Karlslunde</li>
          <li>Specialiseret bemanding Karlslunde</li>
          <li>Udadreagerende adfærd Karlslunde</li>
          <li>Plejehjem vikarer Karlslunde</li>
          <li>Institutioner vikarer Karlslunde</li>
          <li>Særlige behov støtte Karlslunde</li>
          <li>Pædagogisk støtte Karlslunde</li>
          <li>Konflikthåndtering Karlslunde</li>
          <li>Deeskalering Karlslunde</li>
          <li>Adfærdsforstyrrelser Karlslunde</li>
          <li>Ambulancebehandlere pædagogik Karlslunde</li>
          <li>Politibetjente pædagogik Karlslunde</li>
          <li>Akut vikarbistand Karlslunde</li>
          <li>Langvarig bemanding Karlslunde</li>
          <li>Tryghedspersonale Karlslunde</li>
          <li>Kvalificerede vikarer Karlslunde</li>
          <li>Professionel støtte Karlslunde</li>
          <li>Empati og nærvær Karlslunde</li>
          <li>Struktur og tryghed Karlslunde</li>
          <li>Individuel støtte Karlslunde</li>
          <li>Pædagogisk vikarservice Karlslunde</li>
          <li>Specialopgaver pædagogik Karlslunde</li>
          <li>Bosteder bemanding Karlslunde</li>
          <li>Asylcentre vikarer Karlslunde</li>
          <li>Krisecentre støtte Karlslunde</li>
          <li>Psykiatrisk støtte Karlslunde</li>
        </ul>
      </section>
    </div>
  )
}
