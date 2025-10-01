import Image from "next/image"
import { MapPin, Phone, Shield, Heart, BookOpen, ArrowRight, Check, Clock, Award } from "lucide-react"

export const metadata = {
  title:
    "Psykiatrisk Vikarbureau – Specialiseret Bemanding til Plejehjem, Bosteder og Psykiatrien | Udadreagerende adfærd | Voldsomme & udfordrende miljøer | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder professionel og specialiseret bemanding til psykiatrien, plejehjem, bosteder og asylcentre. Vores sikkerhedsassistenter er trænet i konflikthåndtering, deeskalering og psykiatrisk støtte. Få akut hjælp i hele Danmark.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-20 mix-blend-overlay"></div>
        <div className="grid md:grid-cols-2 items-center">
          <div className="px-8 py-28 md:py-36 md:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] md:pr-12 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/90 text-white backdrop-blur-sm mb-8 shadow-lg">
              <Shield className="h-5 w-5 mr-2" /> Professionelt Psykiatrisk Vikarbureau
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Specialiseret bemanding til psykiatrien i hele Danmark
            </h1>
            <div className="text-lg mb-10 text-white/90 leading-relaxed">
              <p className="mb-4">
                Hos <strong>Tryghedspersonale.dk</strong> leverer vi specialiseret bemanding og fastvagt til plejehjem,
                bosteder, psykiatriske afdelinger og asylcentre.
              </p>
              <p>
                Vi er eksperter i at håndtere borgere med <strong>udadreagerende adfærd</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:+4541443333"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2 relative z-20"
              >
                <Phone className="mr-2 h-5 w-5" /> Akut hjælp: 41 44 33 33
              </a>
              <a
                href="/afdelinger"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white bg-black/30 hover:bg-white/20 transition-all h-10 px-4 py-2 relative z-20"
              >
                <MapPin className="mr-2 h-5 w-5" /> Se vores lokale afdelinger
              </a>
            </div>
          </div>
          <div className="hidden md:block relative h-full min-h-[650px]">
            <Image
              src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
              alt="Tryghedspersonale medarbejder med logo på ryggen i park miljø - professionel støtte"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute bottom-8 left-8 bg-red-600 p-5 rounded-2xl shadow-xl z-20 text-white backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/80 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Akut udrykning</p>
                  <p className="text-red-100 text-sm">Hele Danmark, 24/7</p>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Hero Image */}
          <div className="md:hidden relative mt-8 px-4">
            <div className="relative h-[200px] w-full">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full blur-3xl"></div>
              <Image
                src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
                alt="Tryghedspersonale medarbejder med logo på ryggen - professionel støtte"
                fill
                className="rounded-xl shadow-xl relative z-10 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
        {/* Add a mobile-friendly inline version below the hero section for small screens */}
        <div className="md:hidden flex items-center justify-center bg-red-600/90 backdrop-blur-sm p-4 rounded-xl text-white mt-4 mb-2 mx-auto max-w-xs shadow-lg">
          <Clock className="h-5 w-5 text-white mr-2" />
          <p className="text-white font-medium">Akut udrykning - Hele Danmark, 24/7</p>
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
              <span className="text-slate-700 font-medium">Professionel bemanding</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Landsdækkende service</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Akut udrykning 24/7</span>
            </div>
            <div className="flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-slate-700 font-medium">Specialiseret i psykiatri</span>
            </div>
          </div>
        </div>
      </section>

      {/* Akut hjælp Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-4">
                <Clock className="h-4 w-4 mr-2" /> Akut hjælp
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Akut hjælp – tilgængelig i hele Danmark
              </h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-center text-slate-600 max-w-3xl mx-auto">
                Uanset hvor i Danmark du har brug for støtte – om det er i <strong>Hovedstaden</strong>,{" "}
                <strong>Sjælland</strong>, <strong>Fyn</strong> eller <strong>Jylland</strong> – er vi klar til at rykke
                hurtigt ud med kompetent personale. Har du akut behov for vagt, støtte eller specialiseret assistance,
                er vi kun ét opkald væk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { region: "Sjælland", desc: "Hurtig udrykning" },
                  { region: "Fyn", desc: "Lokal tilstedeværelse" },
                  { region: "Jylland", desc: "Bred dækning" },
                  { region: "Hovedstaden", desc: "Hurtig responstid" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center group transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                      <MapPin className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-bold mb-1">{item.region}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a
                  href="/afdelinger"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
                >
                  Se vores lokale afdelinger <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section 1 */}
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
                  alt="Tryghedspersonale medarbejder i samtale - professionel støtte til borgere"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
                <Award className="h-4 w-4 mr-2" /> Professionel bemanding
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Erfarne sikkerhedsassistenter</h2>
              <div className="h-1 w-24 bg-red-600 mb-6"></div>
              <p className="text-slate-600 mb-6">
                Vores team består af nøje udvalgte sikkerhedsassistenter med omfattende erfaring inden for psykiatrien.
                De er specialuddannede i at håndtere udfordrende situationer med en rolig og professionel tilgang, der
                skaber tryghed for både personale og beboere.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Specialuddannede i konflikthåndtering",
                  "Erfaring fra psykiatriske miljøer",
                  "Fokus på deeskalering og forebyggelse",
                  "Professionel og respektfuld tilgang",
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

      {/* Values Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Shield className="h-4 w-4 mr-2" /> Om os
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Om Tryghedspersonale.dk</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi bygger vores arbejde på stærke værdier og en dyb forståelse for de udfordringer, vores kunder står
              overfor. Vores mission er at skabe tryghed og sikkerhed i selv de mest udfordrende miljøer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
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

          <div className="mt-12 text-center space-y-4">
            <a
              href="/om-os"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
            >
              Læs mere om os <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="/om-os"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
              >
                Se vores organisation
              </a>
              <a
                href="/job"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md transition-all duration-300 hover:translate-y-[-2px] h-10 px-4 py-2"
              >
                Søg job hos os
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <MapPin className="h-4 w-4 mr-2" /> Landsdækkende
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vi dækker hele Danmark</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Med lokal tilstedeværelse og national rækkevidde er vi klar til at hjælpe dig, uanset hvor i landet du
              befinder dig. Vores teams er strategisk placeret for at sikre hurtig respons og effektiv service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { region: "Sjælland", desc: "Komplet dækning" },
                  { region: "Fyn", desc: "Lokal ekspertise" },
                  { region: "Jylland", desc: "Omfattende netværk" },
                  { region: "Hovedstaden", desc: "Hurtig responstid" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={`/afdelinger/${item.region.toLowerCase()}`}
                    className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-slate-200 shadow-md hover:border-red-200 group hover:translate-y-[-5px]"
                  >
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                      <MapPin className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors duration-300">
                      {item.region}
                    </h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold mb-6">Kontakt os – hurtig og professionel hjælp</h2>
                <p className="text-xl mb-8 text-white/90">
                  Har du brug for <strong>kompetent fastvagt</strong>, støttepersonale eller konflikthåndtering? Vi er
                  klar til at hjælpe dig døgnet rundt – uanset opgavens karakter.
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
                    alt="Tryghedspersonale medarbejder spiller billard med borger - professionel støtte i aktiviteter"
                    width={350}
                    height={350}
                    className="rounded-2xl shadow-2xl relative z-10 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 350px"
                    quality={80}
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
          <li>Psykiatrisk vikarbureau</li>
          <li>Fastvagt psykiatrien</li>
          <li>Bemanding til psykiatrisk afdeling</li>
          <li>Sikkerhedsassistenter til plejehjem</li>
          <li>Udadreagerende adfærd</li>
          <li>Konflikthåndtering i psykiatrien</li>
          <li>Deeskalering i psykiatrien</li>
          <li>Støtte til psykotiske patienter</li>
          <li>Voldsomme tilstande psykiatri</li>
          <li>Specialiseret bemanding til bosteder</li>
          <li>Akut vagt til plejehjem</li>
          <li>Sikkerhedspersonale til asylcentre</li>
          <li>Psykiatrisk støtte og fastvagt</li>
          <li>Håndtering af psykotisk adfærd</li>
          <li>Psykiatrisk vagtordning</li>
          <li>Sikkerhed og ro i psykiatrien</li>
          <li>Tryghedspersonale til institutioner</li>
          <li>Bemanding til bosteder og asylcentre</li>
          <li>Kompetent fastvagt til psykiatrien</li>
          <li>Støtte til borgere med udadreagerende adfærd</li>
          <li>Psykiatrisk vikar</li>
          <li>Specialopgaver psykiatrisk vikar</li>
          <li>Lav-arousal tilgang til konflikthåndtering</li>
          <li>Professionel bemanding i psykiatriske miljøer</li>
          <li>Sikkerhedsassistenter til specialiserede opgaver</li>
          <li>Akut psykiatrisk støtte</li>
          <li>Bemanding til psykiatriske miljøer</li>
          <li>Tryghedspersonale.dk psykiatrisk vikar</li>
          <li>Vikar i psykiatrien Danmark</li>
          <li>Håndtering af voldsomme adfærdsmønstre</li>
        </ul>
      </section>
    </div>
  )
}
