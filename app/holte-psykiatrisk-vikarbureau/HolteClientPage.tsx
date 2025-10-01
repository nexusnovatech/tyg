"use client"

import { useState } from "react"
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
  Award,
  Target,
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

export default function HolteClientPage() {
  const [activeService, setActiveService] = useState(0)

  const heroSlides = [
    {
      image: "/holte-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Holte",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionelle vikarer til psykiatriske institutioner, plejehjem og botilbud i Holte og Rudersdal Kommune",
      cta: "Ring 41 44 33 33",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfarne Psykiatri-Vikarer",
      subtitle: "Kvalificeret personale til komplekse situationer",
      description: "Vores vikarer har specialiseret erfaring inden for psykiatri, demens og udadreagerende adfærd",
      cta: "Få hjælp nu",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "24/7 Akut Assistance",
      subtitle: "Hurtig respons når I har brug for det",
      description: "Vi leverer kvalificerede vikarer med kort varsel til akutte situationer i Holte området",
      cta: "Kontakt os",
    },
  ]

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Plejehjem & Ældrecentre",
      description: "Specialiserede vikarer til demens og psykiatriske udfordringer på plejehjem i Holte og omegn",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Botilbud & Institutioner",
      description: "Erfarne medarbejdere til botilbud og psykiatriske institutioner i Rudersdal Kommune",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Akut Psykiatri",
      description: "Hurtig indsats ved akutte psykiatriske situationer og kriser i Holte området",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Specialiseret Pleje",
      description: "Vikarer med erfaring i udadreagerende adfærd og komplekse borgerforløb",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Demenspleje",
      description: "Kvalificerede vikarer til demenspatienter og specialiseret ældrepleje i Holte",
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
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span className="text-lg font-semibold">Akut behov for vikarer?</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="bg-white text-red-600 hover:bg-gray-100 border-white">
                Ring 41 44 33 33
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Serviceområder i Holte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer specialiserede vikarer til alle typer af institutioner i Holte og Rudersdal Kommune
            </p>
          </div>

          <CityCarousel services={services} activeService={activeService} setActiveService={setActiveService} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Velkommen til Psykiatrisk Vikarbureau Holte
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Som det førende psykiatriske vikarbureau i Holte og Rudersdal Kommune tilbyder vi specialiserede
                  vikarer til institutioner, der arbejder med komplekse borgerforløb og psykiatriske udfordringer.
                </p>
                <p>
                  Vores erfarne team forstår de unikke behov i Holte området og leverer kvalificeret personale til
                  plejehjem, botilbud og psykiatriske institutioner med kort varsel.
                </p>
                <p>
                  Vi er stolte af at betjene lokalsamfundet i Holte, Birkerød, Vedbæk og resten af Rudersdal Kommune med
                  professionel og pålidelig service.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-5 h-5 mr-2" />
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
                alt="Professionelt sundhedsteam i Holte"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Akut service</div>
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
                alt="Omsorgfuld sundhedsprofessionel med patient i Holte"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vores Mission i Holte</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At levere den højeste kvalitet af psykiatrisk vikarpersonale til institutioner i Holte og Rudersdal
                  Kommune, med fokus på komplekse borgerforløb og specialiseret pleje.
                </p>
                <p>
                  Vi forstår de særlige udfordringer, som institutioner i Holte området står overfor, og vores vikarer
                  er trænet til at håndtere selv de mest krævende situationer med professionalisme og empati.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Års erfaring i Holte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Kvalificerede vikarer</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aflastning ved Forflytning i Holte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialiseret assistance til institutioner i Holte og Rudersdal Kommune ved medarbejderforflytninger og
              akutte personalesituationer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <UserCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Hurtig Mobilisering</h3>
                <p className="text-gray-600">
                  Vi kan levere kvalificerede vikarer til Holte institutioner inden for 2-4 timer ved akutte behov
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialiseret Erfaring</h3>
                <p className="text-gray-600">
                  Vores vikarer har omfattende erfaring med psykiatriske patienter og komplekse borgerforløb
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lokal Tilknytning</h3>
                <p className="text-gray-600">
                  Dyb forståelse for Holte området og de lokale institutioners specifikke behov og procedurer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lokalt Psykiatrisk Vikarbureau i Holte
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Som det førende psykiatriske vikarbureau i Holte betjener vi hele Rudersdal Kommune og tilstødende
                  områder med specialiserede vikarer til psykiatriske institutioner.
                </p>
                <p>
                  Vores dækningsområde omfatter Holte, Birkerød, Vedbæk, Søllerød, Hørsholm og andre lokalsamfund i
                  regionen, hvor vi leverer pålidelig og professionel vikarservice.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Vores dækningsområder:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Holte", "Birkerød", "Vedbæk", "Søllerød", "Hørsholm", "Rudersdal Kommune"].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Kort over Holte og Rudersdal Kommune dækningsområde"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
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
              I Holte og Rudersdal Kommune prioriterer vi den menneskelige tilgang til psykiatrisk pleje og komplekse
              borgerforløb
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empati & Forståelse</h3>
              <p className="text-gray-600 text-sm">
                Vores vikarer i Holte er trænet i empatisk kommunikation og forståelse for patienternes behov
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teamwork</h3>
              <p className="text-gray-600 text-sm">
                Sømløs integration med eksisterende teams på institutioner i Holte området
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kvalitet</h3>
              <p className="text-gray-600 text-sm">
                Højeste standarder for psykiatrisk pleje og professionel service i Rudersdal Kommune
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Kontinuerlig forbedring og udvikling af vores tjenester i Holte og omegn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Akut Indsats i Holte</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Når institutioner i Holte og Rudersdal Kommune står overfor akutte personalesituationer eller
                  komplekse borgerforløb, er vi klar til at hjælpe med kort varsel.
                </p>
                <p>
                  Vores erfarne vikarer kan mobiliseres hurtigt til at håndtere kriser, udadreagerende adfærd og andre
                  udfordrende situationer på professionel vis.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                  <Zap className="w-5 h-5 mr-2" />
                  Akut assistance
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 41 44 33 33
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Akut indsats team i Holte sundhedsfacilitet"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-red-600 p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">2-4 timer</div>
                <div className="text-sm">Responstid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt Psykiatrisk Vikarbureau Holte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er klar til at hjælpe institutioner i Holte og Rudersdal Kommune med kvalificerede vikarer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ring til os</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">41 44 33 33</p>
                <p className="text-gray-600">24/7 akut service</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Vores område</h3>
                <p className="text-gray-600">Holte og hele Rudersdal Kommune</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Åbningstider</h3>
                <p className="text-gray-600">
                  24/7 akut service
                  <br />
                  Hverdage 8-16 administration
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 mr-4">
              <Phone className="w-5 h-5 mr-2" />
              Ring 41 44 33 33
            </Button>
            <Button size="lg" variant="outline">
              Send besked
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-gray-100 text-sm text-gray-600">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p>
              <strong>Psykiatrisk Vikarbureau Holte</strong> - Specialiserede vikarer til institutioner i Rudersdal
              Kommune
            </p>
            <p>
              Søgeord: psykiatrisk vikarbureau Holte, vikarer Rudersdal Kommune, psykiatri personale Birkerød, Holte
              plejehjem vikarer, botilbud personale Vedbæk, akut psykiatri assistance Søllerød, demens vikarer Hørsholm,
              komplekse borgerforløb Holte, udadreagerende adfærd vikarer, specialiseret pleje Rudersdal, psykiatriske
              institutioner personale, 24/7 vikarservice Holte
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
