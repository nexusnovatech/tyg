"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
  HandHeart,
  UserCheck,
} from "lucide-react"
import EnhancedHeroSlider from "@/components/enhanced-hero-slider"

export default function HoejeTaastrupClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const heroSlides = [
    {
      image: "/hoeje-taastrup-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Høje-Taastrup",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description:
        "Professionelle vikarer til psykiatriske institutioner, plejehjem og botilbud i Høje-Taastrup og omegn",
      ctaText: "Ring 41 44 33 33",
      ctaLink: "tel:41443333",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfarne Specialister",
      subtitle: "Kvalificeret personale til alle opgaver",
      description: "Vores team af uddannede fagfolk sikrer kontinuitet og kvalitet i plejen",
      ctaText: "Læs mere om vores team",
      ctaLink: "#team",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "24/7 Akut Indsats",
      subtitle: "Hurtig respons når det haster",
      description: "Vi er klar til at hjælpe døgnet rundt med akutte personalebehov",
      ctaText: "Kontakt os nu",
      ctaLink: "#kontakt",
    },
  ]

  const services = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Plejehjem & Ældrecentre",
      description: "Specialiserede vikarer til komplekse plejesituationer og demenspleje i Høje-Taastrup Kommune",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Psykiatriske Institutioner",
      description: "Erfarne fagfolk til psykiatriske afdelinger og specialiserede behandlingsforløb",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Botilbud & Krisecentre",
      description: "Kvalificeret personale til botilbud, krisecentre og beskyttede boliger",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Akut Indsats",
      description: "Hurtig udrykning og akut personaledækning når situationen kræver det",
    },
    {
      icon: <Star className="h-8 w-8 text-red-600" />,
      title: "Specialiseret Pleje",
      description: "Ekspertise inden for demens, psykiatri, socialpædagogik og komplekse borgerforløb",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Slider */}
      <EnhancedHeroSlider slides={heroSlides} />

      {/* Red Banner Section */}
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl font-bold">Har du brug for akut personaledækning?</h2>
              <p className="text-red-100">Vi er klar til at hjælpe døgnet rundt i Høje-Taastrup og omegn</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold"
                asChild
              >
                <Link href="tel:41443333">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                asChild
              >
                <Link href="#kontakt">
                  <Mail className="mr-2 h-5 w-5" />
                  Send besked
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vores Serviceområder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer kvalificerede vikarer til alle typer af institutioner i Høje-Taastrup Kommune og omliggende
              områder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Velkommen til Psykiatrisk Vikarbureau Høje-Taastrup
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Som et specialiseret psykiatrisk vikarbureau i Høje-Taastrup leverer vi kvalificerede fagfolk til
                  institutioner, der arbejder med komplekse borgerforløb. Vores erfarne team forstår de unikke
                  udfordringer inden for psykiatri og specialiseret pleje.
                </p>
                <p>
                  Vi betjener Høje-Taastrup Kommune samt de omkringliggende områder og har opbygget et stærkt netværk af
                  institutioner, der stoler på vores professionalisme og kvalitet.
                </p>
                <p>
                  Vores vikarer er specialiseret i at håndtere komplekse situationer og sikrer kontinuitet i plejen,
                  selv når der opstår akutte personalebehov.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="#kontakt">
                    Kontakt os i dag
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professionelt sundhedsteam i Høje-Taastrup"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
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
                src="/placeholder.svg?height=500&width=600"
                alt="Omsorgsfuld sundhedsprofessionel med ældre patient"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vores Mission i Høje-Taastrup</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Vi arbejder for at sikre, at alle borgere i Høje-Taastrup Kommune og omegn modtager den bedst mulige
                  pleje og omsorg, uanset kompleksiteten af deres behov.
                </p>
                <p>
                  Vores tilgang bygger på respekt, professionalisme og en dyb forståelse for de udfordringer, som både
                  borgere og institutioner står overfor i det psykiatriske område.
                </p>
                <p>
                  Vi investerer kontinuerligt i uddannelse og udvikling af vores personale for at sikre, at vi altid kan
                  levere den højeste standard af pleje.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Akut service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aflastning ved forflytning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi hjælper institutioner i Høje-Taastrup med at sikre kontinuitet under personaleskift og forflytninger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planlagt Aflastning</h3>
                <p className="text-gray-600">
                  Struktureret overgang når fast personale skifter stilling eller går på orlov
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Akut Dækning</h3>
                <p className="text-gray-600">Hurtig indsats ved sygdom eller andre uforudsete personalemangel</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <UserCheck className="h-12 w-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontinuitet</h3>
                <p className="text-gray-600">Sikring af stabil pleje og omsorg gennem hele overgangsperioden</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokalt Psykiatrisk Vikarbureau i Høje-Taastrup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi dækker Høje-Taastrup Kommune og de omkringliggende områder med specialiseret personaledækning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores Dækningsområder</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Høje-Taastrup", "Albertslund", "Brøndby", "Vallensbæk", "Ishøj", "Glostrup"].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">
                Som lokalt forankret vikarbureau kender vi de specifikke behov og udfordringer i Høje-Taastrup Kommune.
                Vores nærhed til området betyder hurtigere responstid og bedre forståelse for lokale forhold.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Kort over Høje-Taastrup og omkringliggende områder"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Menneskelighed i fokus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tror på, at kvalitet i pleje starter med menneskelighed og respekt for den enkelte borger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Empati</h3>
              <p className="text-gray-600 text-sm">Vi møder hver borger med forståelse og medfølelse</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tryghed</h3>
              <p className="text-gray-600 text-sm">Vi skaber et sikkert og trygt miljø for alle</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kvalitet</h3>
              <p className="text-gray-600 text-sm">Vi leverer altid den højeste standard af pleje</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <HandHeart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Omsorg</h3>
              <p className="text-gray-600 text-sm">Vi viser ægte interesse for borgernes trivsel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Akut indsats når det haster</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Vores akutte indsatshold er klar til at hjælpe institutioner i Høje-Taastrup døgnet rundt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ring 41 44 33 33</h3>
              <p className="text-red-100">Vores hotline er åben 24/7 for akutte personalebehov</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hurtig respons</h3>
              <p className="text-red-100">Vi stræber efter at have personale på plads inden for 2 timer</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kvalificeret team</h3>
              <p className="text-red-100">Alle vores akutvikarer er erfarne og specialiserede</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold"
              asChild
            >
              <Link href="tel:41443333">
                <Phone className="mr-2 h-5 w-5" />
                Ring nu for akut hjælp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt os i dag</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har du brug for kvalificerede vikarer til din institution i Høje-Taastrup? Vi er klar til at hjælpe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Få et uforpligtende tilbud</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Dit navn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Din email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Dit telefonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Beskriv dine behov..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  Send besked
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">41 44 33 33</p>
                    <p className="text-sm text-gray-500">Åben 24/7 for akutte henvendelser</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@tryghedspersonale.dk</p>
                    <p className="text-sm text-gray-500">Vi svarer inden for 2 timer</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dækningsområde</h4>
                    <p className="text-gray-600">Høje-Taastrup Kommune og omegn</p>
                    <p className="text-sm text-gray-500">Albertslund, Brøndby, Vallensbæk, Ishøj</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Åbningstider</h4>
                    <p className="text-gray-600">Mandag-Fredag: 08:00-16:00</p>
                    <p className="text-sm text-gray-500">Akut service: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Akut personalebehov?</h4>
                <p className="text-gray-600 mb-4">Ring direkte til vores akutlinje</p>
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="tel:41443333">
                    <Phone className="mr-2 h-4 w-4" />
                    41 44 33 33
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Psykiatrisk Vikarbureau Høje-Taastrup - Nøgleord
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "psykiatrisk vikarbureau Høje-Taastrup",
                "vikarer psykiatri",
                "plejehjem vikarer Høje-Taastrup",
                "botilbud personale",
                "akut indsats",
                "komplekse borgerforløb",
                "Høje-Taastrup Kommune",
                "Albertslund vikarer",
                "Brøndby personale",
                "Vallensbæk pleje",
                "specialiseret pleje",
                "demens vikarer",
                "socialpædagogik",
                "krisecentre personale",
                "psykiatriske institutioner",
                "akut personaledækning",
              ].map((keyword, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
