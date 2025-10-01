"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, CheckCircle, ArrowRight, Shield, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

// SEO Metadata
export const metadata = {
  title:
    "Hovedstadsområdet | København, Hvidovre, Rødovre, Taastrup, Glamsbjerg | Specialiseret Vikarbureau | Håndtering af Udadreagerende Adfærd | Psykotiske & Voldsomme Borgere | Kontakt Os i Dag",
  description:
    "Hos vores specialiserede vikarbureau tilbyder vi fast vagt i hele Hovedstadsområdet, med fokus på håndtering af udadreagerende adfærd, psykotiske og voldsomme borgere. Vi leverer professionelle vikarer til asylcentre, plejehjem, bosteder og psykiatrien i byerne København, Hvidovre, Rødovre, Taastrup, Glamsbjerg og flere steder. Vores vikarer er erfarne i at skabe tryghed og sikre en stabil drift i udfordrende situationer. Kontakt os i dag for skræddersyede løsninger, der matcher jeres behov.",
  keywords:
    "vikar til asylcenter Hovedstadsområdet, vikar til plejehjem Hovedstadsområdet, vikar til bosted Hovedstadsområdet, psykiatrisk vikar Hovedstadsområdet, tryghedsmedarbejder Hovedstadsområdet, konflikthåndtering Hovedstadsområdet, tryghedspersonale Hovedstadsområdet, sikkerhedsmedarbejder Hovedstadsområdet, vikar til institutioner Hovedstadsområdet, tryghedsmedarbejder til bosted Hovedstadsområdet, akut vikar Hovedstadsområdet, vikar til psykiatrisk afdeling Hovedstadsområdet, vikar til enkeltmandsprojekt Hovedstadsområdet, deeskalering Hovedstadsområdet, vikar til borger med udadreagerende adfærd Hovedstadsområdet, vikar til psykiatri Hovedstadsområdet, vikar til socialpædagogiske opgaver Hovedstadsområdet, sikkerhedspersonale Hovedstadsområdet, vikar til skærmede enheder Hovedstadsområdet, tryghed i institutioner Hovedstadsområdet, vikar til borgere med psykiske lidelser Hovedstadsområdet, vikar til plejehjem med særlige behov Hovedstadsområdet, vikar til konflikthåndtering Hovedstadsområdet, psykiatrisk vikar, fastvagt til plejehjem, vikar til aflastning Hovedstadsområdet, tryghed i psykiatrien, vikar til støtteopgaver Hovedstadsområdet, vikar til ferieafløsning Hovedstadsområdet, vikar til krisesituationer Hovedstadsområdet, sikkerhed i bosteder Hovedstadsområdet, konflikthåndtering i psykiatrien Hovedstadsområdet, vikar til krisehåndtering Hovedstadsområdet, tryghedsmedarbejder til psykiatrisk afdeling Hovedstadsområdet, vikar til udadreagerende borgere Hovedstadsområdet, akut bemanding Hovedstadsområdet, vikar til borgerarbejde Hovedstadsområdet, vikar til specialiserede bosteder Hovedstadsområdet",
}

// Hero Slider Images
const sliderImages = [
  {
    src: "/tryghedspersonale-samtale-udendoers.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger i København",
    title: "Professionel vikarservice til hele Hovedstadsområdet",
    subtitle: "Konflikthåndtering i Hovedstadsområdet – Rødovre, København og Taastrup",
  },
  {
    src: "/tryghedspersonale-aeldre-stoette.jpeg",
    alt: "Tryghedsmedarbejder der støtter ældre borger i Hovedstadsområdet",
    title: "Eksperter i håndtering af udadreagerende adfærd",
    subtitle: "Skræddersyede løsninger til psykiatrien, plejehjem og bosteder",
  },
  {
    src: "/tryghedspersonale-park-samtale.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger i park i København",
    title: "Akut hjælp 24/7 i hele Hovedstadsområdet",
    subtitle: "Hurtig responstid og professionel assistance når du har brug for det",
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vikarservice til Hovedstadsområdet – Professionelt personale til institutioner og bosteder
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Hos <strong>Tryghedspersonale.dk</strong> er vi et <strong>specialiseret vikarbureau</strong>, der tilbyder
            vikarer til håndtering af <strong>udadreagerende, psykiske lidelser og voldsomme adfærdsmønstre</strong>. Vi
            leverer kompetent og erfarent personale til institutioner og bosteder i <strong>Hovedstadsområdet</strong>,
            herunder asylcentre, plejehjem, bosteder, psykiatrien, enkeltmandsprojekter samt konflikthåndtering. Vore
            vikarer er trænet i at håndtere de mest udfordrende situationer med fokus på tryghed, sikkerhed og respekt
            for både borgere og det eksisterende personale.
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
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {["København", "Frederiksberg", "Hvidovre", "Ballerup", "Rødovre", "Hørsholm", "Lyngby", "Hillerød"].map(
            (city) => (
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
            ),
          )}
        </div>
      </div>
    </section>
  )
}

type RegionServiceCardProps = {
  title: string
  location: string
  description: string
  imageSrc: string
  link: string
}

function RegionServiceCard({ title, location, description, imageSrc, link }: RegionServiceCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-52">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={85}
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).src = "/placeholder.svg?height=208&width=300"
          }}
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {location}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-red-600 font-medium inline-flex items-center hover:text-red-700 transition-colors"
        >
          Læs mere <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/5 rounded-full blur-3xl" />

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
            Skræddersyede løsninger til Hovedstadsområdet
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RegionServiceCard
            title="Vikarer til Asylcentre"
            location="København"
            description="Vi tilbyder specialiserede vikarer til asylcentre i hele Hovedstadsområdet."
            imageSrc="/tryghedspersonale-park.jpeg"
            link="/ydelser/bemanding-asylcentre"
          />
          <RegionServiceCard
            title="Vikarer til Plejehjem"
            location="Frederiksberg"
            description="Vi tilbyder specialiserede vikarer til plejehjem i hele Hovedstadsområdet."
            imageSrc="/tryghedspersonale-aeldre-stoette.jpeg"
            link="/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd"
          />
          <RegionServiceCard
            title="Vikarer til Bosteder"
            location="Rødovre"
            description="Vi tilbyder specialiserede vikarer til bosteder i hele Hovedstadsområdet."
            imageSrc="/tryghedspersonale-faellesrum.jpeg"
            link="/ydelser/bosteder"
          />
          <RegionServiceCard
            title="Vikarer til Psykiatrien"
            location="Hillerød"
            description="Vi tilbyder specialiserede vikarer til psykiatrien i hele Hovedstadsområdet."
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Vores ekspertiseområder i Hovedstadsområdet
          </motion.h2>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Vikarer til Asylcentre i Hovedstadsområdet – København, Hvidovre og Ballerup
            </h3>
            <p className="text-slate-600 mb-4">
              Vi tilbyder <strong>specialiserede vikarer</strong>, der har erfaring med at arbejde på asylcentre og
              håndtere personer med forskellige psykologiske og sociale behov. Vore vikarer er trænet i at skabe tryghed
              og ro i situationer med udadreagerende adfærd og psykologiske kriser, samtidig med at de understøtter
              asylansøgerne i deres integration og daglige rutiner.
            </p>
            <Link
              href="/ydelser/fastvagt-asylcentre"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Vikarservice til Plejehjem i Hovedstadsområdet – Frederiksberg, Glamsbjerg og Brøndby
            </h3>
            <p className="text-slate-600 mb-4">
              På plejehjem i Hovedstadsområdet tilbyder vi vikarer, der er specialiserede i at håndtere ældre med både
              fysiske og psykiske udfordringer. Vore vikarer kan håndtere udadreagerende og voldsomme adfærdsmønstre,
              hvilket giver både personale og beboere en større tryghed i daglige situationer.
            </p>
            <Link
              href="/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Vikarer til Bosteder og Institutioner i Hovedstadsområdet – Rødovre, Hørsholm og Lyngby
            </h3>
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
            <h3 className="text-2xl font-bold mb-4">
              Vikarer til Psykiatrien i Hovedstadsområdet – Hillerød, Gentofte og Hvidovre
            </h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer til psykiatrien er særligt uddannede i at håndtere psykiske lidelser og udadreagerende
              patienter. De arbejder som en del af et tværfagligt team, hvor deres rolle er at skabe tryghed og
              sikkerhed i psykiatriske afdelinger. Vikarerne er oplært i deeskalering, konflikthåndtering og fysisk
              sikkerhed, hvilket giver personalet mulighed for at fokusere på behandling og støtte.
            </p>
            <Link
              href="/ydelser/psykiatrien"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Enkeltmandsprojekter i Hovedstadsområdet – Glamsbjerg, Albertslund og Hørsholm
            </h3>
            <p className="text-slate-600 mb-4">
              Vore <strong>vikarer til enkeltmandsprojekter</strong> tilbyder intensiv støtte til enkeltpersoner med
              særlige behov, som kræver individuel overvågning og støtte. Vore vikarer er erfarne i at håndtere psykiske
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
            <h3 className="text-2xl font-bold mb-4">
              Tryghedsmedarbejdere i Hovedstadsområdet – Nordsjælland, København og Vesterbro
            </h3>
            <p className="text-slate-600 mb-4">
              Som <strong>tryghedsmedarbejdere</strong> arbejder vores vikarer tæt sammen med det socialfaglige
              personale for at skabe et trygt og sikkert miljø. De tager ikke over de socialfaglige opgaver, men sikrer,
              at medarbejderne kan arbejde i et trygt miljø uden risiko for vold eller fysiske konflikter. Vore vikarer
              er specialiserede i at håndtere udadreagerende og psykotiske borgere på en deeskalerende måde.
            </p>
            <Link
              href="/ydelser/tryghedsmedarbejder"
              className="text-red-600 font-medium flex items-center hover:text-red-700 transition-transform duration-300"
            >
              Læs mere her <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">
              Konflikthåndteringsmedarbejdere i Hovedstadsområdet – Rødovre, København og Taastrup
            </h3>
            <p className="text-slate-600 mb-4">
              <strong>Konflikthåndteringsmedarbejdere</strong> fra <strong>Tryghedspersonale.dk</strong> er eksperter i
              at håndtere både psykisk og fysisk voldsomme situationer. De er trænet i deeskaleringsteknikker og kan
              håndtere udadreagerende og psykotiske personer i både bosteder, psykiatrisk behandling og ved andre akutte
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

function KeywordsSection() {
  const keywords = [
    "vikar til asylcenter Hovedstadsområdet",
    "vikar til plejehjem Hovedstadsområdet",
    "vikar til bosted Hovedstadsområdet",
    "psykiatrisk vikar Hovedstadsområdet",
    "tryghedsmedarbejder Hovedstadsområdet",
    "konflikthåndtering Hovedstadsområdet",
    "tryghedspersonale Hovedstadsområdet",
    "sikkerhedsmedarbejder Hovedstadsområdet",
    "vikar til institutioner Hovedstadsområdet",
    "tryghedsmedarbejder til bosted Hovedstadsområdet",
    "akut vikar Hovedstadsområdet",
    "vikar til psykiatrisk afdeling Hovedstadsområdet",
    "vikar til enkeltmandsprojekt Hovedstadsområdet",
    "deeskalering Hovedstadsområdet",
    "vikar til borger med udadreagerende adfærd Hovedstadsområdet",
    "vikar til psykiatri Hovedstadsområdet",
    "vikar til socialpædagogiske opgaver Hovedstadsområdet",
    "sikkerhedspersonale Hovedstadsområdet",
    "vikar til skærmede enheder Hovedstadsområdet",
    "tryghed i institutioner Hovedstadsområdet",
    "vikar til borgere med psykiske lidelser Hovedstadsområdet",
    "vikar til plejehjem med særlige behov Hovedstadsområdet",
    "vikar til konflikthåndtering Hovedstadsområdet",
    "psykiatrisk vikar",
    "fastvagt til plejehjem",
    "vikar til aflastning Hovedstadsområdet",
    "tryghed i psykiatrien",
    "vikar til støtteopgaver Hovedstadsområdet",
    "vikar til ferieafløsning Hovedstadsområdet",
    "vikar til krisesituationer Hovedstadsområdet",
    "sikkerhed i bosteder Hovedstadsområdet",
    "konflikthåndtering i psykiatrien Hovedstadsområdet",
    "vikar til krisehåndtering Hovedstadsområdet",
    "tryghedsmedarbejder til psykiatrisk afdeling Hovedstadsområdet",
    "vikar til udadreagerende borgere Hovedstadsområdet",
    "akut bemanding Hovedstadsområdet",
    "vikar til borgerarbejde Hovedstadsområdet",
    "vikar til specialiserede bosteder Hovedstadsområdet",
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-6">
              <Shield className="h-4 w-4 mr-2" /> Vores specialområder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Søger du specialiseret vikarhjælp i Hovedstadsområdet?
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Vi tilbyder professionelle vikarer til alle typer institutioner i Hovedstadsområdet. Vores specialiserede
              personale har erfaring med de mest udfordrende situationer og kan hjælpe med:
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keywords.map((keyword, index) => (
                <motion.div
                  key={keyword}
                  initial={{ scale: 0.96, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.015 }}
                  className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 transition-colors duration-300">
                    {keyword}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Uanset hvilken type vikarhjælp du har brug for i Hovedstadsområdet, så har vi den rette løsning til dig.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <a href="tel:+4541443333" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" /> Ring nu: 41 44 33 33
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <Link href="/kontakt" className="flex items-center">
                    Få et tilbud <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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

function HovedstadenPage() {
  return (
    <>
      <EnhancedHeroSlider slides={sliderImages} locationLabel="Hovedstadsområdet" />
      <IntroSection />
      <CitiesBanner />
      <ServicesSection />
      <SpecializedServicesSection />
      <KeywordsSection />
      <ContactBanner />
    </>
  )
}

export default HovedstadenPage
