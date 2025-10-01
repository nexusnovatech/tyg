"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Heart, Brain, Clock, Shield, ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"
import { allCityInfo } from "@/lib/allCityInfo"
import CityCarousel from "@/components/CityCarousel"

export default function NaestvedClientPage() {
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

  // Hero slider data with 3 slides
  const heroSlides = [
    {
      src: "/tryghedspersonale-samtale-udendoers.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i Køge",
      title: "Eksperter i udadreagerende adfærd",
      subtitle:
        "Vores personale er uddannet til at håndtere komplekse borgerforløb, hvor adfærd kan være uforudsigelig, udadreagerende eller præget af demenssymptomer. Det er netop i disse situationer, at det rigtige personale gør forskellen – og det er her, vi kommer ind i billedet.",
    },
    {
      src: "/tryghedspersonale-aeldre-stoette.jpeg",
      alt: "Tryghedsmedarbejder der støtter ældre borger i Køge",
      title: "Specialiseret i socialpsykiatri",
      subtitle:
        "Som psykiatrisk vikarbureau i Køge forstår vi de særlige udfordringer, der opstår i arbejdet med borgere med psykiske lidelser, demens og udviklingsforstyrrelser. Vores vikarer har omfattende erfaring med at skabe trygge rammer og professionelle relationer.",
    },
    {
      src: "/tryghedspersonale-park-samtale.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i park i Køge",
      title: "Akut hjælp når I har brug for det",
      subtitle:
        "Vi tilbyder både akut udrykning og planlagte vikarløsninger til plejehjem, botilbud, psykiatriske afdelinger, krisecentre og asylcentre i Køge Kommune og hele Region Sjælland. Vores mål er at være jeres pålidelige partner.",
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
    },
    {
      title: "Vikar til asylcentre",
      subtitle: "Specialiseret støtte",
      description:
        "Vi tilbyder erfarne vikarer til asylcentre med ekspertise i håndtering af æresrelateret vold og konfliktløsning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vikar-asylcenter-udrejsecenter-Le60NIU22xLcNFcyMQnRp5hYIwVHaD.png",
    },
    {
      title: "Vikar til botilbud",
      subtitle: "Døgninstitutioner og opholdssteder",
      description: "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20bosteder%2C%20d%C3%B8gninstitutioner-AfOKXClU0bHfrGN6IXum74P0Pp3hXJ.png",
    },
    {
      title: "Vikar til krisecentre",
      subtitle: "Professionel krisestøtte",
      description: "Professionel krisestøtte til kvinder og mænd ramt af vold, kontrol eller æresrelateret vold.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20krisecenter.png-nr3EcdWIsESwSMbt4DED8oJwonHUR0.jpeg",
    },
    {
      title: "Vikar til psykiatrien",
      subtitle: "Erfarne psykiatriske vikarer",
      description: "Erfarne vikarer til psykiatrien med menneskelig indsigt, faglighed og kontinuitet i behandlingen.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar-Psykiatri-Vikar-til-psykiatrien.png-NgZAuhROj5XmpUZr0AoikmnYtfbNQj.jpeg",
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

  const data = allCityInfo["naestved-psykiatrisk-vikarbureau"];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSlider slides={heroSlides} locationLabel="Køge & omegn" />

      {/* Red Banner Section - Mobile responsive stacking */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Søger du efter et Pædagogisk Vikarbureau i Køge?
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
        <CityCarousel />
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
            <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2">{data.welcome.badge}</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              {data.welcome.title}
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
                  {data.welcome.paragraphs[0]}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-700 leading-relaxed mb-12"
                >
                  {data.welcome.paragraphs[1]}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100"
                >
                  <h3 className="font-bold text-2xl mb-6 text-gray-900 flex items-center">
                    <div className="w-2 h-8 bg-red-600 rounded-full mr-4"></div>
                    {data.welcome.specialities.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.welcome.specialities.listItems.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">{item.strongText}</strong>
                          <p className="text-gray-700 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
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
                    <h3 className="font-bold text-lg">{data.welcome.contact.title}</h3>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{data.welcome.contact.description}</p>
                  <a href={`tel:+45${data.welcome.contact.phoneNumber.replace(/\s/g, '')}`}>
                    <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                      {data.welcome.contact.phoneNumber}
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
                  <h3 className="font-bold text-lg mb-4 text-gray-900">{data.welcome.coverage.title}</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    {data.welcome.coverage.listItems.map((item, index) => (
                      <p key={index}>• {item}</p>
                    ))}
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
                      src={data.welcome.image.src}
                      alt={data.welcome.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "/placeholder.svg?height=400&width=320";
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
                    src="/naestved-mission.png"
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
                    {data.relief.icon === 'Clock' && <Clock className="w-10 h-10 text-red-600" />}
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                    <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    {data.relief.icon === 'Clock' && <Clock className="w-10 h-10 text-red-600" />}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {data.relief.title}
                    </h2>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 lg:hidden">
                    {data.relief.title}
                </h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {data.relief.paragraphs[0]}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                {data.relief.paragraphs[1]}
                </p>
                <div className="bg-gradient-to-r from-red-50 to rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                    {data.relief.listTitle}
                </h3>
                <div className="space-y-4">
                    {data.relief.listItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-lg text-gray-700">{item}</span>
                    </div>
                    ))}
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
                    src={data.relief.image.src}
                    alt={data.relief.image.alt}
                    fill
                    className="object-cover select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "/placeholder.svg?height=500&width=400";
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
                {data.local.icon === 'MapPin' && <MapPin className="w-10 h-10 text-red-600" />}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {data.local.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {data.local.description}
            </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{data.local.coverageTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                    <div className="space-y-3">
                    {data.local.coverageAreas.slice(0, 3).map((area, index) => (
                        <div key={index} className="flex items-center">
                        <MapPin className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-lg font-semibold text-gray-900">{area}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                    <div className="space-y-3">
                    {data.local.coverageAreas.slice(3).map((area, index) => (
                        <div key={index} className="flex items-center">
                        <MapPin className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-lg font-semibold text-gray-900">{area}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>{data.local.extraCoverageInfo}</strong>
                </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{data.local.localKnowledgeTitle}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {data.local.localKnowledgeDescription}
                </p>
                <div className="space-y-6">
                {data.local.localKnowledgePoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                        <strong className="text-gray-900 text-lg">{point.strongText}</strong>
                        <p className="text-gray-700">{point.description}</p>
                    </div>
                    </div>
                ))}
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
                {data.humanity.icon === 'Users' && <Users className="w-10 h-10 text-red-600" />}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {data.humanity.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {data.humanity.description}
            </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{data.humanity.listTitle}</h3>

                <div className="grid md:grid-cols-2 gap-8">
                {data.humanity.listItems.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-start mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {item.strongText}
                        </h4>
                        <p className="text-gray-700">
                            {item.description}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
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
                    <strong>{data.humanity.conclusion.strongText}</strong> {data.humanity.conclusion.description}
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
                    {data.specialities.icon === 'Brain' && <Brain className="w-10 h-10 text-red-600" />}
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                    <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    {data.specialities.icon === 'Brain' && <Brain className="w-10 h-10 text-red-600" />}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                    {data.specialities.title}
                    </h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">
                    {data.specialities.title}
                </h2>
                </div>
                <p className="text-xl font-semibold mb-8 text-gray-800">{data.specialities.subtitle}</p>
                <div className="space-y-6">
                {data.specialities.listItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">
                        <strong>{item.strongText}</strong> {item.description}
                    </p>
                    </div>
                ))}
                </div>
                <p className="text-gray-700 mt-8 text-lg leading-relaxed">
                {data.specialities.conclusion}
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
                    {data.specialities.mission.icon === 'Heart' && <Heart className="w-10 h-10 text-red-600" />}
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                    <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    {data.specialities.mission.icon === 'Heart' && <Heart className="w-10 h-10 text-red-600" />}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                    {data.specialities.mission.title}
                    </h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">
                    {data.specialities.mission.title}
                </h2>
                </div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {data.specialities.mission.paragraphs[0]}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                {data.specialities.mission.paragraphs[1]}
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
              Kontakt os – Vi er klar til at hjælpe i Køge og omegn
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
                  <a href="mailto:kontakt@tryghedspersonale.dk" className="hover:underline transition-all duration-200">
                    kontakt@tryghedspersonale.dk
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
              <strong>Søgeord:</strong> psykiatrisk vikarbureau Køge, psykiatriske vikarer i Køge, vikar demens Køge,
              ekstern psykiatrisk støtte Køge, akut vikar psykiatri Sjælland, socialpsykiatrisk vikarbureau Køge, vikar
              til bosted i Herfølge, tryghedspersonale Solrød og Borup, vikarbureau psykiatri Region Sjælland
            </p>
            <p>
              Vi dækker: Køge, Herfølge, Solrød Strand, Borup, Ejby og øvrige dele af Køge Kommune og Region Sjælland
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
