"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Heart, Clock, Shield, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"
import { allCityInfo } from "@/lib/allCityInfo"
import CityCarousel from "@/components/CityCarousel"

export default function NakskovClientPage() {
  // Add noindex meta tag
  useEffect(() => {
    const metaRobots = document.createElement("meta")
    metaRobots.name = "robots"
    metaRobots.content = "noindex, nofollow"
    document.head.appendChild(metaRobots)

    return () => {
      document.head.removeChild(metaRobots)
    }
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const heroSlides = [
    {
      src: "/nakskov-hero.png",
      alt: "Psykiatrisk Vikarbureau Nakskov - Specialister i komplekse borgerforløb",
      title: "Specialister i komplekse borgerforløb",
      subtitle:
        "Velkommen til Tryghedspersonale.dk, dit lokale og specialiserede psykiatriske vikarbureau i Nakskov og Lolland Kommune. Vi leverer fagligt stærke, erfarne og omsorgsfulde vikarer til socialpsykiatrien, demenspleje og specialpædagogiske tilbud – både kommunale og private.",
    },
    {
      src: "/nakskov-image-1.png",
      alt: "Håndtering af udadreagerende, voldsomme og psykotiske borgere i Nakskov",
      title: "Ekspertise i komplekse borgerforløb",
      subtitle:
        "Vores personale er uddannet til at håndtere komplekse borgerforløb med psykiske lidelser, demens og sociale udfordringer. Vi forstår vigtigheden af en professionel og empatisk tilgang til borgere med komplekse behov.",
    },
    {
      src: "/tryghedspersonale-park-samtale.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i park i Nakskov",
      title: "Akut hjælp når I har brug for det",
      subtitle:
        "Vi tilbyder både akut udrykning og planlagte vikarløsninger til plejehjem, botilbud, socialpsykiatriske tilbud og akutte situationer i hele Nakskov og Lolland Kommune. Vores mål er at være jeres pålidelige partner.",
    },
  ]

  const services = [
    {
      title: "Vikar til plejehjem",
      subtitle: "Professionel pleje og omsorg",
      description:
        "Erfarne vikarer til plejehjem med ekspertise i demenspleje og udadreagerende adfærd hos ældre borgere.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20plejehjem%20-ie8pf3LdnULgPcd1zNXAQ0L2GQZPFX.png",
      link: "/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd",
    },
    {
      title: "Vikar til asylcentre",
      subtitle: "Specialiseret støtte",
      description:
        "Vi tilbyder erfarne vikarer til asylcentre med ekspertise i håndtering af æresrelateret vold og konfliktløsning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vikar-asylcenter-udrejsecenter-Le60NIU22xLcNFcyMQnRp5hYIwVHaD.png",
      link: "/ydelser/fastvagt-asylcentre",
    },
    {
      title: "Vikar til botilbud",
      subtitle: "Døgninstitutioner og opholdssteder",
      description: "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20bosteder%2C%20d%C3%B8gninstitutioner-AfOKXClU0bHfrGN6IXum74P0Pp3hXJ.png",
      link: "/ydelser/botilbud",
    },
    {
      title: "Vikar til krisecentre",
      subtitle: "Professionel krisestøtte",
      description: "Professionel krisestøtte til kvinder og mænd ramt af vold, kontrol eller æresrelateret vold.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20krisecenter.png-nr3EcdWIsESwSMbt4DED8oJwonHUR0.jpeg",
      link: "/ydelser/krisecentre",
    },
    {
      title: "Vikar til psykiatrien",
      subtitle: "Erfarne psykiatriske vikarer",
      description: "Erfarne vikarer til psykiatrien med menneskelig indsigt, faglighed og kontinuitet i behandlingen.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar-Psykiatri-Vikar-til-psykiatrien.png-NgZAuhROj5XmpUZr0AoikmnYtfbNQj.jpeg",
      link: "/ydelser/psykiatrien",
    },
  ]

  const data = allCityInfo["nakskov-psykiatrisk-vikarbureau"] || allCityInfo["koege-psykiatrisk-vikarbureau"]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSlider slides={heroSlides} locationLabel="Nakskov & Lolland Kommune" />

      {/* Red Banner Section - Mobile responsive stacking */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Søger du efter et psykiatrisk Vikarbureau i Nakskov?
              </h3>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/kontakt" className="flex-1 sm:flex-none">
                <Button
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full border-0 w-full sm:w-auto"
                >
                  Kontakt os
                </Button>
              </Link>
              <a href="tel:41443333" className="flex-1 sm:flex-none">
                <Button
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full border-0 w-full sm:w-auto"
                >
                  Få en pris
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean and Professional */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="bg-red-100 text-red-600 mb-4 md:mb-6 text-sm px-4 py-2">Ydelser</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
              Vores service områder
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Vi tilbyder specialiserede vikarer til forskellige områder inden for psykiatri og socialarbejde
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <CityCarousel services={services} />
      </section>

      {/* Enhanced Welcome Section - No Collapsible */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2">Psykiatrisk Vikarbureau</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Tryghedspersonale.dk – Psykiatrisk Vikarbureau i Nakskov med fokus på komplekse borgerforløb
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="prose prose-xl max-w-none">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-gray-700 leading-relaxed mb-8 font-medium"
                  >
                    I <strong>Nakskov og Lolland Kommune</strong> tilbyder vi hos <strong>Tryghedspersonale.dk</strong>{" "}
                    psykiatriske og socialpædagogiske vikarer, der brænder for at skabe trygge, stabile rammer for
                    borgere med komplekse behov. Vores specialiserede vikarer har erfaring med borgere, der har psykiske
                    lidelser, demens og sociale udfordringer, og de forstår vigtigheden af en professionel og empatisk
                    tilgang.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 leading-relaxed mb-12"
                  >
                    Vi leverer fleksibel og kompetent vikarhjælp til plejehjem, bosteder, socialpsykiatriske tilbud og
                    akutte situationer i hele Nakskov og omegn.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100"
                  >
                    <h3 className="font-bold text-2xl mb-6 text-gray-900 flex items-center">
                      <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                      Ekspertise i komplekse borgerforløb
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Psykiske lidelser</strong>
                          <p className="text-gray-700 text-sm">
                            som skizofreni, personlighedsforstyrrelser, angst og PTSD
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Demens</strong>
                          <p className="text-gray-700 text-sm">med komplekse og udadreagerende symptomer</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Socialpædagogiske udfordringer</strong>
                          <p className="text-gray-700 text-sm">
                            hos børn, unge og voksne med udviklingsforstyrrelser og psykiske vanskeligheder
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Akutte situationer</strong>
                          <p className="text-gray-700 text-sm">hvor der er brug for ro, struktur og sikkerhed</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-6">
                      De har kompetencer inden for konflikthåndtering, deeskalering og relationsarbejde, hvilket sikrer
                      trygge omgivelser for både borgere og personale.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 mr-3" />
                      <h3 className="font-bold text-lg">Kontakt os i dag</h3>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Vi er klar til at hjælpe jer hurtigt og professionelt</p>
                    <a href="tel:41443333">
                      <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                        41 44 33 33
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Vi dækker følgende områder</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        • <strong>Nakskov by</strong>
                      </p>
                      <p>
                        • <strong>Rødby</strong>
                      </p>
                      <p>
                        • <strong>Maribo</strong>
                      </p>
                      <p>
                        • <strong>Sakskøbing</strong>
                      </p>
                      <p>
                        • Samt øvrige dele af <strong>Lolland Kommune</strong>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="aspect-[3/4]">
                      <Image
                        src="/nakskov-hero.png"
                        alt="Psykiatrisk Vikarbureau Nakskov - Specialister i komplekse borgerforløb"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.src = "/placeholder.svg?height=400&width=320"
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Redesigned with Taller Image */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-gradient-to-br from-red-500/20 to-rose-500/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 bg-gradient-to-tr from-red-400/15 to-red-500/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Vores mission: Skabe tryghed – for både borgere og personale
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi tror på, at alle mennesker fortjener en tryg og værdig hverdag – også når situationen bliver svær
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Hos Tryghedspersonale.dk tror vi på, at{" "}
                <strong>alle mennesker fortjener en tryg og værdig hverdag</strong> – også når situationen bliver svær.
                Vores vikarer arbejder ud fra princippet om <strong>at møde borgeren dér, hvor vedkommende er</strong>,
                med nærvær, ro og respekt.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Samtidig ved vi, at pressede arbejdsmiljøer og komplekse borgersituationer kan slide på faste teams.
                Derfor er vores mål ikke kun at støtte borgerne, men også at være en{" "}
                <strong>tryg aflastning for det eksisterende personale</strong>.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores tilgang til tryghed
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Møde borgeren med nærvær og respekt</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Aflaste det faste personale i pressede situationer</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Skabe ro og stabilitet i komplekse forløb</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Professionel håndtering af udfordrende adfærd</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <a href="tel:41443333">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-3" />
                    Kontakt os i dag
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Tall Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[2/3]">
                  <Image
                    src="/nakskov-hero.png"
                    alt="Professionel psykiatrisk vikar i varm samtale med ældre borger - nærværende og forstående pleje"
                    fill
                    className="object-cover w-full h-full select-none pointer-events-none transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.src = "/placeholder.svg?height=600&width=400"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aflastning ved forflytning Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="text-center lg:text-left">
                <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block lg:hidden">
                  <Clock className="w-10 h-10 text-red-600" />
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    <Clock className="w-10 h-10 text-red-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Støtte og aflastning i komplekse borgerforløb
                  </h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">
                  Støtte og aflastning i komplekse borgerforløb
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Vi ved, at arbejdet med komplekse borgerforløb kan være udfordrende og kræver stabilitet. Derfor
                tilbyder vi fleksibel vikarhjælp med kort varsel ved akut behov, midlertidig aflastning og støtte til
                faste teams ved visitation, udredning eller kriser.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vi tilbyder <strong>midlertidig aflastning</strong>, hvor vores vikarer varetager den konkrete opgave
                med borgeren – eller går ind som ekstra ressourcer i teamet, så det faste personale ikke bliver
                overbelastet.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores aflastningsløsninger
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Fleksibel vikarhjælp med kort varsel ved akut behov</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Midlertidig aflastning og støtte til faste teams</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">
                      Langsigtet vikarassistance med fokus på kontinuitet og tryghed
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5]">
                  <Image
                    src="/nakskov-image-1.png"
                    alt="Håndtering af udadreagerende, voldsomme og psykotiske borgere i Nakskov"
                    fill
                    className="object-cover select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = "/placeholder.svg?height=500&width=400"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lokalt psykiatrisk vikarbureau Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <MapPin className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Lokalt psykiatrisk vikarbureau i Nakskov og Lolland Kommune
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tryghedspersonale.dk er <strong>forankret i Nakskov</strong>, og vi har et stærkt netværk af dygtige
              vikarer, der kender området og de kommunale arbejdsgange i Lolland Kommune.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Vi dækker følgende områder</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Nakskov by</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Rødby</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Maribo</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Sakskøbing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Samt øvrige dele af Lolland Kommune</strong>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Lokalt kendskab gør forskellen</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Det lokale kendskab betyder, at vi kan <strong>reagere hurtigt og effektivt</strong> – og samtidig
                bidrage med forståelse for stedets kultur, struktur og borgersammensætning.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Hurtig responstid</strong>
                    <p className="text-gray-700">Vi kan reagere hurtigt på akutte behov i lokalområdet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Kendskab til kommunale arbejdsgange</strong>
                    <p className="text-gray-700">Vores vikarer forstår lokale procedurer og samarbejdsformer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Forståelse for borgersammensætning</strong>
                    <p className="text-gray-700">Vi kender de særlige udfordringer og behov i området</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menneskelighed i fokus Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <Users className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Menneskelighed i fokus – vikarer med hjertet på det rette sted
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi kalder os ikke tryghedspersonale uden grund. Vores team består af nøje udvalgte vikarer, som{" "}
              <strong>brænder for det sociale og psykiatriske arbejde</strong> og som forstår, hvor vigtigt det er at
              bevare menneskeligheden – også i pressede situationer.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fælles for vores vikarer er</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Uddannelse og erfaring</h4>
                      <p className="text-gray-700">inden for psykiatri og socialpædagogik</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Stærke samarbejdsevner</h4>
                      <p className="text-gray-700">og forståelse for komplekse tværfaglige miljøer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Selvstændighed og ro</h4>
                      <p className="text-gray-700">
                        Evnen til at arbejde selvstændigt og bevare roen i kritiske situationer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Grundlæggende respekt</h4>
                      <p className="text-gray-700">for den enkelte borger og kollega</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Når en borger udviser adfærd, der overskrider jeres ressourcer
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Det sker i ny og næ, at en borgers adfærd bliver så udfordrende, at det faste personale ikke længere kan
                håndtere situationen forsvarligt. Det kan fx skyldes:
              </p>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Voldsom udadreagerende adfærd</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">
                      Demens med psykotiske træk eller aggressivitet
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">
                      Uro eller psykisk ustabilitet hos borgeren
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Risiko for selvskade eller skade på andre</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores akutte indsats
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I sådanne tilfælde kan det blive nødvendigt at{" "}
                  <strong>trække personalet væk og involvere ekstern hjælp</strong> – og her er vi klar til at rykke
                  hurtigt ud. Vi <strong>stabiliserer situationen</strong>, skaber ro og hjælper med at holde
                  dagligdagen kørende, indtil en varig løsning er på plads.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <a href="tel:41443333">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-3" />
                    Ring nu: 41 44 33 33
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Tall Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[2/3]">
                  <Image
                    src="/nakskov-image-1.png"
                    alt="Tryghedspersonale.dk - Når en borger udviser udfordrende adfærd - Ring 41 44 33 33"
                    fill
                    className="object-cover select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.src = "/placeholder.svg?height=600&width=400"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Phone className="w-20 h-20 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Kontakt os – Vi er klar til at hjælpe i Nakskov og omegn
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto">
              Har I brug for hjælp? Kontakt os i dag, og lad os tage en uforpligtende snak om, hvordan vi kan hjælpe jer
              videre – hurtigt og professionelt.
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6 inline-block">
                  <Phone className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ring</h3>
                <p className="text-xl">
                  <a href="tel:41443333" className="hover:underline transition-all duration-200">
                    41 44 33 33
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6 inline-block">
                  <Mail className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Skriv</h3>
                <p className="text-xl">
                  <a href="mailto:info@tryghedspersonale.dk" className="hover:underline transition-all duration-200">
                    info@tryghedspersonale.dk
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6 inline-block">
                  <Clock className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Akut hjælp</h3>
                <p className="text-xl">Alle ugens dage</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Footer with Search Terms */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-sm text-gray-600 space-y-4">
            <p>
              <strong>Søgeord:</strong> psykiatrisk vikarbureau Nakskov, vikar til komplekse borgerforløb Nakskov,
              socialpsykiatrisk vikar Lolland Kommune, akut psykiatri vikar Nakskov, vikarbureau til bosted Nakskov,
              støtte til demens Nakskov
            </p>
            <p>Vi dækker: Nakskov, Rødby, Maribo, Sakskøbing og øvrige dele af Lolland Kommune</p>
          </div>
        </div>
      </section>
    </div>
  )
}
