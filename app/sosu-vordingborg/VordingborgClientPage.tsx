"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Heart, Clock, Shield, MapPin, Users, CheckCircle2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import CityCarousel from "@/components/CityCarousel"

export default function VordingborgClientPage() {
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
      src: "/vikarbureau-bench.jpeg",
      alt: "SOSU Vikarbureau Vordingborg - Erfarne og kompetente SOSU-vikarer",
      title: "Din karriere inden for sundhed og omsorg i Vordingborg",
      subtitle:
        "Velkommen til Tryghedspersonale.dk, dit lokale og specialiserede SOSU-vikarbureau i Vordingborg og omegn. Vi leverer fagligt stærke, erfarne og omsorgsfulde SOSU-vikarer til plejehjem, hjemmepleje og bosteder – både kommunale og private.",
    },
    {
      src: "/vikarbureau-indoor.jpeg",
      alt: "SOSU-medarbejder der støtter ældre borger i Vordingborg",
      title: "Specialiseret i ældrepleje og omsorg",
      subtitle:
        "Vores personale er uddannet til at yde professionel pleje og omsorg til ældre og sårbare borgere. Vi lægger vægt på faglighed, empati og respekt i alle vores opgaver.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="relative h-[600px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                      SOSU Vordingborg
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl">{slide.subtitle}</p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                        <a href="tel:+4541443333">
                          <Phone className="mr-2 h-5 w-5" /> Kontakt os: 41 44 33 33
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                        <a href="/kontakt">
                          <Mail className="mr-2 h-5 w-5" /> Send en besked
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider controls */}
          <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                } transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Vordingborg SOSU-vikarbureau</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Erfarne SOSU-vikarer til plejehjem og hjemmepleje i Vordingborg
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Hos Tryghedspersonale.dk i Vordingborg leverer vi kvalificerede SOSU-vikarer til plejehjem, 
                hjemmepleje og bosteder. Vores medarbejdere er nøje udvalgt for deres faglige kompetencer, 
                erfaring og menneskelige egenskaber.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vi forstår vigtigheden af kontinuitet og tryghed i plejen, og derfor matcher vi altid 
                vores vikarer omhyggeligt til de specifikke behov hos vores kunder og deres borgere.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Erfarne SOSU-hjælpere</h3>
                    <p className="text-sm text-gray-600">Med relevant uddannelse og erfaring</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">SOSU-assistenter</h3>
                    <p className="text-sm text-gray-600">Til komplekse plejeopgaver</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Fleksibel bemanding</h3>
                    <p className="text-sm text-gray-600">Tilpasset jeres behov</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Hurtig responstid</h3>
                    <p className="text-sm text-gray-600">Ved akutte behov</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                <a href="/kontakt">Få et uforpligtende tilbud</a>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
              <Image
                src="/healthcare-professionals-caring.jpg"
                alt="SOSU-medarbejdere i Vordingborg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Vores services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professionel SOSU-bemanding i Vordingborg og omegn
            </h2>
            <p className="text-lg text-gray-700">
              Vi tilbyder en bred vifte af SOSU-ydelser til både offentlige og private aktører 
              inden for ældreplejen og sundhedssektoren i Vordingborg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ældrepleje</h3>
              <p className="text-gray-700 mb-4">
                Vores SOSU-vikarer har omfattende erfaring med ældrepleje og kan assistere med 
                personlig pleje, medicinhåndtering, mobilisering og meget mere.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Personlig pleje og hygiejne</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Medicinhåndtering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Ernæring og måltider</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hjemmepleje</h3>
              <p className="text-gray-700 mb-4">
                Vi leverer kvalificerede SOSU-vikarer til hjemmeplejen, der kan træde til ved 
                sygdom, ferie eller spidsbelastninger.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Praktisk hjælp i hjemmet</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Personlig pleje</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Rehabilitering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bosteder og institutioner</h3>
              <p className="text-gray-700 mb-4">
                Vores SOSU-vikarer har erfaring med at arbejde på bosteder og institutioner, 
                hvor de yder omsorg og støtte til beboerne.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Pædagogisk støtte</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>ADL-træning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Aktiviteter og socialt samvær</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Hvad vores kunder siger</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pålidelig SOSU-bemanding i Vordingborg
            </h2>
            <p className="text-lg text-gray-700">
              Vi er stolte af de tilbagemeldinger, vi får fra vores kunder og samarbejdspartnere i Vordingborg.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Tryghedspersonale.dk har været en uvurderlig partner for vores plejehjem. Deres SOSU-vikarer er 
                professionelle, empatiske og falder hurtigt ind i vores rutiner. De har hjulpet os gennem flere 
                perioder med personalemangel."
              </p>
              <div>
                <p className="font-semibold">Mette Hansen</p>
                <p className="text-sm text-gray-600">Plejehjemsleder, Vordingborg</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Vi har brugt Tryghedspersonale.dk til bemanding i vores hjemmepleje, og vi er meget tilfredse med 
                kvaliteten af deres SOSU-vikarer. De er pålidelige, punktlige og har en god tilgang til vores borgere."
              </p>
              <div>
                <p className="font-semibold">Lars Nielsen</p>
                <p className="text-sm text-gray-600">Leder af hjemmeplejen, Vordingborg Kommune</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Som leder af et bosted har jeg været imponeret over den høje standard af SOSU-vikarer fra 
                Tryghedspersonale.dk. De har en god forståelse for vores beboeres behov og bidrager positivt 
                til vores arbejdsmiljø."
              </p>
              <div>
                <p className="font-semibold">Sofie Andersen</p>
                <p className="text-sm text-gray-600">Bostedsleder, Vordingborg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 hover:bg-white/30">Kontakt os i dag</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Har du brug for kvalificerede SOSU-vikarer i Vordingborg?
              </h2>
              <p className="text-xl mb-8">
                Kontakt os for at høre mere om, hvordan vi kan hjælpe dig med bemanding til din 
                institution eller organisation. Vi tilbyder uforpligtende samtaler og skræddersyede løsninger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="tel:+4541443333">
                    <Phone className="mr-2 h-5 w-5" /> Ring til os: 41 44 33 33
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="/kontakt">
                    <Mail className="mr-2 h-5 w-5" /> Send en besked
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Vores fordele</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Kvalificerede SOSU-vikarer</h4>
                    <p>Alle vores vikarer er uddannede og har relevant erfaring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Hurtig responstid</h4>
                    <p>Vi kan ofte stille med vikarer med kort varsel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Lokal tilstedeværelse</h4>
                    <p>Vi kender Vordingborg og omegn og har lokale vikarer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Omsorg og empati</h4>
                    <p>Vores vikarer har hjertet på rette sted</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}