import Link from "next/link"
import { MapPin, Phone, ArrowRight, Users, Shield, Heart, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AfdelingerMap } from "@/components/afdelinger-map"

export const metadata = {
  title: "Vores afdelinger | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk har lokale afdelinger i hele Danmark - Sjælland, Fyn, Jylland og Hovedstadsområdet. Vi er klar til at rykke hurtigt ud med kompetent personale.",
}

export default function AfdelingerPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl font-bold mb-6">Vores afdelinger – Tryghed i hele Danmark</h1>
          <p className="text-xl max-w-3xl">
            Hos <strong>Tryghedspersonale.dk</strong> er vi landsdækkende med lokale afdelinger og beredskab klar til
            indsats døgnet rundt. Uanset om du har behov for{" "}
            <strong>fastvagter, sikkerhedsassistenter eller konflikthåndtering ved udadreagerende adfærd</strong>, har
            vi personale tæt på dig – hurtigt og professionelt.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Landsdækkende – lokal forankring</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi dækker hele landet med base i følgende regioner, hvilket sikrer hurtig responstid og lokalkendskab
              uanset hvor i Danmark du har brug for vores assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-3 mr-5 mt-1">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Hovedstadsområdet</h3>
                    <p className="text-slate-600 mb-5">
                      Vi har stærk tilstedeværelse i København og omegn, hvor vi blandt andet støtter{" "}
                      <strong>psykiatriske enheder, botilbud og plejehjem</strong>. Vores team i Hovedstaden er
                      specialiseret i håndtering af <strong>psykotiske borgere og komplekse konfliktsituationer</strong>
                      .
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="/afdelinger/hovedstaden" className="flex items-center">
                        Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-3 mr-5 mt-1">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sjælland</h3>
                    <p className="text-slate-600 mb-5">
                      På resten af Sjælland leverer vi støtte til både kommunale og private aktører. Vi tilbyder{" "}
                      <strong>fastvagt og lav-arousal konflikthåndtering</strong> i akutte og planlagte forløb.
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="/afdelinger/sjaelland" className="flex items-center">
                        Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-3 mr-5 mt-1">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Fyn</h3>
                    <p className="text-slate-600 mb-5">
                      Vores afdeling på Fyn arbejder tæt sammen med institutioner, bosteder og asylcentre. Her har vi
                      erfaring med borgere med <strong>voldsomme reaktioner og udadreagerende adfærd</strong>, hvor
                      sikkerhed og faglig indsigt er afgørende.
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="/afdelinger/fyn" className="flex items-center">
                        Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-3 mr-5 mt-1">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Jylland</h3>
                    <p className="text-slate-600 mb-5">
                      I Jylland er vi bredt repræsenteret fra Nordjylland til Sydjylland. Vi håndterer både{" "}
                      <strong>akutte vagter og længerevarende enkeltmandsprojekter</strong> og har stor ekspertise i{" "}
                      <strong>deeskalering og relationsarbejde</strong>.
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="/afdelinger/jylland" className="flex items-center">
                        Se detaljer <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section - REPLACED WITH INTERACTIVE MAP */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Find os i hele Danmark</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vi har lokale teams klar til hurtig udrykning i hele landet. Uanset hvor du befinder dig, kan vi hurtigt
              være fremme med kompetent personale.
            </p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-xl shadow-md">
            {/* Interactive Map Component */}
            <div className="w-full min-h-[600px] bg-slate-100 rounded-lg">
              <AfdelingerMap />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/kontakt" className="flex items-center">
                Kontakt din lokale afdeling <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Derfor skal du vælge Tryghedspersonale.dk som din samarbejdspartner
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Hos <strong>Tryghedspersonale.dk</strong> er det ikke bare en opgave – det er en mission. Vi tror på, at
              alle mennesker – uanset livssituation – har ret til <strong>respekt, ro og værdighed</strong>. Derfor er
              vores indsats altid båret af faglighed, medmenneskelighed og ægte engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Borgeren først – altid</h3>
                <p className="text-slate-600">
                  Hos os er det ikke problemet, men <strong>personen bag adfærden</strong>, der er i fokus. Vi arbejder
                  med lav-arousal, nærvær og relation, fordi tryghed ikke tvinges frem – den{" "}
                  <strong>skabes i mødet</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Vores personale brænder for det, de gør</h3>
                <p className="text-slate-600">
                  Vores medarbejdere er ikke blot vagter – de er <strong>mennesker med passion</strong> for at gøre en
                  forskel. Mange har baggrund inden for{" "}
                  <strong>pædagogik, socialt arbejde, psykiatri eller krisehåndtering</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Tryghed i kaos – med ro, faglighed og overblik</h3>
                <p className="text-slate-600">
                  Når omgivelserne er præget af <strong>uro, udadreagerende adfærd eller psykisk mistrivsel</strong>,
                  træder vi til med <strong>struktur, stabilitet og nærvær</strong>. Vi står fast – ikke med magt, men
                  med menneskelighed og metode.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">4. Landsdækkende, men lokalt forankret</h3>
                <p className="text-slate-600">
                  Vi har medarbejdere i hele landet og er klar til at handle hurtigt. Uanset om du har brug for en
                  fastvagt til en psykiatrisk afdeling, en støtteperson til et bosted eller konflikthåndtering i en akut
                  situation, står vi klar – <strong>med mennesker, der vil noget med deres arbejde</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">5. Fleksible løsninger – tilpasset virkeligheden</h3>
                <p className="text-slate-600">
                  Vi ved, at ingen opgave er ens. Derfor lytter vi, tilpasser os og samarbejder tæt med personale,
                  ledelse og pårørende. Vores mål er ikke bare at "være der" – men at{" "}
                  <strong>bidrage til forandring og trivsel</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Byer vi dækker</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Vores landsdækkende netværk sikrer, at vi kan levere hurtig og professionel assistance i alle større byer
              og omkringliggende områder.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "København",
              "Aarhus",
              "Odense",
              "Aalborg",
              "Esbjerg",
              "Randers",
              "Kolding",
              "Horsens",
              "Vejle",
              "Roskilde",
              "Herning",
              "Helsingør",
              "Silkeborg",
              "Næstved",
              "Fredericia",
              "Viborg",
            ].map((city) => (
              <div
                key={city}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-bold">{city}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 mt-8">...og mange flere byer over hele Danmark</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-50 p-10 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">Fordele ved at vælge Tryghedspersonale.dk</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hurtig responstid</h3>
                  <p className="text-slate-600 text-sm">
                    Vi kan være fremme inden for kort tid takket være vores lokale teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Specialiseret personale</h3>
                  <p className="text-slate-600 text-sm">
                    Vores medarbejdere er uddannede og erfarne i at håndtere komplekse situationer.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Døgnbemanding</h3>
                  <p className="text-slate-600 text-sm">
                    Vi er tilgængelige 24/7, 365 dage om året for at sikre kontinuerlig støtte.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Skræddersyede løsninger</h3>
                  <p className="text-slate-600 text-sm">
                    Vi tilpasser vores service til dine specifikke behov og udfordringer.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Faglig ekspertise</h3>
                  <p className="text-slate-600 text-sm">
                    Vi har specialviden inden for psykiatri, konflikthåndtering og deeskalering.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Tæt samarbejde</h3>
                  <p className="text-slate-600 text-sm">
                    Vi arbejder tæt sammen med dit personale for at sikre en sammenhængende indsats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Tag kontakt – og lad os skabe tryghed sammen</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Har du brug for kompetent fastvagt, støttepersonale eller konflikthåndtering? Vi er klar til at hjælpe dig
            døgnet rundt – uanset opgavens karakter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-900 hover:bg-gray-100 font-black white-button-bg shadow-lg"
            >
              <Link href="/kontakt" className="flex items-center">
                Kontakt os nu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-4 border-white text-white hover:bg-white/20 font-black text-outline"
            >
              <a href="tel:41443333" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
