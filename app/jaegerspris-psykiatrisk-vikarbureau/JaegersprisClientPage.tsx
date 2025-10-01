"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Users, Heart, Shield, Star, CheckCircle, ArrowRight } from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function JaegersprisClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroSlides = [
    {
      image: "/jaegerspris-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Jægerspris",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionelle vikarer til psykiatriske institutioner, plejehjem og botilbud i Jægerspris og Frederikssund Kommune",
      cta: "Ring 41 44 33 33",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfarne Psykiatri-Vikarer",
      subtitle: "Kvalificeret personale til komplekse situationer",
      description: "Vores vikarer har specialiseret erfaring inden for psykiatri, demens og udadreagerende adfærd",
      cta: "Kontakt os i dag",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "24/7 Akut Indsats",
      subtitle: "Hurtig respons når I har brug for det",
      description: "Vi leverer kvalificerede vikarer med kort varsel til akutte situationer i Jægerspris området",
      cta: "Akut assistance",
    },
  ]

  const services = [
    {
      title: "Plejehjem & Ældrecentre",
      description: "Specialiserede vikarer til demens og psykiatriske udfordringer på plejehjem i Jægerspris og omegn",
      icon: Heart,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Botilbud & Institutioner",
      description: "Erfarne vikarer til botilbud og psykiatriske institutioner med fokus på komplekse borgerforløb",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Akut Stabilisering",
      description: "Hurtig indsats ved kriser og udadreagerende adfærd med specialuddannede vikarer",
      icon: Star,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Psykiatriske Afdelinger",
      description: "Kvalificeret personale til psykiatriske afdelinger og specialiserede behandlingsenheder",
      icon: Users,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Socialpædagogisk Støtte",
      description: "Uddannede socialpædagoger til borgere med komplekse sociale og psykiske udfordringer",
      icon: CheckCircle,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <EnhancedHeroSlider slides={heroSlides} />
      </section>

      {/* Red Banner Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Har I brug for psykiatriske vikarer i Jægerspris?</h2>
              <p className="text-lg opacity-90">Ring til os nu og få kvalificerede vikarer med kort varsel</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3 bg-transparent"
              >
                Send besked
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Serviceområder i Jægerspris</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer specialiserede vikarer til alle typer af institutioner og behandlingssteder i Frederikssund
              Kommune
            </p>
          </div>
          <CityCarousel services={services} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Velkommen til Psykiatrisk Vikarbureau Jægerspris
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Som en del af Tryghedspersonale.dk tilbyder vi specialiserede psykiatriske vikarer til institutioner i
                  Jægerspris og hele Frederikssund Kommune. Vores erfarne team forstår de unikke udfordringer ved at
                  arbejde med borgere med komplekse psykiske og sociale behov.
                </p>
                <p>
                  Vi har opbygget et stærkt netværk af kvalificerede vikarer, der er specialiseret i at håndtere
                  udadreagerende adfærd, demens, og andre psykiatriske tilstande. Vores personale er ikke kun fagligt
                  kompetente, men også empatiske og forstående i deres tilgang til borgerne.
                </p>
                <p>
                  Med base i Jægerspris dækker vi hele Frederikssund Kommune og tilstødende områder, hvilket sikrer
                  hurtig respons og lokal forankring i vores service.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Kontakt os i dag
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Psykiatrisk vikarbureau team i Jægerspris"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">År med erfaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Vores mission - menneskelighed i fokus"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <Heart className="h-8 w-8 text-red-600 mb-2" />
                <div className="font-semibold">Menneskelighed</div>
                <div className="text-sm text-gray-600">i centrum</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vores Mission i Jægerspris</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Hos Psykiatrisk Vikarbureau Jægerspris er vores mission at levere den højeste kvalitet af psykiatrisk
                  pleje gennem specialiserede vikarer, der forstår og respekterer hver enkelt borgers individuelle behov
                  og udfordringer.
                </p>
                <p>
                  Vi tror på, at alle borgere fortjener at blive behandlet med værdighed, respekt og forståelse, uanset
                  deres psykiske tilstand eller adfærdsmæssige udfordringer. Vores tilgang er baseret på evidensbaseret
                  praksis kombineret med en dyb menneskelig forståelse.
                </p>
                <p>
                  Gennem kontinuerlig uddannelse og udvikling sikrer vi, at vores vikarer altid er opdaterede på de
                  nyeste metoder og tilgange inden for psykiatrisk pleje og socialpædagogik.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Tilgængelighed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Kvalificerede</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aflastning ved Forflytning og Komplekse Situationer
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Når borgere skal flyttes mellem institutioner eller der opstår komplekse situationer, kan det være en
                  stressende oplevelse for alle involverede. Vores specialiserede vikarer i Jægerspris er trænet i at
                  håndtere disse følsomme overgange med stor omhu og professionalisme.
                </p>
                <p>
                  Vi forstår, at forflytninger kan udløse angst, forvirring og udadreagerende adfærd hos borgere med
                  psykiske udfordringer. Derfor arbejder vi med en struktureret tilgang, der minimerer stress og
                  maksimerer tryghed gennem hele processen.
                </p>
                <p>
                  Vores erfaring fra Frederikssund Kommune og omliggende områder gør os i stand til at tilbyde
                  skræddersyede løsninger, der tager højde for både borgerens individuelle behov og institutionens
                  specifikke krav.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Specialiseret i komplekse forflytninger</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Erfaring med udadreagerende adfærd</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Tæt samarbejde med faste personale</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Aflastning ved forflytning"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokalt Psykiatrisk Vikarbureau i Jægerspris
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Jægerspris og hele Frederikssund Kommune med specialiserede psykiatriske vikarer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores Dækningsområder</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Primære områder:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Jægerspris</li>
                    <li>• Frederikssund</li>
                    <li>• Skibby</li>
                    <li>• Slangerup</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Udvidede områder:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ølstykke</li>
                    <li>• Stenløse</li>
                    <li>• Gundsø</li>
                    <li>• Roskilde (udvalgte)</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Som lokalt forankret vikarbureau kender vi de specifikke udfordringer og behov i Frederikssund Kommune.
                Vores vikarer har erfaring fra lokale institutioner og forstår de kulturelle og sociale forhold i
                området.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <MapPin className="mr-2 h-5 w-5" />
                Se alle dækningsområder
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Dækningsområder for psykiatrisk vikarbureau"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <MapPin className="h-8 w-8 mb-2" />
                <div className="font-semibold">Lokal forankring</div>
                <div className="text-sm opacity-90">i Jægerspris</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menneskelighed i Fokus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vores tilgang til psykiatrisk pleje er baseret på empati, forståelse og respekt for det enkelte menneske
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Empati & Forståelse</h3>
                <p className="text-gray-600">
                  Vi møder hver borger med ægte empati og søger at forstå deres individuelle situation og behov.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Tryghed & Sikkerhed</h3>
                <p className="text-gray-600">
                  Vi skaber et trygt miljø hvor borgere kan føle sig sikre og accepterede, uanset deres udfordringer.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Kvalitet & Professionalisme</h3>
                <p className="text-gray-600">
                  Vores høje faglige standarder sikrer, at borgere modtager den bedst mulige pleje og støtte.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vores Værdier i Praksis</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I Jægerspris og omegn arbejder vi efter en værdibaseret tilgang, hvor menneskelighed ikke bare er et
                    ord, men en levende del af alt, hvad vi gør. Vores vikarer er trænet i at se personen bag diagnosen
                    og at møde hver enkelt borger med respekt og værdighed.
                  </p>
                  <p>
                    Vi forstår, at arbejdet med psykiatriske borgere kræver særlige kompetencer og en stor portion
                    tålmodighed og forståelse. Derfor investerer vi kontinuerligt i uddannelse og udvikling af vores
                    personale.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Menneskelighed i fokus"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-600 text-white mb-4">Akut Service</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Akut Indsats i Jægerspris og Omegn</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Når der opstår akutte situationer på institutioner i Jægerspris området, er vi klar til at levere
                  hurtig og professionel assistance. Vores erfarne vikarer kan være på stedet inden for kort tid og er
                  trænet i at håndtere kriser og udfordrende situationer.
                </p>
                <p>
                  Vi forstår, at akutte situationer kan være stressende for både borgere, pårørende og personale. Derfor
                  arbejder vi med en rolig og struktureret tilgang, der hjælper med at genoprette ro og stabilitet
                  hurtigst muligt.
                </p>
                <p>
                  Vores 24/7 beredskab sikrer, at I altid kan få den hjælp, I har brug for, når I har brug for det - dag
                  som nat, weekender og helligdage.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <span className="font-semibold">Hurtig respons - ofte inden for 2 timer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span className="font-semibold">Specialiseret i krisehåndtering</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <span className="font-semibold">24/7 tilgængelighed</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                  <Phone className="mr-2 h-6 w-6" />
                  Ring 41 44 33 33 - Akut
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Akut indsats team"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <Clock className="h-8 w-8 mb-2" />
                <div className="text-xl font-bold">24/7</div>
                <div className="text-sm">Akut beredskab</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt Psykiatrisk Vikarbureau Jægerspris</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vi er klar til at hjælpe jer med kvalificerede psykiatriske vikarer. Kontakt os i dag for en uforpligtende
              samtale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ring til os</h3>
                <p className="text-gray-300 mb-4">Hurtig kontakt for akutte behov</p>
                <Button className="bg-red-600 hover:bg-red-700 w-full">41 44 33 33</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Besøg os</h3>
                <p className="text-gray-300 mb-4">Lokalt kontor i Jægerspris</p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700 w-full bg-transparent"
                >
                  Se adresse
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Åbningstider</h3>
                <p className="text-gray-300 mb-4">24/7 for akutte situationer</p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700 w-full bg-transparent"
                >
                  Se alle tider
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
              <ArrowRight className="mr-2 h-6 w-6" />
              Send besked til os
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Psykiatrisk Vikarbureau Jægerspris - Søgeord</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Lokale områder:</h3>
              <p>
                Jægerspris vikarer, Frederikssund psykiatri, Skibby vikarbureau, Slangerup personale, Ølstykke vikarer,
                Stenløse psykiatrisk hjælp
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Specialer:</h3>
              <p>
                Psykiatriske vikarer, demens specialister, udadreagerende adfærd, komplekse borgerforløb, akut
                stabilisering, socialpædagogisk støtte
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Institutioner:</h3>
              <p>
                Plejehjem vikarer, botilbud personale, psykiatriske afdelinger, krisecentre, asylcentre, behandlingshjem
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Services:</h3>
              <p>
                24/7 beredskab, akut indsats, forflytningshjælp, krisehåndtering, specialiseret pleje, kvalificeret
                personale
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
