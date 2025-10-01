"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  Heart,
  Brain,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

export default function BotilbudClientPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Hero slider data with 3 slides
  const heroSlides = [
    {
      src: "/tryghedspersonale-samtale-udendoers.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger på botilbud",
      title: "Fagligt stærke vikarer til botilbud",
      subtitle:
        "Vi leverer specialiserede vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet. Vores personale har erfaring med komplekse borgersituationer og udadreagerende adfærd.",
    },
    {
      src: "/tryghedspersonale-aeldre-stoette.jpeg",
      alt: "Tryghedsmedarbejder der støtter borger på døgninstitution",
      title: "Specialiseret i socialpædagogik",
      subtitle:
        "Som specialiseret vikarbureau forstår vi de særlige udfordringer, der opstår i arbejdet med borgere med psykiske lidelser, udviklingsforstyrrelser og komplekse sociale problemer.",
    },
    {
      src: "/tryghedspersonale-park-samtale.jpeg",
      alt: "Tryghedsmedarbejder i samtale med borger i park",
      title: "Akut hjælp når I har brug for det",
      subtitle:
        "Vi tilbyder både akut udrykning og planlagte vikarløsninger til botilbud, døgninstitutioner og opholdssteder i hele landet. Vores mål er at være jeres pålidelige partner.",
    },
  ]

  const services = [
    {
      title: "Specialiserede vikarer til plejehjem",
      subtitle: "Professionel pleje og omsorg",
      description:
        "Erfarne vikarer til plejehjem med ekspertise i demenspleje og udadreagerende adfærd hos ældre borgere.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20plejehjem%20-ie8pf3LdnULgPcd1zNXAQ0L2GQZPFX.png",
      link: "/fastvagt-plejehjem",
    },
    {
      title: "Fastvagt til asylcentre",
      subtitle: "Specialiseret støtte",
      description:
        "Vi tilbyder erfarne vikarer til asylcentre med ekspertise i håndtering af æresrelateret vold og konfliktløsning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vikar-asylcenter-udrejsecenter-Le60NIU22xLcNFcyMQnRp5hYIwVHaD.png",
      link: "/ydelser/fastvagt-asylcentre",
    },
    {
      title: "Fastvagt til bosteder",
      subtitle: "Døgninstitutioner og opholdssteder",
      description: "Fagligt stærke vikarer til bosteder, døgninstitutioner og opholdssteder i hele landet.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20bosteder%2C%20d%C3%B8gninstitutioner-AfOKXClU0bHfrGN6IXum74P0Pp3hXJ.png",
      link: "/ydelser/fastvagt-bosted",
    },
    {
      title: "Vikarer til krisecentre",
      subtitle: "Professionel krisestøtte",
      description: "Professionel krisestøtte til kvinder og mænd ramt af vold, kontrol eller æresrelateret vold.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20krisecenter.png-nr3EcdWIsESwSMbt4DED8oJwonHUR0.jpeg",
      link: "/ydelser/krisecentre",
    },
    {
      title: "Vikarer til botilbud",
      subtitle: "Døgninstitutioner og opholdssteder",
      description: "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20bosteder%2C%20d%C3%B8gninstitutioner-AfOKXClU0bHfrGN6IXum74P0Pp3hXJ.png",
      link: "/ydelser/botilbud",
    },
    {
      title: "Vikarer til psykiatrien",
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

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

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
      <EnhancedHeroSlider slides={heroSlides} locationLabel="Hele landet" />

      {/* Red Banner Section - Mobile responsive stacking */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Søger du efter vikarer til botilbud og døgninstitutioner?
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
        <div className="relative">
          {/* Desktop Container */}
          <div className="max-w-[1400px] mx-auto relative hidden sm:block">
            {/* Slider Container */}
            <div className="overflow-hidden px-16 lg:px-4">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${getSlideTransform()}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 pb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden max-w-sm mx-auto flex flex-col"
                      style={{
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden flex-shrink-0">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = "/placeholder.svg?height=320&width=400"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-700/60 to-red-500/20"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                          <h3 className="font-bold text-xl sm:text-2xl text-white mb-2 drop-shadow-lg">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-white/95 drop-shadow-md">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                        <Link href={service.link}>
                          <Button
                            size="sm"
                            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2.5 sm:py-3 transition-colors duration-200 mt-auto"
                          >
                            Læs mere
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 hover:shadow-xl z-10 border border-gray-100"
              style={{
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 hover:shadow-xl z-10 border border-gray-100"
              style={{
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Cards Container with Touch Support */}
          <div className="block sm:hidden px-4">
            <div
              ref={containerRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`,
                }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden mx-auto flex flex-col"
                      style={{
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="relative h-64 overflow-hidden flex-shrink-0">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="100vw"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = "/placeholder.svg?height=320&width=400"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-700/60 to-red-500/20"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                          <h3 className="font-bold text-xl text-white mb-2 drop-shadow-lg">{service.title}</h3>
                          <p className="text-sm text-white/95 drop-shadow-md">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                        <Link href={service.link}>
                          <Button
                            size="sm"
                            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2.5 transition-colors duration-200 mt-auto"
                          >
                            Læs mere
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation underneath carousel - Mobile and Desktop */}
          <div className="flex justify-center items-center mt-8 px-4 gap-4">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-200 border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? "bg-red-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-200 border border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Welcome Section */}
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
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2">Vikarer til botilbud</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-16 items-start">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-xl max-w-none">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-gray-700 leading-relaxed mb-8 font-medium"
                  >
                    Velkommen til Tryghedspersonale.dk, dit specialiserede vikarbureau for botilbud, døgninstitutioner
                    og opholdssteder i hele landet. Vi leverer fagligt stærke, erfarne og omsorgsfulde vikarer til
                    socialpædagogiske opgaver og komplekse borgersituationer.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 leading-relaxed mb-12"
                  >
                    Vores personale er uddannet til at håndtere komplekse borgerforløb, hvor adfærd kan være
                    uforudsigelig, udadreagerende eller præget af psykiske lidelser og udviklingsforstyrrelser. Det er
                    netop i disse situationer, at det rigtige personale gør forskellen.
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
                      Vores specialområder
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Botilbud og bofællesskaber</strong>
                          <p className="text-gray-700 text-sm">til borgere med psykiske lidelser</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Døgninstitutioner</strong>
                          <p className="text-gray-700 text-sm">for unge og voksne med særlige behov</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">§108 tilbud</strong>
                          <p className="text-gray-700 text-sm">specialiserede tilbud efter serviceloven</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Midlertidige opholdssteder</strong>
                          <p className="text-gray-700 text-sm">akut indkvartering og støtte</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Specialiserede tilbud</strong>
                          <p className="text-gray-700 text-sm">til borgere med udviklingsforstyrrelser</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">Støtte og vejledning</strong>
                          <p className="text-gray-700 text-sm">til selvstændigt liv</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Quick Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 mr-3" />
                      <h3 className="font-bold text-lg">Akut hjælp</h3>
                    </div>
                    <p className="text-sm opacity-90 mb-4">Ring til os nu og få hjælp inden for få timer</p>
                    <a href="tel:+4541443333">
                      <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                        41 44 33 33
                      </Button>
                    </a>
                  </motion.div>

                  {/* Coverage Area */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
                  >
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Dækningsområde</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Hele Danmark</p>
                      <p>• Alle regioner</p>
                      <p>• Kommunale og private tilbud</p>
                      <p>• Akut udrykning</p>
                      <p>• Planlagte forløb</p>
                      <p>• 24/7 beredskab</p>
                    </div>
                  </motion.div>

                  {/* Professional Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="aspect-[3/4]">
                      <Image
                        src="/tryghedspersonale-psykiatrisk-vikarbureau-medarbejder-short.jpg"
                        alt="Tryghedspersonale.dk medarbejder - Vikarer til botilbud"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
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

      {/* Challenges Section */}
      <section className="py-20 bg-white relative overflow-hidden">
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
            <Brain className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Komplekse sociale problemer kræver specialiseret personale
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Borgere i botilbud har ofte komplekse udfordringer, der kræver fagligt stærkt og erfaret personale
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Udfordringer vi håndterer:</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Psykiske lidelser og dobbeltdiagnoser</h4>
                    <p className="text-gray-700">Borgere med komplekse psykiatriske diagnoser og samtidig misbrug</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Udviklingsforstyrrelser og autisme</h4>
                    <p className="text-gray-700">
                      Specialiseret støtte til borgere med særlige behov og kommunikationsudfordringer
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Udadreagerende adfærd og aggression</h4>
                    <p className="text-gray-700">Professionel håndtering af voldsom eller truende adfærd</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Selvskadende adfærd og suicidalitet</h4>
                    <p className="text-gray-700">Akut krisehåndtering og forebyggende indsatser</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores tilgang:</h3>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Individuel tilgang til hver borger</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Traumeinformeret omsorg</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Kontinuitet i personalet</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Tæt samarbejde med faste teams</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <a href="tel:41443333">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-3" />
                    Kontakt os i dag
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
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
              Kvalificeret personale med specialviden
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi stiller høje krav til vores medarbejdere og sikrer, at de har den rette uddannelse og erfaring
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Vores medarbejdere har:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Pædagogisk eller sundhedsfaglig uddannelse</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Erfaring fra botilbud eller døgninstitutioner</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Specialviden om psykiske lidelser</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Kompetencer i konflikthåndtering</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Uddannelsesbaggrund:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Socialrådgivere og socialpædagoger</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Social- og sundhedsassistenter</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Sygeplejersker med psykiatrisk erfaring</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Erfarne medarbejdere med relevant baggrund</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Hav tillid til vores medarbejdere</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-xl max-w-none text-center"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Hos Tryghedspersonale.dk er vores vikarer eksperter i at håndtere udadreagerende adfærd og skabe et
                trygt miljø, både for borgerne og for personalet. Vores vikarer har erfaring med at afkode komplekse
                adfærdsmønstre og tilpasse deres tilgang til den enkelte borgers behov.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vi fokuserer på at forebygge og håndtere udadreagerende adfærd med respekt for borgerens værdighed.
                Vores vikarer er trænet i afledningsteknikker og metoder, der kan berolige i pressede situationer og
                mindske risikoen for eskalering af konflikter.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Når du vælger Tryghedspersonale.dk, får du ikke bare vikarer - du får en partner, der hjælper med at
                skabe et trygt og stabilt miljø, hvor både beboere og personale kan føle sig sikre og i stand til at
                arbejde effektivt sammen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Phone className="w-20 h-20 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Kontakt os – Vi er klar til at hjælpe</h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto">
              Har I brug for hjælp til jeres botilbud eller døgninstitution? Kontakt os i dag, og lad os tage en
              uforpligtende snak om, hvordan vi kan hjælpe jer videre.
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
              <strong>Søgeord:</strong> vikarer botilbud, døgninstitutioner vikarer, opholdssteder personale, §108
              tilbud vikarer, socialpædagogiske vikarer, botilbud personale, vikarer til bosteder, specialiserede tilbud
              vikarer, psykiatriske botilbud vikarer, udviklingsforstyrrelser vikarer
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline" className="text-xs">
                Psykiatri faglig vikarbureau
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vagtfirma botilbud
              </Badge>
              <Badge variant="outline" className="text-xs">
                Sikkerhedsvagt døgninstitution
              </Badge>
              <Badge variant="outline" className="text-xs">
                Fast vagt til botilbud
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarer til psykisk syge
              </Badge>
              <Badge variant="outline" className="text-xs">
                Håndtering af psykisk sygdom
              </Badge>
              <Badge variant="outline" className="text-xs">
                Sikkerhedsvagt til bosteder
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarer til udadreagerende borgere
              </Badge>
              <Badge variant="outline" className="text-xs">
                Specialister i psykotisk adfærd
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarservice til truende adfærd
              </Badge>
              <Badge variant="outline" className="text-xs">
                Psykisk syge vikarer
              </Badge>
              <Badge variant="outline" className="text-xs">
                Specialiseret personale
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarer til udadreagerende patienter
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vagtfirma til psykiske lidelser
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikar til psykosehåndtering
              </Badge>
              <Badge variant="outline" className="text-xs">
                Fast vagt til psykiske lidelser
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarer til psykose og vrangforestillinger
              </Badge>
              <Badge variant="outline" className="text-xs">
                Håndtering af udadreagerende adfærd
              </Badge>
              <Badge variant="outline" className="text-xs">
                Vikarservice til botilbud
              </Badge>
            </div>
            <p>Vi dækker hele Danmark med fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder</p>
          </div>
        </div>
      </section>
    </div>
  )
}
