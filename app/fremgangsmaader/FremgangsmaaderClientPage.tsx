"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  Users,
  Shield,
  Brain,
  Target,
  Lightbulb,
  FileText,
  Heart,
  MapPin,
  Phone,
} from "lucide-react"

import { useState, useEffect } from "react"
import React from "react"

// FAQ data structure
const faqItems = [
  {
    id: 1,
    question: "Hvordan adskiller jeres metoder sig fra traditionel konflikthåndtering?",
    answer:
      "Vores tilgang er baseret på forebyggelse og forståelse frem for reaktion. Vi fokuserer på at identificere og adressere de underliggende årsager til udfordrende adfærd, snarere end blot at håndtere symptomerne. Dette indebærer en kombination af arousal regulering, afskærmning og afledningsteknikker, der er skræddersyet til den enkelte borgers behov.",
    link: {
      url: "/fremgangsmaader/arousal-regulering",
      text: "Læs mere om vores metoder",
    },
    category: "metoder",
  },
  {
    id: 2,
    question: "Hvordan sikrer I, at jeres metoder er etisk forsvarlige?",
    answer:
      "Etik er kernen i alt, hvad vi gør. Vores metoder er baseret på respekt for borgerens værdighed og autonomi. Vi arbejder altid med informeret samtykke, hvor det er muligt, og vi sikrer, at vores tilgange er i overensstemmelse med gældende lovgivning og etiske retningslinjer. Vores personale modtager løbende uddannelse i etisk praksis og refleksion.",
    principles: [
      "Respekt for borgerens autonomi og værdighed",
      "Transparens i alle handlinger og beslutninger",
      "Kontinuerlig evaluering og tilpasning",
      "Fokus på borgerens trivsel frem for kontrol",
    ],
    category: "metoder",
  },
  {
    id: 3,
    question: "Kan jeres metoder tilpasses forskellige typer af institutioner?",
    answer:
      "Absolut. Vores metoder er fleksible og kan tilpasses forskellige kontekster, herunder plejehjem, bosteder, asylcentre, psykiatriske afdelinger og andre institutioner. Vi tilpasser altid vores tilgang til den specifikke kontekst og de særlige behov, der findes i forskellige miljøer.",
    institutions: ["Plejehjem", "Bosteder", "Asylcentre", "Psykiatriske afdelinger", "Hospitaler", "Specialskoler"],
    category: "samarbejde",
  },
  {
    id: 4,
    question: "Hvordan måler I effekten af jeres metoder?",
    answer:
      "Vi anvender en kombination af kvalitative og kvantitative metoder til at måle effekten af vores indsats. Dette inkluderer systematisk dokumentation af adfærd og hændelser, regelmæssige evalueringsmøder med personale og ledelse, samt feedback fra borgerne selv, hvor det er muligt. Vi analyserer disse data for at identificere mønstre, fremskridt og områder, der kræver yderligere opmærksomhed.",
    category: "resultater",
  },
  {
    id: 5,
    question: "Hvordan involverer I borgerens pårørende i jeres arbejde?",
    answer:
      "Vi anerkender, at pårørende er en vigtig ressource og en integreret del af borgerens liv. Hvor det er relevant og med borgerens samtykke, involverer vi pårørende gennem regelmæssig kommunikation, deltagelse i planlægningsmøder og ved at give dem værktøjer og strategier, de kan anvende i deres interaktioner med borgeren. Dette skaber kontinuitet og sammenhæng i borgerens liv.",
    category: "samarbejde",
  },
  {
    id: 6,
    question: "Hvor hurtigt kan I stille personale til rådighed?",
    answer:
      "Vi har et stort netværk af kvalificerede medarbejdere i hele landet, hvilket gør os i stand til at reagere hurtigt på akutte behov. I mange tilfælde kan vi stille personale til rådighed inden for 24-48 timer. Ved særligt akutte situationer kan vi ofte reagere endnu hurtigere. Vi prioriterer altid at matche den rette medarbejder med den specifikke opgave, så kvaliteten af vores service forbliver høj, selv når tiden er knap.",
    emergencyInfo: "Ved akutte situationer kan du kontakte vores døgnbemandede hotline på 41 44 33 33",
    category: "praktisk",
  },
  {
    id: 7,
    question: "Hvilke kvalifikationer har jeres personale?",
    answer:
      "Vores personale har en bred vifte af faglige baggrunde, herunder pædagogik, socialrådgivning, psykologi, sygepleje og sikkerhed. Alle medarbejdere gennemgår en grundig screeningsproces og modtager specialiseret træning i vores metoder og tilgange. Vi lægger stor vægt på både faglige kvalifikationer og personlige egenskaber som empati, tålmodighed og evnen til at bevare roen i pressede situationer.",
    backgrounds: ["Pædagoger", "Socialrådgivere", "Sygeplejersker", "Psykologer"],
    qualities: ["Empati", "Tålmodighed", "Konfliktløsning", "Stresshåndtering"],
    category: "samarbejde",
  },
  {
    id: 8,
    question: "Hvad koster jeres ydelser?",
    answer:
      "Prisen for vores ydelser varierer afhængigt af opgavens omfang, varighed og kompleksitet. Vi tilbyder skræddersyede løsninger, der passer til jeres specifikke behov og budget. Kontakt os for at få et uforpligtende tilbud baseret på jeres konkrete situation.",
    category: "praktisk",
  },
]

// FAQ Search Component
function FaqSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const { setFilteredFaqs, setActiveCategory } = useFaqContext()

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredFaqs(faqItems)
      return
    }

    const lowercasedSearch = searchTerm.toLowerCase()
    const results = faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(lowercasedSearch) || item.answer.toLowerCase().includes(lowercasedSearch),
    )

    setFilteredFaqs(results)
    setActiveCategory("alle")
  }, [searchTerm, setFilteredFaqs, setActiveCategory])

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        className="block w-full p-4 pl-12 text-sm text-slate-900 border border-slate-200 rounded-lg bg-white focus:ring-red-500 focus:border-red-500"
        placeholder="Søg i ofte stillede spørgsmål..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          onClick={() => setSearchTerm("")}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}
    </div>
  )
}

// FAQ Categories and Content
function FaqContent() {
  const { filteredFaqs, activeCategory, setActiveCategory, setFilteredFaqs } = useFaqContext()

  const handleCategoryClick = (category) => {
    setActiveCategory(category)

    if (category === "alle") {
      setFilteredFaqs(faqItems)
    } else {
      const filtered = faqItems.filter((item) => item.category === category)
      setFilteredFaqs(filtered)
    }
  }

  return (
    <>
      {/* FAQ Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeCategory === "alle" ? "bg-red-600 text-white" : "bg-white hover:bg-slate-100 text-slate-700"
          }`}
          onClick={() => handleCategoryClick("alle")}
        >
          Alle spørgsmål
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeCategory === "metoder" ? "bg-red-600 text-white" : "bg-white hover:bg-slate-100 text-slate-700"
          }`}
          onClick={() => handleCategoryClick("metoder")}
        >
          Metoder
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeCategory === "samarbejde" ? "bg-red-600 text-white" : "bg-white hover:bg-slate-100 text-slate-700"
          }`}
          onClick={() => handleCategoryClick("samarbejde")}
        >
          Samarbejde
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeCategory === "praktisk" ? "bg-red-600 text-white" : "bg-white hover:bg-slate-100 text-slate-700"
          }`}
          onClick={() => handleCategoryClick("praktisk")}
        >
          Praktisk
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeCategory === "resultater" ? "bg-red-600 text-white" : "bg-white hover:bg-slate-100 text-slate-700"
          }`}
          onClick={() => handleCategoryClick("resultater")}
        >
          Resultater
        </button>
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl shadow-sm">
          <p className="text-lg text-slate-600">Ingen resultater fundet. Prøv en anden søgning.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Split the items into two columns */}
          <div className="space-y-4">
            {filteredFaqs.slice(0, Math.ceil(filteredFaqs.length / 2)).map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
          <div className="space-y-4">
            {filteredFaqs.slice(Math.ceil(filteredFaqs.length / 2)).map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

// Individual FAQ Item
function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:border-red-100 transition-colors">
      <details className="group" open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
        <summary className="flex items-center justify-between p-6 cursor-pointer">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">
            {faq.question}
          </h3>
          <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute inset-0 w-5 h-5 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute inset-0 w-5 h-5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </summary>
        <div className="px-6 pb-6 pt-0">
          <p className="text-slate-600 mb-4">{faq.answer}</p>

          {/* Conditional rendering based on faq item properties */}
          {faq.link && (
            <div className="mt-4 flex items-center text-sm text-red-600">
              <Link href={faq.link.url} className="inline-flex items-center hover:underline">
                {faq.link.text} <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          )}

          {faq.principles && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <h4 className="font-medium text-slate-800 mb-2">Vores etiske principper:</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {faq.principles.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>
            </div>
          )}

          {faq.institutions && (
            <div className="bg-slate-50 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-slate-800 mb-2">Institutioner vi samarbejder med:</h4>
              <div className="grid grid-cols-2 gap-2">
                {faq.institutions.map((institution, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">{institution}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {faq.emergencyInfo && (
            <div className="mt-4 bg-red-50 p-4 rounded-lg border border-red-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-red-800">Akut assistance</h4>
                  <p className="text-sm text-red-700 mt-1">{faq.emergencyInfo}</p>
                </div>
              </div>
            </div>
          )}

          {faq.backgrounds && faq.qualities && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium text-slate-800 text-sm mb-2">Faglige baggrunde</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {faq.backgrounds.map((background, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{background}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium text-slate-800 text-sm mb-2">Personlige egenskaber</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {faq.qualities.map((quality, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{quality}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {faq.id === 8 && (
            <div className="flex justify-center mt-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Få et uforpligtende tilbud
              </Link>
            </div>
          )}
        </div>
      </details>
    </div>
  )
}

// Context for FAQ state management
const FaqContext = React.createContext()

function useFaqContext() {
  const context = React.useContext(FaqContext)
  if (!context) {
    throw new Error("useFaqContext must be used within a FaqProvider")
  }
  return context
}

function FaqProvider({ children }) {
  const [filteredFaqs, setFilteredFaqs] = useState(faqItems)
  const [activeCategory, setActiveCategory] = useState("alle")

  const value = {
    filteredFaqs,
    setFilteredFaqs,
    activeCategory,
    setActiveCategory,
  }

  return <FaqContext.Provider value={value}>{children}</FaqContext.Provider>
}

function FremgangsmaaderClientPage() {
  return (
    <main className="min-h-screen">
      {/* Add FaqProvider around the entire component */}
      <FaqProvider>
        {/* Hero Section with Background Image */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/tryghedspersonale-dk-forside-medarbejder.jpeg"
              alt="Professionelle tryghedsmedarbejdere"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                Professionelle metoder og tilgange
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Vores fremgangsmåder skaber tryghed og resultater
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Hos Tryghedspersonale.dk arbejder vi med dokumenterede metoder, der sikrer borgerens trivsel og støtter
                deres udvikling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#metoder"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  Udforsk vores metoder
                </Link>
                <Link
                  href="/kontakt"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  Kontakt os
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section with Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 text-center">
                Fremgangsmåder hos Tryghedspersonale.dk
              </h2>

              <p className="text-lg text-slate-700 mb-8">
                Hos <strong>Tryghedspersonale.dk</strong> arbejder vi systematisk og målrettet med forskellige metoder,
                der hjælper os med at sikre borgerens trivsel og støtte deres udvikling. Vores tilgang er baseret på en
                kombination af faglige redskaber og erfaring, der gør os i stand til at tilpasse vores indsats til den
                enkelte borgers behov.
              </p>

              <p className="text-lg text-slate-700 mb-8">Herunder kan du læse kort om de metoder, vi benytter:</p>

              <div className="space-y-8 mt-12">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Arousal Regulering</h3>
                  <p className="text-slate-700 mb-4">
                    Arousal regulering handler om at finde den rette balance mellem stimulering og ro for den enkelte
                    borger. Vi arbejder på at sikre, at borgerne ikke bliver hverken overstimuleret eller
                    understimuleret, hvilket kan føre til uønsket adfærd. Ved at justere aktiviteter og pauser i løbet
                    af dagen, hjælper vi borgeren med at forblive i en tilstand, der fremmer deres trivsel og
                    engagement.
                  </p>
                  <Link
                    href="/fremgangsmaader/arousal-regulering"
                    className="font-bold text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    Læs mere om Arousal Regulering <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Afskærmning</h3>
                  <p className="text-slate-700 mb-4">
                    Afskærmning bruges som en metode til at skabe et trygt miljø for borgere, der er udsat for stimuli,
                    som de ikke kan håndtere. Det kan være nødvendigt i situationer, hvor der er risiko for konflikter
                    eller stress. Ved at afskærme borgeren fra omgivelserne eller andre stimuli, kan vi give dem den ro,
                    de behøver for at finde balance og undgå, at situationen eskalerer.
                  </p>
                  <Link
                    href="/fremgangsmaader/skaermning"
                    className="font-bold text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    Læs mere om Afskærmning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Afspejling- og Afledningsteknikker</h3>
                  <p className="text-slate-700 mb-4">
                    Afspejling og afledningsteknikker er metoder, vi bruger til at skabe en bedre kontakt med borgeren,
                    når de er i en vanskelig situation. Spejling kan hjælpe med at berolige og skabe forståelse, mens
                    afledning fjerner fokus fra den udfordrende situation og leder borgerens opmærksomhed et andet sted
                    hen. Begge teknikker er nyttige til at undgå konflikter og hjælpe borgeren med at finde ro.
                  </p>
                  <Link
                    href="/fremgangsmaader/afledningsteknikker-og-spejlning"
                    className="font-bold text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    Læs mere om Afspejling- og Afledningsteknikker <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Dokumentation - som en del af den faglige indsats
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Dokumentation er en vigtig del af vores arbejde, da den sikrer, at vi kan følge op på borgerens
                    udvikling og justere vores indsats efter behov. Ved hjælp af adfærdsskemaer og løbende opfølgning
                    kan vi sikre, at alle tiltag er målrettede og effektive. Dokumentationen hjælper os også med at
                    kommunikere klart med andre fagpersoner og sikre kontinuitet i behandlingen.
                  </p>
                  <Link
                    href="/fremgangsmaader/dokumentation"
                    className="font-bold text-red-600 hover:text-red-700 inline-flex items-center"
                  >
                    Læs mere om Dokumentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
                  <p className="text-slate-700">af vores kunder oplever markant forbedring i borgerens trivsel</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-red-600 mb-2">+500</div>
                  <p className="text-slate-700">specialiserede medarbejdere i hele Danmark</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                  <p className="text-slate-700">tilgængelighed og support til vores kunder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods Section with Images */}
        <section id="metoder" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Vores specialiserede metoder</h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  Gennem års erfaring har vi udviklet og forfinet vores metoder til at skabe tryghed og støtte udvikling
                  hos borgere med særlige behov.
                </p>
              </div>

              {/* Method 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src="/tryghedspersonale-samtale-udendoers.jpeg"
                      alt="Arousal Regulering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <Brain className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">Arousal Regulering</h3>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Arousal regulering handler om at finde den rette balance mellem stimulering og ro for den enkelte
                      borger. Vi arbejder på at sikre, at borgerne ikke bliver hverken overstimuleret eller
                      understimuleret, hvilket kan føre til uønsket adfærd. Ved at justere aktiviteter og pauser i løbet
                      af dagen, hjælper vi borgeren med at forblive i en tilstand, der fremmer deres trivsel og
                      engagement.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Individuelt tilpassede aktivitetsplaner</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Sansestimulerende og -dæmpende teknikker</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Strukturerede pauser og hvileperioder</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Løbende evaluering og tilpasning</span>
                      </div>
                    </div>
                    <Link
                      href="/fremgangsmaader/arousal-regulering"
                      className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors"
                    >
                      Læs mere om Arousal Regulering <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                    <Image
                      src="/tryghedspersonale-aeldre-stoette.jpeg"
                      alt="Afskærmning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">Afskærmning</h3>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Afskærmning bruges som en metode til at skabe et trygt miljø for borgere, der er udsat for
                      stimuli, som de ikke kan håndtere. Det kan være nødvendigt i situationer, hvor der er risiko for
                      konflikter eller stress. Ved at afskærme borgeren fra omgivelserne eller andre stimuli, kan vi
                      give dem den ro, de behøver for at finde balance og undgå, at situationen eskalerer.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Fysisk afskærmning fra forstyrrende stimuli</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Skabelse af trygge, rolige miljøer</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Forebyggelse af konfliktsituationer</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Respektfuld håndtering af borgerens grænser</span>
                      </div>
                    </div>
                    <Link
                      href="/fremgangsmaader/skaermning"
                      className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors"
                    >
                      Læs mere om Afskærmning <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Method 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src="/tryghedspersonale-park-samtale.jpeg"
                      alt="Afspejling- og Afledningsteknikker"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <Lightbulb className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">Afspejling- og Afledningsteknikker</h3>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Afspejling og afledningsteknikker er metoder, vi bruger til at skabe en bedre kontakt med
                      borgeren, når de er i en vanskelig situation. Spejling kan hjælpe med at berolige og skabe
                      forståelse, mens afledning fjerner fokus fra den udfordrende situation og leder borgerens
                      opmærksomhed et andet sted hen. Begge teknikker er nyttige til at undgå konflikter og hjælpe
                      borgeren med at finde ro.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Spejling af kropssprog og toneleje</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Målrettede afledningsteknikker</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Skabelse af positiv kontakt og relation</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Deeskalering af konfliktsituationer</span>
                      </div>
                    </div>
                    <Link
                      href="/fremgangsmaader/afledningsteknikker-og-spejlning"
                      className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors"
                    >
                      Læs mere om Afspejling- og Afledningsteknikker <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Method 4 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto md:order-last">
                    <Image src="/tryghedspersonale-faellesrum.jpeg" alt="Dokumentation" fill className="object-cover" />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">Dokumentation</h3>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Dokumentation er en vigtig del af vores arbejde, da den sikrer, at vi kan følge op på borgerens
                      udvikling og justere vores indsats efter behov. Ved hjælp af adfærdsskemaer og løbende opfølgning
                      kan vi sikre, at alle tiltag er målrettede og effektive. Dokumentationen hjælper os også med at
                      kommunikere klart med andre fagpersoner og sikre kontinuitet i behandlingen.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Systematisk registrering af adfærd og udvikling</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Målrettet evaluering og tilpasning</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Tværfaglig kommunikation og koordinering</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Sikring af kontinuitet i indsatsen</span>
                      </div>
                    </div>
                    <Link
                      href="/fremgangsmaader/dokumentation"
                      className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors"
                    >
                      Læs mere om Dokumentation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 flex items-center justify-center">
                  <Heart className="text-red-600 mr-3 h-8 w-8" /> Derfor skal du vælge Tryghedspersonale.dk som din
                  samarbejdspartner
                </h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  Hos Tryghedspersonale.dk er det ikke bare en opgave – det er en mission. Vi tror på, at alle mennesker
                  – uanset livssituation – har ret til <strong>respekt, ro og værdighed</strong>. Derfor er vores
                  indsats altid båret af faglighed, medmenneskelighed og ægte engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                {/* Reason 1 */}
                <div className="bg-slate-50 rounded-xl p-8 border-t-4 border-red-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Users className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">👥 1. Borgeren først – altid</h3>
                  </div>
                  <p className="text-slate-600">
                    Hos os er det ikke problemet, men <strong>personen bag adfærden</strong>, der er i fokus. Vi
                    arbejder med lav-arousal, nærvær og relation, fordi tryghed ikke tvinges frem – den{" "}
                    <strong>skabes i mødet</strong>.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="bg-slate-50 rounded-xl p-8 border-t-4 border-red-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Heart className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      ❤️ 2. Vores personale brænder for det, de gør
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    Vores medarbejdere er ikke blot vagter – de er <strong>mennesker med passion</strong> for at gøre en
                    forskel. Mange har baggrund inden for{" "}
                    <strong>pædagogik, socialt arbejde, psykiatri eller krisehåndtering</strong>, og de har valgt dette
                    felt, fordi de <strong>vil være dér, hvor det er svært – og vigtigt</strong>.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="bg-slate-50 rounded-xl p-8 border-t-4 border-red-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Shield className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      🛡️ 3. Tryghed i kaos – med ro, faglighed og overblik
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    Når omgivelserne er præget af <strong>uro, udadreagerende adfærd eller psykisk mistrivsel</strong>,
                    træder vi til med
                    <strong> struktur, stabilitet og nærvær</strong>. Vi står fast – ikke med magt, men med
                    menneskelighed og metode.
                  </p>
                </div>

                {/* Reason 4 */}
                <div className="bg-slate-50 rounded-xl p-8 border-t-4 border-red-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <MapPin className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">🌍 4. Landsdækkende, men lokalt forankret</h3>
                  </div>
                  <p className="text-slate-600">
                    Vi har medarbejdere i hele landet og er klar til at handle hurtigt. Uanset om du har brug for en
                    fastvagt til en psykiatrisk afdeling, en støtteperson til et bosted eller konflikthåndtering i en
                    akut situation, står vi klar – <strong>med mennesker, der vil noget med deres arbejde</strong>.
                  </p>
                </div>

                {/* Reason 5 */}
                <div className="bg-slate-50 rounded-xl p-8 border-t-4 border-red-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Target className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      🔄 5. Fleksible løsninger – tilpasset virkeligheden
                    </h3>
                  </div>
                  <p className="text-slate-600">
                    Vi ved, at ingen opgave er ens. Derfor lytter vi, tilpasser os og samarbejder tæt med personale,
                    ledelse og pårørende. Vores mål er ikke bare at "være der" – men at{" "}
                    <strong>bidrage til forandring og trivsel</strong>.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors text-lg"
                >
                  🔗 Tag kontakt – og lad os skabe tryghed sammen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Vores arbejdsproces</h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  Vi følger en struktureret tilgang, der sikrer, at vi altid leverer den bedste service og støtte til
                  borgerne.
                </p>
              </div>

              <div className="relative">
                {/* Vertical line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -ml-0.5"></div>

                {/* Step 1 */}
                <div className="md:flex items-center mb-12 md:mb-24 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">1. Indledende vurdering</h3>
                    <p className="text-slate-600">
                      Vi starter med en grundig vurdering af borgerens behov, udfordringer og ressourcer. Dette giver os
                      et solidt grundlag for at tilrettelægge den rette indsats.
                    </p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-red-600 text-white items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Samtaler med borgeren og pårørende</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Gennemgang af eksisterende dokumentation</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Observation af adfærd og reaktionsmønstre</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="md:flex items-center mb-12 md:mb-24 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-last">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">2. Planlægning og strategi</h3>
                    <p className="text-slate-600">
                      Baseret på vurderingen udvikler vi en skræddersyet plan med konkrete strategier og metoder, der
                      passer til borgerens individuelle behov.
                    </p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-red-600 text-white items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:order-first">
                    <div className="bg-white p-6 rounded-xl">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Udarbejdelse af individuel handleplan</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Valg af relevante metoder og teknikker</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Koordinering med andre fagpersoner</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="md:flex items-center mb-12 md:mb-24 relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">3. Implementering</h3>
                    <p className="text-slate-600">
                      Vi implementerer planen med fokus på konsistens, professionalisme og respekt for borgeren. Vores
                      medarbejdere er grundigt oplært i de valgte metoder.
                    </p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-red-600 text-white items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Konsekvent anvendelse af valgte metoder</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Løbende dokumentation af forløbet</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Tæt dialog med borgeren og andre involverede</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="md:flex items-center relative">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-last">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">4. Evaluering og tilpasning</h3>
                    <p className="text-slate-600">
                      Vi evaluerer løbende indsatsen og justerer efter behov. Dette sikrer, at vi altid arbejder mod de
                      bedste resultater for borgeren.
                    </p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-red-600 text-white items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:order-first">
                    <div className="bg-white p-6 rounded-xl">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Regelmæssige evalueringsmøder</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">Analyse af dokumentation og resultater</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            Tilpasning af metoder og strategier efter behov
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Full Blown */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Ofte stillede spørgsmål</h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
                  Her finder du svar på nogle af de mest almindelige spørgsmål om vores fremgangsmåder og metoder.
                </p>

                {/* Search Bar */}
                <FaqSearch />
              </div>

              {/* FAQ Content Container */}
              <FaqContent />

              {/* Remove the entire "Still Have Questions" section */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/tryghedspersonale-park.jpeg" alt="Professionelt team" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Klar til at skabe tryghed sammen?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Kontakt os i dag for at høre mere om, hvordan vores fremgangsmåder og metoder kan hjælpe jeres
                institution og borgere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  Kontakt os
                </Link>
                <Link
                  href="tel:41443333"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" /> Ring 41 44 33 33
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Relaterede ressourcer</h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                  Udforsk flere aspekter af vores arbejde og tilbud gennem disse ressourcer.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Resource 1 */}
                <Link href="/ydelser" className="group">
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <Image
                        src="/tryghedspersonale-natur.jpeg"
                        alt="Vores ydelser"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                        Vores ydelser
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Udforsk vores komplette udvalg af specialiserede ydelser til forskellige institutioner og behov.
                      </p>
                      <div className="flex items-center text-red-600 font-medium">
                        Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Resource 2 */}
                <Link href="/om-os" className="group">
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <Image
                        src="/tryghedspersonale-eskort.jpeg"
                        alt="Om Tryghedspersonale.dk"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                        Om Tryghedspersonale.dk
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Lær mere om vores virksomhed, vores værdier og vores mission om at skabe tryghed for alle.
                      </p>
                      <div className="flex items-center text-red-600 font-medium">
                        Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Resource 3 */}
                <Link href="/job" className="group">
                  <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <Image
                        src="/tryghedspersonale-aktivitet.jpeg"
                        alt="Job hos os"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">
                        Job hos os
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Bliv en del af vores team og gør en forskel i menneskers liv hver dag. Se vores ledige
                        stillinger.
                      </p>
                      <div className="flex items-center text-red-600 font-medium">
                        Læs mere <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Section */}
        <section className="py-10 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-slate-600 mb-2">tryghedspersonale.dk is hosted by Simply.com</p>
              <p className="text-sm text-slate-500">Support - Controlpanel</p>
            </div>
          </div>
        </section>
      </FaqProvider>
    </main>
  )
}

export default FremgangsmaaderClientPage
