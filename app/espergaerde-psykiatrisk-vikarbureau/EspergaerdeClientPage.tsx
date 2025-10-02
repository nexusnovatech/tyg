"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Heart,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
  Target,
  Zap,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Header from "@/components/header"
import Footer from "@/components/header"

export default function EspergaerdeClientPage() {
  const [activeService, setActiveService] = useState(0)

  const heroSlides = [
    {
      image: "/espergaerde-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Espergærde",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description: "Professionelle vikarer til psykiatriske institutioner, plejehjem og botilbud i Espergærde og omegn",
      cta: "Ring 41 44 33 33",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Kvalificerede Vikarer til Espergærde",
      subtitle: "Døgndækning og akut indsats",
      description:
        "Vi leverer erfarne vikarer med specialiseret uddannelse inden for psykiatri og komplekse borgerforløb",
      cta: "Kontakt os i dag",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Menneskelighed i Fokus",
      subtitle: "Professionel omsorg i Espergærde",
      description: "Vores vikarer kombinerer faglig ekspertise med empati og forståelse for borgernes behov",
      cta: "Læs mere om os",
    },
  ]

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Psykiatriske Afdelinger",
      description:
        "Specialiserede vikarer til akutpsykiatri, retspsykiatri og ambulante teams i Espergærde og Helsingør Kommune",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Plejehjem & Botilbud",
      description: "Erfarne vikarer til demensafdelinger, beskyttede boliger og specialiserede botilbud",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Krisecentre",
      description: "Kvalificerede vikarer med erfaring i krisehåndtering og traumebehandling",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Akut Indsats",
      description: "Døgndækning med mulighed for akut udsendelse af vikarer inden for 2 timer",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Komplekse Borgerforløb",
      description: "Specialiseret i borgere med udadreagerende adfærd, dobbeltdiagnoser og særlige behov",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <EnhancedHeroSlider slides={heroSlides} />

      {/* Red Banner Section */}
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold">Har du brug for vikarer til Espergærde?</h2>
              <p className="text-red-100">Vi leverer kvalificerede vikarer døgnet rundt</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Serviceområder i Espergærde</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer specialiserede vikarer til alle typer af institutioner i Espergærde og omliggende områder
            </p>
          </div>

          <CityCarousel services={services} activeService={activeService} setActiveService={setActiveService} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Velkommen til Psykiatrisk Vikarbureau Espergærde
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Som det førende psykiatriske vikarbureau i Espergærde og Helsingør Kommune leverer vi specialiserede
                  vikarer til institutioner, der arbejder med komplekse borgerforløb og psykiatriske udfordringer.
                </p>
                <p>
                  Vores erfarne team af vikarer er uddannet til at håndtere udfordrende situationer med professionalisme
                  og empati. Vi forstår de unikke behov i Espergærde-området og tilpasser vores services derefter.
                </p>
                <p>
                  Med døgndækning og mulighed for akut indsats sikrer vi, at institutioner i Espergærde altid har adgang
                  til kvalificeret personale, når de har brug for det mest.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button size="lg" variant="outline">
                  Læs mere om vores services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Professionelt sundhedsteam i Espergærde"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Døgndækning</div>
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
                alt="Omsorgfuld sundhedsarbejder med patient i Espergærde"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-red-600" />
                  <div>
                    <div className="font-bold text-gray-900">Certificeret</div>
                    <div className="text-sm text-gray-600">Kvalitetssikret</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vores Mission i Espergærde</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Vi arbejder for at skabe tryghed og stabilitet for både borgere og institutioner i Espergærde gennem
                  levering af højt kvalificerede vikarer med specialiseret erfaring.
                </p>
                <p>
                  Vores tilgang bygger på respekt, professionalisme og en dyb forståelse for de komplekse udfordringer,
                  som institutioner i Espergærde står overfor dagligt.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">150+</div>
                  <div className="text-gray-600">Kvalificerede vikarer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">98%</div>
                  <div className="text-gray-600">Kundetilfredshed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aflastning ved Forflytning i Espergærde
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialiseret støtte til institutioner i Espergærde ved personaleomlægninger og forflytninger
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Planlagt Aflastning</h3>
                <p className="text-gray-600">
                  Vi hjælper institutioner i Espergærde med at planlægge personaleomlægninger og sikre kontinuitet i
                  plejen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Akut Aflastning</h3>
                <p className="text-gray-600">
                  Hurtig indsats ved uforudsete personalemangel eller kriser på institutioner i Espergærde-området.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Teamstøtte</h3>
                <p className="text-gray-600">
                  Erfarne vikarer der kan integreres hurtigt i eksisterende teams og arbejdsgange.
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
              Lokalt Psykiatrisk Vikarbureau i Espergærde
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Espergærde og hele Helsingør Kommune med specialiserede vikarer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores Dækningsområde</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Espergærde",
                  "Helsingør",
                  "Snekkersten",
                  "Tikøb",
                  "Hornbæk",
                  "Gilleleje",
                  "Dronningmølle",
                  "Vejby",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Som lokalt forankret vikarbureau kender vi de specifikke udfordringer og behov i Espergærde og omegn.
                Vores vikarer har erfaring med de lokale institutioner og kan hurtigt tilpasse sig arbejdsgangene.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">
                <MapPin className="mr-2 h-5 w-5" />
                Se alle dækningsområder
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Kort over Espergærde og dækningsområder"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menneskelighed i Fokus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I Espergærde prioriterer vi den menneskelige dimension i al vores arbejde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empati</h3>
              <p className="text-gray-600">Vores vikarer udviser ægte omsorg og forståelse for borgernes situation</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tryghed</h3>
              <p className="text-gray-600">Vi skaber et trygt miljø for både borgere og medarbejdere</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kvalitet</h3>
              <p className="text-gray-600">Højeste standarder for pleje og professionel service</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Samarbejde</h3>
              <p className="text-gray-600">Tæt partnerskab med institutioner i Espergærde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Akut Indsats i Espergærde</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Når situationen kræver øjeblikkelig handling, er vi klar til at hjælpe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">2 Timer</h3>
              <p className="text-red-100">Maksimal responstid for akut udsendelse af vikarer til Espergærde</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Hotline</h3>
              <p className="text-red-100">Døgndækning med direkte adgang til erfarne koordinatorer</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Øjeblikkelig Action</h3>
              <p className="text-red-100">Specialiserede kriseteams klar til deployment i Espergærde-området</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Ring 41 44 33 33 - Akut Hotline
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontakt Psykiatrisk Vikarbureau Espergærde
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er klar til at hjælpe din institution i Espergærde med kvalificerede vikarer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kom i kontakt med os</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">41 44 33 33</p>
                    <p className="text-sm text-gray-500">Døgnet rundt, alle dage</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">espergaerde@tryghedspersonale.dk</p>
                    <p className="text-sm text-gray-500">Vi svarer inden for 2 timer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dækningsområde</h4>
                    <p className="text-gray-600">Espergærde og Helsingør Kommune</p>
                    <p className="text-sm text-gray-500">Lokal forankring og kendskab</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Anmod om vikarer</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution/Virksomhed</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Navn på institution"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kontaktperson</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Dit navn"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Dit telefonnummer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Besked</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Beskriv jeres behov for vikarer..."
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Send anmodning
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Psykiatrisk Vikarbureau Espergærde</strong> - Specialiseret i komplekse borgerforløb, akut
              indsats, demenspleje, psykiatri, socialpædagogik, plejehjem vikarer, botilbud personale, krisecenter
              støtte
            </p>
            <p>
              Dækker: Espergærde, Helsingør, Snekkersten, Tikøb, Hornbæk, Gilleleje, Dronningmølle, Vejby, Helsingør
              Kommune, Region Hovedstaden
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
