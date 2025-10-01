"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Users, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function UngeBoerneClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroSlides = [
    {
      image: "/unge-boerne-hero-1.png",
      title: "Unge- og Børneområdet",
      subtitle: "Specialiseret i udadreagerende adfærd",
      description: "Professionel støtte til børn og unge med komplekse adfærdsmæssige udfordringer",
      ctaText: "Ring 41 44 33 33",
      ctaAction: () => (window.location.href = "tel:41443333"),
    },
    {
      image: "/unge-boerne-hero-2.png",
      title: "Erfaren og Kvalificeret",
      subtitle: "Specialuddannet personale",
      description: "Vores team har omfattende erfaring med børne- og ungdomspsykiatri samt socialpædagogik",
      ctaText: "Kontakt os i dag",
      ctaAction: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      image: "/unge-boerne-hero-3.png",
      title: "Døgndækning",
      subtitle: "24/7 beredskab",
      description: "Vi er klar til at hjælpe når som helst - dag og nat, weekender og helligdage",
      ctaText: "Ring nu",
      ctaAction: () => (window.location.href = "tel:41443333"),
    },
  ]

  const services = [
    {
      title: "Ungdomspsykiatri",
      description: "Specialiseret støtte til unge med psykiske udfordringer",
      icon: <Users className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Adfærdsterapi",
      description: "Professionel håndtering af udadreagerende adfærd",
      icon: <Shield className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Socialpædagogik",
      description: "Pædagogisk støtte og udvikling af sociale færdigheder",
      icon: <Heart className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Kriseintervention",
      description: "Akut støtte i kritiske situationer",
      icon: <Phone className="w-8 h-8 text-red-600" />,
    },
    {
      title: "Familiearbejde",
      description: "Støtte til hele familien i vanskelige perioder",
      icon: <Users className="w-8 h-8 text-red-600" />,
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
              <h2 className="text-xl font-bold">Akut behov for støtte?</h2>
              <p className="text-red-100">Vi er klar 24/7 - Ring nu for øjeblikkelig hjælp</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50 font-semibold"
                onClick={() => (window.location.href = "tel:41443333")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-red-600 font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Send besked
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores Specialområder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiseret støtte til børn og unge med komplekse behov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Velkommen til Unge- og Børneområdet</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vi er specialister i at arbejde med børn og unge, der har komplekse adfærdsmæssige udfordringer. Vores
                  erfarne team består af socialpædagoger, specialpædagoger og sundhedsprofessionelle med omfattende
                  erfaring inden for børne- og ungdomspsykiatri.
                </p>
                <p>
                  Gennem vores individuelle tilgang sikrer vi, at hvert barn og hver ung får den rette støtte og omsorg,
                  der matcher deres specifikke behov og udfordringer.
                </p>
                <p>
                  Vi arbejder tæt sammen med familier, skoler og andre relevante aktører for at skabe de bedste rammer
                  for barnets eller den unges udvikling og trivsel.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => (window.location.href = "tel:41443333")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 41 44 33 33
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/unge-boerne-welcome.png"
                alt="Professionel støtte til børn og unge"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/unge-boerne-mission.png"
                alt="Vores mission med børn og unge"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vores Mission og Tilgang</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vores mission er at skabe trygge rammer for børn og unge med komplekse behov. Vi tror på, at alle børn
                  og unge har potentiale til vækst og udvikling, uanset deres udfordringer.
                </p>
                <p>
                  Gennem evidensbaserede metoder og en individuel tilgang arbejder vi målrettet med at styrke barnets
                  eller den unges ressourcer og resiliens.
                </p>
                <p>
                  Vi fokuserer på at skabe positive relationer og arbejder med anerkendende og ressourceorienterede
                  tilgange, der bygger på barnets eller den unges styrker.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Individuel tilgang</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Evidensbaseret</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Ressourceorienteret</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Tværfagligt samarbejde</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kontakt Os I Dag</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Vi er klar til at hjælpe dit barn eller din unge. Ring til os for en uforpligtende samtale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Ring Nu</h3>
              <p className="text-red-100 mb-4">Døgnbemandet hotline</p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50"
                onClick={() => (window.location.href = "tel:41443333")}
              >
                41 44 33 33
              </Button>
            </div>

            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Åbningstider</h3>
              <p className="text-red-100">
                24/7 beredskab
                <br />
                Altid klar til at hjælpe
              </p>
            </div>

            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Dækningsområde</h3>
              <p className="text-red-100">
                Hele Danmark
                <br />
                Lokale specialister
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
