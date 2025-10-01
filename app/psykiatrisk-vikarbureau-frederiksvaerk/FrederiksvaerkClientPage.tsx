"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Heart, Brain, Clock, Shield, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"
import CityCarousel from "@/components/CityCarousel"

export default function FrederiksvaerkClientPage() {
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
      src: "/tryghedspersonale-samtale-udendoers.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i Frederiksværk",
      title: "Eksperter i udadreagerende adfærd",
      subtitle:
        "Vores personale er uddannet til at håndtere komplekse borgerforløb, hvor adfærd kan være uforudsigelig, udadreagerende eller præget af demenssymptomer. Det er netop i disse situationer, at det rigtige personale gør forskellen – og det er her, vi kommer ind i billedet.",
    },
    {
      src: "/tryghedspersonale-aeldre-stoette.jpeg",
      alt: "Tryghedsmedarbejder der støtter ældre borger i Frederiksværk",
      title: "Specialiseret i socialpsykiatri",
      subtitle:
        "Som psykiatrisk vikarbureau i Frederiksværk forstår vi de særlige udfordringer, der opstår i arbejdet med borgere med psykiske lidelser, demens og udviklingsforstyrrelser. Vores vikarer har omfattende erfaring med at skabe trygge rammer og professionelle relationer.",
    },
    {
      src: "/tryghedspersonale-park-samtale.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i park i Frederiksværk",
      title: "Akut hjælp når I har brug for det",
      subtitle:
        "Vi tilbyder både akut udrykning og planlagte vikarløsninger til plejehjem, botilbud, psykiatriske afdelinger, krisecentre og asylcentre i Halsnæs Kommune og hele Nordsjælland. Vores mål er at være jeres pålidelige partner.",
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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [services.length])

  // Touch/Mouse handlers for swipe functionality
  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setTranslateX(0)
  }, [])

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return

      const diff = clientX - startX
      setTranslateX(diff)
    },
    [isDragging, startX],
  )

  const handleEnd = useCallback(() => {
    if (!isDragging) return

    setIsDragging(false)

    // Threshold for swipe (30% of container width or 100px minimum)
    const threshold = Math.max(100, (containerRef.current?.offsetWidth || 300) * 0.3)

    if (translateX > threshold) {
      prevSlide()
    } else if (translateX < -threshold) {
      nextSlide()
    }

    setTranslateX(0)
  }, [isDragging, translateX, nextSlide, prevSlide])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  // Safe function to get window width
  const getSlideTransform = () => {
    if (typeof window === "undefined") return 0
    if (window.innerWidth < 640) return currentSlide * 100
    if (window.innerWidth < 1024) return currentSlide * 50
    return currentSlide * 33.333
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSlider slides={heroSlides} locationLabel="Frederiksværk & Halsnæs" />

      {/* Red Banner Section - Mobile responsive stacking */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Søger du efter et psykiatrisk Vikarbureau i Frederiksværk?
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
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2">Velkommen</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Tryghedspersonale.dk – Psykiatriske vikarer med hjertet på rette sted i Frederiksværk
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
                    Hos <strong>Tryghedspersonale.dk</strong> er vi stolte af at levere erfarne og engagerede
                    psykiatriske og socialpædagogiske vikarer til <strong>Frederiksværk og Halsnæs Kommune</strong>.
                    Vores vikarer sikrer tryghed og stabilitet i plejehjem, bosteder og specialiserede tilbud, hvor der
                    stilles høje krav til faglighed og empati.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 leading-relaxed mb-12"
                  >
                    Vi forstår kompleksiteten i arbejdet med borgere med psykiske lidelser, demens og udadreagerende
                    adfærd, og derfor er vores personale nøje udvalgt og trænet til at imødekomme disse udfordringer.
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
                      Vores kernekompetencer
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Psykiatrisk støtte:</strong>
                          <p className="text-gray-700 text-sm">
                            behandling af psykoser, personlighedsforstyrrelser, angst, PTSD m.m.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Demenspleje:</strong>
                          <p className="text-gray-700 text-sm">
                            støtte til borgere med udadreagerende eller komplekse demenssymptomer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Socialpædagogik:</strong>
                          <p className="text-gray-700 text-sm">
                            arbejde med børn og voksne med autismespektrumforstyrrelser, ADHD og
                            tilknytningsforstyrrelser
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Akut indsats:</strong>
                          <p className="text-gray-700 text-sm">
                            hurtig og stabil bemanding ved kriser og pres på faste teams
                          </p>
                        </div>
                      </div>
                    </div>
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
                      <h3 className="font-bold text-lg">Ring nu</h3>
                    </div>
                    <p className="text-sm opacity-90 mb-4">
                      Vi er tilgængelige alle dage – også i weekender og på helligdage
                    </p>
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
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Vi dækker</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Frederiksværk</p>
                      <p>• Ølsted</p>
                      <p>• Halsnæs Kommune</p>
                      <p>• Nordsjælland</p>
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
                        src="/frederiksvaerk-hero.png"
                        alt="Psykiatrisk vikarbureau Frederiksværk - specialiseret i komplekse borgerforløb"
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
                Hos Tryghedspersonale.dk tror vi på, at alle mennesker fortjener en tryg og værdig hverdag – også når
                situationen bliver svær. Vores vikarer arbejder ud fra princippet om at møde borgeren dér, hvor
                vedkommende er, med nærvær, ro og respekt.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Samtidig ved vi, at pressede arbejdsmiljøer og komplekse borgersituationer kan slide på faste teams.
                Derfor er vores mål ikke kun at støtte borgerne, men også at være en tryg aflastning for det
                eksisterende personale.
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
                    src="/koege-psykiatrisk-vikar-caring.png"
                    alt="Professionel psykiatrisk vikar i varm samtale med ældre borger i Frederiksværk - nærværende og forstående pleje"
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
                    Midlertidig aflastning ved visitation og længerevarende forløb
                  </h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">
                  Midlertidig aflastning ved visitation og længerevarende forløb
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Vi tilbyder midlertidig bemanding, så faste medarbejdere i Frederiksværk kan få aflastning under
                visitation, udredning eller andre komplekse sagsforløb.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Når udfordringerne vokser – vi træder til med specialiserede vikarer. Vores vikarer håndterer aggressiv
                eller truende adfærd, psykiske kriser og akutte sammenbrud, forværring af demenssymptomer og behov for
                ekstra ressourcer i pressede situationer.
              </p>
              <div className="bg-gradient-to-r from-red-50 to rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores vikarer håndterer bl.a.
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Aggressiv eller truende adfærd</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Psykiske kriser og akutte sammenbrud</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Forværring af demenssymptomer</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Behov for ekstra ressourcer i pressede situationer</span>
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
                    src="/psykiatrisk-vikarbureau-koege-2.png"
                    alt="Midlertidig aflastning ved visitation og længerevarende forløb i Frederiksværk"
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
              Lokal viden og hurtig respons i Frederiksværk og Halsnæs Kommune
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi dækker Frederiksværk, Ølsted, og andre områder i Halsnæs Kommune med et stærkt lokalkendskab, der
              sikrer effektiv indsats og samarbejde.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Vores dækningsområde</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Frederiksværk</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Ølsted</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Halsnæs Kommune</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Nordsjælland</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Region Hovedstaden</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>
                    Vi dækker også tilstødende kommuner og kan levere vikarer til hele Nordsjælland efter behov.
                  </strong>
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
                Vores vikarer kender Halsnæs Kommune og arbejdsgangene i de lokale institutioner, hvilket sikrer hurtig
                integration og effektiv støtte.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Hurtig respons:</strong>
                    <p className="text-gray-700">Vi kan levere vikarer med kort varsel til akutte situationer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Lokalt netværk:</strong>
                    <p className="text-gray-700">Tæt samarbejde med institutioner i Frederiksværk og omegn</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Fleksible løsninger:</strong>
                    <p className="text-gray-700">Tilpassede vikarløsninger efter jeres specifikke behov</p>
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
              Vikarer med faglighed, engagement og robusthed
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Alle vores vikarer er nøje udvalgt og trænet til at håndtere komplekse situationer med empati og
              professionalisme
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alle vores vikarer er</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Uddannet inden for psykiatri, pædagogik eller sundhedsfag
                      </h4>
                      <p className="text-gray-700">Solid faglig baggrund og relevant uddannelse</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Erfarne i konflikthåndtering og deeskalering
                      </h4>
                      <p className="text-gray-700">Praktisk erfaring med udfordrende situationer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Empatiske, rolige og selvstændige</h4>
                      <p className="text-gray-700">Personlige egenskaber der skaber tryghed</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Dedikerede til at skabe tryghed og trivsel
                      </h4>
                      <p className="text-gray-700">For både borgere og personale</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100 inline-block">
                <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl">
                  <strong>
                    Vi tilbyder fleksible og hurtige vikarløsninger med fokus på kvalitet, tryghed og respekt.
                  </strong>{" "}
                  Vores vikarer har lokal erfaring og kendskab til Halsnæs Kommunes arbejdsgange, hvilket sikrer
                  effektiv og smidig assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block lg:hidden">
                  <Brain className="w-10 h-10 text-red-600" />
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    <Brain className="w-10 h-10 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Specialiseret i udfordrende adfærd</h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">Specialiseret i udfordrende adfærd</h2>
              </div>
              <p className="text-xl font-semibold mb-8 text-gray-800">
                Vores vikarer er specialister i at håndtere komplekse borgersituationer
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Psykiatrisk støtte:</strong> behandling af psykoser, personlighedsforstyrrelser, angst, PTSD
                    m.m.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Demenspleje:</strong> støtte til borgere med udadreagerende eller komplekse demenssymptomer
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Socialpædagogik:</strong> arbejde med børn og voksne med autismespektrumforstyrrelser, ADHD
                    og tilknytningsforstyrrelser
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Akut indsats:</strong> hurtig og stabil bemanding ved kriser og pres på faste teams
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-8 text-lg leading-relaxed">
                Vi forstår, at hver borger er unik, og at der ikke findes standardløsninger. Derfor tilpasser vi altid
                vores indsats til den konkrete situation og de specifikke behov.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block lg:hidden">
                  <Heart className="w-10 h-10 text-red-600" />
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    <Heart className="w-10 h-10 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Akut stabilisering</h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">Akut stabilisering</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Når situationen eskalerer, og det faste personale ikke længere kan håndtere borgeren forsvarligt, træder
                vi til med akut stabilisering og professionel håndtering.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vores mål er at genoprette ro og sikkerhed for alle parter, så det normale arbejde kan genoptages
                hurtigst muligt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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

              <div className="bg-gradient-to-r from-red-50 to rose-50 p-8 rounded-2xl border border-red-100">
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

              <div className="bg-gradient-to-r from-red-50 to rose-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores akutte indsats
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I sådanne tilfælde kan det blive nødvendigt at trække personalet væk og involvere ekstern hjælp – og
                  her er vi klar til at rykke hurtigt ud. Vi stabiliserer situationen, skaber ro og hjælper med at
                  håndtere krisen korrekt, indtil en varig løsning er på plads.
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
                    src="/koege-psykiatrisk-vikar-institutional.png"
                    alt="Tryghedspersonale.dk - Når en borger udviser udfordrende adfærd i Frederiksværk - Ring 41 44 33 33"
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
              Kontakt os for psykiatrisk vikarhjælp i Frederiksværk
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto">
              Har I akut behov for vikarhjælp eller ønsker planlægning af længerevarende vikarassistance? Kontakt os for
              en uforpligtende samtale.
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
                <h3 className="text-2xl font-bold mb-4">Tilgængelighed</h3>
                <p className="text-xl">Alle ugens dage - også weekender og helligdage</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Footer with Search Terms */}
      <section className="py-16" style={{ backgroundColor: "#e9f8ee" }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-sm space-y-4" style={{ color: "#127035" }}>
            <p>
              <strong>Søgeord:</strong> psykiatrisk vikarbureau Frederiksværk, vikar psykiatri Halsnæs Kommune,
              socialpsykiatrisk vikar Frederiksværk, akut vikar demens Frederiksværk, vikarbureau til bosted
              Frederiksværk, psykiatrisk støtte Halsnæs
            </p>
            <p>Vi dækker: Frederiksværk, Ølsted, Halsnæs Kommune og øvrige dele af Nordsjælland</p>
          </div>
        </div>
      </section>
    </div>
  )
}
