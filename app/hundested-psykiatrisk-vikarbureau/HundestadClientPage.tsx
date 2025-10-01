"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  Award,
  Target,
  Zap,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"
import { CityCarousel } from "@/components/CityCarousel"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HundestadClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const heroSlides = [
    {
      image: "/hundested-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Hundested",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionel psykiatrisk vikardækning i Hundested og Halsnæs Kommune med fokus på kvalitet og kontinuitet i plejen.",
      ctaText: "Ring 41 44 33 33",
      ctaLink: "tel:41443333",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfaren og Kvalificeret Personale",
      subtitle: "Specialister i psykiatrisk pleje",
      description:
        "Vores team af uddannede fagfolk sikrer den bedste pleje og omsorg for borgere med komplekse behov i Hundested området.",
      ctaText: "Læs mere om vores team",
      ctaLink: "#team",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Døgndækning i Halsnæs Kommune",
      subtitle: "Altid klar til at hjælpe",
      description:
        "Vi tilbyder 24/7 vikardækning til plejehjem, botilbud og psykiatriske institutioner i Hundested og omegn.",
      ctaText: "Kontakt os nu",
      ctaLink: "#contact",
    },
  ]

  const services = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Psykiatrisk Pleje",
      description:
        "Specialiseret pleje af borgere med psykiatriske diagnoser og komplekse behov i Hundested og Halsnæs Kommune.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Demenspleje",
      description: "Erfaren og empatisk pleje af borgere med demens og kognitiv svækkelse med fokus på livskvalitet.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Akut Stabilisering",
      description: "Hurtig indsats ved kriser og akutte situationer med specialuddannet personale til deeskalering.",
    },
    {
      icon: <Star className="h-8 w-8 text-red-600" />,
      title: "Socialpædagogik",
      description: "Professionel socialpædagogisk støtte til borgere med udviklingshæmning og særlige behov.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Akut Indsats",
      description: "Øjeblikkelig respons ved nødsituationer med erfarne fagfolk klar til deployment i Halsnæs Kommune.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Slider */}
      <EnhancedHeroSlider slides={heroSlides} />

      {/* Red Banner Section */}
      <section className="bg-red-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Akut behov for psykiatrisk vikar i Hundested?</h2>
              <p className="text-lg opacity-90">Ring nu og få professionel hjælp inden for 2 timer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => (window.location.href = "tel:41443333")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3 bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Send besked
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Specialområder i Hundested</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiseret psykiatrisk vikardækning til institutioner i Hundested og hele Halsnæs Kommune
            </p>
          </div>

          <CityCarousel items={services} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Velkommen til Tryghedspersonale</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Psykiatrisk Vikarbureau i Hundested og Halsnæs Kommune
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Som det førende psykiatriske vikarbureau i Hundested og omegn, har vi specialiseret os i at levere
                højkvalificeret personale til komplekse borgerforløb. Vores erfarne team af psykiatriske sygeplejersker,
                socialpædagoger og SOSU-assistenter er klar til at støtte institutioner i hele Halsnæs Kommune.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi forstår de unikke udfordringer ved psykiatrisk pleje og tilbyder skræddersyede løsninger, der sikrer
                kontinuitet og kvalitet i plejen. Fra akut stabilisering til langtidspleje - vi er din pålidelige
                partner i Hundested området.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button size="lg" variant="outline">
                  Læs mere om os
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Psykiatrisk team i Hundested"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">År med erfaring i Halsnæs Kommune</div>
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
                alt="Vores mission i Hundested"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <Award className="h-8 w-8 text-red-600 mb-2" />
                <div className="font-semibold">Certificeret kvalitet</div>
              </div>
            </div>
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Vores Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Menneskeværd og Faglig Excellence i Hundested
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vores mission er at sikre, at alle borgere i Hundested og Halsnæs Kommune modtager den bedst mulige
                psykiatriske pleje med respekt for deres værdighed og individuelle behov. Vi tror på, at kvalificeret
                personale gør en afgørende forskel i menneskers liv.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Individuel tilgang</h4>
                    <p className="text-gray-600">
                      Hver borger får skræddersyet pleje baseret på deres specifikke behov og diagnoser
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kontinuerlig udvikling</h4>
                    <p className="text-gray-600">
                      Vores personale deltager løbende i efteruddannelse og specialisering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lokal forankring</h4>
                    <p className="text-gray-600">
                      Dyb forståelse for Hundested og Halsnæs Kommunes særlige behov og udfordringer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Aflastning ved Forflytning</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Støtte Under Overgange i Hundested</h2>
              <p className="text-lg text-gray-600 mb-6">
                Forflytninger kan være særligt udfordrende for borgere med psykiatriske diagnoser. I Hundested og
                Halsnæs Kommune tilbyder vi specialiseret støtte under overgange mellem forskellige boformer,
                institutioner eller behandlingsforløb.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vores erfarne personale sikrer kontinuitet og tryghed under hele forflytningsprocessen, så borgeren
                oplever mindst mulig stress og forvirring. Vi arbejder tæt sammen med alle involverede parter for at
                sikre en smidig overgang.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Støtte under forflytning</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Fokus på borgerens trivsel</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Støtte under forflytning i Hundested"
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
            <Badge className="bg-red-100 text-red-800 mb-4">Lokalt Psykiatrisk Vikarbureau</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dækning i Hundested og Halsnæs Kommune
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Som lokalt forankret vikarbureau kender vi Hundested og omegns særlige behov og udfordringer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <MapPin className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Primært Dækningsområde</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hundested</li>
                  <li>• Frederiksværk</li>
                  <li>• Liseleje</li>
                  <li>• Melby</li>
                  <li>• Asserbo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <Clock className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Responstid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold">Akut indsats</div>
                    <div className="text-gray-600">Inden for 2 timer</div>
                  </div>
                  <div>
                    <div className="font-semibold">Planlagt vikardækning</div>
                    <div className="text-gray-600">Samme dag booking</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <Users className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Institutionstyper</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Plejehjem</li>
                  <li>• Botilbud</li>
                  <li>• Psykiatriske afdelinger</li>
                  <li>• Krisecentre</li>
                  <li>• Dagcentre</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Ring 41 44 33 33 - Hundested
            </Button>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Menneskelighed i fokus i Hundested"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
                <Heart className="h-8 w-8 mb-2" />
                <div className="font-semibold">Menneskelighed først</div>
              </div>
            </div>
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Menneskelighed i Fokus</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Værdighed og Respekt i Hundested</h2>
              <p className="text-lg text-gray-600 mb-6">
                I Hundested og Halsnæs Kommune sætter vi menneskelighed i centrum for alt, hvad vi gør. Hver borger
                fortjener at blive mødt med respekt, forståelse og professionel omsorg, uanset deres psykiatriske
                udfordringer eller komplekse behov.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vores tilgang bygger på evidensbaseret praksis kombineret med ægte empati og forståelse. Vi ser personen
                bag diagnosen og arbejder for at bevare og styrke borgerens selvværd og livskvalitet.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Individuel og personcentreret tilgang</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Respekt for borgerens autonomi og værdighed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Kulturel sensitivitet og inklusion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Kontinuerlig dialog med borgere og pårørende</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-800 mb-4">Akut Indsats</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Øjeblikkelig Hjælp i Hundested</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Når der opstår akutte situationer i Hundested eller Halsnæs Kommune, er vi klar med specialuddannet
              personale inden for 2 timer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-900">Kriseintervention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Øjeblikkelig respons ved psykiatriske kriser med specialuddannede interventionsteams
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-900">Deeskalering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professionel håndtering af aggressive eller voldsomme episoder med fokus på sikkerhed
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-red-900">Stabilisering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hurtig stabilisering af borgere i akut psykisk ubalance med efterfølgende opfølgning
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Akut behov for hjælp i Hundested?</h3>
            <p className="text-lg mb-6 opacity-90">
              Ring nu og få professionel psykiatrisk assistance inden for 2 timer
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3"
              onClick={() => (window.location.href = "tel:41443333")}
            >
              <Phone className="mr-2 h-6 w-6" />
              Ring 41 44 33 33 NU
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontakt Psykiatrisk Vikarbureau Hundested</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Vi er klar til at hjælpe dig med psykiatrisk vikardækning i Hundested og Halsnæs Kommune. Kontakt os i dag
              for en uforpligtende samtale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Få et tilbud i dag</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Navn *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Dit fulde navn"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Dit telefonnummer"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="din@email.dk"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Besked
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Beskriv dine behov for psykiatrisk vikardækning i Hundested..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  Send besked
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <div className="text-gray-300">41 44 33 33</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">hundested@tryghedspersonale.dk</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Dækningsområde</div>
                      <div className="text-gray-300">Hundested og Halsnæs Kommune</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Åbningstider</div>
                      <div className="text-gray-300">24/7 akut service</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-bold mb-4">Hurtig respons i Hundested</h4>
                <p className="text-gray-300 mb-4">Som lokalt vikarbureau i Halsnæs Kommune kan vi tilbyde:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Akut indsats inden for 2 timer</li>
                  <li>• Samme dag booking af planlagt vikardækning</li>
                  <li>• Specialiseret personale til komplekse borgere</li>
                  <li>• 24/7 support og rådgivning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Psykiatrisk Vikarbureau Hundested - Søgeord</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Lokationer</h4>
              <ul className="space-y-1">
                <li>Psykiatrisk vikar Hundested</li>
                <li>Vikarbureau Halsnæs Kommune</li>
                <li>Psykiatri vikar Frederiksværk</li>
                <li>Vikar Liseleje</li>
                <li>Psykiatrisk personale Melby</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Specialer</h4>
              <ul className="space-y-1">
                <li>Demens vikar Hundested</li>
                <li>Psykiatrisk sygeplejersker</li>
                <li>Socialpædagog vikar</li>
                <li>SOSU vikar psykiatri</li>
                <li>Akut stabilisering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Institutioner</h4>
              <ul className="space-y-1">
                <li>Plejehjem vikar Hundested</li>
                <li>Botilbud personale</li>
                <li>Psykiatrisk afdeling vikar</li>
                <li>Krisecenter personale</li>
                <li>Dagcenter vikar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
              <ul className="space-y-1">
                <li>Akut psykiatrisk vikar</li>
                <li>Komplekse borgerforløb</li>
                <li>Kriseintervention</li>
                <li>Deeskalering</li>
                <li>24/7 vikardækning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
