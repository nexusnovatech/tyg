"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSlide {
  src: string
  alt: string
  title: string
  subtitle: string
}

interface EnhancedHeroSliderProps {
  slides: HeroSlide[]
  locationLabel?: string
  autoplayDuration?: number
}

export function EnhancedHeroSlider({
  slides,
  locationLabel = "24/7",
  autoplayDuration = 7000,
}: EnhancedHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  // Auto-play functionality - only run on client
  useEffect(() => {
    if (!isAutoPlaying || !isClient) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 100 / (autoplayDuration / 100)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, autoplayDuration, isClient])

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  // Server-side render fallback
  if (!isClient) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={slides[0]?.src || "/placeholder.svg"}
            alt={slides[0]?.alt || "Hero image"}
            fill
            className="object-cover select-none pointer-events-none"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = "/placeholder.svg?height=1080&width=1920"
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl gap-8 lg:gap-12">
          <div className="text-white max-w-3xl text-center lg:text-left mt-16 md:mt-0">
            <Badge className="bg-red-600 text-white hover:bg-red-700 mb-4 md:mb-6 text-sm px-4 py-2">
              Psykiatrisk Vikarbureau
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {slides[0]?.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed max-w-4xl">
              {slides[0]?.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-5 md:py-6 text-xl md:text-2xl w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Få et uforpligtende tilbud her
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white/80 hover:bg-white hover:text-black px-6 md:px-8 py-5 md:py-6 text-xl md:text-2xl w-full sm:w-auto bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Kontakt os
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide]?.src || "/placeholder.svg"}
            alt={slides[currentSlide]?.alt || "Hero image"}
            fill
            className="object-cover select-none pointer-events-none"
            priority={currentSlide === 0}
            sizes="100vw"
            draggable={false}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = "/placeholder.svg?height=1080&width=1920"
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>

      {/* Mobile Navigation - Top positioned */}
      <div className="absolute top-20 left-0 right-0 z-20 flex justify-between items-center px-4 md:hidden">
        <button
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-xl transition-all duration-300 border border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{locationLabel}</span>
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-xl transition-all duration-300 border border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl gap-8 lg:gap-12">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white max-w-3xl text-center lg:text-left mt-16 md:mt-0"
        >
          <Badge className="bg-red-600 text-white hover:bg-red-700 mb-4 md:mb-6 text-sm px-4 py-2">
            Psykiatrisk Vikarbureau
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {slides[currentSlide]?.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed max-w-4xl">
            {slides[currentSlide]?.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start">
            <a href="tel:+4541443333" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-5 md:py-6 text-xl md:text-2xl w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Få et uforpligtende tilbud her
              </Button>
            </a>
            <a href="/kontakt" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white/80 hover:bg-white hover:text-black px-6 md:px-8 py-5 md:py-6 text-xl md:text-2xl w-full sm:w-auto bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Kontakt os
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Floating Contact Card - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:block bg-red-600/80 backdrop-blur-sm text-white p-8 rounded-2xl shadow-2xl max-w-sm flex-shrink-0 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <div className="bg-white text-red-600 p-3 rounded-full mr-4">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Akut udrykning</h3>
              <p className="text-sm opacity-90">Ring til os nu</p>
            </div>
          </div>
          <p className="text-sm mb-6 opacity-90 leading-relaxed">
            Vi giver dig et tilbud med det samme og kan være hos jer inden for få timer.
          </p>
          <a href="tel:+4541443333">
            <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold py-3">Ring nu</Button>
          </a>
        </motion.div>
      </div>

      {/* Desktop Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="w-8 md:w-12 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  index === currentSlide ? "opacity-100" : "opacity-60"
                }`}
                style={{
                  width: index === currentSlide ? `${progress}%` : index < currentSlide ? "100%" : "0%",
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Desktop Floating Badge - Hidden on mobile */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{locationLabel}</span>
        </div>
      </div>
    </section>
  )
}

export default EnhancedHeroSlider
