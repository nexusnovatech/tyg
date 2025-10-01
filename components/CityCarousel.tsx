"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

const CityCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: "Vikar til plejehjem",
      subtitle: "Professionel pleje og omsorg",
      description:
        "Erfarne vikarer til plejehjem med ekspertise i demenspleje og udadreagerende adfærd hos ældre borgere.",
      link: "/fastvagt-plejehjem",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20plejehjem%20-ie8pf3LdnULgPcd1zNXAQ0L2GQZPFX.png",
    },
    {
      title: "Vikar til asylcentre",
      subtitle: "Specialiseret støtte",
      description:
        "Vi tilbyder erfarne vikarer til asylcentre med ekspertise i håndtering af æresrelateret vold og konfliktløsning.",
      link: "/ydelser/fastvagt-asylcentre",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vikar-asylcenter-udrejsecenter-Le60NIU22xLcNFcyMQnRp5hYIwVHaD.png",
    },
    {
      title: "Vikar til botilbud",
      subtitle: "Døgninstitutioner og opholdssteder",
      description: "Fagligt stærke vikarer til botilbud, døgninstitutioner og opholdssteder i hele landet.",
      link: "/ydelser/botilbud",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20bosteder%2C%20d%C3%B8gninstitutioner-AfOKXClU0bHfrGN6IXum74P0Pp3hXJ.png",
    },
    {
      title: "Vikar til krisecentre",
      subtitle: "Professionel krisestøtte",
      description: "Professionel krisestøtte til kvinder og mænd ramt af vold, kontrol eller æresrelateret vold.",
      link: "/ydelser/krisecentre",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar%20til%20krisecenter.png-nr3EcdWIsESwSMbt4DED8oJwonHUR0.jpeg",
    },
    {
      title: "Vikar til psykiatrien",
      subtitle: "Erfarne psykiatriske vikarer",
      description: "Erfarne vikarer til psykiatrien med menneskelig indsigt, faglighed og kontinuitet i behandlingen.",
      link: "/ydelser/psykiatrien",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vikar-Psykiatri-Vikar-til-psykiatrien.png-NgZAuhROj5XmpUZr0AoikmnYtfbNQj.jpeg",
    },
  ]

  const nextSlide = useCallback(() => {
    if (!isTransitioning) return

    setCurrentSlide((prev) => {
      const next = prev + 1
      if (next >= services.length) {
        // When we reach the end, immediately jump to the beginning after the transition
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentSlide(0)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      return next
    })
  }, [services.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (!isTransitioning) return

    setCurrentSlide((prev) => {
      const next = prev - 1
      if (next < 0) {
        // When we reach the beginning, immediately jump to the end after the transition
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentSlide(services.length - 1)
          setTimeout(() => setIsTransitioning(true), 50)
        }, 500)
      }
      return next
    })
  }, [services.length, isTransitioning])

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

  // Safe function to get window width and calculate slides to show
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  }

  const getSlideTransform = () => {
    if (typeof window === "undefined") return 0
    const slidesPerView = getSlidesPerView()
    return (currentSlide * 100) / slidesPerView
  }

  // Create extended services array for seamless looping
  const extendedServices = [...services, ...services.slice(0, getSlidesPerView())]

  // Handle dot navigation with looping logic
  const handleDotClick = (index: number) => {
    if (!isTransitioning) return
    setCurrentSlide(index)
  }

  // Get the actual slide index for dot indicators
  const getActualSlideIndex = () => {
    return currentSlide % services.length
  }

  return (
    <div className="relative">
      {/* Desktop Container */}
      <div className="max-w-[1400px] mx-auto relative hidden sm:block">
        {/* Slider Container */}
        <div className="overflow-hidden px-16 lg:px-4">
          <motion.div
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
            style={{
              transform: `translateX(-${getSlideTransform()}%)`,
            }}
          >
            {extendedServices.map((service, index) => (
              <div key={`${service.title}-${index}`} className="w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % services.length) * 0.1 }}
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
                      <h3 className="font-bold text-xl sm:text-2xl text-white mb-2 drop-shadow-lg">{service.title}</h3>
                      <p className="text-sm sm:text-base text-white/95 drop-shadow-md">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2.5 sm:py-3 transition-colors duration-200 mt-auto inline-flex items-center justify-center rounded-md font-medium"
                    >
                      Læs mere
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
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% + ${isDragging ? translateX : 0}px))`,
            }}
          >
            {extendedServices.map((service, index) => (
              <div key={`mobile-${service.title}-${index}`} className="w-full flex-shrink-0 px-2">
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
                    <Link
                      href={service.link}
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2.5 sm:py-3 transition-colors duration-200 mt-auto inline-flex items-center justify-center rounded-md font-medium"
                    >
                      Læs mere
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
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                getActualSlideIndex() === index ? "bg-red-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
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
  )
}

export { CityCarousel }
export default CityCarousel
