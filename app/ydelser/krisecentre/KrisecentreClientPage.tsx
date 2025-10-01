"use client"

import { useState, useEffect } from "react"
import {
  Shield,
  Heart,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  AlertTriangle,
  Home,
  Baby,
  UserCheck,
  Headphones,
  Lock,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react"

export default function KrisecentreClientPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "/residential-care-security.png",
      title: "Specialiseret bemanding til krisecentre",
      subtitle: "Professionel støtte til kvinder og børn i krise",
      description:
        "Vi leverer erfarne medarbejdere til krisecentre med fokus på traumehåndtering, sikkerhed og omsorg.",
      cta: "Ring 41 44 33 33",
    },
    {
      image: "/caregiver-supporting-person.png",
      title: "Traumeinformeret tilgang",
      subtitle: "Specialuddannede medarbejdere",
      description:
        "Vores personale er trænet i traumehåndtering og arbejder med respekt for den enkelte kvindes og børns behov.",
      cta: "Få et tilbud",
    },
    {
      image: "/tryghedspersonale-samtale-udendoers.jpeg",
      title: "Døgnbemanding og akut udrykning",
      subtitle: "Vi er der når I har brug for os",
      description: "Hurtig respons og fleksible løsninger til både planlagte og akutte bemanningsbehov.",
      cta: "Kontakt os",
    },
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sikkerhed og beskyttelse",
      description: "Professionel sikkerhedsvurdering og beskyttelse af beboere mod trusler og vold.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Traumehåndtering",
      description: "Specialuddannede medarbejdere med erfaring i at støtte traumatiserede kvinder og børn.",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Børnestøtte",
      description: "Særlig fokus på børns behov og trivsel i krisecentermiljøet.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Døgnbemanding",
      description: "24/7 bemanding med erfarne medarbejdere der sikrer kontinuerlig støtte og sikkerhed.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Krisesamtaler",
      description: "Uddannede samtalemedarbejdere der kan støtte i akutte krisesituationer.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Boligstøtte",
      description: "Hjælp til praktiske opgaver og støtte i overgangen til permanent bolig.",
    },
  ]

  const accordionItems = [
    {
      title: "Hvilken erfaring har jeres medarbejdere med krisecentre?",
      content:
        "Vores medarbejdere har omfattende erfaring fra krisecentre, kvindehuse og lignende institutioner. De er uddannet i traumehåndtering, konflikthåndtering og har særlig forståelse for de udfordringer, som kvinder og børn i krise står overfor. Mange har baggrund som socialrådgivere, pædagoger eller social- og sundhedsassistenter med specialisering i krisestøtte.",
    },
    {
      title: "Hvordan sikrer I fortrolighed og anonymitet?",
      content:
        "Vi har strenge procedurer for fortrolighed og anonymitet. Alle medarbejdere underskriver omfattende tavshedserklæringer og er instrueret i krisecentres særlige sikkerhedsprotokoller. Vi forstår vigtigheden af at beskytte beboernes identitet og opholdssted, og vores medarbejdere er trænet i at håndtere følsomme oplysninger korrekt.",
    },
    {
      title: "Kan I levere bemanding med kort varsel?",
      content:
        "Ja, vi har et beredskab der gør det muligt at levere kvalificeret bemanding med meget kort varsel - ofte samme dag. Vi forstår at krisecentre kan opleve pludselige bemanningsbehov, og vi har derfor altid medarbejdere klar til akut udrykning.",
    },
    {
      title: "Hvilke kvalifikationer har jeres medarbejdere?",
      content:
        "Vores medarbejdere har relevante uddannelser inden for social- og sundhedsområdet, herunder socialrådgivere, pædagoger, social- og sundhedsassistenter og psykologer. Derudover har de alle gennemgået specialuddannelse i traumehåndtering, konflikthåndtering og arbejde med udsatte kvinder og børn.",
    },
    {
      title: "Hvordan tilpasser I jer til det enkelte krisecenters behov?",
      content:
        "Vi starter altid med en grundig dialog om centerets specifikke behov, målgruppe og arbejdsmetoder. Vores medarbejdere briefes grundigt om centerets procedurer, sikkerhedsforanstaltninger og pædagogiske tilgang, så de kan integreres sømløst i det eksisterende team.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 z-10" />
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <div className="inline-flex items-center bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield className="mr-2 h-4 w-4" />
                    Specialiseret bemanding
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-4 text-slate-200 font-medium">{slide.subtitle}</p>
                  <p className="text-lg mb-8 text-slate-300 leading-relaxed">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+4541443333"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      {slide.cta}
                    </a>
                    <a
                      href="/kontakt"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                    >
                      Få et uforpligtende tilbud
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-red-600 w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="mr-2 h-4 w-4" />
              Vores specialområder
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Omfattende støtte til krisecentre</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Vi leverer specialiseret bemanding til krisecentre med fokus på sikkerhed, omsorg og professionel støtte
              til kvinder og børn i krise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Udfordringer på krisecentre
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Komplekse situationer kræver specialiseret hjælp
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Krisecentre står overfor unikke udfordringer, hvor kvinder og børn kommer i akutte krisesituationer. Det
                kræver medarbejdere med særlig uddannelse og erfaring i traumehåndtering, konflikthåndtering og arbejde
                med udsatte borgere.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Traumehåndtering</h4>
                    <p className="text-slate-600">
                      Professionel støtte til kvinder og børn der har oplevet vold og traumer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Sikkerhedsvurdering</h4>
                    <p className="text-slate-600">
                      Kontinuerlig vurdering af trusler og implementering af sikkerhedsforanstaltninger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Børnestøtte</h4>
                    <p className="text-slate-600">
                      Specialiseret omsorg og støtte til børn der har været vidne til eller oplevet vold.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/caregiver-with-elderly-resident.jpeg"
                alt="Professionel støtte på krisecenter"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Døgnbemanding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <UserCheck className="mr-2 h-4 w-4" />
              Tillid og professionalisme
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Hav tillid til vores medarbejdere</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Hos Tryghedspersonale.dk er vores medarbejdere eksperter i at arbejde med kvinder og børn i krise. Vi
              forstår de særlige udfordringer og følsomme situationer, der opstår på krisecentre, og vores personale er
              trænet i at håndtere disse med den største respekt og professionalisme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Certificeret personale</h3>
                <p className="text-slate-600">Alle medarbejdere har relevante uddannelser og certificeringer.</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fortrolighed</h3>
                <p className="text-slate-600">Strenge procedurer for fortrolighed og beskyttelse af beboere.</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hurtig respons</h3>
                <p className="text-slate-600">Vi kan levere kvalificeret bemanding med meget kort varsel.</p>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Vores medarbejdere arbejder med respekt for den enkelte kvindes og børns værdighed og selvbestemmelse. Vi
              fokuserer på at skabe et trygt miljø, hvor healing og genopbygning kan finde sted, samtidig med at vi
              sikrer den nødvendige beskyttelse og støtte.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Lightbulb className="mr-2 h-4 w-4" />
                Ofte stillede spørgsmål
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Svar på dine spørgsmål</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Her finder du svar på de mest almindelige spørgsmål om vores bemanding til krisecentre.
              </p>
            </div>

            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{item.title}</h3>
                    {openAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openAccordion === index && (
                    <div className="px-8 pb-6">
                      <p className="text-slate-600 leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Søgeord og tjenester</h2>
              <p className="text-slate-600">Vi leverer specialiseret bemanding til krisecentre i hele Danmark</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Krisecentre bemanding",
                "Vikar krisecenter",
                "Traumehåndtering",
                "Kvindekrisecenter",
                "Børn i krise",
                "Konflikthåndtering krisecenter",
                "Sikkerhedsvagt krisecenter",
                "Døgnbemanding krisecenter",
                "Specialiseret personale krisecentre",
                "Akut bemanding krisecenter",
                "Traumeinformeret tilgang",
                "Krisestøtte medarbejdere",
                "Beskyttelse kvinder og børn",
                "Professionel krisehåndtering",
                "Fortrolig bemanding",
                "Kvalificerede krisemedarbejdere",
                "Hurtig respons krisecenter",
                "Specialuddannede medarbejdere",
                "Sikkerhedsvurdering krisecenter",
                "Støtte til udsatte kvinder",
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm border border-slate-200 hover:border-red-200 hover:text-red-600 transition-colors duration-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Har I brug for specialiseret bemanding?</h2>
            <p className="text-xl mb-8 text-red-100 leading-relaxed">
              Kontakt os i dag for at høre hvordan vi kan støtte jeres krisecenter med kvalificeret og erfaren
              bemanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4541443333"
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring 41 44 33 33
              </a>
              <a
                href="/kontakt"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send besked
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
