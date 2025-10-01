"use client"

import { useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, CheckCircle, ArrowRight, Shield, Users, Building, Brain, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedHeroSlider } from "@/components/enhanced-hero-slider"

// Hero Slider Images
const sliderImages = [
  {
    src: "/tryghedspersonale-park-samtale.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger i Jylland",
    title: "Professionel vikarservice til hele Jylland",
    subtitle: "Specialiseret bemanding til institutioner og bosteder i Aarhus, Aalborg, Vejle og hele Jylland",
  },
  {
    src: "/tryghedspersonale-aeldre-stoette.jpeg",
    alt: "Tryghedsmedarbejder der støtter ældre borger i Jylland",
    title: "Eksperter i håndtering af udadreagerende adfærd",
    subtitle: "Skræddersyede løsninger til psykiatrien, plejehjem og bosteder",
  },
  {
    src: "/tryghedspersonale-samtale-udendoers.jpeg",
    alt: "Tryghedsmedarbejder i samtale med borger udendørs i Jylland",
    title: "Akut hjælp 24/7 i hele Jylland",
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
            Vikarservice til Jylland – Specialiseret personale til institutioner og bosteder
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Hos <strong>Tryghedspersonale.dk</strong> tilbyder vi specialiseret vikarservice til institutioner og
            bosteder i hele Jylland. Vore vikarer er eksperter i håndtering af udfordrende adfærd, herunder personer med
            psykiske lidelser, voldsomme adfærdsmønstre og voldsomme kriser. Vi leverer kompetent og erfarent personale
            til asylcentre, plejehjem, bosteder, psykiatriske afdelinger og andre sociale institutioner, der kræver
            særlig opmærksomhed og ekspertise.
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
    () => [
      "Aarhus",
      "Aalborg",
      "Vejle",
      "Esbjerg",
      "Kolding",
      "Viborg",
      "Randers",
      "Silkeborg",
      "Fredericia",
      "Horsens",
    ],
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Skræddersyede løsninger til Jylland
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards content unchanged from previous version to preserve copywriting */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Vikarer til Asylcentre i Jylland</h3>
            <p className="text-slate-600 text-sm">
              Vi tilbyder specialiserede vikarer til asylcentre i hele Jylland, herunder byer som Aarhus, Aalborg,
              Vejle, Esbjerg, Kolding, og flere. Vore vikarer er veltrænede i at håndtere borgere med komplekse
              psykologiske og sociale udfordringer, og de skaber et trygt miljø for både beboere og personale i
              asylcentrene.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Building className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Vikarer til Plejehjem i Jylland</h3>
            <p className="text-slate-600 text-sm">
              Vore vikarer er også specialiserede i at arbejde på plejehjem og andre ældreplejeinstitutioner. Vi
              tilbyder vikarer til plejehjem i Viborg, Randers, Silkeborg, Fredericia, og Horsens, som har erfaring med
              at håndtere ældre med både fysiske og psykiske udfordringer, herunder udadreagerende adfærd og demens.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Building className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Vikarservice til Bosteder og Sociale Institutioner i Jylland</h3>
            <p className="text-slate-600 text-sm">
              Vore vikarer arbejder effektivt på bosteder og sociale institutioner i byer som Herning, Roskilde, Aarhus,
              Viborg og Horsens, hvor de støtter socialpædagogisk arbejde og sikrer et trygt miljø for borgere med
              psykiske lidelser og adfærdsvanskeligheder. Vore vikarer er eksperter i at håndtere udfordrende adfærd og
              skabe stabilitet i komplekse situationer.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Brain className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Psykiatrisk Vikarservice i Jylland</h3>
            <p className="text-slate-600 text-sm">
              Vore psykatrisk specialiserede vikarer tilbyder kompetent støtte til psykiatriske afdelinger i byer som
              Aalborg, Aarhus, Vejle, Kolding, og Randers. Vikarerne er uddannet i håndtering af psykisk ustabile
              personer, herunder deeskaleringsteknikker og krisemanagement, hvilket gør dem i stand til at skabe tryghed
              og sikkerhed i psykiatriske miljøer.
            </p>
          </div>
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
            Vores ekspertiseområder i Jylland
          </motion.h2>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-red-600 mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Enkeltmandsprojekter i Jylland</h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer til enkeltmandsprojekter tilbyder skræddersyet støtte til borgere med individuelle behov, der
              kræver tæt overvågning og støtte. Vore vikarer er tilgængelige i byer som Silkeborg, Fredericia, Vejle,
              Herning, og Aarhus, og de er erfarne i at håndtere borgeres adfærd og sikre, at alle er i trygge rammer.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Tryghedsmedarbejdere i Jylland</h3>
            <p className="text-slate-600 mb-4">
              Som tryghedsmedarbejdere arbejder vores vikarer tæt sammen med socialfaglige medarbejdere for at skabe et
              trygt og sikkert arbejdsmiljø. Vore vikarer er tilgængelige i hele Jylland, herunder i byer som Kolding,
              Viborg, Aalborg, Horsens, og Esbjerg, og sikrer, at det socialfaglige personale kan udføre deres opgaver
              uden risiko for vold eller fysiske konflikter.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4">Konflikthåndtering i Jylland</h3>
            <p className="text-slate-600 mb-4">
              Vore vikarer med specialisering i konflikthåndtering er trænede i at håndtere både psykiske og fysiske
              voldsomme situationer. Vikarer tilbydes til institutioner i Aarhus, Vejle, Randers, Silkeborg, Kolding, og
              Herning, og er eksperter i at bruge deeskaleringsteknikker for at sikre tryghed for både personale og
              borgere.
            </p>
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Hvorfor vælge Tryghedspersonale.dk til din institution i Jylland?
          </motion.h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Erfaring i Jylland</strong> – Vi har vikarer med omfattende erfaring i alle regioner af Jylland
                og kan hurtigt sende kvalificeret personale til jeres institution, uanset hvor i Jylland I er placeret.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Specialisering i udfordrende adfærd</strong> – Vore vikarer er trænet i håndtering af personer
                med psykiske lidelser og udadreagerende adfærd og har stor erfaring med at skabe tryghed i komplekse
                situationer.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Skræddersyede løsninger</strong> – Vi tilbyder fleksible vikarordninger, der tilpasses de
                specifikke behov på din institution.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Tryghed og sikkerhed</strong> – Vore vikarer er dedikerede til at sikre et trygt arbejdsmiljø
                for både personale og borgere.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <strong>Fleksibilitet og tilgængelighed</strong> – Vi har vikarer tilgængelige på kort varsel og kan
                tilpasse os jeres behov, uanset om det er for korttids- eller langtidsbemanding.
              </div>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-4">
              Kontakt os i dag for at høre mere om, hvordan vi kan hjælpe med at sikre tryghed og stabilitet i din
              institution i Jylland.
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
    "vikar til asylcenter Jylland",
    "vikar til plejehjem Jylland",
    "vikar til bosted Jylland",
    "psykiatrisk vikar Jylland",
    "tryghedsmedarbejder Jylland",
    "konflikthåndtering Jylland",
    "tryghedspersonale Jylland",
    "sikkerhedsmedarbejder Jylland",
    "vikar til institutioner Jylland",
    "tryghedsmedarbejder til bosted Jylland",
    "akut vikar Jylland",
    "vikar til psykiatrisk afdeling Jylland",
    "vikar til enkeltmandsprojekt Jylland",
    "deeskalering Jylland",
    "vikar til borger med udadreagerende adfærd Jylland",
    "vikar til psykiatri Jylland",
    "vikar til socialpædagogiske opgaver Jylland",
    "sikkerhedspersonale Jylland",
    "vikar til skærmede enheder Jylland",
    "tryghed i institutioner Jylland",
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
            <CheckCircle className="h-4 w-4 mr-2" /> Vores specialområder
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Søger du specialiseret vikarhjælp i Jylland?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-4xl mx-auto mb-12"
          >
            Vi tilbyder professionelle vikarer til alle typer institutioner i Jylland. Vores specialiserede personale
            har erfaring med de mest udfordrende situationer og kan hjælpe med:
          </motion.p>
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
              <span className="text-slate-700 text-sm">{term}</span>
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

function JyllandClientPage() {
  return (
    <>
      <EnhancedHeroSlider slides={sliderImages} locationLabel="Jylland" />
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

export default JyllandClientPage
