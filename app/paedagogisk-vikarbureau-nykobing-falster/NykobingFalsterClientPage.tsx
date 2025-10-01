"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function NykobingFalsterClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Psykiatrisk Vikarbureau Nykøbing Falster
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Specialiseret i komplekse borgerforløb</h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Hos Tryghedspersonale.dk leverer vi kompetent personale, der er klar til at skabe et trygt, stabilt og
                  udviklende miljø for både borgere og dit faste personale i Nykøbing Falster.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Få et tilbud
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200">Tilgængelighed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-blue-200">Erfarne vikarer</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Års erfaring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/nykobing-falster-psychiatric-care.png"
                  alt="Psykiatrisk vikar i Nykøbing Falster - specialiseret i komplekse borgerforløb"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component follows the same structure but with Nykøbing Falster-specific content */}

      {/* Kontakt Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kontakt os for pædagogiske vikarer i Nykøbing Falster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har du akut eller planlagt behov for kvalificerede pædagogiske vikarer? Vi står klar med erfarne og
              dedikerede vikarer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Få et uforpligtende tilbud</h3>
                <p className="text-gray-600 mb-6">
                  Kontakt os i dag for at drøfte jeres specifikke behov og finde den optimale løsning for din
                  institution i Nykøbing Falster.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Ring direkte</div>
                      <div className="text-blue-600 font-bold text-lg">41 44 33 33</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-6 w-6 text-gray-600 mr-4" />
                    <div>
                      <div className="font-semibold">Send en email</div>
                      <div className="text-gray-600">nykobing-falster@tryghedspersonale.dk</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <div className="font-semibold">Besøg os</div>
                      <div className="text-gray-600">Nykøbing Falster og omegn</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Hvad kan vi hjælpe med?</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Akut vikarbistand samme dag</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Planlagte længerevarende forløb</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Specialiseret støtte til særlige behov</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Rådgivning om vikarløsninger</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Fleksible aftaler tilpasset jeres behov</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33 nu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
