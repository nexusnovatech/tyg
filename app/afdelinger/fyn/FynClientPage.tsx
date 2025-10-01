"use client"

import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, CheckCircle, ArrowRight, Shield, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

// Hero Slider Images
const sliderImages = [
  {
    src: "/tryghedspersonale-park-samtale.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger på Fyn",
    title: "Professionel vikarservice til hele Fyn",
    subtitle: "Specialiseret bemanding til institutioner og bosteder i Odense, Middelfart, Svendborg og Kolding",
  },
  {
    src: "/tryghedspersonale-aeldre-stoette.jpeg",
    alt: "Tryghedsmedarbejder der støtter ældre borger på Fyn",
    title: "Eksperter i håndtering af udadreagerende adfærd",
    subtitle: "Skræddersyede løsninger til psykiatrien, plejehjem og bosteder",
  },
  {
    src: "/tryghedspersonale-samtale-udendoers.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger udendørs på Fyn",
    title: "Akut hjælp 24/7 på hele Fyn",
    subtitle: "Hurtig responstid og professionel assistance når du har brug for det",
  },
]

// Process steps (unchanged content)
const processSteps = [
  { number: 1, title: "Behovsanalyse", description: "Vi analyserer jeres specifikke sikkerhedsbehov og udfordringer." },
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
  { number: 4, title: "Løbende evaluering", description: "Vi sikrer kontinuerlig optimering af sikkerhedsløsningen." },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 break-words-all text-wrap-balance">
            Vikarservice til Fyn – Professionelt personale til institutioner og bosteder i Odense, Middelfart, Svendborg
            og Kolding
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Hos <strong>Tryghedspersonale.dk</strong> er vi et <strong>specialiseret vikarbureau</strong>, der tilbyder
            vikarer til håndtering af <strong>udadreagerende, psykotiske og voldsomme borgere</strong>. Vi leverer
            kompetent og erfarent personale til institutioner og bosteder på <strong>Fyn</strong>, herunder asylcentre,
            plejehjem, bosteder, psykiatrien, enkeltmandsprojekter samt konflikthåndtering. Vore vikarer er trænet i at
            håndtere de mest udfordrende situationer med fokus på tryghed, sikkerhed og respekt for både borgerne og det
            eksisterende personale.
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

function CitiesBanner() {
  const cities = useMemo(
    () => ["Odense", "Middelfart", "Svendborg", "Kolding", "Nyborg", "Assens", "Faaborg", "Bogense"],
    [],
  )

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {cities.map((city) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-full shadow-sm"
            >
              <div className="bg-red-100 p-1 rounded-full">
                <MapPin className="h-4 w-4 text-red-600" />
              </div>
              <span className="text-slate-700 text-sm md:text-base font-medium">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const RegionServiceCard = ({
    title,
    location,
    description,
    imageSrc,
    link,
  }: {
    title: string
    location: string
    description: string
    imageSrc: string
    link: string
  }) => (
    <div className="bg-white rounded-xl shadow-md p-6">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="rounded-md mb-4 object-cover h-48 w-full"
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).src = "/placeholder.svg?height=192&width=600"
        }}
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">
        <strong>{location}</strong> - {description}
      </p>
      <Link
        href={link}
        className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
      >
        Læs mere <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/5 rounded-full blur-3xl"></div>

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
            className="text-3xl md:text-4xl font-bold mb-6 break-words-all text-wrap-balance"
          >
            Skræddersyede løsninger til Fyn
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
            Vi tilbyder en bred vifte af ydelser, der er skræddersyet til de særlige behov på Fyn. Alle vores ydelser er
            udført med en <strong>lav-arousal tilgang</strong>, som skaber tryghed i udfordrende situationer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RegionServiceCard
            title="Vikarer til Asylcentre"
            location="Odense"
            description="Vi tilbyder specialiserede vikarer, der har erfaring med at arbejde på asylcentre i hele Fyn."
            imageSrc="/tryghedspersonale-park.jpeg"
            link="/ydelser/bemanding-asylcentre"
          />
          <RegionServiceCard
            title="Vikarer til Plejehjem"
            location="Middelfart"
            description="Vi tilbyder specialiserede vikarer til plejehjem i hele Fyn."
            imageSrc="/tryghedspersonale-aeldre-stoette.jpeg"
            link="/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd"
          />
          <RegionServiceCard
            title="Vikarer til Bosteder"
            location="Svendborg"
            description="Vi tilbyder specialiserede vikarer til bosteder i hele Fyn."
            imageSrc="/tryghedspersonale-faellesrum.jpeg"
            link="/ydelser/bosteder"
          />
          <RegionServiceCard
            title="Vikarer til Psykiatrien"
            location="Kolding"
            description="Vi tilbyder specialiserede vikarer til psykiatrien i hele Fyn."
            imageSrc="/tryghedspersonale-samtale-udendoers.jpeg"
            link="/ydelser/psykiatrien"
          />
        </div>
      </div>
    </section>
  )
}

function SpecializedServicesSection() {
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
            className="text-3xl md:text-4xl font-bold mb-6 break-words-all text-wrap-balance"
          >
            Vores ekspertiseområder på Fyn
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          ></motion.div>
        </div>

        {/* Keep existing content blocks unchanged for SEO consistency */}
        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Vikarer til Asylcentre på Fyn – Odense</h3>
            <p className="text-slate-600 mb-4">
              Vi tilbyder specialiserede vikarer, der har erfaring med at arbejde på asylcentre og håndtere personer med
              forskellige psykologiske og sociale behov. Vore vikarer er trænet i at skabe tryghed og ro i situationer
              med udadreagerende adfærd og psykotiske episoder, samtidig med at de understøtter asylansøgerne i deres
              integration og daglige rutiner.
            </p>
            <Link
              href="/ydelser/fastvagt-asylcentre"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Vikarservice til Plejehjem på Fyn – Middelfart</h3>
            <p className="text-slate-600 mb-4">
              På plejehjem på Fyn tilbyder vi vikarer, der er specialiserede i at håndtere ældre med både fysiske og
              psykiske udfordringer. Vore vikarer kan håndtere udadreagerende og voldsomme adfærdsmønstre, hvilket giver
              både personale og beboere en større tryghed i daglige situationer.
            </p>
            <Link
              href="/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Vikarer til Bosteder og Institutioner på Fyn – Svendborg</h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer til bosteder og institutioner har erfaring med at arbejde med borgere, der har særlige behov,
              såsom psykiske lidelser, udadreagerende adfærd eller andre udfordringer. De understøtter socialpædagogiske
              medarbejdere i at sikre et trygt og respektfuldt miljø, og vores vikarer er trænet til at håndtere både
              fysiske og psykiske konflikter.
            </p>
            <Link
              href="/ydelser/fastvagt-bosted"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Vikarer til Psykiatrien på Fyn – Kolding</h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer til psykiatrien er særligt uddannede i at håndtere psykotiske og udadreagerende patienter. De
              arbejder som en del af et tværfagligt team, hvor deres rolle er at skabe tryghed og sikkerhed i
              psykiatriske afdelinger. Vikarerne er oplært i deeskalering, konflikthåndtering og fysisk sikkerhed,
              hvilket giver personalet mulighed for at fokusere på behandling og støtte.
            </p>
            <Link
              href="/ydelser/psykiatrien"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Enkeltmandsprojekter på Fyn – Odense</h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer til enkeltmandsprojekter tilbyder intensiv støtte til enkeltpersoner med særlige behov, som
              kræver individuel overvågning og støtte. Vore vikarer er erfarne i at håndtere borgeres psykotiske
              episoder og udadreagerende adfærd, hvilket giver en øget tryghed og sikkerhed.
            </p>
            <Link
              href="/enkeltmandstilbud-udadreagerende-voldsomme-psykotiske-borgere"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Tryghedsmedarbejder på Fyn – Svendborg</h3>
            <p className="text-slate-600 mb-4">
              Som tryghedsmedarbejdere arbejder vores vikarer tæt sammen med det socialfaglige personale for at skabe et
              trygt og sikkert miljø. De tager ikke over de socialfaglige opgaver, men sikrer, at medarbejderne kan
              arbejde i et trygt miljø uden risiko for vold eller fysiske konflikter. Vore vikarer er specialiserede i
              at håndtere udadreagerende og psykotiske borgere på en deeskalerende måde.
            </p>
            <Link
              href="/ydelser/tryghedsmedarbejder"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Konflikthåndteringsmedarbejder på Fyn – Middelfart</h3>
            <p className="text-slate-600 mb-4">
              Konflikthåndteringsmedarbejdere fra <strong>Tryghedspersonale.dk</strong> er eksperter i at håndtere både
              psykisk og fysisk voldsomme situationer. De er trænet i deeskaleringsteknikker og kan håndtere
              udadreagerende og psykotiske personer i både bosteder, psykiatrisk behandling og ved andre akutte
              situationer. Deres primære mål er at sikre, at både personalet og borgerne er trygge og i sikkerhed under
              hele situationen.
            </p>
            <Link
              href="/ydelser/konflikthaandtering"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
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
            className="text-3xl md:text-4xl font-bold mb-6 break-words-all text-wrap-balance"
          >
            Hvorfor vælge Tryghedspersonale.dk til din institution på Fyn?
          </motion.h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Specialisering i udadreagerende og psykotiske borgere</strong> – Vore vikarer er trænet i at
                håndtere de mest udfordrende borgere og skabe ro i selv de mest pressede situationer.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Erfaring med konflikthåndtering</strong> – Vi tilbyder vikarer, der har omfattende erfaring med
                konflikthåndtering, deeskalering og fysisk sikkerhed.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Tryghed og sikkerhed</strong> – Vore vikarer er specialiseret i at sikre, at både personale og
                borgere kan arbejde i et trygt og respektfuldt miljø.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Fleksibilitet og tilpasning</strong> – Vi tilbyder skræddersyede løsninger, der passer til de
                specifikke behov på din institution.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Lokal tilstedeværelse på Fyn</strong> – Vi har vikarer tilgængelige i hele Fyn og kan hurtigt
                reagere på akutte bemandingsbehov.
              </div>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Kontakt os i dag for at høre, hvordan vi kan hjælpe med at sikre tryghed og ro i din institution på Fyn.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/kontakt" className="flex items-center">
                Kontakt os <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchTermsSection() {
  const searchTerms = [
    "vikar til asylcenter Fyn",
    "vikar til plejehjem Fyn",
    "vikar til bosted Fyn",
    "psykiatrisk vikar Fyn",
    "tryghedsmedarbejder Fyn",
    "konflikthåndtering Fyn",
    "tryghedspersonale Fyn",
    "sikkerhedsmedarbejder Fyn",
    "vikar til institutioner Fyn",
    "tryghedsmedarbejder til bosted Fyn",
    "akut vikar Fyn",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6"
          >
            Vores specialområder
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 break-words-all text-wrap-balance"
          >
            Søger du specialiseret vikarhjælp på Fyn?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {searchTerms.map((term, index) => (
            <motion.div
              key={term}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="flex items-center text-left"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-slate-700 text-sm md:text-base">{term}</span>
            </motion.div>
          ))}
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
            <div className="rounded-full bg-red-700 p-8 shadow-lg">
              <Mail className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FynClientPage() {
  return (
    <>
      <EnhancedHeroSlider slides={sliderImages} locationLabel="Fyn" />
      <IntroSection />
      <CitiesBanner />
      <ServicesSection />
      <SpecializedServicesSection />
      <WhyChooseUsSection />
      <SearchTermsSection />
      <ContactBanner />
    </>
  )
}

export default FynClientPage
