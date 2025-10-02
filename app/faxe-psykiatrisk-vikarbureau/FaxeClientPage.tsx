"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Heart,
  Shield,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  UserCheck,
  Brain,
  Ambulance,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Header from "@/components/header"
import Footer from "@/components/Footer"

export default function FaxeClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const heroSlides = [
    {
      image: "/faxe-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Faxe",
      subtitle: "Nærværende, lyttende og forstående",
      description: "Professionelt sundhedspersonale til komplekse psykiatriske forløb i Faxe og omegn",
      ctaText: "Ring 41 44 33 33",
      ctaAction: () => (window.location.href = "tel:41443333"),
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Specialiseret i Komplekse Borgerforløb",
      subtitle: "Erfaren og kvalificeret personale",
      description:
        "Vi leverer højkvalificeret vikarbistand til psykiatriske afdelinger, plejehjem og botilbud i Faxe Kommune",
      ctaText: "Kontakt os i dag",
      ctaAction: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Akut Indsats og Stabilisering",
      subtitle: "Døgndækning når du har brug for det",
      description: "Vores erfarne personale står klar til akutte situationer og kriseintervention i hele Faxe området",
      ctaText: "Læs mere om vores ydelser",
      ctaAction: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }),
    },
  ]

  const services = [
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: "Psykiatrisk Pleje",
      description: "Specialiseret pleje til borgere med psykiske lidelser og komplekse behov",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Demenspleje",
      description: "Omsorgsfull og professionel pleje til borgere med demens og kognitiv svækkelse",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Kriseintervention",
      description: "Akut indsats og stabilisering i kriser og udfordrende situationer",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Socialpædagogik",
      description: "Pædagogisk støtte og vejledning til borgere med særlige sociale behov",
    },
    {
      icon: <Ambulance className="h-8 w-8 text-red-600" />,
      title: "Akut Stabilisering",
      description: "Hurtig respons og professionel håndtering af akutte psykiatriske situationer",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative">
        <EnhancedHeroSlider slides={heroSlides} />
      </section>

      {/* Red Banner Section */}
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl font-bold">Har du brug for psykiatrisk vikarbistand i Faxe?</h2>
              <p className="text-red-100">Vi er klar til at hjælpe døgnet rundt</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold"
                onClick={() => (window.location.href = "tel:41443333")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Få et tilbud
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores Specialområder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder professionel vikarbistand inden for psykiatri, demenspleje og socialpædagogik i Faxe og omegn
            </p>
          </div>
          <CityCarousel items={services} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Velkommen til Psykiatrisk Vikarbureau Faxe</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Hos Tryghedspersonale.dk forstår vi de unikke udfordringer, der følger med psykiatrisk pleje i Faxe
                  Kommune. Vores erfarne og specialiserede personale er trænet til at håndtere komplekse borgerforløb
                  med empati, professionalisme og den højeste standard for pleje.
                </p>
                <p>
                  Vi er nærværende, lyttende og forstående i vores tilgang til hver enkelt borger. Vores team består af
                  kvalificerede sundhedsprofessionelle med omfattende erfaring inden for psykiatri, demenspleje og
                  socialpædagogik, der kan tilpasse sig forskellige miljøer og situationer.
                </p>
                <p>
                  Fra plejehjem og botilbud til krisecentre og psykiatriske afdelinger - vi leverer pålidelig og
                  kompetent vikarbistand, når I har mest brug for det.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                alt="Professionelt sundhedspersonale i Faxe"
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
                alt="Omsorgsfull pleje i Faxe"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-600" />
                  <div>
                    <div className="font-bold text-gray-900">Nærværende</div>
                    <div className="text-sm text-gray-600">Lyttende & Forstående</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vores Mission i Faxe</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Vi tror på, at hver borger fortjener omsorgsfull, respektfuld og professionel pleje, uanset deres
                  psykiske tilstand eller udfordringer. Vores mission er at levere højkvalificeret vikarbistand, der gør
                  en reel forskel i borgernes liv.
                </p>
                <p>
                  I Faxe Kommune arbejder vi tæt sammen med lokale institutioner for at sikre kontinuitet i plejen og de
                  bedst mulige resultater for borgerne. Vores tilgang er holistisk og fokuserer på både fysisk og mental
                  velvære.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Døgndækning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Kvalificeret personale</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aflastning ved Forflytning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiseret aflastning og støtte under forflytning af borgere med psykiske udfordringer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <UserCheck className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sikker Transport</h3>
                <p className="text-gray-600">
                  Professionel ledsagelse og støtte under transport mellem institutioner i Faxe området
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <HandHeart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emotionel Støtte</h3>
                <p className="text-gray-600">Omsorgsfull vejledning og beroligelse under overgange og forandringer</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Kontinuitet</h3>
                <p className="text-gray-600">
                  Sikring af sammenhængende pleje og information mellem forskellige plejeformer
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokalt Psykiatrisk Vikarbureau</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Faxe og hele det omkringliggende område med professionel psykiatrisk vikarbistand
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vores Dækningsområde</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Faxe</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Køge</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Haslev</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Stevns</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Præstø</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Næstved</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Som lokalt forankret vikarbureau kender vi de særlige udfordringer og behov i Faxe Kommune. Vores
                personale har erfaring med lokale institutioner og kan hurtigt tilpasse sig forskellige arbejdsmiljøer.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Kontakt os i dag
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Kort over Faxe og omegn"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Menneskelighed i Fokus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi behandler hver borger med værdighed, respekt og forståelse for deres individuelle behov
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empati</h3>
              <p className="text-gray-600 text-sm">Vi forstår og deler borgernes følelser og udfordringer</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Respekt</h3>
              <p className="text-gray-600 text-sm">Hver borger behandles med værdighed og respekt</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Forståelse</h3>
              <p className="text-gray-600 text-sm">Vi lytter aktivt og søger at forstå individuelle behov</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Målrettet</h3>
              <p className="text-gray-600 text-sm">Fokuseret indsats baseret på borgernes specifikke behov</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Akut Indsats i Faxe</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Når situationen kræver øjeblikkelig handling, er vi klar med erfaren og kvalificeret personale
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hurtig Respons</h3>
              <p className="text-red-100">
                Vi kan mobilisere kvalificeret personale inden for kort tid til akutte situationer
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kriseintervention</h3>
              <p className="text-red-100">
                Specialiseret håndtering af kriser og udfordrende adfærd med fokus på de-eskalering
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Erfaren Personale</h3>
              <p className="text-red-100">Vores team har omfattende erfaring med akutte psykiatriske situationer</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold"
              onClick={() => (window.location.href = "tel:41443333")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Ring 41 44 33 33 - Akut Hjælp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt Psykiatrisk Vikarbureau Faxe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har du brug for professionel psykiatrisk vikarbistand? Kontakt os i dag for en uforpligtende samtale
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Få et tilbud i dag</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Navn *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Besked
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beskriv jeres behov for vikarbistand..."
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  Send forespørgsel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktinformation</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">41 44 33 33</p>
                    <p className="text-sm text-gray-500">Døgnet rundt, alle dage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">faxe@tryghedspersonale.dk</p>
                    <p className="text-sm text-gray-500">Vi svarer inden for 2 timer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Serviceområde</h4>
                    <p className="text-gray-600">Faxe Kommune og omegn</p>
                    <p className="text-sm text-gray-500">Køge, Haslev, Stevns, Præstø</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Åbningstider</h4>
                    <p className="text-gray-600">24/7 akut service</p>
                    <p className="text-sm text-gray-500">Kontor: Hverdage 8-16</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                <h4 className="font-semibold text-gray-900 mb-2">Akut situation?</h4>
                <p className="text-gray-600 mb-4">Ring direkte til os på 41 44 33 33 for øjeblikkelig hjælp</p>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => (window.location.href = "tel:41443333")}>
                  <Phone className="mr-2 h-4 w-4" />
                  Ring nu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Psykiatrisk Vikarbureau Faxe</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Tryghedspersonale.dk er jeres pålidelige partner for professionel psykiatrisk vikarbistand i Faxe Kommune.
              Vi leverer kvalificeret sundhedspersonale til plejehjem, botilbud, krisecentre og psykiatriske afdelinger
              med fokus på nærværende, lyttende og forstående pleje.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span>Psykiatrisk vikar Faxe</span>
            <span>•</span>
            <span>Sundhedspersonale Faxe Kommune</span>
            <span>•</span>
            <span>Vikarbureau psykiatri</span>
            <span>•</span>
            <span>Demenspleje Faxe</span>
            <span>•</span>
            <span>Kriseintervention</span>
            <span>•</span>
            <span>Akut psykiatrisk hjælp</span>
            <span>•</span>
            <span>Socialpædagogik Faxe</span>
            <span>•</span>
            <span>Plejehjem vikar</span>
            <span>•</span>
            <span>Botilbud personale</span>
            <span>•</span>
            <span>Psykiatrisk pleje Køge</span>
            <span>•</span>
            <span>Vikar Haslev</span>
            <span>•</span>
            <span>Sundhedspersonale Stevns</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
