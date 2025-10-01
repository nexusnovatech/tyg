"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Building,
  Brain,
  User,
  Mail,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Hero Slider Images
const sliderImages = [
  {
    src: "/tryghedspersonale-park-samtale.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger på Sjælland",
    title: "Professionel vikarservice til hele Sjælland",
    subtitle:
      "Specialiseret bemanding til institutioner og bosteder i Helsingør, Kokkedal, Hellerup, Frederikssund, Slagelse og Køge",
  },
  {
    src: "/tryghedspersonale-hallway.jpeg",
    alt: "Tryghedsmedarbejder på institution på Sjælland",
    title: "Eksperter i håndtering af udadreagerende adfærd",
    subtitle: "Skræddersyede løsninger til psykiatrien, plejehjem og bosteder",
  },
  {
    src: "/tryghedspersonale-aeldre-stoette.jpeg",
    alt: "Tryghedsmedarbejder der støtter ældre borger på Sjælland",
    title: "Akut hjælp 24/7 på hele Sjælland",
    subtitle: "Hurtig responstid og professionel assistance når du har brug for det",
  },
]

// Statistics data
// const statistics = [
//   { icon: <Clock className="w-8 h-8 text-red-600" />, value: 15, label: "Min. responstid", suffix: " min" },
//   { icon: <CheckCircle className="w-8 h-8 text-red-600" />, value: 98, label: "Kundetilfredshed", suffix: "%" },
//   { icon: <Users className="w-8 h-8 text-red-600" />, value: 150, label: "Medarbejdere på Sjælland", suffix: "+" },
//   { icon: <Building className="w-8 h-8 text-red-600" />, value: 60, label: "Institutioner betjent", suffix: "+" },
// ]

// Cities data
const cities = [
  "Helsingør",
  "Kokkedal",
  "Hellerup",
  "Frederikssund",
  "Slagelse",
  "Køge",
  "Roskilde",
  "Næstved",
  "Holbæk",
  "Vordingborg",
  "Hillerød",
  "Ballerup",
  "Farum",
  "Taastrup",
  "Hvidovre",
  "Nykøbing F",
]

// Services data
const services = [
  {
    id: "asylcentre",
    title: "Asylcentre",
    icon: <Users className="h-8 w-8 text-red-600" />,
    description: "Specialiserede vikarer med erfaring i at skabe tryghed og ro i asylcentre.",
    features: [
      "Håndtering af udadreagerende adfærd",
      "Støtte til integration og daglige rutiner",
      "Kulturel forståelse og respekt",
      "Konfliktforebyggelse",
    ],
    image: "/tryghedspersonale-park.jpeg",
    location: "København",
    link: "/ydelser/bemanding-asylcentre",
  },
  {
    id: "plejehjem",
    title: "Plejehjem",
    icon: <Building className="h-8 w-8 text-red-600" />,
    description: "Vikarer specialiseret i at håndtere ældre med fysiske og psykiske udfordringer.",
    features: [
      "Håndtering af udadreagerende adfærd",
      "Skabe tryghed for beboere og personale",
      "Støtte ved daglige rutiner",
      "Deeskalering af konflikter",
    ],
    image: "/tryghedspersonale-aeldre-stoette.jpeg",
    location: "Køge",
    link: "/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd",
  },
  {
    id: "bosteder",
    title: "Bosteder",
    icon: <Building className="h-8 w-8 text-red-600" />,
    description: "Erfarne vikarer til bosteder med borgere med særlige behov og udfordringer.",
    features: [
      "Håndtering af udadreagerende adfærd",
      "Støtte til socialpædagogiske opgaver",
      "Konflikthåndtering og deeskalering",
      "Skabe tryghed for beboere og personale",
    ],
    image: "/tryghedspersonale-faellesrum.jpeg",
    location: "Roskilde",
    link: "/ydelser/bosteder",
  },
  {
    id: "psykiatrien",
    title: "Psykiatrien",
    icon: <Brain className="h-8 w-8 text-red-600" />,
    description: "Særligt uddannede vikarer til håndtering af psykotiske og udadreagerende patienter.",
    features: [
      "Håndtering af psykotiske episoder",
      "Deeskalering af konflikter",
      "Sikkerhed for personale og patienter",
      "Tværfagligt samarbejde",
    ],
    image: "/tryghedspersonale-samtale-udendoers.jpeg",
    location: "Hillerød",
    link: "/ydelser/psykiatrien",
  },
]

// Specialized services data
const specializedServices = [
  {
    title: "Vikarer til Asylcentre på Sjælland – København, Roskilde og Næstved",
    icon: <User className="h-7 w-7 text-red-600" />,
    description:
      "Vi tilbyder specialiserede vikarer, der har erfaring med at arbejde på asylcentre og håndtere personer med forskellige psykologiske og sociale behov. Vore vikarer er trænet i at skabe tryghed og ro i situationer med udadreagerende adfærd og psykotiske episoder, samtidig med at de understøtter asylansøgerne i deres integration og daglige rutiner.",
    cities: ["København", "Roskilde", "Næstved"],
    link: "/ydelser/fastvagt-asylcentre",
  },
  {
    title: "Vikarservice til Plejehjem på Sjælland – Køge, Helsingør og Københavnsområdet",
    icon: <Building className="h-7 w-7 text-red-600" />,
    description:
      "På plejehjem på Sjælland tilbyder vi vikarer, der er specialiserede i at håndtere ældre med både fysiske og psykiske udfordringer. Vore vikarer kan håndtere udadreagerende og voldsomme adfærdsmønstre, hvilket giver både personale og beboere en større tryghed i daglige situationer.",
    cities: ["Køge", "Helsingør", "Københavnsområdet"],
    link: "/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd",
  },
  {
    title: "Vikarer til Bosteder og Institutioner på Sjælland – Roskilde, Holbæk og Slagelse",
    icon: <Building className="h-7 w-7 text-red-600" />,
    description:
      "Vore vikarer til bosteder og institutioner har erfaring med at arbejde med borgere, der har særlige behov, såsom psykiske lidelser, udadreagerende adfærd eller andre udfordringer. De understøtter socialpædagogiske medarbejdere i at sikre et trygt og respektfuldt miljø, og vores vikarer er trænet til at håndtere både fysiske og psykiske konflikter.",
    cities: ["Roskilde", "Holbæk", "Slagelse"],
    link: "/ydelser/fastvagt-bosted",
  },
  {
    title: "Vikarer til Psykiatrien på Sjælland – Hillerød, Vordingborg og Helsingør",
    icon: <Brain className="h-7 w-7 text-red-600" />,
    description:
      "Vore vikarer til psykiatrien er særligt uddannede i at håndtere psykotiske og udadreagerende patienter. De arbejder som en del af et tværfagligt team, hvor deres rolle er at skabe tryghed og sikkerhed i psykiatriske afdelinger. Vikarerne er oplært i deeskalering, konflikthåndtering og fysisk sikkerhed, hvilket giver personalet mulighed for at fokusere på behandling og støtte.",
    cities: ["Hillerød", "Vordingborg", "Helsingør"],
    link: "/ydelser/psykiatrien",
  },
  {
    title: "Enkeltmandsprojekter på Sjælland – Nykøbing F, Hvidovre og Frederikssund",
    icon: <User className="h-7 w-7 text-red-600" />,
    description:
      "Vore vikarer til enkeltmandsprojekter tilbyder intensiv støtte til enkeltpersoner med særlige behov, som kræver individuel overvågning og støtte. Vore vikarer er erfarne i at håndtere borgeres psykotiske episoder og udadreagerende adfærd, hvilket giver en øget tryghed og sikkerhed.",
    cities: ["Nykøbing F", "Hvidovre", "Frederikssund"],
    link: "/enkeltmandstilbud-udadreagerende-voldsomme-psykotiske-borgere",
  },
  {
    title: "Tryghedsmedarbejder på Sjælland – Roskilde, Ballerup og Farum",
    icon: <Shield className="h-7 w-7 text-red-600" />,
    description:
      "Som tryghedsmedarbejdere arbejder vores vikarer tæt sammen med det socialfaglige personale for at skabe et trygt og sikkert miljø. De tager ikke over de socialfaglige opgaver, men sikrer, at medarbejderne kan arbejde i et trygt miljø uden risiko for vold eller fysiske konflikter. Vore vikarer er specialiserede i at håndtere udadreagerende og psykotiske borgere på en deeskalerende måde.",
    cities: ["Roskilde", "Ballerup", "Farum"],
    link: "/ydelser/tryghedsmedarbejder",
  },
  {
    title: "Konflikthåndteringsmedarbejder på Sjælland – Holbæk, Glamsbjerg og Taastrup",
    icon: <Shield className="h-7 w-7 text-red-600" />,
    description:
      "Konflikthåndteringsmedarbejdere fra Tryghedspersonale.dk er eksperter i at håndtere både psykisk og fysisk voldsomme situationer. De er trænet i deeskaleringsteknikker og kan håndtere udadreagerende og psykotiske personer i både bosteder, psykiatrisk behandling og ved andre akutte situationer. Deres primære mål er at sikre, at både personalet og borgerne er trygge og i sikkerhed under hele situationen.",
    cities: ["Holbæk", "Glamsbjerg", "Taastrup"],
    link: "/ydelser/konflikthaandtering",
  },
]

// Why choose us data
const whyChooseUs = [
  {
    title: "Hvorfor vælge Tryghedspersonale.dk til din institution på Sjælland?",
    icon: <Shield className="h-5 w-5 text-red-600" />,
    points: [
      "<strong>Specialisering i udadreagerende og psykotiske borgere</strong> – Vore vikarer er trænet i at håndtere de mest udfordrende borgere og skabe ro i selv de mest pressede situationer.",
      "<strong>Erfaring med konflikthåndtering</strong> – Vi tilbyder vikarer, der har omfattende erfaring med konflikthåndtering, deeskalering og fysisk sikkerhed.",
      "<strong>Tryghed og sikkerhed</strong> – Vore vikarer er specialiseret i at sikre, at både personale og borgere kan arbejde i et trygt og respektfuldt miljø.",
      "<strong>Fleksibilitet og tilpasning</strong> – Vi tilbyder skræddersyede løsninger, der passer til de specifikke behov på din institution.",
      "<strong>Lokal tilstedeværelse på Sjælland</strong> – Vi har vikarer tilgængelige i hele Sjælland og kan hurtigt reagere på akutte bemandingsbehov.",
    ],
  },
]

// Process steps
const processSteps = [
  {
    number: 1,
    title: "Behovsanalyse",
    description: "Vi analyserer jeres specifikke sikkerhedsbehov og udfordringer.",
  },
  {
    number: 2,
    title: "Skræddersyet løsning",
    description: "Vi udvikler en sikkerhedsløsning tilpasset jeres institution.",
  },
  {
    number: 3,
    title: "Implementering",
    description: "Vores specialuddannede personale integreres i jeres daglige drift.",
  },
  {
    number: 4,
    title: "Løbende evaluering",
    description: "Vi sikrer kontinuerlig optimering af sikkerhedsløsningen.",
  },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Custom hooks
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return { count, ref: nodeRef }
}

// Components
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrent(current === sliderImages.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent(current === 0 ? sliderImages.length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [current])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={sliderImages[current].src || "/placeholder.svg"}
              alt={sliderImages[current].alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
              <div className="container mx-auto px-20 md:px-28 z-10">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/90 text-white backdrop-blur-sm mb-6 shadow-lg"
                  >
                    <MapPin className="h-5 w-5 mr-2" /> Sjælland
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  >
                    {sliderImages[current].title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 mb-8"
                  >
                    {sliderImages[current].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <a href="tel:41443333" className="flex items-center">
                        <Phone className="mr-2 h-5 w-5" /> Akut hjælp: 41 44 33 33
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white bg-black/30 hover:bg-white/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <Link href="/kontakt" className="flex items-center">
                        Kontakt os <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full z-20 transition-all"
        aria-label="Forrige slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full z-20 transition-all"
        aria-label="Næste slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Gå til slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating emergency card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-24 right-12 bg-red-600/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-white z-30 max-w-xs hidden lg:block"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-white/20 p-3 rounded-full">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Akut udrykning</h3>
            <p className="text-white/80 text-sm">Hele Sjælland, 24/7</p>
          </div>
        </div>
        <p className="text-white/90 text-sm mb-4">
          Vi er altid klar til at rykke ud med kort varsel, når du har brug for professionel assistance.
        </p>
        <Button asChild size="sm" className="w-full bg-white text-red-600 hover:bg-white/90 transition-all">
          <a href="tel:41443333" className="flex items-center justify-center">
            <Phone className="mr-2 h-4 w-4" /> Ring nu
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vikarservice til Sjælland – Professionelt personale til institutioner og bosteder
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Hos <strong>Tryghedspersonale.dk</strong> er vi et <strong>specialiseret vikarbureau</strong>, der tilbyder
            vikarer til håndtering af <strong>udadreagerende, psykotiske og voldsomme borgere</strong>. Vi leverer
            kompetent og erfarent personale til institutioner og bosteder på <strong>Sjælland</strong>, herunder
            asylcentre, plejehjem, bosteder, psykiatrien, enkeltmandsprojekter samt konflikthåndtering. Vore vikarer er
            trænet i at håndtere de mest udfordrende situationer med fokus på tryghed, sikkerhed og respekt for både
            borgerne og det eksisterende personale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> Specialiseret personale
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> Hurtig responstid
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" /> 24/7 tilgængelighed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CountUpDisplay({ end }: { end: number }) {
  const { count, ref } = useCountUp(end)
  return <span ref={ref}>{count}</span>
}

function CitiesBanner() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {["Helsingør", "Kokkedal", "Hellerup", "Frederikssund", "Slagelse", "Køge", "Roskilde", "Næstved"].map(
            (city) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.random() * 0.5 }}
                className="flex items-center gap-2 transition-transform duration-300 hover:transform hover:scale-105 bg-slate-50 px-3 py-2 rounded-full shadow-sm"
              >
                <div className="bg-red-100 p-1 rounded-full">
                  <MapPin className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-slate-700 text-sm md:text-base font-medium">{city}</span>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/5 to-slate-800/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
          >
            <Shield className="h-4 w-4 mr-2" /> Vores specialiserede ydelser
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Skræddersyede løsninger til Sjælland
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-3xl mx-auto"
          >
            Vi tilbyder en bred vifte af ydelser, der er skræddersyet til de særlige behov på Sjælland. Alle vores
            ydelser er udført med en <strong>lav-arousal tilgang</strong>, som skaber tryghed i udfordrende situationer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
            >
              <CardContent className="p-6">
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{service.location}</span>
                </div>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-red-600 font-medium flex items-center hover:text-red-700 group-hover:translate-x-1 transition-transform duration-300"
                >
                  Læs mere <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecializedServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!scrollRef.current) return

    const distance = touchStart - touchEnd
    const itemWidth = scrollRef.current.scrollWidth / specializedServices.length

    if (distance > 50) {
      // Swipe left
      const newIndex = Math.min(activeIndex + 1, specializedServices.length - 1)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }

    if (distance < -50) {
      // Swipe right
      const newIndex = Math.max(activeIndex - 1, 0)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }
  }

  // Handle scroll events to update active index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.scrollWidth / specializedServices.length
      const newIndex = Math.round(scrollPosition / itemWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
          >
            <User className="h-4 w-4 mr-2" /> Specialiserede ydelser
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Vores ekspertiseområder på Sjælland
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-3xl mx-auto"
          >
            Vi tilbyder specialiserede ydelser, der er tilpasset de unikke behov i forskellige institutioner og
            situationer på Sjælland.
          </motion.p>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold break-words hyphens-auto">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">Tilgængelig i:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.cities.map((city) => (
                    <span key={city} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mt-4 transition-colors duration-300"
              >
                Læs mere
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - horizontal scroll */}
        <div className="md:hidden scroll-container">
          <div
            ref={scrollRef}
            className="scroll-items"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-item w-[85%] mr-4 flex-shrink-0 bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold break-words hyphens-auto">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Tilgængelig i:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.cities.map((city) => (
                      <span key={city} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mt-4 transition-colors duration-300"
                >
                  Læs mere
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="scroll-indicator">
            {specializedServices.map((_, index) => (
              <div key={index} className={`scroll-dot ${index === activeIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!scrollRef.current) return

    const distance = touchStart - touchEnd
    const itemWidth = scrollRef.current.scrollWidth / whyChooseUs.length

    if (distance > 50) {
      // Swipe left
      const newIndex = Math.min(activeIndex + 1, whyChooseUs.length - 1)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }

    if (distance < -50) {
      // Swipe right
      const newIndex = Math.max(activeIndex - 1, 0)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }
  }

  // Handle scroll events to update active index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.scrollWidth / whyChooseUs.length
      const newIndex = Math.round(scrollPosition / itemWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
          >
            <CheckCircle className="h-4 w-4 mr-2" /> Derfor skal du vælge os
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Tryghed og sikkerhed i fokus
          </motion.h2>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i} className="text-slate-600 mb-2" dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - horizontal scroll */}
        <div className="md:hidden scroll-container">
          <div
            ref={scrollRef}
            className="scroll-items"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-item w-[85%] mr-4 flex-shrink-0 bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i} className="text-slate-600 mb-2" dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="scroll-indicator">
            {whyChooseUs.map((_, index) => (
              <div key={index} className={`scroll-dot ${index === activeIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-6">
            Kontakt os i dag for at høre, hvordan vi kan hjælpe med at sikre tryghed og ro i din institution på
            Sjælland.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
            <Link href="/kontakt" className="flex items-center">
              Kontakt os i dag <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!scrollRef.current) return

    const distance = touchStart - touchEnd
    const itemWidth = scrollRef.current.scrollWidth / processSteps.length

    if (distance > 50) {
      // Swipe left
      const newIndex = Math.min(activeIndex + 1, processSteps.length - 1)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }

    if (distance < -50) {
      // Swipe right
      const newIndex = Math.max(activeIndex - 1, 0)
      scrollRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      })
    }
  }

  // Handle scroll events to update active index
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.scrollWidth / processSteps.length
      const newIndex = Math.round(scrollPosition / itemWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
          >
            <ArrowRight className="h-4 w-4 mr-2" /> Vores proces
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sådan arbejder vi
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-3xl mx-auto"
          >
            Vi følger en struktureret proces for at sikre, at du får den bedste løsning til dine behov.
          </motion.p>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-2xl font-bold text-red-600 mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - horizontal scroll */}
        <div className="md:hidden scroll-container">
          <div
            ref={scrollRef}
            className="scroll-items"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-item w-[70%] mr-4 flex-shrink-0 bg-slate-50 rounded-lg shadow-md p-6"
              >
                <div className="text-2xl font-bold text-red-600 mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="scroll-indicator">
            {processSteps.map((_, index) => (
              <div key={index} className={`scroll-dot ${index === activeIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchTermsSection() {
  const searchTerms = [
    "vikar til asylcenter Sjælland",
    "vikar til plejehjem Sjælland",
    "vikar til bosted Sjælland",
    "psykiatrisk vikar Sjælland",
    "tryghedsmedarbejder Sjælland",
    "konflikthåndtering Sjælland",
    "tryghedspersonale Sjælland",
    "sikkerhedsmedarbejder Sjælland",
    "vikar til institutioner Sjælland",
    "tryghedsmedarbejder til bosted Sjælland",
    "akut vikar Sjælland",
    "vikar til psykiatrisk afdeling Sjælland",
    "vikar til enkeltmandsprojekt Sjælland",
    "deeskalering Sjælland",
    "vikar til borger med udadreagerende adfærd Sjælland",
    "vikar til psykiatri Sjælland",
    "vikar til socialpædagogiske opgaver Sjælland",
    "sikkerhedspersonale Sjælland",
    "vikar til skærmede enheder Sjælland",
    "tryghed i institutioner Sjælland",
    "vikar til borgere med psykiske lidelser Sjælland",
    "vikar til plejehjem med særlige behov Sjælland",
    "vikar til konflikthåndtering Sjælland",
    "psykiatrisk vikar",
    "fastvagt til plejehjem",
    "vikar til aflastning Sjælland",
    "tryghed i psykiatrien",
    "vikar til støtteopgaver Sjælland",
    "vikar til ferieafløsning Sjælland",
    "vikar til krisesituationer Sjælland",
    "sikkerhed i bosteder Sjælland",
    "konflikthåndtering i psykiatrien Sjælland",
    "vikar til krisehåndtering Sjælland",
    "tryghedsmedarbejder til psykiatrisk afdeling Sjælland",
    "vikar til udadreagerende borgere Sjælland",
    "akut bemanding Sjælland",
    "vikar til borgerarbejde Sjælland",
    "vikar til specialiserede bosteder Sjælland",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
            >
              <MapPin className="h-4 w-4 mr-2" /> Søgeord for Sjælland
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            >
              Find os på disse søgeord
            </motion.h2>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-red-600 mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-600 max-w-3xl mx-auto text-lg"
            >
              Vi dækker alle disse specialiserede områder på Sjælland med professionelt og erfaret personale.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {searchTerms.map((term, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.02,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  className="inline-block bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200 hover:from-red-100 hover:to-red-200 hover:border-red-300 transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                >
                  {term}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-6">Har du brug for specialiseret personale til en af disse opgaver?</p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Link href="/kontakt" className="flex items-center">
                Kontakt os i dag <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactBanner() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Klar til at komme i gang?</h2>
            <p className="text-lg mb-8">
              Kontakt os i dag for en uforpligtende samtale om dine behov og hvordan vi kan hjælpe dig.
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 transition-all">
              <Link href="/kontakt" className="flex items-center">
                Kontakt os <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-full bg-red-700 p-8 shadow-lg"
            >
              <Mail className="w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SjaellandPage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <CitiesBanner />
      <ServicesSection />
      <SpecializedServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <SearchTermsSection />
      <ContactBanner />
    </>
  )
}

export default SjaellandPage
