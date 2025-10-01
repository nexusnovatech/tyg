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

export default function FredensbergClientPage() {
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
      alt: "Tryghedsmedarbejder i samtale med borger i Fredensborg",
      title: "Eksperter i komplekse borgerforløb",
      subtitle:
        "Vores personale er uddannet til at håndtere komplekse borgerforløb med psykiske sygdomme, demens og udfordrende adfærdsmønstre. Vi prioriterer faglighed og empati højt i alle opgaver i Fredensborg Kommune.",
    },
    {
      src: "/tryghedspersonale-aeldre-stoette.jpeg",
      alt: "Tryghedsmedarbejder der støtter ældre borger i Fredensborg",
      title: "Specialiseret i psykiatrisk støtte",
      subtitle:
        "Som psykiatrisk vikarbureau i Fredensborg forstår vi de særlige udfordringer ved arbejdet med borgere med psykiske lidelser, demens og komplekse diagnoser. Vores vikarer har omfattende erfaring med at skabe trygge rammer.",
    },
    {
      src: "/tryghedspersonale-park-samtale.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i park i Fredensborg",
      title: "Akut hjælp når I har brug for det",
      subtitle:
        "Vi tilbyder både akut udrykning og planlagte vikarløsninger til plejehjem, botilbud, socialpsykiatriske enheder og specialiserede tilbud i hele Fredensborg Kommune. Vores mål er at være jeres pålidelige partner.",
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
      <EnhancedHeroSlider slides={heroSlides} locationLabel="Fredensborg & omegn" />

      {/* Red Banner Section - Mobile responsive stacking */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Søger du efter et psykiatrisk Vikarbureau i Fredensborg?
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
                Tryghedspersonale.dk – Din lokale partner for psykiatriske vikarer i Fredensborg
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
                    I Fredensborg Kommune tilbyder Tryghedspersonale.dk professionelle psykiatriske vikarer, som brænder
                    for at skabe trygge rammer for borgere og personale. Vi leverer skræddersyede vikarer til plejehjem,
                    bosteder, socialpsykiatriske enheder og specialiserede tilbud i hele området.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 leading-relaxed mb-12"
                  >
                    Vi forstår de særlige udfordringer, der kan opstå i arbejdet med borgere med psykiske sygdomme,
                    demens og komplekse adfærdsmønstre. Derfor prioriterer vi faglighed og empati højt i alle opgaver.
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
                      Vores ekspertiseområder
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Psykiatrisk støtte:</strong>
                          <p className="text-gray-700 text-sm">
                            behandling af psykoser, personlighedsforstyrrelser, angst og komplekse diagnoser
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Demenspleje:</strong>
                          <p className="text-gray-700 text-sm">
                            omsorg for ældre med udadreagerende eller psykotiske symptomer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Socialpædagogik:</strong>
                          <p className="text-gray-700 text-sm">
                            arbejde med børn, unge og voksne med udviklingsforstyrrelser og psykiske lidelser
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Akut og midlertidig indsats:</strong>
                          <p className="text-gray-700 text-sm">
                            når kriser opstår, og det faste personale har brug for hjælp
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
                    <p className="text-sm opacity-90 mb-4">Vi er klar til at hjælpe døgnet rundt</p>
                    <a href="tel:+4541443333">
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
                      <p>• Fredensborg by</p>
                      <p>• Humlebæk</p>
                      <p>• Nivå</p>
                      <p>• Kokkedal</p>
                      <p>• Øvrige dele af kommunen</p>
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
                        src="/fredensborg-hero.png"
                        alt="Psykiatrisk vikarbureau Fredensborg - professionel støtte"
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
              Hvorfor vælge Tryghedspersonale.dk i Fredensborg?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi går langt for at sikre, at vores vikarer ikke blot er kvalificerede, men også har den nødvendige
              forståelse for den menneskelige side af arbejdet
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
                Vi går langt for at sikre, at vores vikarer ikke blot er kvalificerede, men også har den nødvendige
                forståelse for den menneskelige side af arbejdet. Vores team er vant til at arbejde i miljøer, hvor der
                kræves tålmodighed, fleksibilitet og gode relationskompetencer.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Udfordrende borgeradfærd kan gøre det nødvendigt at hente ekstern vikarhjælp, fx ved voldsom eller
                truende adfærd, psykiske kriser og sammenbrud, forværrede demenssymptomer eller når situationen kræver
                ekstra ressourcer og faglig ro.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vi hjælper, når det bliver svært
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Voldsom eller truende adfærd</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Psykiske kriser og sammenbrud</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Forværrede demenssymptomer</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Situationen kræver ekstra ressourcer og faglig ro</span>
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
                    src="/tryghedspersonale-aeldre-stoette.jpeg"
                    alt="Professionel psykiatrisk vikar i varm samtale med ældre borger i Fredensborg - nærværende og forstående pleje"
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
                    Midlertidig støtte ved visitation og komplekse forløb
                  </h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">
                  Midlertidig støtte ved visitation og komplekse forløb
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Ved længerevarende sagsbehandling, visitation eller udredning kan vi tilbyde fleksibel og stabil
                vikarhjælp, der sikrer kontinuitet og aflastning for personalet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vores vikarer er uddannede til at håndtere disse situationer trygt og professionelt, og kan arbejde
                selvstændigt under pres med gode relationskompetencer.
              </p>
              <div className="bg-gradient-to-r from-red-50 to rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vikarer med empati, erfaring og robusthed
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Relevant uddannelse og erfaring</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Stort engagement i det sociale og psykiatriske felt</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Konfliktnedtrapning og relationsarbejde</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Kan arbejde selvstændigt under pres</span>
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
                    src="/tryghedspersonale-park-samtale.jpeg"
                    alt="Professionel psykiatrisk vikar i samtale med borger i Fredensborg - midlertidig støtte og aflastning"
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
              Lokalt kendskab – hurtig indsats i Fredensborg Kommune
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi har solid erfaring med at levere psykiatriske vikarer i Fredensborg, og vores personale er vant til
              kommunens arbejdsgange og tilbud
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Vi dækker blandt andet</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Fredensborg by</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Humlebæk</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Nivå</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Kokkedal</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Øvrige dele af kommunen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>
                    Vi har lokalt kendskab til Fredensborg Kommune og kan derfor levere hurtig og målrettet hjælp, når I
                    har brug for det.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Vores lokale tilstedeværelse</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vi kender de lokale forhold og kan derfor reagere hurtigt, når der opstår akutte situationer eller behov
                for ekstra personale.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Hurtig responstid:</strong>
                    <p className="text-gray-700">Vi kan være på stedet inden for kort tid</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Lokalt kendskab:</strong>
                    <p className="text-gray-700">Vi kender kommunens procedurer og arbejdsgange</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Fleksible løsninger:</strong>
                    <p className="text-gray-700">Vi tilpasser os jeres specifikke behov og krav</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Menneskelighed i fokus</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi tror på, at alle mennesker fortjener en tryg og værdig hverdag – også når situationen bliver svær
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vores tilgang til tryghed</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Møde borgeren med nærvær og respekt</h4>
                      <p className="text-gray-700">Vi møder borgeren dér, hvor vedkommende er, med ro og forståelse</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Aflaste det faste personale</h4>
                      <p className="text-gray-700">
                        Vi er en tryg aflastning for det eksisterende personale i pressede situationer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Skabe ro og stabilitet</h4>
                      <p className="text-gray-700">Vi arbejder for at skabe ro og stabilitet i komplekse forløb</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Professionel håndtering</h4>
                      <p className="text-gray-700">Vi håndterer udfordrende adfærd professionelt og trygt</p>
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
                  <strong>Vores mål er ikke kun at støtte borgerne,</strong> men også at være en tryg aflastning for det
                  eksisterende personale i Fredensborg Kommune.
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
                  <h2 className="text-3xl font-bold text-gray-900">Specialiserede kompetencer</h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">Specialiserede kompetencer</h2>
              </div>
              <p className="text-xl font-semibold mb-8 text-gray-800">
                Vi har erfaring med komplekse psykiatriske tilstande og udfordrende adfærd
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Psykoser og personlighedsforstyrrelser:</strong> Erfaring med komplekse diagnoser og
                    behandlingsforløb
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Demens med udadreagerende adfærd:</strong> Specialiseret i håndtering af aggressive eller
                    psykotiske symptomer
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Udviklingsforstyrrelser:</strong> Arbejde med børn, unge og voksne med særlige behov
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg">
                    <strong>Krisehåndtering:</strong> Akut stabilisering og konfliktnedtrapning
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-8 text-lg leading-relaxed">
                Vores vikarer er uddannede til at håndtere disse situationer trygt og professionelt.
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
                  <h2 className="text-3xl font-bold text-gray-900">Vores mission</h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">Vores mission</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                At skabe tryghed og stabilitet for både borgere og personale i Fredensborg Kommune. Vi tror på, at alle
                mennesker fortjener en værdig behandling, uanset hvor kompleks situationen er.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Vores vikarer arbejder ud fra princippet om at møde borgeren dér, hvor vedkommende er, med nærvær, ro og
                respekt – samtidig med at vi aflaster det faste personale i pressede situationer.
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
                    src="/fredensborg-hero.png"
                    alt="Tryghedspersonale.dk - Når en borger udviser udfordrende adfærd i Fredensborg - Ring 41 44 33 33"
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
              Kontakt os for professionel vikarhjælp i Fredensborg
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto">
              Har I akut brug for støtte, eller ønsker I at planlægge langsigtet vikarassistance? Kontakt os for en
              uforpligtende dialog.
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
                <p className="text-xl">Hele året – også i weekender og ferier</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Footer with Search Terms */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-sm" style={{ color: "#127035" }}>
            <p className="font-semibold mb-3">
              <strong>Søgeord:</strong> psykiatrisk vikarbureau Fredensborg, vikar psykiatri Fredensborg Kommune,
              socialpsykiatrisk vikar Fredensborg, akut vikar demens Fredensborg, vikarbureau til bosted i Fredensborg,
              psykiatrisk støtte Fredensborg by
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
