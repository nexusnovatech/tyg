"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function RodovreClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50"></nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Din partner i <span className="text-red-600">Rødovre</span> til pædagogisk støtte og kvalitet
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At finde den rette pædagogiske vikar til dit bosted eller din institution i Rødovre kan være en
                udfordring, især når du arbejder med unge og voksne med særlige behov og uforudsigelig adfærd. Hos
                Tryghedspersonale.dk forstår vi, at det kræver både faglige kvalifikationer og en stor portion empati.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Læs mere om vores ydelser
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/caregiver-interaction.png"
                alt="Pædagogisk støtte i Rødovre"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component follows the same structure as other city pages */}
    </div>
  )
}
