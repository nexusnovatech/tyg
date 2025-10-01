import Image from "next/image"
import { Users, CheckCircle, Mail, Calendar, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Bliv Vikar | Tryghedsmedarbejder | Tryghedspersonale.dk",
  description:
    "Bliv en del af vores team som tryghedsmedarbejder hos Tryghedspersonale.dk. Vi søger vikarer til bosteder og institutioner, der kan sikre ro og støtte i komplekse situationer.",
}

export default function BlivVikarPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Very Simple */}
      <section className="relative bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="mb-3 bg-red-600 hover:bg-red-700">Vikarjob</Badge>
          <h1 className="text-4xl font-bold mb-4">Bliv tryghedsmedarbejder hos os</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Hos Tryghedspersonale.dk skaber vi tryghed og stabilitet i udfordrende arbejdsmiljøer. Vi søger dedikerede
            medarbejdere til vores team.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <a href="#ansog">
                <Mail className="mr-2 h-5 w-5" /> Ansøg nu
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-black/30 hover:bg-white hover:text-slate-900"
            >
              <a href="tel:41443333">Ring 41 44 33 33</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Hvad vi leder efter i dig</h2>
              <p className="text-slate-700 mb-4">
                Vi søger personer, der har både menneskelige og faglige kvaliteter, og som ønsker at arbejde i et miljø,
                hvor deres kompetencer kan gøre en forskel. Du skal have erfaring med at håndtere borgere, der udviser{" "}
                <strong>udadreagerende adfærd</strong> eller har <strong>komplekse psykiske behov</strong>.
              </p>
              <p className="text-slate-700 mb-4">
                Det er vigtigt, at du har en dyb respekt for mennesker med <strong>demens</strong>,{" "}
                <strong>psykiske lidelser</strong>
                og komplekse <strong>diagnoser</strong> – og forstår betydningen af at møde dem med empati og
                forståelse.
              </p>
              <div className="mt-6">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a href="#krav">Se alle krav</a>
                </Button>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/tryghedspersonale-forside-medarbejder.jpeg"
                alt="Tryghedspersonale medarbejder spiller billard med borger - aktiviteter som vikar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Tasks */}
      <section className="py-16 bg-gray-50" id="opgaver">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Dine arbejdsopgaver</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sikring af ro og tryghed</h3>
                    <p className="text-slate-600">
                      I komplekse situationer sørger du for, at personalet kan udføre deres opgaver uden forstyrrelser.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deeskalering af konflikter</h3>
                    <p className="text-slate-600">
                      Håndtering af udadreagerende adfærd med ro, empati og effektivitet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assistance ved aktiviteter</h3>
                    <p className="text-slate-600">
                      Hjælp med at sikre, at alle involverede føler sig trygge og beskyttede.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Praktisk assistance</h3>
                    <p className="text-slate-600">
                      Hjælp med opgaver som madlavning, rengøring eller andre aktiviteter.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/tryghedspersonale-desk-planning.jpeg"
                alt="Tryghedspersonale medarbejder dokumenterer aktiviteter og observationer"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Vi tilbyder dig</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fleksible arbejdsforhold</h3>
                    <p className="text-slate-600">
                      Vælg de vagter, der passer bedst til din livsstil og dine præferencer.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Oplæring og kurser</h3>
                    <p className="text-slate-600">
                      Vi tilbyder relevant oplæring og kurser til at håndtere komplekse situationer.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Støtte fra et dedikeret team</h3>
                    <p className="text-slate-600">Du bliver en del af et stærkt og erfarent team.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50" id="krav">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Krav til dig</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Erfaring med udadreagerende adfærd",
                description: "Du har praktisk erfaring med at håndtere mennesker, der udviser udfordrende adfærd.",
              },
              {
                title: "Mental og fysisk robusthed",
                description: "Du kan træffe beslutninger under pres og er i stand til at bevare roen.",
              },
              {
                title: "Professionalisme og respekt",
                description: "Du har en professionel tilgang til arbejdet med respekt for både beboere og kolleger.",
              },
              {
                title: "Rene straffeattester",
                description: "Du har en ren straffeattest og en fri børneattest.",
              },
              {
                title: "Fleksibilitet",
                description: "Du er villig til at arbejde i forskellige tidsrum efter behov.",
              },
              {
                title: "Ingen rygning i arbejdstiden",
                description: "Vi opretholder en høj standard for professionel adfærd.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Dit arbejdsmiljø</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/tryghedspersonale-eskort.jpeg"
                alt="Tryghedsmedarbejdere der eskorterer en person i en bygning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-slate-700 mb-6">
                Som tryghedsmedarbejder hos os vil du arbejde i forskellige miljøer, fra bosteder og institutioner til
                psykiatriske afdelinger. Du vil være en vigtig støtte for både beboere og personale i udfordrende
                situationer.
              </p>
              <p className="text-slate-700 mb-6">
                Vores medarbejdere er specialiserede i at skabe tryghed og ro, og du vil blive grundigt oplært i vores
                metoder og tilgange. Du vil altid arbejde sammen med erfarne kolleger, der kan støtte dig i dit arbejde.
              </p>
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg mt-6">
                <Image
                  src="/tryghedspersonale-faellesrum.jpeg"
                  alt="Tryghedsmedarbejder i et fællesområde på en institution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 bg-white" id="ansog">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Ansøg nu</h2>
            <p className="text-slate-700 mb-8">
              Er du klar til at tage udfordringen op og blive en del af vores team? Vi glæder os til at høre fra dig.
            </p>

            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <Mail className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Send din ansøgning til:</h3>
                  <p className="text-xl font-medium text-red-800 mb-6">hr@tryghedspersonale.dk</p>

                  <div className="text-left w-full mb-6">
                    <h4 className="font-bold text-lg mb-3">Din ansøgning bør indeholde:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                        <span>Dit CV med relevant erfaring</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                        <span>En kort motiveret ansøgning</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                        <span>Information om din tilgængelighed</span>
                      </li>
                    </ul>
                  </div>

                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 w-full">
                    <a href="mailto:hr@tryghedspersonale.dk">
                      <Mail className="mr-2 h-5 w-5" /> Send din ansøgning
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-slate-500">
              Vi kontakter kun ansøgere, vi ønsker at gå videre med. Hos Tryghedspersonale.dk værdsætter vi
              mangfoldighed og ligebehandling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Er du vores næste vikar?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Hvis du brænder for at gøre en forskel og har de rette kompetencer, så ser vi frem til at høre fra dig.
          </p>
          <Button asChild size="lg" className="bg-white text-red-900 hover:bg-gray-100">
            <a href="tel:41443333">Ring 41 44 33 33</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
