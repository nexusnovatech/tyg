import Link from "next/link"
import Image from "next/image"
import { Shield, Heart, BookOpen, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Om Tryghedspersonale.dk | Vores værdier og mission",
  description:
    "Lær mere om Tryghedspersonale.dk, vores værdier, mission og hvordan vi arbejder for at skabe tryghed og sikkerhed i psykiatrien, på plejehjem og bosteder.",
}

export default function OmOsPage() {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Om Tryghedspersonale.dk</h1>
            <p className="text-xl mb-8 text-slate-200 max-w-3xl">
              Vi er eksperter i at skabe tryghed og sikkerhed i arbejdet med udadreagerende, psykotiske og voldsomme
              borgere gennem professionel bemanding og specialiseret støtte.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-os" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hvem er Tryghedspersonale.dk?</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Tryghedspersonale.dk er et specialiseret psykiatrisk vikarbureau, der skaber tryghed og sikkerhed i
                  arbejdet med udadreagerende, psykotiske og voldsomme borgere. Vi er eksperter i at levere
                  professionelt og kompetent personale til psykiatrien, hvor der er behov for håndtering af komplekse og
                  udfordrende situationer.
                </p>
                <p>
                  Vores medarbejdere er trænede i at sikre både patienter og personale, og de har erfaring med at
                  arbejde i psykiatriske afdelinger, bosteder og andre relevante institutioner.
                </p>
                <p>
                  Vores service spænder bredt og inkluderer alt fra akutvikarer til fast personale, der er trænet i
                  konflikthåndtering, de-eskaleringsteknikker og psykiatriske risikovurderinger. Vi tilbyder fleksible
                  løsninger til både offentlige og private institutioner og sikrer, at vores personale er rustet til at
                  håndtere de særlige udfordringer, der kan opstå i forbindelse med psykotiske og voldelige episoder.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tryghedspersonale-forside-medarbejder.jpeg"
                alt="Tryghedspersonale medarbejder hjælper en ældre beboer i køkkenet"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="vaerdier" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vores værdier</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
            Hos Tryghedspersonale.dk bygger vi vores arbejde på tre grundlæggende værdier, der skaber fundamentet for
            vores indsats i både psykiatrien, på bosteder og plejehjem. Vi er dedikerede til at sikre tryghed og respekt
            i alle situationer og miljøer, hvor vores personale træder til.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Empati</h3>
              <div className="prose">
                <p>
                  Vi forstår, at det at arbejde med udadreagerende, psykotiske eller udfordrende borgere kræver en
                  særlig form for opmærksomhed og forståelse. Derfor sætter vi os i andres sted og arbejder med respekt
                  og medfølelse.
                </p>
                <p>
                  Empati er nøgleordet i vores tilgang til både patienter og beboere, og vi ser på den enkelte som et
                  helt menneske med unikke behov og udfordringer.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kompetence</h3>
              <div className="prose">
                <p>
                  Vi sørger for, at vores personale er professionelt uddannet og har den nødvendige erfaring til at
                  håndtere en bred vifte af situationer. Uanset om det drejer sig om psykiatriske afdelinger, bosteder
                  eller plejehjem, er vi i stand til at tilbyde kompetente og erfarne vikarer.
                </p>
                <p>
                  Vi investerer i løbende træning for at sikre, at vores personale er på forkant med de nyeste metoder
                  og teknikker indenfor konflikthåndtering og pleje.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Respekt</h3>
              <div className="prose">
                <p>
                  Vi mener, at respekt er grundlaget for et godt arbejdsmiljø og for relationen til både borgere og
                  kolleger. Hos Tryghedspersonale.dk arbejder vi altid med respekt for individets behov, grænser og
                  værdighed.
                </p>
                <p>
                  Vi sikrer, at alle – både ansatte og beboere – føler sig set og anerkendt. Vi tror på, at respekt i
                  det daglige skaber et trygt og harmonisk miljø for alle, vi arbejder med.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team in Action Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vores team i aktion</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
            Hos Tryghedspersonale.dk er vores medarbejdere vores vigtigste ressource. De skaber tryghed og sikkerhed i
            selv de mest udfordrende situationer.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/tryghedspersonale-park-samtale.jpeg"
                  alt="Tryghedsmedarbejder tager sig tid til en samtale med borger på en bænk i parken - personlig støtte i naturlige omgivelser"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professionel tilstedeværelse</h3>
                <p className="text-slate-600">
                  Vores medarbejdere er synlige og tilgængelige, hvilket skaber tryghed i alle miljøer - både indendørs
                  og udendørs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/tryghedspersonale-samtale-udendoers.jpeg"
                  alt="Tryghedspersonale medarbejdere der følger en borger - sikker ledsagelse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sikker ledsagelse</h3>
                <p className="text-slate-600">
                  Vi sikrer tryg og værdig ledsagelse af borgere i situationer, hvor der er behov for ekstra støtte og
                  sikkerhed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/tryghedspersonale-aktivitet.jpeg"
                  alt="Tryghedspersonale medarbejder udfylder dokumentation - grundig opfølgning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Støtte i hverdagen</h3>
                <p className="text-slate-600">
                  Vi deltager aktivt i hverdagsaktiviteter og skaber trygge rammer for sociale interaktioner og
                  fritidsaktiviteter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Til samarbejdspartnere</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              Hos <strong>Tryghedspersonale.dk</strong> er vi din <strong>specialiserede samarbejdspartner</strong>{" "}
              inden for bemanding af bosteder og institutioner. Vi forstår, at arbejdet med mennesker med komplekse
              behov – uanset om det drejer sig om udviklingshæmning, psykiatriske udfordringer eller udadreagerende
              adfærd – kræver både faglig ekspertise og menneskelig forståelse.
            </p>
            <p>
              Vi er ikke bare et vikarbureau – vi er din partner, der sikrer tryghed, stabilitet og faglig kvalitet i
              hverdagen. Vi hjælper bosteder, specialinstitutioner og døgntilbud med{" "}
              <strong>akut bemandingshjælp, ferieafløsning og langsigtede vikarordninger</strong>.
            </p>
            <p>
              Uanset om situationen er planlagt eller akut, kan du stole på, at vi leverer vikarer med den rette
              kompetence og erfaring til at håndtere de udfordringer, der opstår i arbejdet med mennesker, der har
              særlige behov.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Vi er din partner i tryghed</h3>
            <div className="prose prose-lg max-w-3xl mx-auto">
              <p>
                Hos Tryghedspersonale.dk får du adgang til et netværk af{" "}
                <strong>professionelle fastvagter, tryghedsmedarbejdere og specialiserede vikarer</strong>, der har
                erfaring med at håndtere de udfordringer, der kan opstå i miljøer med udadreagerende adfærd og psykiske
                belastninger.
              </p>
              <p>
                Vi sammensætter vikarhold, der passer præcist til opgaven – både fagligt og personligt – og vi sikrer,
                at vores vikarer hurtigt kan indgå i eksisterende teams uden at forstyrre den daglige drift.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Tryghedsmedarbejdere</h3>
              <p className="text-slate-600">
                Vore tryghedsmedarbejdere er særligt velegnede i miljøer med høj kompleksitet og risiko – f.eks. ved
                nattevagter, i skærmede enheder, eller når der er behov for at skabe ro i pressede situationer med
                udadreagerende eller grænseoverskridende borgere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Fastvagter</h3>
              <p className="text-slate-600">
                Vore fastvagter skaber et stabilt og trygt miljø, når situationer kræver ekstra overvågning og støtte.
                De er erfarne i at håndtere både akutte og langvarige situationer, hvor der er risiko for udadreagerende
                adfærd.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Enkeltmandsprojekter</h3>
              <p className="text-slate-600">
                Vi har stor erfaring med <strong>enkeltmandsprojekter</strong>, hvor en borger kræver intensiv én-til-én
                støtte. Vore medarbejdere arbejder målrettet og struktureret for at sikre, at borgerens behov bliver
                mødt med respekt og forståelse.
              </p>
              <div className="mt-4">
                <Link
                  href="/enkeltmandstilbud-udadreagerende-voldsomme-psykotiske-borgere"
                  className="text-red-600 hover:underline"
                >
                  Læs mere om Enkeltmandsprojekt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skræddersyede løsninger til din institution</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              Vi ved, at hver institution har sine unikke behov. Derfor tilbyder vi{" "}
              <strong>skræddersyede vikarordninger</strong>, der er tilpasset jeres konkrete situation og målgruppe.
              Uanset om du har brug for akut hjælp, ferieafløsning eller længerevarende vikarordninger, står vi klar til
              at levere løsninger, der fungerer i praksis.
            </p>
            <p>Vore vikarer har erfaring med både almene og komplekse udfordringer, herunder borgere med:</p>
            <ul>
              <li>Udadreagerende adfærd og affektgennembrud</li>
              <li>Psykiske lidelser og stress</li>
              <li>Misbrugsproblematikker</li>
              <li>Sociale og emotionelle vanskeligheder</li>
            </ul>
            <p>Eksempler på opgaver, vi dækker:</p>
            <ul>
              <li>
                <strong>Skærmningsopgaver:</strong> For at sikre ro og tryghed på bosteder og institutioner.
              </li>
              <li>
                <strong>Enkeltmandsprojekter:</strong> Målrettet støtte til borgere med særlige behov.
              </li>
              <li>
                <strong>Dækning af ferie og sygdom:</strong> Støtte i perioder med personalemangel.
              </li>
              <li>
                <strong>Akut vikarhjælp:</strong> Til opgaver, der kræver hurtigt respons og løsninger.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Faglig sparring og tæt samarbejde</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              Når du samarbejder med os, får du mere end blot vikarer – du får en partner, der er engageret i at skabe
              løsninger, der fungerer i praksis. Vi tilbyder løbende <strong>faglig sparring</strong>, så vi sikrer, at
              vores vikarer matcher din institution både fagligt og personligt.
            </p>
            <p>
              Vores mål er at sikre stabilitet, ro og en høj kvalitet i arbejdet, som skaber et trygt miljø for både
              beboere og personale.
            </p>
            <p>Vi sørger for, at vores vikarer:</p>
            <ul>
              <li>Matcher stedets faglige tilgang og værdier</li>
              <li>Har forståelse for borgernes behov</li>
              <li>Arbejder loyalt og professionelt i alle situationer</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-lg mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Derfor skal du samarbejde med os</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="font-bold">Erfaring og ekspertise:</span>
                  <p className="text-slate-600">
                    Vi leverer vikarer med dokumenteret erfaring fra bosteder og institutioner.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="font-bold">Fleksible løsninger:</span>
                  <p className="text-slate-600">Vi tilpasser vikarordningerne efter jeres behov og krav.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="font-bold">Tryghed og sikkerhed:</span>
                  <p className="text-slate-600">
                    Vore vikarer skaber stabilitet og tryghed – både for beboere og personalet.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="font-bold">Faglig sparring og opfølgning:</span>
                  <p className="text-slate-600">
                    Vi følger op og sikrer et godt og stabilt match mellem jeres behov og vores vikarer.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <span className="font-bold">Hurtig dækning:</span>
                  <p className="text-slate-600">Vi dækker akutte behov hurtigt, så jeres daglige drift ikke lider.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Din dedikerede samarbejdspartner</h2>
            <p className="text-xl mb-8">
              Hos <strong>Tryghedspersonale.dk</strong> er vi mere end et vikarbureau. Vi er en partner, der forstår
              vigtigheden af tryghed, stabilitet og høj faglig kvalitet på bosteder og institutioner. Vores vikarer
              arbejder målrettet for at sikre, at både beboere og personale kan føle sig trygge og støttede i deres
              hverdag.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Phone className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ring til os</h3>
                <a href="tel:41443333" className="text-2xl font-bold text-white hover:underline">
                  41 44 33 33
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Mail className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Send en e-mail</h3>
                <a href="mailto:kontakt@tryghedspersonale.dk" className="text-lg font-bold text-white hover:underline">
                  kontakt@tryghedspersonale.dk
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <MapPin className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Kontaktformular</h3>
                <Link href="/kontakt" className="text-lg font-bold text-white hover:underline">
                  Gå til kontaktside →
                </Link>
              </div>
            </div>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/kontakt">Kontakt os i dag</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
