"use client"

import Image from "next/image"
import { Phone, Clock, Shield, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function VaerloseClientPage() {
  return (
    <div className="min-h-screen">
      {/* Mission Section - Redesigned with Taller Image */}
      <section className="py-20 bg-white relative overflow-hidden"></section>

      {/* Aflastning ved sygdom Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="text-center lg:text-left">
                <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block lg:hidden">
                  <Clock className="w-10 h-10 text-red-600" />
                </div>
                <div className="hidden lg:flex lg:items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-2xl mr-6">
                    <Clock className="w-10 h-10 text-red-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Aflastning ved sygdom og ferie</h2>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 lg:hidden">Aflastning ved sygdom og ferie</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Når personale bliver syge eller holder ferie, kan det hurtigt skabe udfordringer i plejen. Vi tilbyder{" "}
                <strong>hurtig og fleksibel aflastning</strong>, så I kan opretholde kvaliteten i plejen uden at
                overbelaste det resterende team.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vores SOSU-vikarer kan træde til med kort varsel og er vant til at arbejde i forskellige
                plejesammenhænge. De er <strong>selvstændige, ansvarsbevidste og fagligt kompetente</strong>, så I kan
                være trygge ved, at plejen er i gode hænder.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores aflastningsløsninger
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Hurtig udrykning ved akut sygdom</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Planlagt vikardækning ved ferie</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Længerevarende vikariater ved barsel eller orlov</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">Kontinuitet i plejen under personalemangel</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5]">
                  <Image
                    src="/sosu-vaerlose-care-interaction.png"
                    alt="SOSU-vikar der aflaster ved sygdom i Værløse"
                    fill
                    className="object-cover select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.src = "/placeholder.svg?height=500&width=400"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lokalt SOSU vikarbureau Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <MapPin className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Lokalt SOSU vikarbureau i Værløse og nærområderne
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tryghedspersonale.dk er <strong>forankret i Værløse</strong>, og vi har et stærkt netværk af dygtige
              SOSU-vikarer, der kender området og de kommunale arbejdsgange.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Vi dækker følgende områder</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Værløse by</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Hareskov</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Farum</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Lillerød</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Stenløse</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Samt øvrige dele af Furesø Kommune og Nordsjælland</strong>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Lokalt kendskab gør forskellen</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Det lokale kendskab betyder, at vi kan <strong>reagere hurtigt og effektivt</strong> – og samtidig
                bidrage med forståelse for stedets kultur, struktur og borgersammensætning.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Hurtig responstid</strong>
                    <p className="text-gray-700">Vi kan reagere hurtigt på akutte behov i lokalområdet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Kendskab til kommunale arbejdsgange</strong>
                    <p className="text-gray-700">Vores vikarer forstår lokale procedurer og samarbejdsformer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 text-lg">Forståelse for borgersammensætning</strong>
                    <p className="text-gray-700">Vi kender de særlige udfordringer og behov i området</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menneskelighed i fokus Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <Users className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Menneskelighed i fokus – SOSU-vikarer med hjertet på det rette sted
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi kalder os ikke tryghedspersonale uden grund. Vores team består af nøje udvalgte SOSU-vikarer, som{" "}
              <strong>brænder for sundhed og pleje</strong> og som forstår, hvor vigtigt det er at bevare
              menneskeligheden – også i pressede situationer.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fælles for vores SOSU-vikarer er</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Uddannelse og erfaring</h4>
                      <p className="text-gray-700">inden for sundhed og pleje</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Stærke samarbejdsevner</h4>
                      <p className="text-gray-700">og forståelse for komplekse tværfaglige miljøer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Selvstændighed og ro</h4>
                      <p className="text-gray-700">
                        Evnen til at arbejde selvstændigt og bevare roen i kritiske situationer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Grundlæggende respekt</h4>
                      <p className="text-gray-700">for den enkelte borger og kollega</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-red-100 p-4 rounded-2xl mb-6 inline-block">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Når I har brug for akut hjælp
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Det sker i ny og næ, at en akut situation opstår, hvor I har brug for ekstra hænder med det samme. Det
                kan fx skyldes:
              </p>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Pludselig sygdom blandt personalet</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Uventet høj arbejdsbyrde</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Akutte indlæggelser eller udskrivninger</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700 font-medium">Behov for ekstra ressourcer i weekenden</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-8 bg-red-500 rounded-full mr-4"></div>
                  Vores akutte indsats
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I sådanne tilfælde kan vi <strong>rykke hurtigt ud</strong> og levere kompetente SOSU-vikarer, der kan
                  træde til med det samme. Vi <strong>stabiliserer situationen</strong>, skaber ro og hjælper med at
                  holde dagligdagen kørende, indtil situationen er normaliseret.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <a href="tel:+4541443333">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                    <Phone className="w-5 h-5 mr-3" />
                    Ring nu: 41 44 33 33
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Tall Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[2/3]">
                  <Image
                    src="/sosu-vaerlose-care-interaction.png"
                    alt="Tryghedspersonale.dk - Akut SOSU-hjælp i Værløse - Ring 41 44 33 33"
                    fill
                    className="object-cover select-none pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    draggable={false}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.src = "/placeholder.svg?height=600&width=400"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* SEO Footer with Search Terms */}
    </div>
  )
}
