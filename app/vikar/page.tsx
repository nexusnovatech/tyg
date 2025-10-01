import Link from "next/link"
import Image from "next/image"
import { Users, CheckCircle, Mail, Calendar, Award, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Vikar hos Tryghedspersonale.dk | Bliv en del af vores team",
  description:
    "Bliv vikar hos Tryghedspersonale.dk. Vi søger engagerede vikarer, der kan håndtere komplekse situationer med empati og professionalisme.",
}

export default function JobPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=n0gzl')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">Vikar</Badge>
          <h1 className="text-5xl font-bold mb-6 max-w-3xl">Bliv vikar i et team, der skaber tryghed hver dag</h1>
          <p className="text-xl max-w-3xl mb-8 text-slate-200">
            Hos Tryghedspersonale.dk søger vi engagerede vikarer, der har den rette faglige tilgang og kan håndtere
            komplekse situationer med empati, respekt og professionalisme.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="mailto:kontakt@tryghedspersonale.dk">
                <Mail className="mr-2 h-5 w-5" /> Ansøg nu
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-slate-900 hover:bg-slate-200 border-white"
            >
              <Link href="/job/bliv-vikar">
                <CheckCircle className="mr-2 h-5 w-5" /> Bliv vikar
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">5+ år</div>
              <div className="text-slate-600">Erfaring i branchen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">100+</div>
              <div className="text-slate-600">Tilfredse kunder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">50+</div>
              <div className="text-slate-600">Dedikerede medarbejdere</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">4</div>
              <div className="text-slate-600">Regioner i Danmark</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Vikar muligheder</Badge>
            <h2 className="text-3xl font-bold mb-4">Bliv vikar hos os</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi tilbyder vikarstillinger, der passer til forskellige livssituationer og karriereønsker. Som vikar hos
              os får du fleksible arbejdstider og mulighed for at vælge de vagter, der passer til din hverdag.
            </p>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 relative">
                <Image
                  src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
                  alt="Tryghedspersonale.dk medarbejder - Professionel vikarstilling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white text-slate-900 hover:bg-slate-100">Vikararbejde</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Vikarstilling</h3>
                <p className="text-slate-600 mb-6">
                  Som vikar hos Tryghedspersonale.dk får du fleksible arbejdstider og mulighed for at vælge de vagter,
                  der passer til din hverdag. Perfekt for dig, der ønsker frihed og variation i dit arbejdsliv.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-slate-700">Fleksible arbejdstider og valgfrie vagter</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-slate-700">Attraktiv timeløn med tillæg</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-slate-700">Varierende arbejdsopgaver og miljøer</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/job/bliv-vikar">
                    <Calendar className="mr-2 h-5 w-5" /> Læs mere om vikarjob
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Om jobbet</Badge>
              <h2 className="text-3xl font-bold mb-6">Hvad vi leder efter i dig</h2>
              <p className="text-slate-600 mb-6">
                Vi søger personer, der har både menneskelige og faglige kvaliteter, og som ønsker at arbejde i et miljø,
                hvor deres kompetencer kan gøre en forskel. Du skal have erfaring med at håndtere borgere, der udviser
                udadreagerende adfærd eller har komplekse psykiske behov.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Arbejdsopgaverne kan blandt andet omfatte:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Sikring af ro og tryghed</h4>
                      <p className="text-slate-600">
                        I komplekse situationer, hvor du sørger for, at personalet kan udføre deres opgaver uden
                        forstyrrelser.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Deeskalering af konflikter</h4>
                      <p className="text-slate-600">
                        Håndtering af udadreagerende adfærd med ro, empati og effektivitet.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Assistance ved udgange eller aktiviteter</h4>
                      <p className="text-slate-600">
                        Hvor du hjælper med at sikre, at alle involverede føler sig trygge og beskyttede.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Praktisk assistance</h4>
                      <p className="text-slate-600">
                        Med opgaver som madlavning, rengøring eller andre aktiviteter, uden at påtage dig pædagogiske
                        eller behandlingsmæssige opgaver.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="mailto:kontakt@tryghedspersonale.dk">
                  <Mail className="mr-2 h-5 w-5" /> Ansøg nu
                </Link>
              </Button>
            </div>

            <div>
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6">Krav til dig:</h3>
                <div className="grid gap-4">
                  <Card className="border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Erfaring med udadreagerende adfærd</h4>
                          <p className="text-slate-600">
                            Du har praktisk erfaring med at håndtere mennesker, der udviser udfordrende adfærd.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Mental og fysisk robusthed</h4>
                          <p className="text-slate-600">
                            Du kan bevare roen, tænke klart og handle hurtigt, når situationen kræver det.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Professionalisme og respekt</h4>
                          <p className="text-slate-600">
                            Du har en professionel tilgang til arbejdet med respekt for både beboere og kolleger.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Rene straffeattester</h4>
                          <p className="text-slate-600">Du skal have en ren straffeattest og en fri børneattest.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-600">
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Fleksibilitet og tilgængelighed</h4>
                          <p className="text-slate-600">
                            Du er fleksibel og villig til at arbejde i forskellige tidsrum efter behov.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Fordele</Badge>
            <h2 className="text-3xl font-bold mb-4">Vi tilbyder dig</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Som medarbejder hos Tryghedspersonale.dk får du en række fordele, der gør dit arbejdsliv både
              meningsfuldt, udviklende og fleksibelt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800 border-0 text-white">
              <CardContent className="p-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fleksible arbejdsforhold</h3>
                <p className="text-slate-300">
                  Du har mulighed for at vælge de vagter, der passer bedst til din livsstil og dine præferencer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-0 text-white">
              <CardContent className="p-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Oplæring og kurser</h3>
                <p className="text-slate-300">
                  Vi tilbyder relevant oplæring og kurser, så du kan få den nødvendige viden og de færdigheder, der
                  kræves.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-0 text-white">
              <CardContent className="p-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personlig udvikling</h3>
                <p className="text-slate-300">
                  Hos os får du mulighed for at udvikle dig både som menneske og fagperson gennem udfordrende opgaver.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-0 text-white">
              <CardContent className="p-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Støttende team</h3>
                <p className="text-slate-300">
                  Du bliver en del af et stærkt og erfarent team, der samarbejder om at sikre et trygt arbejdsmiljø.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Ansøgningsprocessen</Badge>
            <h2 className="text-3xl font-bold mb-4">Sådan bliver du en del af vores team</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vores ansøgningsproces er designet til at være enkel og effektiv, så vi hurtigt kan finde ud af, om vi er
              det rette match for hinanden.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Ansøgning</h3>
                <p className="text-slate-600">
                  Send din ansøgning og CV til vores HR-afdeling via e-mail eller vores online formular.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Screening</h3>
                <p className="text-slate-600">
                  Vi gennemgår din ansøgning og vurderer, om dine kvalifikationer matcher vores behov.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Samtale</h3>
                <p className="text-slate-600">
                  Udvalgte kandidater inviteres til en personlig samtale, hvor vi lærer hinanden bedre at kende.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Onboarding</h3>
                <p className="text-slate-600">
                  Efter ansættelse gennemgår du vores grundige introduktionsprogram og er klar til at starte.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Hvordan ansøger du?</h3>
                  <p className="text-slate-600 mb-6">
                    Er du klar til at tage udfordringen op og blive en vigtig del af vores team? Vi glæder os til at
                    høre fra dig og lære, hvordan du kan bidrage til at skabe trygge og stabile arbejdspladser.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <Mail className="h-6 w-6 text-red-600 mr-3" />
                      <h4 className="text-lg font-bold">Send din ansøgning til:</h4>
                    </div>
                    <p className="text-lg font-medium text-red-800 ml-9">hr@tryghedspersonale.dk</p>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    <strong>Vær opmærksom på</strong>, at vi kun kontakter de ansøgere, vi ønsker at gå videre med. Hvis
                    du ikke hører fra os indenfor 14 dage, betyder det, at vi har valgt at gå videre med andre
                    kandidater.
                  </p>
                  <div className="flex justify-center">
                    <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                      <Link href="/job/ansoeg">
                        <Mail className="mr-2 h-5 w-5" /> Send din ansøgning nu
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Ofte stillede spørgsmål</Badge>
            <h2 className="text-3xl font-bold mb-4">Har du spørgsmål?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Her finder du svar på nogle af de mest almindelige spørgsmål om at arbejde hos Tryghedspersonale.dk.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">Generelt</TabsTrigger>
                <TabsTrigger value="application">Ansøgning</TabsTrigger>
                <TabsTrigger value="work">Arbejdsforhold</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvilke typer stillinger tilbyder I?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi tilbyder både faste stillinger og vikarstillinger. Faste stillinger giver stabilitet og
                        forudsigelighed, mens vikarstillinger giver fleksibilitet og variation. Begge typer stillinger
                        indebærer arbejde med at skabe tryghed og sikkerhed i forskellige miljøer.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvilke kvalifikationer kræver I?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi lægger vægt på erfaring med udadreagerende adfærd, mental og fysisk robusthed,
                        professionalisme og respekt, samt rene straffeattester. Specifik uddannelse inden for sikkerhed,
                        pædagogik eller sundhed er en fordel, men ikke et krav.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvor i Danmark kan jeg arbejde?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi har opgaver i hele Danmark med afdelinger i Hovedstaden, Sjælland, Fyn og Jylland. Du kan
                        angive dine geografiske præferencer i din ansøgning, og vi vil forsøge at imødekomme dem.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="application">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvordan foregår ansøgningsprocessen?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Ansøgningsprocessen består af fire trin: 1) Du sender din ansøgning og CV, 2) Vi screener
                        ansøgninger, 3) Udvalgte kandidater inviteres til samtale, 4) Efter ansættelse gennemgår du
                        vores introduktionsprogram.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvad skal min ansøgning indeholde?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Din ansøgning bør indeholde dit CV med relevant erfaring og uddannelse, en kort motiveret
                        ansøgning, der beskriver, hvorfor du er interesseret i stillingen, samt information om din
                        tilgængelighed og præferencer for arbejdstider.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvor lang tid tager ansøgningsprocessen?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi bestræber os på at behandle ansøgninger inden for 14 dage. Hvis du ikke hører fra os inden
                        for denne periode, betyder det, at vi har valgt at gå videre med andre kandidater.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="work">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvilke arbejdstider kan jeg forvente?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi tilbyder både dag-, aften- og nattevagter. Faste medarbejdere har typisk et fast skema, mens
                        vikarer har mulighed for at vælge vagter efter deres præferencer og tilgængelighed.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvilken oplæring får jeg?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Alle nye medarbejdere gennemgår et grundigt introduktionsprogram, der omfatter oplæring i
                        konflikthåndtering, deeskalering og sikkerhedsprocedurer. Vi tilbyder også løbende kurser og
                        faglig udvikling.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Hvordan er lønnen og arbejdsvilkårene?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Vi tilbyder konkurrencedygtig løn med tillæg for aften-, nat- og weekendarbejde. Faste
                        medarbejdere har desuden adgang til pensionsordning og sundhedsforsikring. Alle medarbejdere har
                        gode muligheder for faglig og personlig udvikling.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Diversity */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mangfoldighed og ligebehandling</h2>
                  <p className="text-slate-600 mb-4">
                    Hos Tryghedspersonale.dk værdsætter vi mangfoldighed og ligebehandling. Vi modtager ansøgninger fra
                    alle – uanset etnicitet, religiøs overbevisning eller seksuel orientering. Vi er forpligtet til at
                    skabe et arbejdsmiljø, hvor alle behandles med respekt og værdighed.
                  </p>
                  <p className="text-slate-600">
                    Vi tror på, at forskellige perspektiver og baggrunde styrker vores team og gør os bedre i stand til
                    at forstå og hjælpe de mennesker, vi arbejder med. Derfor opfordrer vi alle kvalificerede kandidater
                    til at søge, uanset baggrund.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white text-red-800 hover:bg-slate-100">Bliv vikar</Badge>
              <h2 className="text-4xl font-bold mb-6">Er du vores næste vikar?</h2>
              <p className="text-xl mb-8">
                Hvis du brænder for at gøre en forskel og har de rette kompetencer, så ser vi frem til at høre fra dig.
                Som vikar hos os, kan vi sammen skabe tryghed og sikkerhed for dem, der har brug for det.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-red-700 bg-transparent"
                >
                  <Link href="/job/bliv-vikar">Bliv vikar</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?key=1lzxx" alt="Tryghedspersonale team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Bliv en del af et stærkt team</h3>
                <p className="text-white text-opacity-90">
                  Sammen skaber vi tryghed og sikkerhed for dem, der har brug for det.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
