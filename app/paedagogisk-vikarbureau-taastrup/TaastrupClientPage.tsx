"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight } from "lucide-react"

export default function TaastrupClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50"></nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Pædagogisk Vikarbureau Taastrup</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pædagogisk støtte med <span className="text-red-600">kvalificerede vikarer</span> i Taastrup
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vi tilbyder erfarne og kompetente pædagogiske vikarer, der kan hjælpe med at støtte unge og voksne med
                særlige behov i Taastrup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring 41 44 33 33
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  Læs mere om vores ydelser
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/taastrup-psychiatric-care.png"
                alt="Pædagogisk støtte i Taastrup"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of sections follow same pattern ... */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12"></footer>
    </div>
  )
}
