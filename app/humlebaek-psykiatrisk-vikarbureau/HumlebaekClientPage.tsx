"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MapPin,
  Clock,
  Users,
  Heart,
  Shield,
  CheckCircle,
  Star,
  Zap,
  UserCheck,
  Building,
  Home,
  Activity,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HumlebaekClientPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const heroSlides = [
    {
      image: "/humlebaek-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Humlebæk",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionel psykiatrisk vikardækning i Humlebæk og Fredensborg Kommune med fokus på kvalitet og kontinuitet.",
      ctaText: "Ring 41 44 33 33",
      ctaAction: () => window.open("tel:41443333", "_self"),
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfarne Psykiatriske Vikarer",
      subtitle: "Døgndækning i Humlebæk og omegn",
      description:
        "Vores specialiserede team sikrer kontinuerlig og professionel pleje til borgere med komplekse behov.",
      ctaText: "Kontakt os nu",
      ctaAction: () => window.open("tel:41443333", "_self"),
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Akut Indsats og Stabilisering",
      subtitle: "24/7 beredskab i Fredensborg Kommune",
      description:
        "Hurtig respons og professionel håndtering af akutte situationer med fokus på borgerens sikkerhed og trivsel.",
      ctaText: "Akut assistance",
      ctaAction: () => window.open("tel:41443333", "_self"),
    },
  ]

  const services = [
    {
      icon: <Activity className="h-8 w-8 text-red-600" />,
      title: "Psykiatrisk Pleje",
      description: "Specialiseret pleje til borgere med psykiatriske diagnoser og komplekse behov i Humlebæk området.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Demenspleje",
      description: "Professionel omsorg og støtte til borgere med demens og deres pårørende i Fredensborg Kommune.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Akut Stabilisering",
      description: "Hurtig og professionel intervention ved akutte kriser og ustabile situationer.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Socialpædagogik",
      description: "Pædagogisk støtte og vejledning til borgere med særlige sociale og psykiske udfordringer.",
    },
    {
      icon: <Building className="h-8 w-8 text-red-600" />,
      title: "Institutionspleje",
      description: "Vikardækning til plejehjem, botilbud og andre institutioner i Humlebæk og omegn.",
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
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold">Akut behov for psykiatriske vikarer i Humlebæk?</h2>
              <p className="text-red-100">Vi er klar 24/7 - Ring nu for øjeblikkelig assistance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50 font-semibold"
                onClick={() => window.open("tel:41443333", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-red-600 font-semibold"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Specialområder i Humlebæk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder professionel vikardækning inden for psykiatri og specialpleje i Humlebæk og Fredensborg
              Kommune
            </p>
          </div>
          <CityCarousel items={services} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Velkommen til Psykiatrisk Vikarbureau Humlebæk
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Som en del af Tryghedspersonale.dk tilbyder vi specialiseret psykiatrisk vikardækning i Humlebæk og hele
                Fredensborg Kommune. Vores erfarne team af psykiatriske vikarer er uddannet til at håndtere komplekse
                borgerforløb med den højeste grad af professionalisme og empati.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi forstår de unikke udfordringer, der opstår i psykiatrisk pleje, og vores vikarer er specialiseret i
                at arbejde med borgere med forskellige psykiatriske diagnoser, demens og udadreagerende adfærd. Vores
                mål er at sikre kontinuitet i plejen og skabe trygge rammer for både borgere og personale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button size="lg" variant="outline">
                  Læs mere om os
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Psykiatrisk team i Humlebæk"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Omsorgfuld pleje i Humlebæk"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vores Mission i Humlebæk</h2>
              <p className="text-lg text-gray-600 mb-6">
                At levere den højeste kvalitet af psykiatrisk vikardækning i Humlebæk og Fredensborg Kommune. Vi tror
                på, at hver borger fortjener respektfuld, professionel og empatisk pleje, uanset deres udfordringer.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialiseret Ekspertise</h3>
                    <p className="text-gray-600">
                      Vores vikarer har omfattende erfaring med psykiatriske tilstande og komplekse borgerforløb.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lokal Tilknytning</h3>
                    <p className="text-gray-600">
                      Vi kender Humlebæk og Fredensborg Kommune og forstår de lokale behov og udfordringer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Beredskab</h3>
                    <p className="text-gray-600">
                      Vi er altid klar til at hjælpe, når der opstår akutte situationer eller behov for ekstra støtte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aflastning ved Forflytning i Humlebæk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Når borgere skal flyttes mellem institutioner eller hjem, sikrer vi en tryg og professionel overgang
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hjemmebesøg</h3>
                <p className="text-gray-600">Professionel støtte og pleje i borgerens eget hjem i Humlebæk og omegn.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Institutionsflytning</h3>
                <p className="text-gray-600">Tryg ledsagelse og støtte ved flytning mellem plejehjem og botilbud.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Akut Aflastning</h3>
                <p className="text-gray-600">
                  Øjeblikkelig hjælp ved kriser og ustabile situationer i Fredensborg Kommune.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lokalt Psykiatrisk Vikarbureau i Humlebæk
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Humlebæk og hele Fredensborg Kommune med specialiseret psykiatrisk vikardækning
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores Dækningsområde</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Humlebæk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Fredensborg</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Helsingør</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Hørsholm</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Kokkedal</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Nivå</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Som lokalt forankret vikarbureau kender vi de særlige behov og udfordringer i Humlebæk og Fredensborg
                Kommune. Vores vikarer har erfaring med de lokale institutioner og kan hurtigt tilpasse sig forskellige
                arbejdsmiljøer.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Kontakt os i dag
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Dækningsområde Humlebæk"
                className="rounded-lg shadow-lg w-full"
              />
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
              I Humlebæk prioriterer vi den menneskelige dimension i al vores psykiatriske pleje
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empati</h3>
              <p className="text-gray-600">Vi møder hver borger med forståelse og medfølelse</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tryghed</h3>
              <p className="text-gray-600">Vi skaber sikre rammer for borgere og personale</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kvalitet</h3>
              <p className="text-gray-600">Vi leverer altid den højeste standard af pleje</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Respekt</h3>
              <p className="text-gray-600">Vi behandler alle med værdighed og respekt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Akut Indsats i Humlebæk</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Når der opstår akutte situationer, er vi klar til at hjælpe øjeblikkeligt
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Hurtig Respons</h3>
              <p className="text-red-100">Vi kan være på stedet i Humlebæk inden for kort tid</p>
            </div>
            <div className="text-center">
              <UserCheck className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Erfarne Vikarer</h3>
              <p className="text-red-100">Specialiserede i akutte psykiatriske situationer</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Hotline</h3>
              <p className="text-red-100">Ring 41 44 33 33 - vi svarer altid</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-red-600 border-white hover:bg-red-50 font-semibold text-lg px-8 py-3"
              onClick={() => window.open("tel:41443333", "_self")}
            >
              <Phone className="mr-2 h-6 w-6" />
              Ring Nu - 41 44 33 33
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontakt Psykiatrisk Vikarbureau Humlebæk
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er klar til at hjælpe dig med psykiatrisk vikardækning i Humlebæk og Fredensborg Kommune
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Få et tilbud i dag</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ring til os</h4>
                    <p className="text-gray-600">41 44 33 33 - Døgnåbent</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Vores område</h4>
                    <p className="text-gray-600">Humlebæk og Fredensborg Kommune</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Åbningstider</h4>
                    <p className="text-gray-600">24/7 - Altid klar til at hjælpe</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Hvorfor vælge os i Humlebæk?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Specialiseret i psykiatrisk pleje og komplekse borgerforløb</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Lokalt kendskab til Humlebæk og Fredensborg Kommune</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Erfarne vikarer med relevant uddannelse og certificering</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">24/7 beredskab og hurtig responstid</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Fokus på kontinuitet og kvalitet i plejen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Søgeord:</strong> Psykiatrisk vikarbureau Humlebæk, vikarer psykiatri Fredensborg Kommune,
              demenspleje Humlebæk, akut stabilisering, psykiatriske vikarer Helsingør, komplekse borgerforløb,
              udadreagerende adfærd, socialpædagogik Humlebæk, institutionspleje Fredensborg, 24/7 psykiatrisk
              beredskab, professionel vikardækning, Tryghedspersonale Humlebæk, psykiatrisk hjemmepleje, botilbud
              vikarer, plejehjem vikarer Fredensborg Kommune
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
