"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

export default function HerlevClientPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const heroSlides = [
    {
      image: "/herlev-hero-updated.png",
      title: "Psykiatrisk Vikarbureau Herlev",
      subtitle: "Specialiseret i komplekse borgerforløb",
      description: "Professionelle vikarer til psykiatriske afdelinger, plejehjem og botilbud i Herlev og omegn",
      ctaText: "Ring 41 44 33 33",
      ctaLink: "tel:41443333",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Erfarne Specialister",
      subtitle: "Kvalificeret personale til alle opgaver",
      description:
        "Vores team af uddannede vikarer har omfattende erfaring inden for psykiatri og komplekse borgerforløb",
      ctaText: "Se vores ydelser",
      ctaLink: "#ydelser",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "24/7 Akut Indsats",
      subtitle: "Altid klar når I har brug for os",
      description: "Hurtig respons og professionel håndtering af akutte situationer i Herlev Kommune",
      ctaText: "Kontakt os nu",
      ctaLink: "#kontakt",
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
              <h2 className="text-xl md:text-2xl font-bold mb-1">Har I brug for vikarer i Herlev?</h2>
              <p className="text-red-100">Ring nu og få professionel hjælp inden for 24 timer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8"
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
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 bg-transparent"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores Serviceområder i Herlev</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer kvalificerede vikarer til alle typer af institutioner i Herlev Kommune og omegn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Plejehjem",
                description: "Erfarne vikarer til alle afdelinger på plejehjem i Herlev",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Botilbud",
                description: "Specialiserede vikarer til botilbud og støttede boliger",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Psykiatri",
                description: "Kvalificeret personale til psykiatriske afdelinger",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Krisecentre",
                description: "Erfarne vikarer til krisecentre og akutafdelinger",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Specialområder",
                description: "Demens, socialpædagogik og komplekse borgerforløb",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-red-600 mb-3 flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Velkommen til Herlev</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professionelt Psykiatrisk Vikarbureau i Herlev Kommune
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tryghedspersonale.dk er jeres lokale partner for kvalificerede vikarer i Herlev og omegn. Vi
                specialiserer os i komplekse borgerforløb og leverer erfarne medarbejdere til plejehjem, botilbud,
                psykiatriske afdelinger og andre sundhedsinstitutioner.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Med vores dybe forståelse af Herlev Kommunes behov og udfordringer, sikrer vi altid den rette match
                mellem jeres krav og vores kvalificerede vikarer. Vi dækker hele området omkring Herlev, herunder
                Ballerup, Rødovre og Glostrup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="#kontakt">
                    <Phone className="mr-2 h-5 w-5" />
                    Ring 41 44 33 33
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#ydelser">
                    Se alle ydelser
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professionelt sundhedspersonale i Herlev"
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
                alt="Vores mission i Herlev"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Vores Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kvalitet og Tryghed i Herlev Kommune
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vores mission er at levere den højeste kvalitet af vikarydelser til sundhedssektoren i Herlev og omegn.
                Vi forstår de unikke udfordringer, som institutioner i området står overfor, og vi er forpligtet til at
                levere løsninger, der ikke kun opfylder, men overgår jeres forventninger.
              </p>
              <div className="space-y-4">
                {[
                  "Specialiseret erfaring med komplekse borgerforløb",
                  "Dyb forståelse af Herlev Kommunes behov",
                  "24/7 akut indsats og hurtig respons",
                  "Kontinuerlig uddannelse og kvalitetssikring",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">Aflastning ved Forflytning</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Midlertidig Aflastning i Herlev</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyder specialiseret aflastning ved forflytning af borgere med komplekse behov i Herlev Kommune
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-12 w-12" />,
                title: "Planlagt Forflytning",
                description: "Struktureret støtte ved planlagte forflytninger mellem institutioner i Herlev området",
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Akut Aflastning",
                description: "Hurtig indsats ved uforudsete situationer og akutte forflytningsbehov",
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Specialiseret Ekspertise",
                description: "Erfarne medarbejdere med specialviden om komplekse borgerforløb",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-red-600 mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lokalt Psykiatrisk Vikarbureau i Herlev</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Som jeres lokale partner kender vi Herlev Kommune og omegn til bunds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                area: "Herlev",
                description: "Hovedområde med alle typer institutioner",
              },
              {
                area: "Ballerup",
                description: "Plejehjem og botilbud i området",
              },
              {
                area: "Rødovre",
                description: "Psykiatriske afdelinger og krisecentre",
              },
              {
                area: "Glostrup",
                description: "Specialiserede behandlingscentre",
              },
            ].map((location, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-4 text-red-200" />
                  <h3 className="text-lg font-semibold mb-2">{location.area}</h3>
                  <p className="text-red-100 text-sm">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50" asChild>
              <Link href="#kontakt">
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Humanity Focus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">Menneskelighed i Fokus</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empati og Professionalisme i Herlev</h2>
              <p className="text-lg text-gray-600 mb-6">
                I Herlev Kommune møder vi borgere med komplekse behov, der kræver både faglig ekspertise og menneskelig
                forståelse. Vores vikarer er ikke kun kvalificerede - de er også empatiske og forstår vigtigheden af at
                skabe trygge rammer for sårbare borgere.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi tror på, at kvalitetspleje starter med at se mennesket bag diagnosen. Derfor lægger vi stor vægt på
                at matche den rette vikar med den rette opgave, så både borgere og personale føler sig trygge og godt
                tilpas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Borgere hjulpet i Herlev</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">Kvalificerede vikarer</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Menneskelighed i fokus - Herlev"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Akut Indsats i Herlev Kommune</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Når situationen kræver øjeblikkelig handling, er vi klar til at hjælpe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">24/7 Beredskab</h3>
              <div className="space-y-4">
                {[
                  "Hurtig respons inden for 2 timer",
                  "Erfarne vikarer til akutte situationer",
                  "Specialiseret i kriseintervention",
                  "Tæt samarbejde med Herlev Kommune",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="tel:41443333">
                    <Phone className="mr-2 h-5 w-5" />
                    Akut hjælp: 41 44 33 33
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Akut indsats i Herlev"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kontakt Psykiatrisk Vikarbureau Herlev
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ring til os i dag og få professionel hjælp til jeres vikarbureau i Herlev Kommune
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ring Nu</h3>
                <p className="text-gray-600 mb-4">Få øjeblikkelig hjælp</p>
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="tel:41443333">41 44 33 33</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Email</h3>
                <p className="text-gray-600 mb-4">Vi svarer inden for 2 timer</p>
                <Button variant="outline" asChild>
                  <Link href="mailto:herlev@tryghedspersonale.dk">Send besked</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Åbningstider</h3>
                <p className="text-gray-600 mb-2">Man-Fre: 07:00-22:00</p>
                <p className="text-gray-600">Weekend: 08:00-20:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-red-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Har I brug for vikarer i Herlev?</h3>
              <p className="text-gray-600 mb-6">
                Ring til os nu og få kvalificerede vikarer til jeres institution i Herlev Kommune. Vi garanterer hurtig
                service og professionel håndtering.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <Link href="tel:41443333">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33 Nu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Psykiatrisk Vikarbureau Herlev - Søgeord</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            {[
              "Vikarer Herlev",
              "Psykiatrisk vikarbureau Herlev",
              "Plejehjem vikarer Herlev",
              "Botilbud vikarer Herlev",
              "Sundhedsvikarer Herlev",
              "Akut vikarer Herlev",
              "Vikarbureau Herlev Kommune",
              "Psykiatri vikarer Herlev",
              "Komplekse borgerforløb Herlev",
              "Krisecentre vikarer Herlev",
              "Demens vikarer Herlev",
              "Socialpædagogik vikarer Herlev",
              "Vikarer Ballerup",
              "Vikarer Rødovre",
              "Vikarer Glostrup",
              "24/7 vikarer Herlev",
              "Aflastning Herlev",
              "Forflytning vikarer Herlev",
              "Specialiserede vikarer Herlev",
              "Tryghedspersonale Herlev",
              "Kvalificerede vikarer Herlev",
              "Erfarne vikarer Herlev",
            ].map((keyword, index) => (
              <div key={index} className="bg-gray-800 rounded px-3 py-2 text-center">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
