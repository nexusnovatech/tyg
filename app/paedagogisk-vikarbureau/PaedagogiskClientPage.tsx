"use client"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Clock, Heart, Users, Brain, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"
import CityCarousel from "@/components/CityCarousel"
import { allCityInfo } from "@/lib/allCityInfo"

export default function PaedagogiskClientPage() {
  const cityData = allCityInfo["paedagogisk-vikarbureau"]

  const heroSlides = [
    {
      src: "/modern-healthcare-facility.png",
      alt: "Moderne pædagogisk institution",
      title: "Pædagogisk Vikarbureau",
      subtitle: "Kvalificerede pædagogiske vikarer når du har brug for det",
    },
  ]

  const services = [
    {
      title: "Vikar til daginstitutioner",
      subtitle: "Kvalificerede pædagoger",
      description: "Erfarne vikarer til børnehaver og vuggestuer",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Vikar til bosteder",
      subtitle: "Specialiseret støtte",
      description: "Vikarer med erfaring i arbejdet med voksne",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Specialpædagogiske vikarer",
      subtitle: "Særlige behov",
      description: "Vikarer til børn og unge med særlige behov",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Pædagogiske assistenter",
      subtitle: "Praktisk støtte",
      description: "Kvalificerede assistenter til institutioner",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Akut vikardækning",
      subtitle: "Hurtig hjælp",
      description: "Vikarer med kort varsel ved sygdom",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const locationLabel = "Pædagogisk Vikarbureau"
  const searchPrompt = "Søger du kvalificerede pædagogiske vikarer? Vi er her for at hjælpe."

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [services.length])

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSlider slides={heroSlides} locationLabel={locationLabel} />

      {/* Red Banner Section */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold">{searchPrompt}</h3>
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

      {/* Services Section */}
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
              Vores pædagogiske service områder
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Vi tilbyder kvalificerede pædagogiske vikarer til forskellige institutioner og tilbud
            </p>
          </motion.div>
        </div>
        <CityCarousel />
      </section>

      {/* Welcome Section */}
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
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2">{cityData?.welcome?.badge}</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                {cityData?.welcome?.title}
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
                    {cityData?.welcome?.paragraphs?.[0]}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-700 leading-relaxed mb-12"
                  >
                    {cityData?.welcome?.paragraphs?.[1]}
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
                      {cityData?.welcome?.specialities?.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {cityData?.welcome?.specialities?.listItems?.map((item: any, index: number) => (
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
                      <h3 className="font-bold text-lg">{cityData?.welcome?.contact?.title}</h3>
                    </div>
                    <p className="text-sm opacity-90 mb-4">{cityData?.welcome?.contact?.description}</p>
                    <a href={`tel:+45${cityData?.welcome?.contact?.phoneNumber?.replace(/\s/g, "")}`}>
                      <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold">
                        {cityData?.welcome?.contact?.phoneNumber}
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
                    <h3 className="font-bold text-lg mb-4 text-gray-900">{cityData?.welcome?.coverage?.title}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {cityData?.welcome?.coverage?.listItems?.map((item: string, index: number) => (
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
                        src={
                          cityData?.welcome?.image?.src ||
                          "/placeholder.svg?height=400&width=320&query=pædagogisk medarbejder"
                        }
                        alt={cityData?.welcome?.image?.alt || ""}
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2 inline-flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Mission
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                    {cityData?.mission?.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 font-medium">{cityData?.mission?.description}</p>
                  <div className="space-y-6 mb-8">
                    {cityData?.mission?.paragraphs?.map((paragraph: string, index: number) => (
                      <p key={index} className="text-lg text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">{cityData?.mission?.approachTitle}</h3>
                    <div className="space-y-3">
                      {cityData?.mission?.approachList?.map((item: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[4/5]">
                    <Image
                      src={
                        cityData?.mission?.image?.src ||
                        "/placeholder.svg?height=500&width=400&query=pædagogisk vikar med børn"
                      }
                      alt={cityData?.mission?.image?.alt || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = "/placeholder.svg?height=500&width=400"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relief Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-[4/5]">
                    <Image
                      src={
                        cityData?.relief?.image?.src ||
                        "/placeholder.svg?height=500&width=400&query=pædagogisk institution"
                      }
                      alt={cityData?.relief?.image?.alt || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.src = "/placeholder.svg?height=500&width=400"
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2 inline-flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Fleksibilitet
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                    {cityData?.relief?.title}
                  </h2>
                  <div className="space-y-6 mb-8">
                    {cityData?.relief?.paragraphs?.map((paragraph: string, index: number) => (
                      <p key={index} className="text-lg text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">{cityData?.relief?.listTitle}</h3>
                    <div className="space-y-3">
                      {cityData?.relief?.listItems?.map((item: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2 inline-flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Dækning
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {cityData?.local?.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">{cityData?.local?.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100"
              >
                <h3 className="font-bold text-xl mb-6 text-gray-900">{cityData?.local?.coverageTitle}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cityData?.local?.coverageAreas?.map((area: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">{cityData?.local?.extraCoverageInfo}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <h3 className="font-bold text-xl mb-6 text-gray-900">{cityData?.local?.localKnowledgeTitle}</h3>
                <p className="text-gray-700 mb-6">{cityData?.local?.localKnowledgeDescription}</p>
                <div className="space-y-4">
                  {cityData?.local?.localKnowledgePoints?.map((point: any, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 text-sm">{point.strongText}</strong>
                        <p className="text-gray-600 text-sm">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanity Section */}
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
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2 inline-flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Vores team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {cityData?.humanity?.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">{cityData?.humanity?.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="font-bold text-2xl mb-8 text-gray-900 text-center">{cityData?.humanity?.listTitle}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {cityData?.humanity?.listItems?.map((item: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 block mb-2">{item.strongText}</strong>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border border-red-100 text-center">
                <p className="text-lg">
                  <strong className="text-gray-900">{cityData?.humanity?.conclusion?.strongText}</strong>{" "}
                  <span className="text-gray-700">{cityData?.humanity?.conclusion?.description}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="bg-red-100 text-red-600 mb-6 text-sm px-4 py-2 inline-flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Specialer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {cityData?.specialities?.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">{cityData?.specialities?.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {cityData?.specialities?.listItems?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900 text-lg block mb-2">{item.strongText}</strong>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">{cityData?.specialities?.conclusion}</p>
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
              Kontakt os – Vi er klar til at hjælpe med pædagogiske vikarer
            </h2>
            <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-4xl mx-auto">
              Har I brug for kvalificerede pædagogiske vikarer? Kontakt os i dag, og lad os tage en uforpligtende snak
              om, hvordan vi kan hjælpe jer videre – hurtigt og professionelt.
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
                <h3 className="text-2xl font-bold mb-4">Hurtig hjælp</h3>
                <p className="text-xl">Alle ugens dage</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ofte stillede spørgsmål om pædagogisk vikarbureau
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Hvordan fungerer processen, når vi behøver en pædagogisk vikar?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Når du kontakter os, får vi hurtigt en forståelse af dine behov og matcher dig med den rette
                  pædagogiske vikar. Vore vikarer kan hurtigt træde til og sikre, at din institution opretholder
                  kontinuitet og kvalitet i det pædagogiske arbejde.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-xl mb-4 text-gray-900">Hvad koster det at hyre en pædagogisk vikar?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prisen afhænger af flere faktorer som vikarens erfaring og opgavens omfang. Kontakt os for et
                  skræddersyet tilbud, der passer til dine behov og budget.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Er vikarerne hos Tryghedspersonale.dk certificerede?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, alle vores vikarer har de nødvendige pædagogiske kvalifikationer og erfaring, som kræves for at
                  arbejde i daginstitutioner, bosteder og andre pædagogiske institutioner.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center text-sm text-gray-600 space-y-4">
            <p>
              <strong>Søgeord:</strong> pædagogisk vikarbureau, pædagogiske vikarer, daginstitutioner, bosteder,
              pædagoger, pædagogiske assistenter, specialpædagogik, vikarbureau Danmark, kvalificerede vikarer,
              pædagogisk støtte
            </p>
            <p>Vi dækker: {cityData?.welcome?.coverage?.listItems?.join(", ")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
