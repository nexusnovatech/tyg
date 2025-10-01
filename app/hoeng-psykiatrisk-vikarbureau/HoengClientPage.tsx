"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Users,
  Heart,
  Shield,
  CheckCircle,
  Award,
  Zap,
  UserCheck,
  Stethoscope,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Footer from "@/components/Footer"

export default function HoengClientPage() {
  const [activeService, setActiveService] = useState(0)

  const heroSlides = [
    {
      image: "/hoeng-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Høng",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionel psykiatrisk vikardækning i Høng og omegn med fokus på kvalitet, tryghed og kontinuitet i plejen.",
      cta: "Ring 41 44 33 33",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfaren Psykiatrisk Pleje",
      subtitle: "Kvalificerede vikarer til komplekse opgaver",
      description:
        "Vores specialiserede team håndterer udfordrende psykiatriske situationer med empati og faglig ekspertise.",
      cta: "Få hjælp nu",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Akut Psykiatrisk Indsats",
      subtitle: "Hurtig respons når det haster",
      description: "24/7 beredskab til akutte psykiatriske situationer i Høng, Kalundborg og omliggende områder.",
      cta: "Kontakt os",
    },
  ]

  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Psykiatrisk Pleje",
      description: "Specialiseret pleje til borgere med psykiatriske diagnoser og komplekse behov",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Demenspleje",
      description: "Kvalificeret omsorg til borgere med demens og kognitiv svækkelse",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Socialpædagogik",
      description: "Pædagogisk støtte til borgere med udviklingshæmning og sociale udfordringer",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Akut Stabilisering",
      description: "Hurtig intervention ved kriser og akutte psykiatriske episoder",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Konfliktløsning",
      description: "Professionel håndtering af konflikter og udadreagerende adfærd",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <EnhancedHeroSlider slides={heroSlides} />
      </section>

      {/* Red Banner Section */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-semibold">Akut psykiatrisk hjælp i Høng</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Ring 41 44 33 33
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Specialeområder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionel psykiatrisk vikardækning med fokus på kvalitet og kontinuitet i Høng og omegn
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
                Velkommen til Psykiatrisk Vikarbureau Høng
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Som det førende psykiatriske vikarbureau i Høng og Kalundborg Kommune tilbyder vi specialiseret
                  vikardækning til institutioner, der arbejder med borgere med komplekse psykiatriske behov.
                </p>
                <p>
                  Vores erfarne team af psykiatriske vikarer er uddannet til at håndtere udfordrende situationer med
                  empati, professionalisme og faglig ekspertise. Vi forstår vigtigheden af kontinuitet og tryghed i
                  psykiatrisk pleje.
                </p>
                <p>
                  Med base i Høng dækker vi hele Kalundborg Kommune samt tilstødende områder og sikrer hurtig respons og
                  kvalificeret hjælp, når I har brug for det.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button variant="outline" size="lg">
                  Læs mere om os
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Psykiatrisk team i Høng"
                className="rounded-lg shadow-xl"
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
                alt="Omsorgsfyldt psykiatrisk pleje i Høng"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <Award className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Certificeret kvalitet</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vores Mission i Høng</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At levere den højeste standard af psykiatrisk vikardækning i Høng og omegn, hvor hver borger mødes med
                  respekt, forståelse og professionel omsorg.
                </p>
                <p>
                  Vi arbejder målrettet for at skabe trygge rammer omkring borgere med psykiatriske udfordringer og
                  støtter institutioner i at opretholde kontinuitet i plejen, selv i udfordrende perioder.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Akut beredskab</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aflastning ved Forflytning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialiseret støtte til borgere og institutioner under overgange og forflytninger
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Planlagt Forflytning</h3>
                <p className="text-gray-600">
                  Struktureret støtte ved planlagte flytninger mellem institutioner i Høng og Kalundborg Kommune
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Akut Forflytning</h3>
                <p className="text-gray-600">
                  Hurtig respons og professionel håndtering ved uforudsete forflytningssituationer
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Følgearbejde</h3>
                <p className="text-gray-600">
                  Kontinuerlig støtte og opfølgning for at sikre en tryg overgang for borgeren
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokalt Psykiatrisk Vikarbureau</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Høng og hele Kalundborg Kommune med specialiseret psykiatrisk vikardækning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Vores Dækningsområder</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Høng", "Kalundborg", "Bjergsted", "Gørlev", "Svebølle", "Tornved", "Ubby", "Rørvig"].map(
                  (area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ),
                )}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Responstider
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Høng og nærområde:</span>
                    <span className="font-semibold">15-30 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kalundborg Kommune:</span>
                    <span className="font-semibold">30-45 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Akutte situationer:</span>
                    <span className="font-semibold text-red-600">Under 15 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Dækningsområde for Høng"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg">
                <MapPin className="h-4 w-4 inline mr-1" />
                Høng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Menneskelighed i Fokus</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  I Høng og omegn møder vi hver borger med respekt og forståelse for deres unikke situation. Vores
                  tilgang bygger på empati, faglig ekspertise og en dyb forståelse for psykiatriske udfordringer.
                </p>
                <p>
                  Vi tror på, at kvalitet i psykiatrisk pleje handler om mere end blot faglige kompetencer - det handler
                  om at skabe menneskelige forbindelser og trygge rammer for borgerne.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  "Individuel tilgang til hver borger",
                  "Respekt for borgerens værdighed og autonomi",
                  "Kontinuerlig dialog med pårørende",
                  "Tværfagligt samarbejde med behandlingsteam",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Menneskelighed i psykiatrisk pleje"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Omsorg & Empati</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Akut Indsats i Høng</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Når situationen kræver øjeblikkelig handling, er vi klar med professionel akut psykiatrisk støtte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Ring Nu</h3>
                <p className="text-sm text-gray-600 mb-3">Øjeblikkelig kontakt til vores akutteam</p>
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  24/7
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Hurtig Respons</h3>
                <p className="text-sm text-gray-600 mb-3">Ankomst inden for 15 minutter i Høng</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Express
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Kvalificeret Team</h3>
                <p className="text-sm text-gray-600 mb-3">Specialuddannede akut-vikarer</p>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Certificeret
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Sikker Håndtering</h3>
                <p className="text-sm text-gray-600 mb-3">Professionel de-eskalering</p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Sikkerhed
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
              <Phone className="mr-2 h-6 w-6" />
              Ring 41 44 33 33 - Akut Hjælp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontakt Psykiatrisk Vikarbureau Høng</h2>
              <p className="text-xl text-gray-300 mb-8">
                Vi er altid klar til at hjælpe med professionel psykiatrisk vikardækning i Høng og omegn
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ring til os</h3>
                    <p className="text-gray-300">41 44 33 33</p>
                    <p className="text-sm text-gray-400">Døgnbemandet akutlinje</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Vores område</h3>
                    <p className="text-gray-300">Høng og Kalundborg Kommune</p>
                    <p className="text-sm text-gray-400">Hurtig respons i hele området</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Åbningstider</h3>
                    <p className="text-gray-300">24/7 akut beredskab</p>
                    <p className="text-sm text-gray-400">Kontor: Hverdage 8-16</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Send os en besked</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Institution/Navn</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Indtast institution eller navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Indtast telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Besked</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Beskriv jeres behov for vikardækning"
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                  Send besked
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Psykiatrisk Vikarbureau Høng</strong> - Professionel vikardækning til psykiatri, demens,
            socialpædagogik og akut stabilisering. Vi dækker Høng, Kalundborg, Bjergsted, Gørlev, Svebølle, Tornved,
            Ubby, Rørvig og hele Kalundborg Kommune. Specialiseret i komplekse borgerforløb, udadreagerende adfærd,
            konfliktløsning og akut psykiatrisk indsats. 24/7 beredskab - Ring 41 44 33 33 for hurtig hjælp.
            Kvalificerede vikarer til plejehjem, botilbud, krisecentre og psykiatriske afdelinger.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
